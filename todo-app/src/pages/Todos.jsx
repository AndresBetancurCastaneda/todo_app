import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../api";

import TodoItem from "../components/TodoItem";
import TodoFilters from "../components/TodoFilters";
import Loader from "../components/Loader";

export default function Todos({ todos, setTodos }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos desde API solo si el estado global está vacío
  useEffect(() => {
    const fetchTodos = async () => {
      if (todos.length > 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(API_URL + "?_limit=10");
        if (!response.ok) throw new Error("Error al cargar los TODOs");

        const data = await response.json();
        setTodos(data); // actualizar estado global
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [setTodos, todos.length]);

  // Cambiar estado completado
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Eliminar TODO
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Mostrar loading
  if (loading) return <Loader />;

  // Mostrar error
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      <h1>Lista de TODOS</h1>

      {/* Placeholder de filtros */}
      <TodoFilters />

      {todos.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleCompleted}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}


      {/* Botón para volver a la página principal */}
      <Link to="/">
        <button style={{ marginTop: "20px" }}>Volver a inicio</button>
      </Link>
    </div>
  );
}
