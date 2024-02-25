// write basic express js boilerplate code,
// with express.json() middleware

const express = require("express");
const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.json({ todos: [] });
});

app.post("/todos", (req, res) => {
  res.json({ message: "Todo created successfully" });
});

app.put("/completed", (req, res) => {
  res.json({ message: "Todo updated successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
