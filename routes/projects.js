const express = require('express');
const router = express.Router();
const {
    addColaborator,
    detail,
    list,
    remove,
    removeColaborator,
    store,
    update
} = require("../controllers/projectControllers")

router
    .route("/")
        .get(list)
        .post(store)
router
    .route("/:id")
        .get(detail)
        .post(update)
        .delete(remove)
router
    .post("/colaborator/add", addColaborator)
    .delete("/colaborator/remove", removeColaborator)

module.exports = router;
