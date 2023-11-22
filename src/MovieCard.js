import React from "react";
import { IMG_URL } from "./utils/constants";

const MovieCard = ({ posterpath }) => {
  var transition =
    "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ";
  return (
    <img
      className={"pr-4 w-36 cursor-pointer " + transition}
      alt="movieimage"
      src={IMG_URL + posterpath}
    />
  );
};

export default MovieCard;
