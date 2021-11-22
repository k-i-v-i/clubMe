const mongoose = require("mongoose");

const clubsSchema = new mongoose.Schema({
    cname : {type: String, required: true},
    description : {type: String, required: true},
    capacity : {type : Number, required: true },
    link : {type : String, required: true},
    instructor : { id: { type: mongoose.Schema.Types.ObjectId, ref: "User"}, username : String },
    students : {type: [mongoose.Schema.Types.ObjectId]}
});

module.exports = mongoose.model("Club", clubsSchema);