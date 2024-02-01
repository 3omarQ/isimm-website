import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../ProfileCard.css";

// Import your image files for each icon
import editIcon from "../../utils/images/editer.png";
import facebookIcon from "../../utils/images/facebook.png";
import twitterIcon from "../../utils/images/twitter.png";
import instagramIcon from "../../utils/images/instagram.png";
import profile_img from "../../utils/images/omar.jpg";

export default function ProfileCard(props) {
  return (
    <Card className="mb-3" style={{ borderRadius: ".5rem" }}>
      <Row className="g-0">
        <Col
          md="4"
          className="profile-left-part text-center text-white d-flex align-items-center justify-content-center "
          style={{
            borderTopLeftRadius: ".5rem",
            borderBottomLeftRadius: ".5rem",
          }}
        >
          <div>
            <img src={props.data.img} alt="Avatar" />
            <h5 className="mt-4">{props.data.name}</h5>
            <p className="mb-0">{props.data.classe}</p>
            <p>TD {props.data.TD}</p>
          </div>
        </Col>
        <Col md="8">
          <Card.Body className="p-4">
            <h6>Informations générales</h6>
            <hr className="mt-0 mb-4" />
            <Row className="pt-1">
              <Col sm="6" className="mb-3">
                <h5>Filière</h5>
                <p className="text-muted small">
                  <p>{props.data.filiere}</p>
                </p>
              </Col>
              <Col sm="6" className="mb-3">
                <h5>Date de naissance</h5>
                <p className="text-muted small">
                  <p>{props.data.date_naissance}</p>
                </p>
              </Col>
              <Col sm="6" className="mb-3">
                <h5>Date prévue de diplomation</h5>
                <p className="text-muted small">
                  <p>{props.data.date_diplome}</p>
                </p>
              </Col>
            </Row>
            <h6>Contacts</h6>
            <hr className="mt-0 mb-4" />
            <Row className="pt-1">
              <Col sm="7" className="mb-3">
                <h5>Email</h5>
                <p className="text-muted small">{props.data.email}</p>
              </Col>
              <Col sm="5" className="mb-3">
                <h5>Github</h5>
                <p className="text-muted small">{props.data.github}</p>
              </Col>
            </Row>

            <div className="socials">
              <div className="d-flex justify-content-start">
                <a href="#!">
                  <img src={facebookIcon} alt="Facebook" className="me-3" />
                </a>
                <a href="#!">
                  <img src={twitterIcon} alt="Twitter" className="me-3" />
                </a>
                <a href="#!">
                  <img src={instagramIcon} alt="Instagram" className="me-3" />
                </a>
              </div>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
