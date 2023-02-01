module.exports = {
    list : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "lista de tareas"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error en lista de tareas"
            })
        }
    },
    update : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "tarea actualizada"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error actualizando la tarea"
            })
        }
    },
    taskStore : async(req, res)=>{
        try {
            return res.status(201).json({
                ok: true,
                msg: "tarea guardada"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error en el guardado de la tarea"
            })
        }
    },
    taskDetail : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "detalle de la tarea"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error mostrando la tarea"
            })
        }
    },
    removeTask : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "tarea eliminada"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error eliminando la tarea"
            })
        }
    },
    changeState : async(req, res)=>{
        try {
            return res.status(200).json({
                ok: true,
                msg: "tarea completada"
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg: error.message || "hubo un error en change_State"
            })
        }
    }
}