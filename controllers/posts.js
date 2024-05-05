const Post = require("../models/post.js");

module.exports.index = async (req,res) => {
    const allPosts = await  Post.find({});
    res.render("posts/index.ejs",{allPosts});
};

module.exports.renderNewForm = async(req,res) => {
    res.render("posts/new.ejs");
};

module.exports.showPost = async(req,res,next)=>{
    let {id} = req.params;
    const posts = await Post.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path:"author"
        },
    })
    .populate("owner");
    if(!posts){
        req.flash("error","Sale you are requested for does not exist");
        res.redirect("/posts");
        next(new ExpressError(500,"Post-Sale not found"));
    }
    res.render("posts/show.ejs",{posts});
};

module.exports.createPost = async(req,res,next) => {
    // if(!req.body.post){
    //     throw new ExpressError(400,"Send valid data for Post-sale");
    // }   
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(req.file);
    const newPost = new Post(req.body.post);
    newPost.owner = req.user._id;
    newPost.image = {url,filename};
    await newPost.save();
    req.flash("success","new sale added");
    res.redirect("/posts");
    // console.log(req.body);
};

module.exports.renderEditForm = async(req,res,next) => {
    let{id} = req.params;
    const post = await Post.findById(id);
    if(!post){
        req.flash("error","Post you requested for does not exist!");
        res.redirect("/posts");
    }
    let originalImageUrl = post.image.url;
    originalImageUrl.replace("/upload","/upload/h_230,w_250");
    res.render("posts/edit.ejs",{post,originalImageUrl});
};

module.exports.updatePost = async(req,res,next) => {
    let {id} = req.params;
    let post = await Post.findByIdAndUpdate(id, {...req.body.post});
    // console.log(req.body.post);
    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        post.image = {url,filename};
        await post.save();
    }
    req.flash("success","sale updated");
    res.redirect(`/posts/${id}`);
};

module.exports.destroyPost = async(req,res,next)=> {
    let {id} = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    console.log(deletedPost);
    req.flash("success","sale deleted");
    res.redirect("/posts");
};

