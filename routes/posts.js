const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn,isOwner,validatePost } = require("../middleware.js");
const postController = require("../controllers/posts.js");
const multer = require('multer');
// const upload = multer({dest:'uploads/'});
const {storage} = require("../cloudconfig.js");
const upload = multer({storage});

// index route
// router.get("/",wrapAsync(postController.index));

// new route
router.get("/new",
    isLoggedIn,
    postController.renderNewForm
); 

// // create route
router
    .route("/")
    .get(wrapAsync(postController.index))
    .post(
        isLoggedIn,
        upload.single('post[image]'),
        validatePost,
        wrapAsync(postController.createPost));
    //     upload.single('post[image]'),(req,res) => {
    //         res.send(req.file);
    // });

// show,update,delete route 
router
    .route("/:id")
    .get(wrapAsync(postController.showPost))
    .put(isLoggedIn,isOwner,upload.single('post[image]'),validatePost,wrapAsync(postController.updatePost))
    .delete(isOwner,wrapAsync(postController.destroyPost));

// edit route
router.get("/:id/edit",
    isOwner,    
    wrapAsync(postController.renderEditForm));

module.exports = router;


