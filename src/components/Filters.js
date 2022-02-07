import React, { useState } from "react";

import "./styles/Filters.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ setUrl, setActiveFilter, setLoading }) => {
  const [regions, setRegions] = useState("");

  const showFilters = () => {
    regions === ""
      ? setRegions(["Africa", "Americas", "Asia", "Europe", "Oceania"])
      : setRegions("");
  };

  const selectFilter = (e) => {
    setUrl(`
    https://restcountries.com/v2/region/${e.target
      .getAttribute("data-value")
      .toLowerCase()}`);
    setRegions(null);
    setActiveFilter(e.target.getAttribute("data-value"));
    setLoading(true);
  };

  return (
    <div className="filters">
      <button className="filters--btn" onClick={showFilters}>
        Filter by Region <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {regions ? (
        <div className="filters--list">
          {regions.map((region) => (
            <button
              key={region}
              className="filters--list--filter"
              data-value={region}
              onClick={selectFilter}
            >
              {region}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filters;
