// CustomNavbar.js
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../utils/images/icon.png";
import user from "../utils/images/user.png";
function CustomNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  // const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);

  const handleDropdownMouseEnter = (setShowDropdownId) => {
    setShowDropdownId(true);
  };

  const handleDropdownMouseLeave = (setShowDropdownId) => {
    setShowDropdownId(false);
  };

  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/authentification");
  };
  return (
    <Navbar expand="lg" className="position-absolute w-100">
      <Container>
        <Navbar.Brand>
          <Link
            to="/home"
            href="/home"
            className="navbar-brand d-flex align-items-center"
          >
            <img src={logo} width="120" height="90" alt="Logo" />
            <div>
              <div
                className="mx-2 text-light lh-2 fw-semibold"
                style={{ fontSize: 25 }}
              >
                ISIMM
              </div>
              <div
                className="mx-2 text-light lh-2 fw-light "
                style={{ fontSize: 12 }}
              >
                Université de Monastir
              </div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        ></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav.Link href="/home" className="text-uppercase">
              Home
            </Nav.Link>

            <Nav.Link
              title="Formation"
              id="basic-nav-dropdown"
              style={{ marginTop: 0 }}
              href="/courses"
              className="text-uppercase"
            >
              Formation
            </Nav.Link>

            <NavDropdown
              title="VIE ETUDIANTINE"
              id="basic-nav-dropdown"
              show={showDropdown3}
              onMouseEnter={() => handleDropdownMouseEnter(setShowDropdown3)}
              onMouseLeave={() => handleDropdownMouseLeave(setShowDropdown3)}
            >
              <NavDropdown.Item href="/Foyers">Foyer</NavDropdown.Item>
              <NavDropdown.Item href="/Restaurants">
                Restaurants universitaires
              </NavDropdown.Item>
              <NavDropdown.Item href="/Clubs">Nos clubs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Les Evènements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              title="Blog"
              id="basic-nav-dropdown"
              style={{ marginTop: 0 }}
              href="/blog"
              className="text-uppercase"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              title="Contact"
              id="basic-nav-dropdown"
              style={{ marginTop: 0 }}
              href="/contact"
              className="text-uppercase"
            >
              Contact
            </Nav.Link>

            <button
              type="button"
              className="btn btn-outline-light  mx-sm-2 my-1 my-sm-0 d-flex align-items-center"
              id="login"
              onClick={handleButtonClick}
            >
              s'authentifier
              <img className="icons" src={user} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
