import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      console.log(state.nowPlayingMovies);
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
      console.log(state.popularMovies);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
      console.log(state.topRatedMovies);
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
      console.log(state.upcomingMovies);
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
