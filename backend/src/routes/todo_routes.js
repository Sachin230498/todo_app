const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
} = require("../controller/todo_con");

router.get("/", getTodos);

const upload = multer();

// app.get("/", ()=>{
//   res.send("Welcome to the Todo API");
// })
router.post("/", upload.none(), createTodo);
router.put("/:id", updateTodo);
router.put("/complete/:id", completeTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
