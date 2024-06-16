const express = require("express");

const router = express.Router();
const tasksController = require("../controller/tasksController");

router.get("/all-tasks", tasksController.getTasks);
router.post("/add-task", tasksController.addTask);
router.post("/delete-task", tasksController.removeTask);
router.put("/edit-task/:id", tasksController.editTask);

module.exports = router;