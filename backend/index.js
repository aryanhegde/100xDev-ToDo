// write basic express js boilerplate code,
// with express.json() middleware

const express = require("express");
const { createTodo } = require("./types");
const { Todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(401).json({ message: "You sent the wrong input" });

    return;
  }

  // post to the database

  try {
    await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
  } catch (error) {
    console.log(error);
  }

  res.json({ message: "Todo created successfully" });
});

app.get("/todos", async (req, res) => {
  const todo = await Todo.find();

  res.json({
    todo,
  });
});

app.put("/completed", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(401).json({ message: "You sent the wrong input" });

    return;
  }

  await Todo.updateOne(
    {
      _id: createPayload.id,
    },
    {
      completed: true,
    }
  );

  res.json({ message: "Todo completed successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
