import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import profile_pic from "../../utils/images/omar.jpg";
import "./Profil.css";
import profile_icon from "../../utils/images/profil_icon.png";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import VieAssociative from "../../components/ProfileCard/VieAssociative";
import ButtonsStudent from "../../components/ProfileCard/ButtonsStudent";

const profil_exemple = {
  img: profile_pic,
  name: "Omar kassar",
  classe: "Ing. Info. 1",
  filiere: "Cycle d'ingénieur: Génie logiciel",
  date_naissance: "12/21/2002",
  stages: ["Stage d'été: web-dev chez Vermeg"],
  date_diplome: "2026",

  TD: "2",
  email: "omarkassar202@gmail.com",
  recompenses: ["Majeur de promotion 22/23", "Vainqueur IEEE-Extreme 21/22"],
  clubs: ["IEEE", "AISEC", "PsyChess"],
  certificat: ["2CN", "TOEIC", "Azur AI certificate"],
  github: "@3omarQ",
};
function Profil() {
  return (
    <div className="profile">
      <div className="entete"></div>
      <div className="container mt-4 mb-4 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="icons" src={profile_icon} />
          <h1 className="fw-semibold mt-2">Votre profil</h1>
        </div>

        <Form inline className="ml-auto">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Rechercher un étudiant"
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
      <Container className="py-1 pt-3">
        <Row className="justify-content-right align-items-center h-100">
          <Col lg="6" className="mb-lg-0">
            <ProfileCard data={profil_exemple} />
          </Col>
          <Col>
            <Row>
              <VieAssociative data={profil_exemple} />
            </Row>
            <Row>
              {" "}
              <ButtonsStudent></ButtonsStudent>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}

export default Profil;
