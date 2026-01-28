/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  const [todoList, setTodoList] = React.useState([]);
  const [currentTodo, setCurrentTodo] = React.useState("");

  const handleAdd = () => {
    if (!currentTodo.trim().length) {
      alert("Please enter a todo item");
    }

    const newTodoList = [
      ...todoList,
      { id: Math.random(new Date()), content: currentTodo, isCompleted: false },
    ];

    setTodoList(newTodoList);
    setCurrentTodo("");
  };

  const handleDeleted = (id) => {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    if (!deletedTodoList) return;

    setTodoList(deletedTodoList);
  };

  const handleToggleCompleted = (id) => {
    const completedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    sortTodoList(completedTodoList);
  };

  const sortTodoList = (list) => {
    const sortedTodoList = list.sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) {
        return a.isCompleted ? 1 : -1;
      }
      return a.id < b.id;
    });
    setTodoList(sortedTodoList);
  };

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        type="text"
        placeholder="Add item into as todo"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <li key={todo.id} className={todo.isCompleted ? "deleted" : ""}>
              <input
                type="checkbox"
                onChange={() => {
                  handleToggleCompleted(todo.id);
                }}
              />
              {todo.content}{" "}
              <button
                onClick={() => {
                  handleDeleted(todo.id);
                }}
              >
                delete
              </button>
            </li>
          ))}
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
