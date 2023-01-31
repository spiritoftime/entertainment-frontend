import { useRef } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const queryRedirectHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    navigate({
      pathname: `/search`,
      search: createSearchParams({
        name: inputRef.current.value,
        page: 1,
      }).toString(),
    });
    inputRef.current.value = "";
  };
  return (
    <div className="items-center w-full flex gap-2 pt-4 px-4">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="white"
      >
        <circle cx="24" cy="24" r="16" />
        <line x1="56" y1="56" x2="35.31" y2="35.31" />
      </svg>
      <form className="flex w-full" onSubmit={queryRedirectHandler}>
        <input
          ref={inputRef}
          className="placeholder-shown:text-ellipsis text-white w-full focus:outline-none focus:bg-darkBlue bg-darkBlue"
          placeholder="Search for movies!"
        />
        <button className="hover:bg-rose-500 bg-rose-600 p-2 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
