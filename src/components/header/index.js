import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="bottom">
    <Navbar.Brand href="#home">Details</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/studentlist">StudentList</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
