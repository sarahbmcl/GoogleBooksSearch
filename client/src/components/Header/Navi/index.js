import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navi(props) {
  return (
    <div className="main">
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/"><img alt="logo" className="logo" width="100%" src="./images/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/saved">Saved Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default Navi;
