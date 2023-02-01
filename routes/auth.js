const express = require('express');
const router = express.Router();
const {
    changePassword,
    checked,
    login,
    register,
    sendToken,
    verifyToken
} = require("../controllers/authController")

router
    .post("/register", register)
    .post("/login", login)
    .get("/checked", checked)
    .post("/send-token", sendToken)

    .route("/changePassword")
        .get(verifyToken)
        .post(changePassword)

module.exports = router;
