import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  // Each todo: { id, text, completed }
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (text) => {
    setTodos((todos) => [...todos, { id: Date.now(), text, completed: false }]);
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Remove a todo
  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
