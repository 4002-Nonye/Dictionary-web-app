import React from "react";

const WordMeaning = ({ wordarr, synonyms }) => {
  const wordArray = wordarr.map((word, index) => {
    return (
      <li key={index} className="text-[1.1rem] leading-8 flex flex-col my-3">
        <p className=" text-black-400 dark:text-white-100   before:content-['\2022'] before:text-purple before:inline-block before:w-3 before:font-bold ">
          {" "}
          {word.definition}
        </p>
        {word.example ? (
          <span className="text-white-400">"{word.example}"</span>
        ) : (
          ""
        )}
      </li>
    );
  });

  return (
    <>
      <ul>
        <p className="text-lg text-white-400 tracking-wide font-semibold">
          {" "}
          Meanings
        </p>
        {wordArray}

        <div className="mt-8 inline-block ">
          {synonyms.length === 0 ? (
            ""
          ) : (
            <p className="text-xl text-white-400 font-light lastchild ">
              Synonyms &nbsp; &nbsp;
              {synonyms.map((syn, index) => {
                return (
                  <span key={index} className=" text-purple text-lg ">
                    &nbsp; {syn}
                  </span>
                );
              })}
            </p>
          )}{" "}
        </div>
      </ul>
    </>
  );
};
export default WordMeaning;
