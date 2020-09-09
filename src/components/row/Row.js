import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import "./Row.scss";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  const opts = {
    height: '390',
    width: '100%',
    moviesplayerVars: {
      autoPlay: true
    }
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const request = await axios.get(fetchUrl);
      // console.table(request.data.results)
      setMovies(request.data.results);
      return request;
    };
    fetchTrending();
  }, [fetchUrl]);

  const handleMovieClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '').then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      }).catch(err => {
        console.log(err);
      })
    }
  }

  return (
    <div className="row">
      <div className="row__header">
        <h1>{title}</h1>
        {/* <a href="javascript:;">See All</a> */}
      </div>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovieClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/> }
    </div>
  );
};

export default Row;
