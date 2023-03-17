import React, { useState, useEffect } from "react";
const Dropdown = ({ fonts, dropDown, setFont, setDropDown }) => {
  //DEFAULT FONT
  const [fontFamily, setFontFamily] = useState("sans-serif");

  //CHANGE BODY FONT ACCORDING TO ITEM SELECTED
  useEffect(() => {
    document.body.style.fontFamily = fontFamily.toLowerCase();
  }, [fontFamily]);

  const handleClick = (key,value) => {
    //1. DISPLAY FONT NAME ON SCREEN
    //2. CLOSE DROPDOWN ONCE A FONT HAS BEEN CHOSEN
    //3. UPDATE FONT FAMILY STATE
    setFont(key);
    setDropDown(!dropDown);
    setFontFamily(value);
  };
  const items = fonts.map(({ key, value }) => {
    return (
      <p
        key={key}
        onClick={()=>handleClick(key,value)}
        className="cursor-pointer pb-3 text-lg transition-color duration-700 hover:text-purple"
      >
        {key}
      </p>
    );
  });
  return (
    dropDown && (
      <div className="absolute bg-white-100 dark:bg-black-300 dark:text-white-200 dark:shadow-white-400  shadow-lg z-40 rounded-md right-0 p-6 top-16 w-56">
        {items}
      </div>
    )
  );
};

export default Dropdown;
