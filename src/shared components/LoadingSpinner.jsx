import React from "react";
import spinner from "../assets/loading-spinner.svg";
const LoadingSpinner = () => {
  return <img alt="" className="animate-spin" src={spinner}></img>;
};

export default LoadingSpinner;
