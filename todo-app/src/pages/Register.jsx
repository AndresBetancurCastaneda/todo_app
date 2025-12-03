import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("El título es obligatorio");
      return;
    }

    setError("");

    // Crear nuevo TODO
    const newTodo = {
      id: Date.now(), // id único temporal
      title,
      completed: false,
    };

    // Actualizar estado global
    setTodos([...todos, newTodo]);

    alert("Tarea registrada correctamente");

    setTitle(""); // limpiar input
  };

  return (
    <div className="container">
      <h2>Registrar nueva tarea</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit1">Registrar</button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Botón para volver a la página principal */}
      <Link to="/">
        <button style={{ marginTop: "20px" }}>Volver a inicio</button>
      </Link>
    </div>
  );
}
