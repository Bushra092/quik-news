import React, { useContext } from "react";
import { NewsContext } from "../context/context";

const Navigator = () => {
  const { handleOnCategoryChange } = useContext(NewsContext);
  return (
    <div className="mt-5 text-center w-full flex justify-center">
      <div>
        {" "}
        <span className="mr-4  font-semibold text-lg tracking-wide">
          Categories
        </span>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="business"
          onClick={handleOnCategoryChange}
        >
          Business
        </button>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="entertainment"
          onClick={handleOnCategoryChange}
        >
          Entertainment
        </button>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="general"
          onClick={handleOnCategoryChange}
        >
          General
        </button>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="health"
          onClick={handleOnCategoryChange}
        >
          Health
        </button>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="science"
          onClick={handleOnCategoryChange}
        >
          Science
        </button>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="sports"
          onClick={handleOnCategoryChange}
        >
          Sports
        </button>
        <button
          type="button"
          className="py-1 px-2 m-1 rounded bg-color text-secondary hover:bg-linkHover font-semibold tracking-wide md:text-lg outline-0 border-0"
          value="technology"
          onClick={handleOnCategoryChange}
        >
          Technology
        </button>
      </div>
    </div>
  );
};

export default Navigator;
