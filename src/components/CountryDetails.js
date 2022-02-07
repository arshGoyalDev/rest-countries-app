import './styles/CountryDetails.scss';

const CountryDetails = ({data}) => {
  return (
    <div className="country-details">
      {data.name}
    </div>
  );
};

export default CountryDetails;
