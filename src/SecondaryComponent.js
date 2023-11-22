import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative z-20 pl-12 -mt-44">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top rated" movies={movies.topRatedMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryComponent;
