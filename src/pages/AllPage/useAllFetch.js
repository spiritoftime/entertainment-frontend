import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";
import { useSearchParams } from "react-router-dom";
// type = movie or tv, substr is the relative url path like in usehomefetches
const useAllFetch = (substr) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramsObj = {};
  const [fetchedData, setFetchedData] = useState({});
  const [currPage, setCurrPage] = useState(+searchParams.get("page"));
  if (substr.startsWith("discover")) {
    paramsObj = { with_genres: +searchParams.get("genre") };
  } else if (substr.startsWith("search"))
    paramsObj = { query: searchParams.get("name") };
  const getFilms = async () => {
    const response = await customFetch(`${substr}`, {
      page: currPage,
      ...paramsObj,
    });
    setFetchedData({ films: response });
  };

  useEffect(() => {
    getFilms();
  }, [currPage, paramsObj]);

  return {
    setSearchParams,
    fetchedData,
    searchParams,
    currPage,
    setCurrPage,
  };
};

export default useAllFetch;
