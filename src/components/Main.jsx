import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./header/Header";
import Movies from "./main/Movies";
import About from "../components/main/About";
import MovieDetails from "./main/MovieDetails";
import Rating from "../components/header/Rating";
import Footer from "./footer/Footer";

function Main() {
  // Todas las peliculas
  const [moviesList, setMoviesList] = useState([]);
  const [fillStar, setFillStart] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=7e4232a4c1d72bad3f9beaa89544b2b5"
      );

      setMoviesList(response.data.results);
    };
    getData();
  }, []);
  // Fin Todas las peliculas

  const filterRating = (star) => {
    setFillStart(star);
  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Movies movies={moviesList} star={0} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route
          path="/rating"
          element={[
            <Rating fillStar={fillStar} filterRating={filterRating} />,
            <Movies movies={moviesList} star={fillStar} />,
          ]}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
