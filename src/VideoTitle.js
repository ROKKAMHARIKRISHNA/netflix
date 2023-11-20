import React from "react";
import Buttons from "./Shared/Buttons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen px-24 pt-[20%] aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white ">{title}</h1>
      <p className="w-1/3 py-6 text-lg text-white">{overview}</p>

      <div>
        <button className="p-3 mx-3 text-xl text-black bg-white rounded-lg hover:bg-opacity-80 ">
          ▶️Play
        </button>
        <Buttons icon="ℹ️" text="More Info" background="bg-gray-500" />
      </div>
    </div>
  );
};

export default VideoTitle;
