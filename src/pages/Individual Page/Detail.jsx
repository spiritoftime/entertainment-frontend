import React from "react";

const Detail = ({ title, contentType = "", content }) => {
  let languageNames =
    contentType === "language"
      ? new Intl.DisplayNames([content], { type: "language" })
      : "";

  return (
    <div className="flex text-center flex-col gap-3">
      <p className="text-gray-500 font-normal">{title}</p>
      <p className="text-white  font-bold">
        {contentType === "language" ? languageNames.of(content) : content}
      </p>
    </div>
  );
};

export default Detail;
