const jwt = require("jsonwebtoken")

module.exports = (payload)=> jwt.sign(payload, process.env.JWT_SECRET_WORD, {
    expiresIn: "1h"
})