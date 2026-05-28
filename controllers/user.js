const User=require("../models/user.js");
const Post=require("../models/posts.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("Users/signup.ejs");
}

module.exports.Signup=async(req,res)=>{
    try{
    let{username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password);
    req.login(registeredUser,((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome!");
        return res.redirect("/Posts");
    }))
      }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
}


module.exports.renderLoginForm=(req,res)=>{
    res.render("Users/login.ejs")
}


module.exports.Login = async (req, res) => {
  req.flash("success", "Welcome!");

  // If the logged-in user is an admin, redirect to dashboard
  if (req.user && req.user.isAdmin) {
    return res.redirect("/admin/dashboard");
  }

  // Otherwise, redirect to the original requested page or /Posts
  const redirectUrl = res.locals.redirectUrl || "/Posts";
  res.redirect(redirectUrl);
};



module.exports.Logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/Posts");
    })
}


module.exports.Profile=async (req, res) => {
  const user = await User.findById(req.user._id); // safer: use current logged-in user

  // Update text fields
  if (req.body.username && req.body.username.trim() !== "") {
    user.username = req.body.username.trim();
  }
  user.bio = req.body.bio;
  user.social = {
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    github: req.body.github
  };
  // Update profile image if file uploaded
  if (req.file) {
    user.profileImage = {
      url: req.file.path,
      filename: req.file.filename
    };
  }
  await user.save();
  req.flash("success", "Profile updated!");
  res.redirect("/profile");
}


module.exports.profilepic=async (req, res) => {
  try {

    const user = await User.findById(req.user._id);
    
    if (user.profileImage?.url) {
      user.profileImage = undefined;
      await user.save();
    }

    res.redirect('/profile');
  } catch (err) {
    console.error("Error removing image:", err);
    res.status(500).send("Something went wrong");
  }
}
module.exports.Posts=async (req, res) => {
  const posts = await Post.find({ owner: req.user._id });
  res.render("Users/Blogs.ejs", { posts, user: req.user });
}

