// file 3
const express = require("express");
const router = express.Router();
const validateTodo = require("../middlewares/validateTodo");
const auth = require("../middlewares/authMiddleware");

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", auth ,getTodos);
router.post("/",auth , validateTodo, createTodo);
router.put("/:id", auth ,validateTodo , updateTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;
