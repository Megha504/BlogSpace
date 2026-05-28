
const Post=require("./models/posts.js");
const {postSchema}=require("./Schema.js");
const ExpressError = require("./utils/ExpressError.js");
const {reviewSchema}=require("./Schema.js");
const Review=require("./models/review.js");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You are not logged in!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let post = await Post.findById(id);

  if (!post) {
    req.flash("error", "Post not found!");
    return res.redirect("/posts");
  }

  // Check if the current user is the owner OR an admin
  if (!post.owner.equals(res.locals.currUser._id) && !res.locals.currUser.isAdmin) {
    req.flash("error", "You don't have permission");
    return res.redirect(`/Posts/${id}`);
  }

  next();
};


module.exports.validatePost = (req, res, next) => {
  // Convert tags string to array
  if (req.body.post && typeof req.body.post.tags === "string") {
    req.body.post.tags = req.body.post.tags
      .split("#") // split by #
      .map(tag => tag.trim())
      .filter(tag => tag !== "");
  }

  const { error } = postSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)&& !res.locals.currUser.isAdmin){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/Posts/${id}`);
    }
    next();
}

module.exports.isAdmin = (req, res, next)=> {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  }
  req.flash("error", "Access denied: Admins only.");
  res.redirect("/posts");
};

// middleware.js


