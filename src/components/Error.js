import "./styles/Error.scss";

import ErrorIllustration from "../assets/images/undraw_by_my_car_ttge.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const Error = () => {

  const reload = () => {
    window.location.reload();
  } 

  return (
    <div className="error">
      <div className="error--information">
        <h1>
          Oops<span>!</span>
        </h1>
        <p>
          No Country with this name exists. We suggest you to go back to home.
          😉
        </p>
        <button onClick={reload}>
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            style={{ marginLeft: "5px" }}
          />{" "}
          Back To Home
        </button>
      </div>
      <div className="error--illustration">
        <img src={ErrorIllustration} alt="error illustration by unDraw.co" />
      </div>
    </div>
  );
};

export default Error;
