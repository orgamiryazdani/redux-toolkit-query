import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todos from "./components/todos";
import Todo from "./components/Todo";
import ReduxProvider from "./providers/redux-provider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ReduxProvider>
      <Toaster />
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
    </ReduxProvider>
  );
}

export default App;
