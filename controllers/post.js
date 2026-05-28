const Post=require("../models/posts.js");

module.exports.index=async(req,res)=>{
    const Posts=await Post.find({});
    res.render("Posts/index.ejs",{Posts});
}

module.exports.renderNewForm=(req,res)=>{
    res.render("Posts/new.ejs");
}


module.exports.showPost=async(req,res)=>{
    let {id}=req.params;
    const post=await Post.findById(id).populate("owner").populate({path:"reviews",populate:{path:"author"}});
    if(!post){
      req.flash("error","Post you requested for does not exist!");
      return res.redirect("/posts");
    }
    res.render("Posts/show.ejs",{post,
  showBackToPosts: true})
}


module.exports.createPost=async(req,res)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    newpost=new Post(req.body.post);
    newpost.owner=req.user._id;
    console.log(url,"..",filename);
    newpost.coverImage={url,filename};
    await newpost.save();
    req.flash("success","New Post created!");
    res.redirect("/Posts");
}


module.exports.renderEditForm=async(req,res)=>{
    let{id}=req.params;
    const post= await Post.findById(id);
    if(!post){
      req.flash("error","Post you requested for does not exist!");
      return res.redirect("/Posts")
    }
    let originalimageurl=post.coverImage.url;
    originalimageurl=originalimageurl.replace("/upload","/upload/w_250");
    res.render("Posts/edit.ejs",{post,originalimageurl});
}



module.exports.Edit = async (req, res) => {
  let { id } = req.params;
  let post = req.body.post;

  console.log("Incoming Edited Post:", post); 

  let newpost = await Post.findByIdAndUpdate(id, post, { new: true });

  if (req.file) {
    newpost.coverImage = {
      url: req.file.path,
      filename: req.file.filename
    };
    await newpost.save();
  }

  req.flash("success", "Post updated successfully!");
  res.redirect(`/posts/${id}`);
};



module.exports.destroyPost=async(req,res)=>{
  let{id}=req.params;
  await Post.findByIdAndDelete(id);
  req.flash("success","Post deleted successfully!");
  res.redirect("/posts");
}