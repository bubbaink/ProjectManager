const createHttpError = require("http-errors")
const Project = require("../database/models/Project")
const errorReponse = require("../helpers/errorReponse")
const ObjectId = require("mongoose").Types.ObjectId


module.exports = {
    list : async(req, res)=>{
        try {

            const projects = await Project.find().where("createdBy").equals(req.user)

            return res.status(200).json({
                ok: true,
                msg: "lista de proyectos",
                projects
            })
        } catch (error) {
            console.error(error)
            return errorReponse(res, error, "list")
        }
    },
    store : async(req, res)=>{
        try {

            const{name,description,client}=req.body

            if([name,description,client].includes("") || !name || !description || !client){
                throw createHttpError(400,"todos los campos son obligatorios")
            }
            if(!req.user)throw createHttpError(401,"error de autentificacion")

            const project = new Project(req.body)

            project.createdBy = req.user._id

            //console.log(project)

            const projectStore = await project.save()

            return res.status(201).json({
                ok: true,
                msg: "proyecto guardado de manera segura",
                project: projectStore
            })
        } catch (error) {
            console.error(error)
            return errorReponse(res, error, "store")
        }
    },
    detail : async(req, res)=>{
        try {
            
            const {id}= req.params
            if(!ObjectId.isValid(id))throw createHttpError(404, "No es un id valido")
              
            const project = await Project.findById(id)

            if(!project)throw createHttpError(404,"proyecto no encontrado")

            if(req.user._id.toString() !== project.createdBy.toString())throw createHttpError(401,"No posees ese permiso")


            return res.status(200).json({
                ok: true,
                msg: "detalle del proyecto",
                project
            })
        } catch (error) {
            console.error(error)
            return errorReponse(res, error, "detalle")
        }
    },
    update : async(req, res)=>{
        try {

            const {id}= req.params
            if(!ObjectId.isValid(id))throw createHttpError(404, "no es un id valido")
              
            const project = await Project.findById(id)

            if(!project)throw createHttpError(404,"proyecto no encontrado")

            if(req.user._id.toString() !== project.createdBy.toString())throw createHttpError(401,"No posees ese permiso")

            const{name,description,client,dateExpire}=req.body

            if([name,description,client].includes("") || !name || !description || !client)throw createHttpError(400,"todos los campos son obligatorios")

            project.name = name || project.name
            project.description = description || project.description
            project.client = client || project.client
            project.dateExpire = dateExpire || project.dateExpire

            const projectUpdated = await project.save()
            

            return res.status(201).json({
                ok: true,
                msg: "proyecto actualizado",
                project : projectUpdated
            })
        } catch (error) {
            console.error(error)
            return errorReponse(res, error, "Update-Project")
        }
    },
    remove : async(req, res)=>{
        try {

            const {id}= req.params
            if(!ObjectId.isValid(id))throw createHttpError(404, "no es un id valido")
              
            const project = await Project.findById(id)

            if(!project)throw createHttpError(404,"proyecto no encontrado")

            if(req.user._id.toString() !== project.createdBy.toString())throw createHttpError(401,"No posees ese permiso")

            await project.deleteOne()

            return res.status(201).json({
                ok: true,
                msg: "proyecto eliminado"
            })
        } catch (error) {
            console.error(error)
            return errorReponse(res, error, "Delete-Project")
        }
    },
    addColaborator : async(req, res)=>{
        try {
            return res.status(201).json({
                ok: true,
                msg: "colaborador añadido"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error añadiendo un colaborador"
            })
        }
    },
    removeColaborator : async(req, res)=>{
        try {
            return res.status(201).json({
                ok: true,
                msg: "colaborador eliminado"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error elimando un colaborador"
            })
        }
    }
}