import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Register from "./pages/Register";
import EditTodo from "./pages/EditTodo";

export default function App() {
  const [todos, setTodos] = useState([]); // <-- Estado global de TODOs

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={<Todos todos={todos} setTodos={setTodos} />}
        />
        <Route
          path="/registro"
          element={<Register todos={todos} setTodos={setTodos} />}
        />
        <Route path="/editar" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}


