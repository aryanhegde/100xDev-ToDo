import PropTypes from "prop-types";

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id} className="border p-4 my-2">
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p className="text-gray-600">{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
