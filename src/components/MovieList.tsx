import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeMovie } from "../redux/movieSlice";

export const MovieList = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id: number) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1>movie list</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name}{" "}
          <button onClick={() => handleRemoveMovie(movie.id)}>
            Delete Movie
          </button>
        </div>
      ))}
    </div>
  );
};
