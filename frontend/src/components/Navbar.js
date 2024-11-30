import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MainNavbar({ activeSection }) {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" className="navbar">
        <Container fluid>
          <a href="#home">Daniel Páez</a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link
                href="#home"
                className={activeSection === "home" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activeSection === "about" ? "active-link" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#qualification"
                className={
                  activeSection === "qualification" ? "active-link" : ""
                }
              >
                Qualification
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className={activeSection === "portfolio" ? "active-link" : ""}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeSection === "skills" ? "active-link" : ""}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={activeSection === "contact" ? "active-link" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavbar;
