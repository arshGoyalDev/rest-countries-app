import "./styles/Filters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ActiveFilter = ({
  activeFilter,
  setActiveFilter,
  setUrl,
  setLoading,
}) => {
  const removeFilter = () => {
    setActiveFilter(null);
    setUrl("https://restcountries.com/v2/all");
    setLoading(true);
  };

  return (
    <div className="active-filter-container">
      <button className="active-filter" onClick={removeFilter}>
        {activeFilter}{" "}
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </button>
    </div>
  );
};

export default ActiveFilter;
