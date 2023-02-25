import React from "react";
// import { NavLink } from "react-router-dom";
import "../assets/styles/bootstrap.css";

export default ({ toggleMenu }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <i
      className="fas fa-bars fa-lg sidemenu-toggle-icon"
      onClick={toggleMenu}
    ></i>
    <ul className="navbar-nav">
      <li className="nav-item"></li>
    </ul>
  </nav>
);
