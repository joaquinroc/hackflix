import Movie from "./Movie";
import "./Movies.css";

function Movies({ movies, star }) {
  return (
    <div className="row divMovies">
      {movies
        .filter((movie) => movie.vote_average >= 2 * (star - 1))
        .map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
    </div>
  );
}

export default Movies;
