import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import CountryDetails from "../components/CountryDetails"

const Details = () => {
  const [countryDetails, setCountryDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const res = await fetch(
      `https://restcountries.com/v2/name/${params.countryName}?fullText=true`
    );
    const data = await res.json();
    setCountryDetails(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      {countryDetails[0] !== undefined ? (
        <>
          <Link to="/"><button><FontAwesomeIcon icon={faLongArrowAltLeft} />Back</button></Link>
          <CountryDetails data={countryDetails[0]} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;
