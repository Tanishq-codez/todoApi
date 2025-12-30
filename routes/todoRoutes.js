// file 3
const express = require("express");
const router = express.Router();
const validateTodo = require("../middlewares/validateTodo");

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.post("/", validateTodo, createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", validateTodo, deleteTodo);

module.exports = router;
