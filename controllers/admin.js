const User=require("../models/user");
const Post=require("../models/posts");
const Review = require("../models/review");


module.exports.AdminDashboard=async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPosts = await Post.countDocuments();
    const totalReviews = await Review.countDocuments();

      res.render("admin/dashboard", {
      totalUsers,
      totalPosts,
      totalReviews,
      
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    req.flash("error", "Failed to load admin dashboard.");
    res.redirect("/posts");
  }
}


module.exports.Users=async(req,res)=>{
    let users=await User.find({});
    res.render("Users/userlist.ejs",{users});
}

module.exports.Posts=async(req,res)=>{
    let Posts=await Post.find({});
    res.render("Posts/index.ejs",{Posts,showBackButton: false});
}

module.exports.Reviews=async (req, res) => {
  const reviews = await Review.find({}).populate("author").populate("post");
  res.render("admin/review.ejs", { reviews });
}

module.exports.DeleteReviews=async (req, res) => {
  const { id, reviewId } = req.params;
  await Post.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted successfully");
  res.redirect(`/dashboard/reviews`);
}

module.exports.ParticularPost=async(req,res)=>{
       let {id}=req.params;
       let posts=await Post.find({owner:id});
       res.render("Users/Blogs.ejs",{posts});
       
}


module.exports.DeleteUser=async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  req.flash("success", "User deleted successfully!");
  res.redirect("/admin/dashboard/users");
}