export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => onToggle(todo.id)}>✓</button>
      <button onClick={() => onDelete(todo.id)}>🗑</button>
    </li>
  );
}
