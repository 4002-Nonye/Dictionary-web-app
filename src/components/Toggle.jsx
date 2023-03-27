import React from "react";
import { useState, useEffect } from "react";

const Toggle = () => {
  const [position, setPosition] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());

  //STORE CURRENT THEME IN LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //CHECK IF THERE IS AN EXISTING THEME
  //IF NO EXISTING THEME, SET IT TO LIGHT
  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setPosition(true);
    } else {
      document.documentElement.classList.remove("dark");
      setPosition(false);
    }
    // setPosition(true);
  }, [theme]);

  function switchTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <div className="ml-6 mt-2">
      {" "}
      <div
        onClick={switchTheme}
        className={`w-11 h-5 rounded-xl p-1 flex items-center cursor-pointer bg-white-400  dark:bg-purple ${
          position ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-4 h-4 bg-white-100 rounded-xl "></div>
      </div>
    </div>
  );
};

export default Toggle;
