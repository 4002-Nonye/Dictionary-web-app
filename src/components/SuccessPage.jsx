import React from "react";
import WordMeaning from "./WordMeaning";

const SuccessPage = ({ data }) => {
  // console.log(data[0])
  if (!data) return;
  //   console.log(data);
  const { word, phonetic, phonetics, meanings, sourceUrls } = data;
  // //   console.log(phonetics,meanings,sourceUrls)
  console.log(meanings);
  const wordDetail = meanings?.map((meaning, index) => {
    return (
      <div key={index} className='mt-5'>
        <div className="flex items-center gap-10">
          <h3 className="capitalize text-black-400 dark:text-white-100 text-2xl italic font-bold my-4">
            {meaning.partOfSpeech}
          </h3>
          <span className=" border-t-white-400 border-t w-full dark:border-t-black-100"></span>
        </div>

        {/* MEANING */}
        <div>
      <WordMeaning wordarr={meaning.definitions}/>
        </div>
      </div>
    );
  });

  return (
    <div className="dark:text-white-100 flex flex-col ">
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-black-400 dark:text-white-100 text-4xl lg:text-6xl font-bold capitalize">
            {word}
          </h2>
          <p className="text-purple mt-4 font-bold text-2xl">{phonetic}</p>
        </div>
        <p>souund</p>
      </div>

      {wordDetail}
    </div>
  );
};

export default SuccessPage;
