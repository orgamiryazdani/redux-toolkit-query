import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todos from "./components/todos";
import Todo from "./components/Todo";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Todos />}
      />
      <Route
        path='/todo/:id'
        element={<Todo />}
      />
    </Routes>
  );
}

export default App;
