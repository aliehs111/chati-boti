import React from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Page.css';

import { Link } from "react-router-dom";

function Header({ updatePage }) {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="header"
      >
        <Container>
        <Navbar.Brand className="name">
            <Link className="name" style={{ textDecoration: 'none' }} to="/">Chati-Boti</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Navigation updatePage={updatePage} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;
  