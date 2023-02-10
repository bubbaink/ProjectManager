
const {verify} = require("jsonwebtoken")
const createHttpError = require("http-errors")
const errorReponse = require("../helpers/errorReponse")
const User = require("../database/models/User")

module.exports = async (req,res,next)=>{
    try {
        if(!req.headers.authorization){
            throw createHttpError(401,"Se requiere un token")
        }
    
        const token = req.headers.authorization
        const decoded = verify(token, process.env.JWT_SECRET_WORD)

        req.user = await User.findById(decoded.id).select("name")
        next()
        
    } catch (error) {
       console.error(error) 
       return errorReponse(res, error, "Check-token")
    }
}