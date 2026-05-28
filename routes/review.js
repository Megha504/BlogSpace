const express=require("express");
const router=express.Router({mergeParams:true});
const Review=require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync.js");
const Post=require("../models/posts.js");
const { isLoggedIn, validateReview, isReviewAuthor, isOwner,} = require("../middleware.js");
const reviewController=require("../controllers/review.js");

//REVIEW POST
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//DELETE REVIEW
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;