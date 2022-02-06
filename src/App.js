import React, { useState, useEffect } from "react";
import "./components/styles/App.scss";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Country from "./components/Country";

const App = () => {
  const [url, setUrl] = useState("https://restcountries.com/v2/all");
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCountries(data)
  };

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");

    fetchCountries();
  }, [darkMode, url]);

  return (
    <div className="App">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="search-filters-container">
        <SearchBar setUrl={setUrl} />
        <Filters setUrl={setUrl} />
      </div>
      <div className="countries-container">
        {
          countries.map((country) => (
            <Country data={country} key={country.name} />
          ))
        }
      </div>
    </div>
  );
};

export default App;
