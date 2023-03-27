import React from "react";
import linkImg from "../assets/external.svg";

const Link = ({ sourceUrls, title }) => {
  const srcUrl = sourceUrls?.map((url, index) => {
    return (
      <div key={index} className="flex">
        <a
          target="_blank"
          href={url}
          className="underline text-black-400 dark:text-white-100"
        >
          {url}
        </a>
        <img className=" ml-2" src={linkImg} alt="" />
      </div>
    );
  });
  return (
    <div className="flex flex-col  text-md w-full gap-5 mt-12 pt-10 border-t border-white-400">
      <p className=" text-white-400">{title}</p>
      {<div className="flex flex-col">{srcUrl}</div>}
    </div>
  );
};

export default Link;
