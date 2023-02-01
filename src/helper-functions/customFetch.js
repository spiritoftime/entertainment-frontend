const BASE_URL = "https://api.themoviedb.org/3/";

let api_obj = {
  api_key: "237e21f511ab3b26eab3c3968be39066",
};

const customFetch = async (substr, paramObj = {}, movie_url = BASE_URL) => {
  if (paramObj !== {}) paramObj = { ...api_obj, ...paramObj };
  else if (paramObj === {}) paramObj = api_obj;
  let queryUrl = `${movie_url}${substr}?` + new URLSearchParams(paramObj);
  const response = await fetch(queryUrl);
  return response.json();
};

export default customFetch;
