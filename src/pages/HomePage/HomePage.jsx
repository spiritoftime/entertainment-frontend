import Film from "./Film";
import classes from "./homepage.module.css";
import LoadingSpinner from "../../shared components/LoadingSpinner";

import useHomeFetches from "../../custom hooks/useHomeFetches";
import Label from "../../shared components/Label";
import Grid from "../../shared components/Grid";
import TrendingMovie from "./TrendingMovie";
const HomePage = ({ type }) => {
  const fetchedData = useHomeFetches(type);
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;
  const { trending, top, upcoming, popular, nowPlaying } = fetchedData;
  return (
    <>
      <Label
        relativePath={`/trending/${type}/week`}
        type={type}
        category="TRENDING"
      />
      <div
        className={
          `${classes["scrollbar"]} ` + "flex overflow-x-scroll gap-4 pb-2 m-4"
        }
      >
        {trending &&
          trending.map((movie, idx) => (
            <TrendingMovie
              poster_path={movie.poster_path}
              relativePath={`/trending/${movie.id}`}
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              num={idx}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </div>
      <Label
        relativePath={`/all/popular/${type}/`}
        type={type}
        category="POPULAR"
      />
      <Grid>
        {popular &&
          popular.map((movie, idx) => (
            <Film
              relativePath={`/popular/${movie.id}`}
              filmType="Movie"
              poster_path={movie.poster_path}
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              num={idx}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
      <Label
        relativePath={`/all/upcoming/${type}`}
        type={type}
        category="UPCOMING"
      ></Label>
      <Grid>
        {upcoming &&
          upcoming.map((movie, idx) => (
            <Film
              num={idx}
              poster_path={movie.poster_path}
              relativePath={`/upcoming/${movie.id}`}
              filmType="Movie"
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
      <Label
        relativePath={`/all/now_playing/${type}`}
        type={type}
        category="NOW PLAYING"
      ></Label>
      <Grid>
        {nowPlaying &&
          nowPlaying.map((movie, idx) => (
            <Film
              num={idx}
              poster_path={movie.poster_path}
              relativePath={`/now_playing/${movie.id}`}
              filmType="Movie"
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
      <Label
        relativePath={`/all/top_rated/${type}`}
        type={type}
        category="TOP"
      ></Label>
      <Grid>
        {top &&
          top.map((movie, idx) => (
            <Film
              num={idx}
              poster_path={movie.poster_path}
              relativePath={`/top/${movie.id}`}
              filmType="Movie"
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
    </>
  );
};

export default HomePage;
