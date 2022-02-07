import React, { useState } from "react";

import "./styles/SearchBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setUrl, setLoading }) => {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const clickHandler = () => {
    if (searchTerm === "" || searchTerm === " ") return;
    setUrl(`https://restcountries.com/v2/name/${searchTerm}`);
    setSearching(true);
    setLoading(true);
  };

  const cancelSearch = () => {
    setSearchTerm("");
    setUrl("https://restcountries.com/v2/all");
    setSearching(false);
    setLoading(true);
  };

  return (
    <div className="search-bar">
      <FontAwesomeIcon
        icon={faSearch}
        onClick={clickHandler}
        style={{ cursor: "pointer" }}
      />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) clickHandler();
        }}
      />
      {searching ? (
        <button className="cancel-btn" onClick={cancelSearch}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
