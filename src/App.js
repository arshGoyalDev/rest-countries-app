import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import "./components/styles/App.scss";

import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="App">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":countryCode" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
