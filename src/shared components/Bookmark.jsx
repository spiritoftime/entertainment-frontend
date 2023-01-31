import React from "react";

const Bookmark = ({ bookmarkHandler }) => {
  return (
    <div className="top-1 right-1 flex justify-center items-center absolute bg-darkBlue opacity-50 w-6 md:w-10 h-6 md:h-10 lg:w-12 lg:h-12 rounded-full ">
      <svg
        onClick={bookmarkHandler}
        className="w-3.5 md:w-8 h-4.5 md:h-8 lg:w-10 lg:h-10 stroke-2 z-10 "
        fill="none"
        stroke="white"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
      >
        <rect
          id="Icons"
          x="-576"
          y="-192"
          width="1280"
          height="800"
          style={{ fill: "none" }}
        />

        <g id="Icons1">
          <g id="Strike"></g>
          <g id="H1"></g>
          <g id="H2"></g>
          <g id="H3"></g>
          <g id="list-ul"></g>
          <g id="hamburger-1"></g>
          <g id="hamburger-2"></g>
          <g id="list-ol"></g>
          <g id="list-task"></g>
          <g id="trash"></g>
          <g id="vertical-menu"></g>
          <g id="horizontal-menu"></g>
          <g id="sidebar-2"></g>
          <g id="Pen"></g>
          <g id="Pen1" serif:id="Pen"></g>
          <g id="clock"></g>
          <g id="external-link"></g>
          <g id="hr"></g>
          <g id="info"></g>
          <g id="warning"></g>
          <g id="plus-circle"></g>
          <g id="minus-circle"></g>
          <g id="vue"></g>
          <g id="cog"></g>
          <g id="logo"></g>
          <path
            id="bookmark"
            d="M43.967,55.946l-0.003,0l-11.997,-15.995l-11.997,15.995l-0.003,0l0,-48l24,0l0,48Z"
          />
          <g id="radio-check"></g>
          <g id="eye-slash"></g>
          <g id="eye"></g>
          <g id="toggle-off"></g>
          <g id="shredder"></g>
          <g
            id="spinner--loading--dots-"
            serif:id="spinner [loading, dots]"
          ></g>
          <g id="react"></g>
          <g id="check-selected"></g>
          <g id="turn-off"></g>
          <g id="code-block"></g>
          <g id="user"></g>
          <g id="coffee-bean"></g>
          <g id="coffee-beans">
            <g id="coffee-bean1" serif:id="coffee-bean"></g>
          </g>
          <g id="coffee-bean-filled"></g>
          <g id="coffee-beans-filled">
            <g id="coffee-bean2" serif:id="coffee-bean"></g>
          </g>
          <g id="clipboard"></g>
          <g id="clipboard-paste"></g>
          <g id="clipboard-copy"></g>
          <g id="Layer1"></g>
        </g>
      </svg>
    </div>
  );
};

export default Bookmark;
