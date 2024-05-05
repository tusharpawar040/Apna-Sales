const User = require("../models/user.js");

module.exports.signupForm = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res)=>{
    try{
        let {email,username,password} = req.body;
        const newUser = new User({email,username});
        // console.log(newUser,password);
        const registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err) => {
            if(err){
                next(err);
            }
            req.flash("success","Welcome to Apna Sales");
            res.redirect("/posts");
        });
        // req.flash("success","Welcome to apna sales");
        // res.redirect("/posts");
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
};

module.exports.loginForm = (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login = async(req,res) => {
    req.flash("success","Welcome to Apna Sales");
    // res.redirect("/posts");
    let redirectUrl = res.locals.redirectUrl || "/posts";
    res.redirect(redirectUrl);
};

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you logged out");
        res.redirect("/posts");
    })
};
