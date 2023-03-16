import React from "react";
import searchIcon from "../assets/search.svg";

const Input = ({ placeholder }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onFormSubmit}
      className="mt-16 flex justify-between w-full bg-white-200 dark:bg-black-200 rounded-lg border-0  outline-none text-lg md:text-2xl  p-2 lg:p-6  text-black-400  lg:font-bold"
    >
      <input
        placeholder={placeholder}
        className=" bg-white-200 outline-none border-none caret-purple dark:bg-black-200 dark:text-white-100"
      ></input>
      <img alt="search" src={searchIcon} className="cursor-pointer" />
    </form>
  );
};

export default Input;
