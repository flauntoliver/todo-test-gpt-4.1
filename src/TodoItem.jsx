function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} aria-label={todo.text} />
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(todo.id)} aria-label="Delete todo">
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
