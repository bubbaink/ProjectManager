const express = require('express');
const router = express.Router();
const {profile} = require("../controllers/userController")

/* GET users listing. */
router
  .get("/", profile);

module.exports = router;
