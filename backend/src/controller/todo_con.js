const Todo = require("../model/todo_model");
const multer = require("multer");

async function getTodos(req, res) {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    
    const newTodo = new Todo({
      title,
      description,
      dueDate,
      completed: false,
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, dueDate, completed },
      { new: true }
    );
    res.json(updateTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const completeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // const { title, description, dueDate, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { completed: "true" },
      { new: true }
    );
    res.json( updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
};
