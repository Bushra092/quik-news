import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import NewsList from "./components/NewsList";

function App() {
  return (
    <>
      <Header />
      <Navigator />
      <NewsList />
    </>
  );
}

export default App;
