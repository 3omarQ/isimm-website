import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFileAlt } from "@fortawesome/free-solid-svg-icons";

import "../ButtonsStudent.css";

function ButtonsStudent() {
  return (
    <div className="py-5">
      <Link to="/courses">
        <button type="button" className="b btn btn-light btn-lg mx-0 mx-sm-2 ">
          <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
          Consulter les notes
        </button>
      </Link>
      <Link to="/contact">
        <button type="button" className="b btn btn-light btn-lg mx-0 mx-sm-2 ">
          <FontAwesomeIcon icon={faClock} className="mr-3" />
          Emploi du temps
        </button>
      </Link>
    </div>
  );
}

export default ButtonsStudent;
