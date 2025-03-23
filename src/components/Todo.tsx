import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "../features/todoApi";
import Error from "./error";

function TodoDetails() {
  const { id } = useParams();
  const { data, error, isLoading, refetch } = useGetTodoByIdQuery(id || "1");

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <Error
        error={error}
        refetch={refetch}
      />
    );

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
