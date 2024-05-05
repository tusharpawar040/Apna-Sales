if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
// console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const bodyParser = require('body-parser')
const session = require("express-session");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const posts = require("./routes/posts.js");
const reviews = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const MongoStore = require("connect-mongo");
const DB_URL = process.env.ATLASDB_URL;
// const MONGO_URL = "mongodb://127.0.0.1:27017/posts";


main()
    .then(()=> {
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect(DB_URL);
}

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
// app.use(express.json());

const store = MongoStore.create({
    mongoUrl: DB_URL,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24*3600,
});

store.on("error",() => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 1,
        maxAge: 1000 * 60 * 60 * 24 * 1,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// demo user
app.get("/registeruser",async (req,res) => {
    let fakeUser = new User({
        email: "sudent@gamail.com",
        username: "student1",
    });

    let newUser = await User.register(fakeUser,"helloWorld");
    res.send(newUser);
});

// app.get("/",(req,res) => {
//     res.send("Hi, I am root");
// });

// posts routes
app.use("/posts",posts);

// reviews routes
app.use("/posts/:id/reviews",reviews);

// users routes
app.use("/",userRouter);

// All routes    (that are not exists)
app.all("*",(req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));
})

// middleware hadles the errors
app.use((err,req,res,next)=>{
    // res.send("something went wrong!");
    let {statusCode=500,message="Something went wrong"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{err});
})

app.listen(4002,()=>{
    console.log("server is listening port 4002");
})



