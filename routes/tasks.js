const express = require('express');
const router = express.Router();
const {
    update,
    changeState,
    list,
    removeTask,
    taskDetail,
    taskStore 
} = require("../controllers/taskController")

router
    .route("/")
        .get(list)
        .post(taskStore)
router
    .route("/:id")
        .get(taskDetail)
        .post(update)
        .delete(removeTask)
router
    .post("/changeState:id", changeState)

module.exports = router;
