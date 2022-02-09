import "./styles/CountryDetails.scss";

import { Link } from "react-router-dom";

const CountryDetails = ({ data }) => {
  const details = [
    {
      type: "Native Name",
      value: data.nativeName,
    },
    {
      type: "Population",
      value: data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      type: "Region",
      value: data.region,
    },
    {
      type: "Sub Region",
      value: data.subregion,
    },
    {
      type: "Capital",
      value: data.capital,
    },
    {
      type: "Top Level Domain",
      value: data.topLevelDomain[0],
    },
    {
      type: "Currencies",
      value: data.currencies?.map((currency) => {
        return currency;
      }),
    },
    {
      type: "Languages",
      value: data.languages.map((lang) => {
        return lang.name;
      }),
    },
  ];

  console.log(details[7]);

  return (
    <div className="country-details">
      <div className="country-details--flag">
        <img src={data.flags.png} alt={data.name} />
      </div>
      <div className="country-details--details">
        <h1>{data.name}</h1>
        <div className="country-details--details--columns">
          <div className="country-details--details--columns--column">
            {details.slice(0, 5).map((detail) => (
              <div className="row" key={detail.type}>
                <span>{detail.type}</span> <span>:</span>{" "}
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="country-details--details--columns--column">
            <div className="row">
              <span>{details[5].type}</span> <span>:</span>
              <span>{details[5].value}</span>
            </div>
            <div className="row">
              <span>{details[6].type}</span> <span>:</span>
              {details[6].value === undefined
                ? "No Currency"
                : details[6].value.map((value) => (
                    <span key={value.name}>{value.name}</span>
                  ))}
            </div>
            <div className="row">
              <span>{details[7].type}</span> <span>:</span>{" "}
              <span>{details[7].value.toString()}</span>
            </div>
          </div>
        </div>
        <div className="country-details--details--borders">
          <h3>
            Border Countries :{" "}
            {data.borders === undefined && <span>No Countries</span>}
          </h3>
          {data.borders !== undefined && (
            <div>
              {data.borders?.map((country) => (
                <Link to={`/${country}`} key={country}>
                  <button key={country}>{country}</button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
