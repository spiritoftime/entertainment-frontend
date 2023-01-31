import React from "react";
import useIndividualFetch from "./useIndividualFetch";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared components/LoadingSpinner";
import buildImgUrl from "../../helper-functions/buildImgUrl";
import Stars from "./Stars";
import Detail from "./Detail";
import Overview from "./Overview";
import Tags from "./Tags";
import Button from "../../shared components/Button";
const IndividualPage = ({ genre = "" }) => {
  const { filmId } = useParams();
  const fetchedData = useIndividualFetch(genre, filmId);
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;
  const { details, casts } = fetchedData;
  return (
    <div className="md:mx-auto flex flex-col md:flex-row p-4 gap-4 md:gap-10">
      {details && (
        <img
          className={
            "w-[min(200px,_80%)] md:w-[min(350px,_80%)] max-h-[600px] mx-auto md:mx-0 rounded-lg "
          }
          src={buildImgUrl(details.poster_path)}
        />
      )}
      <div className="md:w-full md:max-w-[500px] lg:max-w-[700px] text-white flex flex-col gap-4">
        {details && (
          <h2 className="text-xl lg:text-2xl font-medium text-center">
            {genre === "movie" ? details.original_title : details.name}
          </h2>
        )}
        {details && (
          <h3 className="text-md lg:text-xl font-bold text-gray-500 text-center">
            {details.tagline}
          </h3>
        )}
        {details && (
          <p className="text-3xl text-center font-medium">
            {(details.vote_average / 2).toFixed(1)}
          </p>
        )}
        {details && <Stars vote={(details.vote_average / 2).toFixed(1)} />}
        {details && (
          <div className="grid grid-cols-2 md:flex  md:justify-between gap-y-4">
            <Detail
              title="Length"
              content={
                genre === "movie"
                  ? details.runtime
                  : details.episode_run_time + " mins"
              }
            />
            <Detail
              title="Language"
              contentType="language"
              content={details.original_language}
            />
            <Detail
              title="Year"
              content={
                genre === "movie"
                  ? details.release_date.split("-")[0]
                  : details.first_air_date.split("-")[0]
              }
            />
            <Detail title="Status" content={details.status} />
          </div>
        )}
        {details && <Overview overview={details.overview} />}
        {details && <Tags categoryName="Genres" detail={details.genres} />}
        {casts && <Tags categoryName="Casts" detail={casts} />}
        <div className="btn-div flex gap-4">
          {details && <Button url={details.homepage} name="Website" />}
          {details && (
            <Button
              url={"https://www.imdb.com/title/" + details.imdb_id}
              name="IMDB Link"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualPage;
