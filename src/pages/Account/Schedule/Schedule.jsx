import React, { useState, useEffect } from "react"; // Add useEffect for fetching data
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Container, Row, Col, Form } from "react-bootstrap";
import emploi_icon from "../../../utils/images/calendar.png";
import emploi_exemple from "../../../utils/pdfs/emploi.pdf";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  /*
  useEffect(() => {
    fetchSchedule(); // Implement this function
  }, []); // Empty dependency array to fetch schedule only once on component mount */

  /* const fetchSchedule = async (ClassId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/isimm/${ClassId}/schedule`);
      if (response.ok) {
        const data = await response.json();
        setSchedule(data);
      } else {
        console.error("Failed to fetch schedule");
      }
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  }; */

  return (
    <div>
      <div className="container mt-4 mb-4 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="icons" src={emploi_icon} />
          <h1 className="fw-semibold mt-2">Emploi de temps</h1>
        </div>

        <Form inline className="ml-auto">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Rechercher une classe"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <button className="btn btn-light">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </Col>
          </Row>
        </Form>
      </div>
      <hr />
      <div className="container align-items-center justify-content-center d-flex">
        <embed
          src={schedule.link}
          type="application/pdf"
          height="500px"
          width="50%"
        />
      </div>
      <hr />
    </div>
  );
}

export default Schedule;
