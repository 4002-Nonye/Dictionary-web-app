import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
import Error from "./Error";

const SearchBar = ({ placeholder, term, setTerm, findWord }) => {
  const [err, setErr] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();

    // IF INPUT TERM IS EMPTY,KILL SEARCH AND RENDER ERROR MSG
    if (term.trim() === "") {
      setErr(true);
      return;
    }

    findWord();
  };
  const onTermSubmit = (e) => {
    setTerm(e.target.value);
    setErr(false);
  };

  return (
    <div className="h-[10rem]">
      <form onSubmit={onFormSubmit} className="relative">
        <input
          placeholder={placeholder}
          value={term}
          onChange={onTermSubmit}
          className=" bg-white-200 w-full focus:border-[3px] transition-none focus:border-purple rounded-lg text-xl dark:text-white-100 font-bold caret-purple h-16  outline-none dark:bg-black-300 mt-12 mb-2 ml-auto mr-auto p-4  "
        ></input>
        <img
          alt="search"
          src={searchIcon}
          className="cursor-pointer absolute top-[58%] right-[5%]"
          onClick={onFormSubmit}
        />
      </form>
      {err && (
        <Error
          msg={`Whoops! can't be empty`}
          className={"text-danger text-sm font-bold animate-shake"}
        />
      )}
    </div>
  );
};

export default SearchBar;
