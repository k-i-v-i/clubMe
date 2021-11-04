

const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    name:String,
    surname:String,
    password:String,
}) ;
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);