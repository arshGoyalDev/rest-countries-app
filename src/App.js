import React, { useState, useEffect } from "react";
import "./components/styles/App.scss";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [url, setUrl] = useState('https://restcountries.com/v2/all');
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");

    console.log(url);
  }, [darkMode, url]);

  return (
    <div className="App">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="search-filters-container">
        <SearchBar setUrl={setUrl} />
      </div>
    </div>
  );
};

export default App;
