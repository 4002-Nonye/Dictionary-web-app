import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
import Error from "./Error";

const Input = ({ placeholder, onClick }) => {
  const [err, setErr] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") setErr(true);
  };
  const onTermSubmit = (e) => {
    setSearchTerm(e.target.value);
    setErr(false);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="relative">
        <input
          placeholder={placeholder}
          value={searchTerm}
          onChange={onTermSubmit}
          className=" bg-white-200 w-full focus:border-[3px] transition-none focus:border-purple rounded-lg text-xl dark:text-white-100 font-bold caret-purple h-16  outline-none dark:bg-black-300 mt-12 mb-2 ml-auto mr-auto p-4  "
        ></input>
        <img
          alt="search"
          src={searchIcon}
          className="cursor-pointer absolute top-[58%] right-[5%]"
          onClick={onClick}
        />
      </form>
      {err && <Error msg={`Whoops! can't be empty`} />}
    </>
  );
};

export default Input;
