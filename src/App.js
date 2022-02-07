import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./components/styles/App.scss";

import Home from "./pages/Home";

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
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </div>
  );
};

export default App;
