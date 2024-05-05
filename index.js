if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Post = require("./models/post.js");

const DB_URL = process.env.ATLASDB_URL;
const MONGO_URL = "mongodb://127.0.0.1:27017/posts";


main()
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    })

async function main(){
    await mongoose.connect(DB_URL);
}

const initDB = async () => {
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "66309ca89a12ea5c6017b835"
    }));
    //await Post.deleteMany();
    await Post.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();

