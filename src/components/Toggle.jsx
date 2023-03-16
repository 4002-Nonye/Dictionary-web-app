import React from "react";
import { useState, useEffect } from "react";

const Toggle = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else setTheme("light");
  },[]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="ml-6 mt-2">
      {" "}
      <button
        onClick={switchTheme}
        className="text-black-400 dark:text-white-100"
      >
        toggle
      </button>
    </div>
  );
};

export default Toggle;
