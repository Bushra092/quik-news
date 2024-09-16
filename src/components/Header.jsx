import React, { useContext } from "react";
import { NewsContext } from "../context/context";

const Header = () => {
  const {
    handleOnUserEnter,
    category,
    userInput,
    firstLetterUpperCase,
    handleOnUserClick,
  } = useContext(NewsContext);
  return (
    <div className="header flex justify-around md:flex items-center flex-wrap md:justify-between py-5  bg-primary/80 text-secondary md:px-20 ">
      <div className=" ">
        <h2 className="text-xl md:text-2xl font-bold">Quick News</h2>
      </div>
      <p className="font-semibold md:text-xl">
        News topic |{" "}
        {category === "" ? "Top News" : firstLetterUpperCase(category)}
      </p>
      {/* <div className="flex mt-3 md:mt-0">
        <input
          type="text"
          name=""
          id=""
          className="border-2 px-2 md:px-5 md:py-2 md:w-[300px] rounded-lg bg-secondary/90 text-accent tracking-wide font-semibold"
          placeholder="Search Here..."
          value={userInput}
          onChange={handleOnUserEnter}
        />
        <button
          className="border-2 px-5 py-2 w-24 mx-1 md:mx-2 rounded-lg font-semibold  transition   delay-500 duration-300  ease-in-out hover:text-primary/80 hover:bg-secondary"
          onClick={handleOnUserClick}
        >
          Search
        </button>
      </div> */}
    </div>
  );
};

export default Header;
