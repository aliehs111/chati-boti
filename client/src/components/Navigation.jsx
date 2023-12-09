import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Page.css";

function Navigation() {
  return (
    <Nav>
      <NavLink className="nav-link" to="/">Main</NavLink>
      <NavLink className="nav-link" to="/signin">Sign In</NavLink>
      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    
    </Nav>
  );
}

export default Navigation;