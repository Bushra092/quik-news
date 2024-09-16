import React, { useContext } from "react";
import News from "./News";
import { NewsContext } from "../context/context";

const NewsList = ({ data }) => {
  const { newsData } = useContext(NewsContext);

  return (
    <div className="md:flex flex-wrap pt-10 mx-16 gap-3.5">
      {newsData.map((curr, index) => {
        return <News key={index} news={curr} />;
      })}
    </div>
  );
};

export default NewsList;
