import React from "react";
import WordMeaning from "./WordMeaning";
import Link from "./Link";


const SuccessPage = ({ data }) => {
 
  if (!data) return;

  const { word, phonetic, phonetics, meanings, sourceUrls } = data;
  // //   console.log(phonetics,meanings,sourceUrls)
  console.log(sourceUrls);
  const wordDetail = meanings?.map((meaning, index) => {
    return (
      <div key={index} className='mt-5'>
        <div className="flex items-center gap-10">
          <h3 className="capitalize text-black-400 dark:text-white-100 text-[1.27rem] italic font-bold my-4">
            {meaning.partOfSpeech}
          </h3>
          <span className=" border-t-white-400 border-t w-full dark:border-t-black-100"></span>
        </div>

        {/* MEANING */}
     
      <WordMeaning wordarr={meaning.definitions} synonyms={meaning.synonyms} />
  
     
      </div>
    );
  });

  return (
    <main className="dark:text-white-100 flex flex-col mb-10 ">
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-black-400 dark:text-white-100 text-4xl lg:text-6xl font-bold capitalize">
            {word}
          </h2>
          <p className="text-purple mt-4 font-bold text-2xl">{phonetic}</p>
        </div>
        <div className="dark:text-white-100 text-black-400">souund</div>
      </div>

      {wordDetail}
      <Link sourceUrls={sourceUrls} title='Source'/>

     
  
    </main>
  );
};

export default SuccessPage;
