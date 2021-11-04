//jshint esversion:6

const express             =  require('express'),
    app                   =  express(),
    mongoose              =  require("mongoose"),
    passport              =  require("passport"),
    bodyParser            =  require("body-parser"),
    LocalStrategy         =  require("passport-local"),
    passportLocalMongoose =  require("passport-local-mongoose"),
    User                  =  require("./user");
//Connecting database
mongoose.connect("mongodb://localhost:27017/clubme", {useNewUrlParser: true});
app.use(require("express-session")({
    secret:"Any normal Word",       //decode or encode session
    resave: false,          
    saveUninitialized:false    
}));
passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req,res) =>{
    res.render("./home");
})
app.get("/userprofile",isLoggedIn ,(req,res) =>{
    res.render("userprofile");
})
//Auth Routes
app.get("/login",(req,res)=>{
    res.render("login");
});
app.post("/login",passport.authenticate("local",{
    successRedirect:"/userprofile",
    failureRedirect:"/login"
}),function (req, res){
});
app.get("/register",(req,res)=>{
    res.render("register");
});
app.post("/register",(req,res)=>{

    
    const newUser = new User({username: req.body.username,email: req.body.email,name:req.body.name,surname: req.body.surname});
    
    User.register(newUser, req.body.password,function(err){
        if(err){
            console.log(err);
            res.send("User already exists!");
        }
        else{
            passport.authenticate("username", "password", function(){
            res.redirect("/login");
        })}
        
    })

    
    
    /*newUser.authenticate("username", "password", function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/login");
        }
    });*/
    /*User.insertMany(newUser,function(err){
        if(err){
            console.log(err);
        }
    })*/
    
    /*newUser.save(function(err){ BU DOGRU OLAN
        if(err){
            console.log(err);
            res.render("register");
        }
    });*/ 
    //newUser.setPassword(req.body.password);
    
    //let saveUser = await newUser.save();
    //console.log(saveUser);
    /*User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            //res.render("register");
        }
    })*/

    /*User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            //res.render("register");
        }*/
    
    
    /*passport.authenticate("local")(req,res,function(){
        res.redirect("/login");
        
    });*/
})
app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});
function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000,function(){
    console.log("Server started on port 3000.");
}) ;