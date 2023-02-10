const express = require('express');
const router = express.Router();
const {profile} = require("../controllers/userController");
const checkToken = require('../middlewares/checkToken');


/* GET users listing. */
router
  .get("/profile",checkToken, profile);

module.exports = router;
