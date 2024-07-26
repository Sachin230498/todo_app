const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connectDB")
const todo_route = require("./routes/todo_routes")
//load environmnet variables
dotenv.config();


// console.log(todo_route);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 app.use("/todos", todo_route)

// app.get("/data", (req,res)=>{
//      res.send("welcome");
// })

connectDB()

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
