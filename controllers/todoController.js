// file 5
const Todo = require("../models/todoModels"); // model name is capital (convention)

// GET all todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (err) {
    next(err);
  }
};


// CREATE todo
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create({
      title: req.body.title
    });

    res.status(201).json({
      success: true,
      data: todo
    });
  } catch (err) {
    next(err);
  }
};


// UPDATE todo
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await Todo.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }

    res.status(200).json({
      success: true,
      data: updated
    });

  } catch (err) {
    next(err);
  }
};


// DELETE todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted"
    });

  } catch (err) {
    next(err);
  }
};

