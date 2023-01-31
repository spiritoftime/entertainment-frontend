import React from "react";
import classes from "./stars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faStar);
const Stars = ({ vote }) => {
  let stars = [];
  const decimals = +(+vote - Math.floor(vote)).toFixed(2);

  for (let i = 0; i < Math.floor(vote); i++)
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="18px"
        height="16px"
        viewBox="0 0 32 32"
      >
        <defs>
          <linearGradient id={"grad" + i}>
            <stop offset="100%" stop-color="yellow" />
            <stop offset="0%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#grad${i})`}
          d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
l11.547-1.2L16.026,0.6L20.388,10.918z"
        />
      </svg>
    );
  for (let i = Math.floor(vote); i < 5; i++) {
    if (i === Math.floor(vote)) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="18px"
          height="16px"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient id={"grad" + i}>
              <stop offset={decimals * 100 + "%"} stop-color="yellow" />
              <stop offset="30%" stop-color="white" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#grad${i})`}
            d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
          />
        </svg>
      );
    } else
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="18px"
          height="16px"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient id={"grad" + i}>
              <stop offset="100%" stop-color="white" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#grad${i})`}
            d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
l11.547-1.2L16.026,0.6L20.388,10.918z"
          />
        </svg>
      );
  }
  return <div className="flex justify-center">{stars.map((star) => star)}</div>;
};

export default Stars;
