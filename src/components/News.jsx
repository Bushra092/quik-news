import React from "react";

const News = ({ news }) => {
  const { author, description, title, url, urlToImage } = news;

  return (
    urlToImage &&
    title &&
    description &&
    urlToImage && (
      <div className="m-2 w-[100%] h-[auto] pb-24 md:pb-24  md:w-[250px] md:h-[400px] border-x-slate-200 rounded border-2 mb-10 relative">
        <figure className="">
          <img
            className="  md:h-[139px] md:w-[247px]"
            src={urlToImage}
            alt=""
          />
        </figure>
        <div className="textContent space-x-4 space-y-3">
          <h2 className="font-bold md:text-2xl ml-4 mt-2  ">
            <a
              href={url}
              target="_blank"
              className="hover:border-accent/75 hover:border-b-2"
            >
              {title.slice(0, 25)} ...
            </a>
          </h2>
          <p className="tracking-tight ">{description.slice(0, 90)}...</p>
          <p className="absolute md:bottom-10 font-semibold ">
            Author :{" "}
            <span className="text-accent/80  ">
              {author ? author.slice(0, "10") : "unknowm"}
            </span>{" "}
          </p>
          <button
            type="button"
            className="hover:underline hover:underline-offset-4 text-accent/80 hover:text-accent transition delay-150 ease-in-out duration-500 pb-4 pt-10 absolute bottom-0 "
          >
            {" "}
            <a href={url} target="_blank">
              News Link
            </a>{" "}
          </button>
        </div>
      </div>
    )
  );
};

export default News;
