const mongoose=require("mongoose");
const Post=require("./posts.js");
const Schema=mongoose.Schema;
const passportlocalMongoose=require("passport-local-mongoose");
const userSchema=new Schema({
    profileImage: {
    url: String,
    filename: String
  },
    bio: String,
    email:{
        type:String,
        required:true,
    },
     isAdmin: { type: Boolean, default: false },
      social: {
    twitter: String,
    linkedin: String,
    github: String
  },

});



userSchema.post("findOneAndDelete", async function (user) {
  if (user) {
    const res = await Post.deleteMany({ owner: user._id });
    console.log("Deleted posts:", res.deletedCount);
  }
});

userSchema.plugin(passportlocalMongoose);

module.exports=mongoose.model("User",userSchema);