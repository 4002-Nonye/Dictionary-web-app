import axios from "axios";
import React, { useEffect, useState } from "react";
import sadFace from "../../assets/sadface.png";
import Header from "../../components/Header";
import SearchBar from "../../components/searchBar";
import Error from "../../components/Error";
import BeatLoader from "react-spinners/BeatLoader";
import SuccessPage from "../../components/SuccessPage";

const Dictionary = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const findWord = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
      );
      if (!response.ok) {
        setStatus(true);

        return;
      }
      const jsonData = await response.json();
      setData(jsonData[0]);

      setStatus(false);
      // console.log(response.ok);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <SearchBar
        placeholder="Search for any word..."
        term={term}
        setTerm={setTerm}
        findWord={findWord}
      />

      {/* IF LOADING, CHECK STATUS STATE AND EITHER RENDER SUCCESS PAGE OR ERROR PAGE */}
      {loading ? (
        <div className="flex justify-center h-48 items-center">
          {" "}
          <BeatLoader color="#a445ed" />
        </div>
      ) : status ? (
        <div className="flex justify-center items-center text-center flex-col ">
          <img className="mt-5 " src={sadFace} alt="sad face" />
          <h2 className="font-bold text-2xl my-4 dark:text-white-100">
            No Definitions found
          </h2>
          <Error
            msg={` Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.`}
            className={" text-md md:text-lg my-2 dark:text-white-100"}
            img={sadFace}
          />{" "}
        </div>
      ) : (
        <SuccessPage data={data} />
      )}
    </>
  );
};
export default Dictionary;
