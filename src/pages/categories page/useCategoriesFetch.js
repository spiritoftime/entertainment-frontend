import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";
import { useSearchParams, useLocation } from "react-router-dom";
const useCategoriesFetch = (substr) => {
  const { pathname } = useLocation();
  const [fetchedData, setFetchedData] = useState({});
  const getCategories = async () => {
    const response = await customFetch(`${substr}`);
    setFetchedData({ ...response });
  };

  useEffect(() => {
    getCategories();
  }, [pathname]);

  return fetchedData;
};

export default useCategoriesFetch;
