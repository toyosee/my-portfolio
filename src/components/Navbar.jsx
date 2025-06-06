import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"; // Ensure the correct path to your logo

function Navigation() {
  return (
    <Navbar className="new navbar" bg="" variant="dark" expand="lg">
      <Container>
              <Navbar.Brand as={Link} to="/">
                  <img src={logo} alt="Brand Logo" className="brand-logo me-2" />
                  Elijah Abolaji
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;