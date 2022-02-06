import "./styles/NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ darkMode, setDarkMode }) => {
  const clickHandler = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <nav>
      <h1>Where in the world?</h1>
      <button className="theme-toggle-btn" onClick={clickHandler}>
        {!darkMode ? (
          <>
            <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSun} /> <span>Light Mode</span>
          </>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
