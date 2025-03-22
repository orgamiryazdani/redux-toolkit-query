import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "../features/todoApi";

function TodoDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetTodoByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div>
      <h1>Todo Details</h1>
      <p>ID: {data?.id}</p>
      <p>Title: {data?.title}</p>
      <p>Completed: {data?.completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TodoDetails;
