import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import boss1 from '../img/boss1.jpg';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ backgroundImage: 'url(/path-to-background-image.jpg)', backgroundSize: 'cover' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 style={{ fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
            <img
              alt=""
              src={boss1}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            BASKORO CORPORATION INDONESIA
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/PesananList">PesananList</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
