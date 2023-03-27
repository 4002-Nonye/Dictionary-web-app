import React, { useState, useEffect } from "react";

const Dropdown = ({ fonts, dropDown, setFont, setDropDown }) => {
  //DEFAULT FONT
  const [fontFamily, setFontFamily] = useState("sans-serif");

  //CHANGE BODY FONT ACCORDING TO ITEM SELECTED
  useEffect(() => {
    //STORE USER'S PREFERRED FONT IN LOCAL STORAGE
    const savedFont = localStorage.getItem("initialFont");
    const savedFontFamilyName = localStorage.getItem("initialFontFamily");
    if (savedFont && savedFontFamilyName) {
      setFontFamily(savedFont);
      setFont(savedFontFamilyName);
    }
    document.body.style.fontFamily = fontFamily.toLowerCase();
  }, [fontFamily]);

  const handleClick = (key, value) => {
    //1. DISPLAY FONT NAME ON SCREEN
    //2. CLOSE DROPDOWN ONCE A FONT HAS BEEN CHOSEN
    //3. UPDATE FONT FAMILY STATE

    setFont(key);
    setDropDown(!dropDown);
    setFontFamily(value);
    localStorage.setItem("initialFont", value);
    localStorage.setItem("initialFontFamily", key);
  };
  const items = fonts.map(({ key, value }) => {
    return (
      <p
        key={key}
        onClick={() => handleClick(key, value)}
        className="cursor-pointer pb-3 text-lg transition-color duration-700 hover:text-purple text-black-400 dark:text-white-200"
      >
        {key}
      </p>
    );
  });
  return (
    dropDown && (
      <div className="absolute bg-white-100 dark:bg-black-300  dark:shadow-xl  z-40 rounded-md right-0 p-6 top-16 w-56">
        {items}
      </div>
    )
  );
};

export default Dropdown;
