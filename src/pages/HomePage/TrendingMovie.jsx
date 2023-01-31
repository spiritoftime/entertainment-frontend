import React from "react";
import { useNavigate } from "react-router-dom";
import buildImgUrl from "../../helper-functions/buildImgUrl";
const TrendingMovie = (props) => {
  const { backdrop, id, date, title, relativePath } = props;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(relativePath);
  };
  return (
    <div
      onClick={navigateHandler}
      className="cursor-pointer flex flex-col relative hover:translate-y-[-4px] duration-200  "
    >
      <div className="h-[140px] w-[240px] md:h-[230px] md:w-[470px] ">
        <img
          src={buildImgUrl(backdrop)}
          alt={"Trending Movie image for" + title}
          className="opacity-50 height-[140px] width-[240px] md:h-[230px] md:w-[470px] rounded-lg "
        />
      </div>
      <div className="w-[90%] absolute bottom-[10%] md:bottom-[5%] left-[5%] ">
        <div className=" flex font-light flex-row items-center gap-1.5">
          <p className="text-white text-xs">{date.split("-")[0]}</p>
          <div className="flex items-center flex-row gap-1.5">
            <p className="text-white">•</p>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="white"
                opacity=".75"
              />
            </svg>
            <p className="text-white text-xs">Movie</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-white truncate text-ellipsis overflow-hidden">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovie;
