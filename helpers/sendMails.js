const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  });

module.exports={
    confirmRegister: async (data)=>{
        const {name, email, token}= data

        try {
            const infoMail= await transport.sendMail({
                from: "Projects <emil>",
                to: email,
                subject: "Confirmar tu cuenta",
                text: "Confirma tu cuenta de Project D",
                html:`
                <p>Hola ${name}, haz clic en el siguente enlace<p/>
                <a href="${process.env.URL_FRONT}/confirm/${token}">confirma tu cuenta<a/>
                `
    
            })
            console.log(infoMail)
        } catch (error) {
            console.error(error)
        }
        
        
    },
    forgotPassword: async (data)=>{
        const {name, email, token}= data

        try {
            const infoMail= await transport.sendMail({
                from: "Projects <emil>",
                to: email,
                subject: "Restablce tu contraseña",
                text: "Restablce tu contraseña de Project D",
                html:`
                <p>Hola ${name}, haz clic en el siguente enlace para<a href="${process.env.URL_FRONT}/recover-password/${token}">restablecer tu contraseña<a/><p/>
                `
    
            })
            console.log(infoMail)
        } catch (error) {
            console.error(error)
        }
        
        
    }


}