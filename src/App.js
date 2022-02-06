import React, { useState, useEffect } from "react";
import "./components/styles/App.scss";

import NavBar from "./components/NavBar";

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
    </div>
  );
};

export default App;
