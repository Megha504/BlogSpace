const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

const passport=require("passport");
const { saveRedirectUrl, isLoggedIn, isOwner } = require("../middleware.js");
const userController=require("../controllers/user.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});


router.get("/signup",userController.renderSignupForm);


router.post("/signup",wrapAsync(userController.Signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate(
    'local',{failureRedirect:"/login",failureFlash:true}
),userController.Login);


router.get("/logout",userController.Logout);

router.get("/profile",isLoggedIn,wrapAsync(async(req,res)=>{
     const user=await User.findById(req.user._id);
    res.render("Users/Profile.ejs",{user});
}))

router.put('/profile/remove-image', userController.profilepic);

router.put("/profile", isLoggedIn, upload.single("profileImage"), wrapAsync(userController.Profile));


router.get("/Blogs", isLoggedIn, wrapAsync(userController.Posts));



module.exports = router;
