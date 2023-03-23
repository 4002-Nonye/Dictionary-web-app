import React from "react";
import oval from "../assets/Oval.svg";

const WordMeaning = ({ wordarr }) => {
  const wordArray = wordarr.map((word, index) => {
    return (
      <div key={index} className="text-[0]">
        <img alt="" src={oval} />
        <p className="text-[1.2rem] text-black-400 dark:text-white-100 leading-8 ">
          {word.definition}
        </p>
      </div>
    );
  });
  return <>{wordArray}</>;
};

export default WordMeaning;
