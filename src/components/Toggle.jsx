import React from "react";
import { useState, useEffect } from "react";

const Toggle = () => {
  
  const [position,setPosition]=useState('start')
  const [theme, setTheme] = useState(null);


  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else setTheme("light");
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setPosition('end')
     
     
    } else {
      document.documentElement.classList.remove("dark");
      setPosition('start')
     
      
    }

   
  }, [theme,position]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  //   if(theme==='dark')setPosition('end')
  // if(theme==='light')setPosition('start')
  };
  return (
    <div className="ml-6 mt-2">
      {" "}
    
      <div
        onClick={switchTheme}
        className={`w-11 h-5 rounded-xl p-1 flex items-center justify-${position} cursor-pointer bg-white-400  dark:bg-purple`}
       
      >
        <div className="w-4 h-4 bg-white-100 rounded-xl "></div>
      </div>
    </div>
  );
};

export default Toggle;
