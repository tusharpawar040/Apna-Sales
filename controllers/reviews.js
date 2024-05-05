const Post = require("../models/post.js");
const Review = require("../models/review.js");

module.exports.newReview = async(req,res)=> {
    let post = await Post.findById(req.params.id);
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    post.reviews.push(newReview);
    await newReview.save();
    await post.save();
    req.flash("success","Review Added");
    res.redirect(`/posts/${post._id}`);
};

module.exports.destroyReview = async(req,res) => {
    let {id,reviewId} = req.params;
    await Post.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/posts/${id}`);
};
