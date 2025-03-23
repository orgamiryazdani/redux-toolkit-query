import { Link } from "react-router-dom";
import { useGetAllTodosQuery } from "../features/todoApi";
import Error from "./error";

const Todos = () => {
  const { isLoading, data = [], error, refetch } = useGetAllTodosQuery();

  if (isLoading) return <p>loading...</p>;
  if (error)
    return (
      <Error
        error={error as string}
        refetch={refetch}
      />
    );

  return (
    <div>
      {data.map(({ id, title, userId, completed }) => (
        <div key={id}>
          <p>{userId}</p>
          <Link to={`/todo/${id}`}>{title}</Link>
          <input
            type='checkbox'
            checked={completed}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;
