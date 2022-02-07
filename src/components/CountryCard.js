import "./styles/CountryCard.scss";
import { Link } from "react-router-dom";

const Country = ({ data }) => {
  return (
    <div className="country-card">
      <div className="country-card--flag">
        <img src={data.flags.png} alt={data.name} />
      </div>
      <div className="country-card--details">
        <Link to={`/${data.name}`}>
          <h3>{data.name}</h3>
        </Link>
        <div className="country-card--details--other">
          <p>
            Population :{" "}
            <span>
              {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
          <p>
            Region : <span>{data.region}</span>
          </p>
          <p>
            Capital : <span>{data.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
