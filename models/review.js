const mongoose=require("mongoose");
const reviewSchema=new mongoose.Schema({
    rating: {
    type: Number,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post",
  }

})

const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;

