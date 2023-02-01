const mongoose = require("mongoose");
const {hash,compare} =require("bcryptjs")


const taskSchema = new mongoose.Schema({
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
    state:{
        type: Boolean,
        default: false,
        
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    priotity: {
        type : String,
        enum:["Baja","Media","Alta"],
        default: "Baja"
    }
    ,
    project : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }
    
},{
    timestamps: true
});



module.exports = mongoose.model("Task", taskSchema)