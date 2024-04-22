import React, { useState, useEffect } from "react"; // Add useEffect for fetching data
import { Container, Row, Col, Form } from "react-bootstrap";
import notes_icon from "../../../utils/images/grades.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Notes() {
  const [marks, setMarks] = useState([]);
  /*
  useEffect(() => {
    
    fetchMarks(); // Implement this function
  }, []); // Empty dependency array to fetch marks only once on component mount */

  /* const fetchMarks = async (ClassId) => {
    try {
      
      const response = await fetch(`http://localhost:8080/api/isimm/classes/${ClassId}/marks`);
      if (response.ok) {
        const data = await response.json();
        setMarks(data);
      } else {
        console.error("Failed to fetch marks");
      }
    } catch (error) {
      console.error("Error fetching marks:", error);
    }
  }; */
  return (
    <div>
      <div className="container mt-4 mb-4 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="icons" src={notes_icon} />
          <h1 className="fw-semibold mt-2">Notes</h1>
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
        {marks.map((marks, index) => (
          <iframe
            src={marks.link}
            frameborder="0"
            width="100%"
            height="600px"
            border="0"
          ></iframe>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Notes;
