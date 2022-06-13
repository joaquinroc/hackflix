import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getMovieData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=7e4232a4c1d72bad3f9beaa89544b2b5`
      );
      console.log(response);
      setMovie(response.data);
    };
    getMovieData();
  }, []);

  const img = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
  if (!movie) {
    return console.log("Hola");
  }
  return (
    <div
      className="movieDetail"
      style={{
        backgroundImage: img,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        margin: "0 auto",
        flexWrap: "wrap",
        borderRadius: "10px",
        width: "70%",
      }}
    >
      <div className="movieDetail-info">
        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>

        <ul>
          <li>{movie.vote_average}</li>
          <li>{movie.release_date}</li>
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
