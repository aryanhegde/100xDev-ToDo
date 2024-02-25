// create a mmongoose schema for todo appliaction
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_DB_URL);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const Todo = mongoose.model("todos", todoSchema);
module.exports = { Todo };
