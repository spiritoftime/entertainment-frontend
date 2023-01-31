import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-white text-lg font-bold">Summary</p>
      <p className="text-gray-500 text-sm lg:text-base text-center font-medium">
        {overview}
      </p>
    </div>
  );
};

export default Overview;
