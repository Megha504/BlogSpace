const Review=require("../models/review.js");
const Post=require("../models/posts.js");

module.exports.createReview = async (req, res) => {
  let { id } = req.params;
  let post = await Post.findById(id);
  let newReview = new Review(req.body.review);

  newReview.author = req.user._id;
  newReview.post = post._id; // ✅ Set the post reference

  post.reviews.push(newReview);

  await newReview.save();
  await post.save();

  req.flash("success", "New Review Created!");
  res.redirect(`/posts/${id}`);
};

module.exports.destroyReview=async(req,res)=>{
    let {id,reviewId}=req.params;
    await Review.findByIdAndDelete(reviewId);
    await Post.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    req.flash("success","Review Deleted!")
    res.redirect(`/posts/${id}`);
}