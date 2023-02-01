const mongoose = require("mongoose");
const {hash,compare} =require("bcryptjs")


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    description:{
        type: String,
        require: true,
        trim: true
    },
    dateExpire:{
        type: Date,
        default: Data.now()
    },
    client:{
        type: String,
        require: true,
        trim: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    colaborators :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},{
    timestamps: true
});



module.exports = mongoose.model("Project", projectSchema)