import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"
const Header=() => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link className="navbar-header" to="/home">Czhring</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar-nav">
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/project">Portfolio</Link>
      <Link className="link" to="/contact">Contact</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
  }
  
  export default Header;