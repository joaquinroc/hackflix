import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div key={movie.id} className="col-2 card">
      <Link to={"movie/" + movie.id}>
        <figure className="figureCard">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </figure>
      </Link>
    </div>
  );
}

export default Movie;
