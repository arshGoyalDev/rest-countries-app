import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../components/styles/CountryDetails.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import CountryDetails from "../components/CountryDetails";
import LoadingDetails from "../components/LoadingDetails";
import Error from "../components/Error";

const Details = () => {
  const [countryDetails, setCountryDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let { countryCode } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`
      );
      const data = await res.json();
      setCountryDetails(data);
      setLoading(false);
      console.log(data);
    };

    fetchDetails();
  }, [countryCode]);

  return (
    <div className="details">
      {loading ? (
        <LoadingDetails />
      ) : countryDetails.name !== undefined ? (
        <>
          <Link to="/">
            <button className="back-btn">
              <FontAwesomeIcon icon={faLongArrowAltLeft} />
              <span>Back</span>
            </button>
          </Link>
          <CountryDetails data={countryDetails} />
        </>
      ) : (<Error link={true} />)}
    </div>
  );
};

export default Details;
