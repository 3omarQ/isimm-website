import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function VieAssociative(props) {
  return (
    <div>
      <Card>
        <Card.Body className="p-4">
          <h6>Vie associative</h6>
          <hr className="mt-0 mb-4" />
          <Row className="pt-1">
            <Col sm="6" className="mb-3">
              <h5>Clubs</h5>
              <p className="text-muted small">
                {props.data.clubs.map((club) => (
                  <li>{club}</li>
                ))}
              </p>
            </Col>
            <Col sm="6" className="mb-3">
              <h5>Recompenses</h5>
              <p className="text-muted small">
                {props.data.recompenses.map((recompense) => (
                  <li>{recompense}</li>
                ))}
              </p>
            </Col>
            <Col sm="6" className="mb-3">
              <h5>Certificats</h5>
              <p className="text-muted small">
                {props.data.certificat.map((certificat) => (
                  <li>{certificat}</li>
                ))}
              </p>
            </Col>
            <Col sm="6" className="mb-3">
              <h5>Stage(s)</h5>
              <p className="text-muted small">
                {props.data.stages.map((stage) => (
                  <li>{stage}</li>
                ))}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VieAssociative;
