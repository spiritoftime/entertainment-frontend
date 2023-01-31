import { useEffect, useReducer } from "react";
import customFetch from "../helper-functions/customFetch";

function fetchReducer(state, action) {
  if (action.type === "top") return { ...state, top: action.payload };
  else if (action.type === "trending")
    return { ...state, trending: action.payload };
  else if (action.type === "upcoming")
    return { ...state, upcoming: action.payload };
  else if (action.type === "popular") {
    return { ...state, popular: action.payload };
  } else if (action.type === "nowPlaying")
    return { ...state, nowPlaying: action.payload };
}

const useHomeFetches = (type) => {
  const [fetchedData, dispatch] = useReducer(fetchReducer, {});

  const getPopularMovies = async () => {
    const response = await customFetch(`discover/${type}/`, {
      sort_by: "popularity.desc",
    });
    dispatch({ type: "popular", payload: response.results.slice(0, 6) });
  };
  const getTopMovies = async () => {
    const response = await customFetch(`${type}/top_rated`);
    dispatch({ type: "top", payload: response.results.slice(0, 6) });
  };
  const getTrendingMovie = async () => {
    const response = await customFetch(`trending/${type}/week`);
    dispatch({ type: "trending", payload: response.results.slice(0, 6) });
  };
  const getNowPlayingMovies = async () => {
    const response = await customFetch(`${type}/now_playing`);
    dispatch({ type: "nowPlaying", payload: response.results.slice(0, 6) });
  };
  const getUpcomingMovies = async () => {
    const response = await customFetch(`${type}/upcoming`);
    dispatch({ type: "upcoming", payload: response.results.slice(0, 6) });
  };

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
    getNowPlayingMovies();
    getTopMovies();
    getTrendingMovie();
  }, []);
  // getNowPlayingMovies();

  return fetchedData;
};

export default useHomeFetches;
