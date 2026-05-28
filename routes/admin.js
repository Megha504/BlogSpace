const express=require("express");
const router=express.Router();
const adminController=require("../controllers/admin");
const { isAdmin } = require("../middleware");
const User=require("../models/user");
const Post=require("../models/posts"); 
const Review = require("../models/review");

router.get("/dashboard",isAdmin,adminController.AdminDashboard);



router.get("/dashboard/users",adminController.Users);
router.get("/dashboard/Posts",adminController.Posts);

router.get("/dashboard/reviews", isAdmin, adminController.Reviews);
// router.get("/dashboard/users/:id",async(req,res)=>{
//        let {id}=req.params;
//        let user=await User.findById(id);
//     res.render("Users/Profile.ejs", { user });
// })



router.delete("/posts/:id/reviews/:reviewId", isAdmin, adminController.DeleteReviews);


router.get("/dashboard/users/:id",adminController.ParticularPost);


router.delete("/dashboard/users/:id", isAdmin, adminController.DeleteUser);




module.exports=router;