import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import Toggle from "./Toggle";
import Input from "./Input";
import Dropdown from "./Dropdown";
import fonts from '../data/fonts'

const Header = () => {
  
  const [font, setFont] = useState("sans-serif");
  const [dropDown, setDropDown] = useState(false);
  return (
    <header className="flex flex-col w-full ">
      <nav className="flex  justify-between relative">
        {/* LOGO */}
        <div>
          <img alt="logo" src={logo} />
        </div>

        <div className="flex h-full items-center  ">
          {/* FONT */}
          <div onClick={() => setDropDown(!dropDown)} className='cursor-pointer flex items-center'>
            {" "}
            <h3 className="ml-6 text-xl text-md dark:text-white-100">{font}</h3>
            {/* DROP DOWN ARROW */}
            <svg
              className="ml-4 "
              width="15"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L7 7L13 1" stroke="#a445ed" strokeWidth="1.5" />
            </svg>
          </div>

          {/* DEMARCATING BORDER */}
          <div className="border border-white-400 h-7 ml-6 opacity-30"></div>

          {/* THEME TOGGLER */}
          <Toggle />

          {/* MOON */}
          <svg
            className="ml-6 "
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hover:stroke-purple"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
              stroke="#757575"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Dropdown
          fonts={fonts}
          dropDown={dropDown}
          setDropDown={setDropDown}
          setFont={setFont}
        />
      </nav>
      <div>
        <Input placeholder="Search for any word..."/>
      
      </div>
    </header>
  );
};

export default Header;
