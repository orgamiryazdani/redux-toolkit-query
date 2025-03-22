import { Link } from "react-router-dom";
import { useGetAllTodosQuery } from "../features/todoApi";

const Todos = () => {
  const { isLoading, data, error } = useGetAllTodosQuery();

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;

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
