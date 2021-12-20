const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    postname : {type: String, required: true},
    description : {type: String, required: true},
    likes : {type : Number, required: true },
    comments : {type : [String], required: true},
    instructor : { id: { type: mongoose.Schema.Types.ObjectId, ref: "User"}, username : String },
    students : {type: [mongoose.Schema.Types.ObjectId]}
});

module.exports = mongoose.model("Post", postsSchema);