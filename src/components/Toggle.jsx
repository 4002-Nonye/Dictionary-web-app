import React from "react";
import { useState, useEffect } from "react";

const Toggle = () => {
  const [position, setPosition] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else setTheme("light");
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setPosition(!position);
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
   
  };
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
