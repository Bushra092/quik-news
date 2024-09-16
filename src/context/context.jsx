import { createContext, useEffect, useState } from "react";

export let NewsContext = createContext();
let API_KEY = "b163edbe68f64a53a7d512b97b4aec92";

const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("");
  const [userInput, setUserInput] = useState(" ");

  //   https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}

  const apiCall = async () => {
    try {
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );

      let response = await data.json();

      if (userInput.includes(response.articles)) {
        console.log(userInput.includes(response.articles));
        setNewsData(response.articles);
      } else setNewsData(response.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleOnUserEnter = (e) => {
    let userInputValue = e.target.value;
    setUserInput((pre) => userInputValue);
  };
  const handleOnUserClick = () => {
    apiCall();
  };

  const firstLetterUpperCase = (value) => {
    let newsCategory = value.charAt(0).toUpperCase() + value.slice(1);
    return newsCategory;
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    apiCall();
  }, [category]);

  return (
    <NewsContext.Provider
      value={{
        newsData,
        userInput,
        handleOnUserEnter,
        handleOnCategoryChange,
        category,
        firstLetterUpperCase,
        handleOnUserClick,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
