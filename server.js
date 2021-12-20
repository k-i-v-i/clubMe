//jshint esversion:6
//downgraded versions in to solve problems
const express             =  require('express'),
    app                   =  express(),
    mongoose              =  require("mongoose"),
    passport              =  require("passport"),
    bodyParser            =  require("body-parser"),
    LocalStrategy         =  require("passport-local"),
    passportLocalMongoose =  require("passport-local-mongoose"),
    User                  =  require("./models/user");

var cors = require("cors");
    //Connecting database
mongoose.connect("mongodb+srv://denizi:<password>@cluster0.yvd9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true});

app.use(require("express-session")({
    secret:"Any normal Word",       //decode or encode session
    resave: false,          
    saveUninitialized:false    
}));
app.use(cors());

// for passport plugin
passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));

//app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req,res) =>{
    res.render("home");
})
/*app.get("/userprofile",isLoggedIn ,(req,res) =>{ // if user is authenticated, renders to the profile
    res.render("userprofile");
})*/

//Auth Routes
app.get("/login",(req,res)=>{
    res.render("login");
});
app.post("/login",passport.authenticate("local",{
    successRedirect:"/userprofile",
    failureRedirect:"/login"
}),function (req, res){
    if (res.status = 200) {
        return res.json({ result: "success", token, message: "Login successfully" });
    }
    else{
        return res.json({
            result: "error",
            message: "error"
          });
    }
});

/*app.get("/register",(req,res)=>{
    res.render("register");
});*/

/*app.post("/register", async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 8);
      await User.create(req.body);
      res.json({ result: "success", message: "Register successfully" });
    } catch (err) {
      res.json({ result: "error", message: "err" });
    }
});*/

app.post("/register",(req,res)=>{

    
    const newUser = new User({username: req.body.username,email: req.body.email,name:req.body.name,surname: req.body.surname});
    
    User.register(newUser, req.body.password,function(err){
        if(err){
            console.log(err);
            res.json({result : "failure", message: "could not register the user"});
        }
        else{
            passport.authenticate("username", "password", function(){});
            console.log("success");
            res.json({result : "success", message : "registered successfully"});
            res.redirect("http://localhost:3000/login");
        }
        
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
});

app.get("/userprofile", (req, res, next) => {
    const name = req.params.name;
    res.json(name);
});

app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});
function isLoggedIn(req,res,next) { // checks if the user is authenticated
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login"); // otherwise redirects to login page
}

app.listen(3001,function(){
    console.log("Server started on port 3001.");
}) ;