import React from "react";

const Sound = ({ phonetics }) => {
  const playSound = () => {
    const soundArr = [];
    phonetics?.map((phonetic) => {
      //IF THERE IS NO AUDIO, KILL
      if (phonetic.audio === "") return;

      //ELSE PUSH AUDIO TO ARRAY AND PLAY FIRST AUDIO
      soundArr.push(phonetic.audio);

      const audio = new Audio(soundArr[0]);
      audio.play();
    });
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75 75"
      className="w-20 cursor-pointer "
      onClick={playSound}
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"></circle>
        <path d="M29 27v21l21-10.5z"></path>
      </g>
    </svg>
  );
};

export default Sound;
