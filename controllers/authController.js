const createHttpError = require("http-errors");
const errorReponse = require("../helpers/errorReponse");
const User = require("../database/models/User");
const generateToken = require("../helpers/generateToken");
const generateJsonWebToken = require("../helpers/generateJsonWebToken");
const { confirmRegister, forgotPassword } = require("../helpers/sendMails");

module.exports = {
    
    register : async (req, res)=> {
        try {

            const {name, surname, email, password} = req.body;

            if([name,surname,email,password].includes("")){
                throw createHttpError(400, "Todos los campos son obligatorios"); 
            }

            let user = await User.findOne({
                email
            })

            if(user){
                throw createHttpError(400, "el email ya existe"); 
            }

            const token = generateToken()

            user = new User(req.body);
            user.token = token

            const userStore = await user.save()

    

            await confirmRegister({
                name: userStore.name,
                email: userStore.email,
                token: userStore.token
            })

            return res.status(201).json({
                ok: true,
                msg: "usuario registrado",
                data: userStore
            })

        } catch (error) {
            return errorReponse(res, error, "REGISTER")
        }
    },
    login : async (req, res)=> {

        const {email, password} = req.body;

        try {

            if([email,password].includes("")){
                throw createHttpError(400, "Todos los campos son obligatorios"); 
            }

            let user = await User.findOne({
                email
            })

            if(!user){
                throw createHttpError(403, "credenciales invalidas | email"); 
            }

            if(!user.checked){
                throw createHttpError(403, "cuenta no habilitada"); 
            }

            if(!await user.chekedPassword(password)){
                throw createHttpError(403, "cuenta no habilitada | password"); 
            }

            return res.status(200).json({
                ok: true,
                msg: "usuario logueado",
                user : {
                    name : user.name,
                    _id : user._id,
                },
                token : generateJsonWebToken({
                    id: user._id
                })

            })
        } catch (error) {
            return errorReponse(res, error, "LOGIN")
        }
    },
    checked : async (req, res)=> {

        const {token} = req.query;

        try {

            if(!token){
                throw createHttpError(400, "token inexistente"); 
            }

            const user = await User.findOne({
                token
            })

            user.checked = true;
            user.token = "";

            await user.save()

            return res.status(201).json({
                ok: true,
                msg: "registro completado de manera exitosa "
            })
        } catch (error) {
            return errorReponse(res, error, "CHECKED")
        }
    },
    sendToken : async (req, res)=> {

        const {email}= req.body;

        try {
            let user = await User.findOne({
                email
            });

            if(!user)throw createHttpError(400, "email incorrecto")
            

            const token = generateToken()
            user.token = token
            await user.save()

            await forgotPassword({
                name: user.name,
                email: user.email,
                token: user.token
            })

            return res.status(200).json({
                ok: true,
                msg: "se envio un correo con instrucciones"
            })
        } catch (error) {
            return errorReponse(res, error, "sendToken")
        }
    },
    verifyToken : async (req, res)=> {
        try {
            const {token}=req.query
            const user= await User.findOne({
                token
            })
            if(!user) throw createHttpError(400,"no hay peticion")
            
            /* const user= await User.findOne({
                token
            }) */
            if(!user){
                throw createHttpError(400,"token invalido")
            }

            return res.status(200).json({
                ok: true,
                msg: "token verificado"
            })
        } catch (error) {
            return errorReponse(res, error, "verifyToken")
        }
    },
    changePassword : async (req, res)=> {
        try {

            const {token}=req.query;
            const {password}=req.body;

            if(!password){
                throw createHttpError(400,"password es obligatorio")
            }
            const user= await User.findOne({
                token
            })
            if(!user) throw createHttpError(400,"no hay peticion")
            
            user.password = password
            user.token = ""
            await user.save()

            return res.status(200).json({
                ok: true,
                msg: "contraseña actualizada"
            })
        } catch (error) {
            return errorReponse(res, error, "changePassword")
        }
    }
}