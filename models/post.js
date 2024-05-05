const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const postsSchema = new Schema({
    productName:{
        type:String,
        required:true,
    },
    description:String,
    shopName:{
        type:String,
        required:true,
    },
    image:{
        url: String,
        filename: String,
    },
    originalPrice:Number,
    price:Number,
    location:String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

postsSchema.post("findOneAndDelete", async(posts) => {
    if(posts) {
        await Review.deleteMany({_id : {$in: posts.reviews}});
    }
});

const Post = mongoose.model("Post",postsSchema);
module.exports = Post;


