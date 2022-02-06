import React, { useState } from "react";
import "./styles/SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({setUrl}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const clickHandler = () => {
    if (searchTerm === '' || searchTerm === ' ') return;
    setUrl(`https://restcountries.com/v2/name/${searchTerm}`);
  }

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} onClick={clickHandler} style={{cursor: 'pointer'}} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={(e) => {if (e.keyCode === 13) clickHandler() }}
      />
    </div>
  );
};

export default SearchBar;
