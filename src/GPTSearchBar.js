import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "./utils/constants";
import lang from "./utils/languageConstants";
import openai from "./utils/openai";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system  and suggest some movies for the query" +
      searchText.current.value +
      ".only  give me names of 5 movies , comma separated like the example result given ahead.Example Result: Bahubali,Pushpa,KGF,Jawan,Arjun  Reddy";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptMovies.choices) {
      {
        <h1>
          ChatGPT is not working , so please do browse for your movies and enjoy
          the feast !!
        </h1>;
      }
    }
    console.log(gptResults.choices?.[0].message?.content);
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = Promise.all(promiseArray);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="grid w-1/2 grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 px-4 py-2 m-4 text-white bg-red-700 rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
