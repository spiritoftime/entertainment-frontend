import React from "react";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
const Genre = ({ type, name, id }) => {
  const { pathname } = useLocation;
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate({
          pathname: `/${type}`,
          search: createSearchParams({ genre: id, page: 1 }).toString(),
        })
      }
      className="flex items-center justify-center rounded-lg py-2 px-2 aspect-square text-black bg-sky-500 cursor-pointer hover:translate-y-[-4px]"
    >
      <p>{name}</p>
    </div>
  );
};

export default Genre;
