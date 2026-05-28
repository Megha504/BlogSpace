const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Post=require("../models/posts.js");
const {isLoggedIn, isOwner, validatePost, isAdmin, canEditOrDeletePost}=require("../middleware.js");
const postController=require("../controllers/post.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});

//INDEX ROUTE
router.route("/")
.get(wrapAsync(postController.index))
.post(isLoggedIn,upload.single('post[coverImage]'),validatePost,wrapAsync(postController.createPost));
// .post(upload.single('post[coverImage]'),(req,res)=>{
//   res.send(req.file);
// })
router.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})

router.get("/new",isLoggedIn,postController.renderNewForm);
router.get("/search", async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);

  const posts = await Post.find({
    title: { $regex: q, $options: "i" }
  }).select("_id title category").limit(5);

  res.json(posts);
});

//Show Route
router.route("/:id")
.get(wrapAsync(postController.showPost))
.put(isLoggedIn,isOwner,upload.single('post[coverImage]'),validatePost,wrapAsync(postController.Edit))
.delete(isLoggedIn,isOwner,wrapAsync(postController.destroyPost));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(postController.renderEditForm));



module.exports=router;