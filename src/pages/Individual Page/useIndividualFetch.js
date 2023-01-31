import { useEffect, useReducer } from "react";
import customFetch from "../../helper-functions/customFetch";

function fetchReducer(state, action) {
  if (action.type === "casts") return { ...state, casts: action.payload };
  else if (action.type === "details")
    return { ...state, details: action.payload };
}

// genre = tv or movie
const useIndividualFetch = (genre, id) => {
  const [fetchedData, dispatch] = useReducer(fetchReducer, {});

  const getCasts = async () => {
    const response = await customFetch(`${genre}/${id}/credits`);
    dispatch({ type: "casts", payload: response.cast });
  };
  const getDetails = async () => {
    const response = await customFetch(`${genre}/${id}`);
    dispatch({ type: "details", payload: response });
  };

  useEffect(() => {
    getCasts();
    getDetails();
  }, []);

  return fetchedData;
};

export default useIndividualFetch;
