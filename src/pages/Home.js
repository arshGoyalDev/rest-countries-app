import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ActiveFilter from "../components/ActiveFilter";
import LoadingCard from "../components/LoadingCard";
import Country from "../components/CountryCard";
import Error from "../components/Error";

const loadingData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Home = () => {
  const [url, setUrl] = useState("https://restcountries.com/v2/all");
  const [countries, setCountries] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    };

    fetchCountries();
  }, [url]);

  return (
    <>
      <div className="search-filters-container">
        <SearchBar setUrl={setUrl} setLoading={setLoading} />
        <Filters
          setUrl={setUrl}
          setActiveFilter={setActiveFilter}
          setLoading={setLoading}
        />
      </div>
      {activeFilter ? (
        <ActiveFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          setUrl={setUrl}
          setLoading={setLoading}
        />
      ) : (
        ""
      )}
      <div className="countries-container">
        {loading ? (
          loadingData.map((data) => <LoadingCard key={data} />)
        ) : countries.message !== undefined ? (
          <Error />
        ) : (
          countries.map((country) => (
            <Country data={country} key={country.name} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
