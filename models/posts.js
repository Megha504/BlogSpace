const mongoose=require("mongoose");
const Review = require("./review");


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true
  },
  
  tags: [{
    type: String,
    trim: true
  }],
  coverImage: {
    url: String, 
    filename: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  isPublished: {
    type: Boolean,
    default: true
  },
  slug: {
    type: String,
    default:null,
  },
  category: {
  type: String,
  trim: true,
  default: "General"
},
reviews:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Review",
}],
owner:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
}

});

postSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
      .substring(0, 100);
  }
  next();
});

postSchema.post("findOneAndDelete",async(post)=>{
  if(post.reviews.length){
    let res=await Review.deleteMany({_id:{$in:post.reviews}})
    console.log(res);
  }
})

module.exports = mongoose.model('Post', postSchema);


