import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const data = await res.json();
      setTodos(data.todo);
    })
    .catch(function (error) {
      console.log("Error while fetching todos: ", error);
    });

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
