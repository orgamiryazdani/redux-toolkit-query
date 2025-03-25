import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Todos from "./components/todos";
import Todo from "./components/Todo";
import ReduxProvider from "./providers/redux-provider";
import { Toaster } from "react-hot-toast";
import CreatePost from "./components/create-post";

function App() {
  return (
    <ReduxProvider>
      <Toaster />
      <Link to="/create-post">create post</Link>
      <Routes>
        <Route
          path='/'
          element={<Todos />}
        />
        <Route
          path='/todo/:id'
          element={<Todo />}
        />
        <Route
          path='/create-post'
          element={<CreatePost />}
        />
      </Routes>
    </ReduxProvider>
  );
}

export default App;
