const buildImgUrl = (backdrop_path) => {
  return "https://image.tmdb.org/t/p/original" + backdrop_path;
};

export default buildImgUrl;
