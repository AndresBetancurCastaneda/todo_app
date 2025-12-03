import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content">
      <h1>Bienvenido a Todo App</h1>

      <nav>
        <Link to="/todos">Ver tareas</Link> |{" "}
        <Link to="/registro">Registrar tarea</Link>
      </nav>
    </div>
  );
}
