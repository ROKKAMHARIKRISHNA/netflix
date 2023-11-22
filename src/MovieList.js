import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Secondary movies" + movies);
  return (
    <div className="px-6">
      <h1 className="py-2 text-xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterpath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
