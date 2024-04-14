import React from "react";
import "./contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Contactez-nous</h1>
          <p className="text-center w-75 mb-5"></p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center ">
        <Form id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Prénom</Form.Label>
              <Form.Control placeholder="Prénom"></Form.Control>
            </Col>
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Nom</Form.Label>
              <Form.Control placeholder="Nom"></Form.Control>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
            ></Form.Control>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Addresse</Form.Label>
            <Form.Control placeholder="Votre adresse"></Form.Control>
          </Form.Group>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Localisation</Form.Label>
              <Form.Select defaultValue="Monastir">
                <option value="Monastir">Monastir</option>
                <option value="Sousse">Sousse</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Tunis">Tunis</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Code postal</Form.Label>
              <Form.Control placeholder="Code postal"></Form.Control>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Votre Message</Form.Label>
            <Form.Control as="textarea" rows={3}></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            className="btn btn-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
          >
            Envoyer
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
