const mongoose=require("mongoose");
const initData=require("./data.js");
const Posts=require("../models/posts.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/blogging");
}
main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

const initDB=async()=>{
    await Posts.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"685683e4824e00e51ecc02e0"}));
    await Posts.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();