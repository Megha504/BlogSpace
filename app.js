if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const ejsMate=require("ejs-mate");
const methodOverride=require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync=require("./utils/wrapAsync.js");
const Posts=require("./routes/post.js");
const Reviews=require("./routes/review.js");
const Users=require("./routes/user.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const Admin=require("./routes/admin.js");
const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
// app.get("/",(req,res)=>{
//     res.send("Hi, I am root")
// })
app.set("view engine","ejs");
app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// app.get("/admin",async(req,res)=>{
//     let admin= new User({
//         email:"admin@gmail.com",
//         username:"admin",
//         isAdmin:true,
//     });
//     let registeredUser=await User.register(admin,"admin123");
//     res.send(registeredUser);
// })
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
      res.locals.currRoute = req.path;
    next();
})
app.use("/posts",Posts);
app.use("/posts/:id/reviews",Reviews);
app.use("/",Users);
app.use("/admin",Admin);
app.use((req,res,next)=>{
    next( new ExpressError(404,"Page not found!"));
})



app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong! "}=err;
    res.status(statusCode).render("error.ejs",{message});
})

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
})

