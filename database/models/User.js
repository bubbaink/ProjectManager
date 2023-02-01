const mongoose = require("mongoose");
const {hash,compare} =require("bcryptjs")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    surname:{
        type: String,
        require: true,
        trim: true, 
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        trim: true,
    },
    token:{
        type: String
    },
    cheked:{
        type: Boolean,
        default: false
    },
},{
    timestamps: true
});

userSchema.pre("save", async function(next){

    if(!this.isModified('password')){
        next()
    }

    this.password = await hash(this.password, 10);

})

userSchema.methods.chekedPassword = async function(password){
    return await compare(password, this.password)
};

module.exports = mongoose.model("User", userSchema)