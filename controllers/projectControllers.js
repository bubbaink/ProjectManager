module.exports = {
    list : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "lista de proyectos"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error en lista de proyectos"
            })
        }
    },
    store : async(req, res)=>{
        try {
            return res.status(201).json({
                ok: true,
                msg: "proyecto guardado"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error en el guardado del proyecto"
            })
        }
    },
    detail : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "detalle del proyecto"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error mostrando el proyecto"
            })
        }
    },
    update : async(req, res)=>{
        try {
            return res.status(201).json({
                ok: true,
                msg: "proyecto actualizado"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error actualiando el proyecto"
            })
        }
    },
    remove : async(req, res)=>{
        try {
            return res.status(201).json({
                ok: true,
                msg: "proyecto eliminado"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error elimando el proyecto"
            })
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