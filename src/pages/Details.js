import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../components/styles/CountryDetails.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import CountryDetails from "../components/CountryDetails";
import LoadingDetails from "../components/LoadingDetails";

const Details = () => {
  const [countryDetails, setCountryDetails] = useState({});
  let { countryCode } = useParams();

  
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`
      );
      const data = await res.json();
      setCountryDetails(data);
    };

    fetchDetails();
  }, [countryCode]);

  return (
    <div className="details">
      {countryDetails.name !== undefined ? (
        <>
          <Link to="/">
            <button className="back-btn">
              <FontAwesomeIcon icon={faLongArrowAltLeft} />
              <span>Back</span>
            </button>
          </Link>
          <CountryDetails data={countryDetails} />
        </>
      ) : (
        <LoadingDetails />
      )}
    </div>
  );
};

export default Details;
