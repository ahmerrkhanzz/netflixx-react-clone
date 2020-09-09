import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.scss";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const request = await axios.get(fetchUrl);
      // console.table(request.data.results)
      setMovies(request.data.results);
      return request;
    };
    fetchTrending();
  }, [fetchUrl]);

  return (
    <div className="row">
      <div className="row__header">
        <h1>{title}</h1>
        {/* <a href="javascript:;">See All</a> */}
      </div>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
