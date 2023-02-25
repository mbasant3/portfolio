import React from "react";
import { NavLink } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as FcIcon from "react-icons/fc";
import resumeData from "../resumeData";
import Image from "../assets/image/profile.jpeg";

export default ({ toggleMenu }) => (
  <div className="sidemenu">
    <div>
      <div className="card profile-card">
        <div className="card-body">
          <div className="card-title">
            <img src={Image} alt="Profile" />
            <h4>{resumeData.name}</h4>
            <h6 className="card-subtitle text-muted">{resumeData.role}</h6>
            <NavLink to="/" onClick={toggleMenu} className="card-link">
              <FaIcon.FaUser /> Profile
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink className="link" href="/#home" to="/home" onClick={toggleMenu}>
        <FaIcon.FaHome /> Home
      </NavLink>
      <NavLink className="link" href="/#about" to="/about" onClick={toggleMenu}>
        <FcIcon.FcAbout /> About
      </NavLink>
      <NavLink
        className="link"
        href="/#interest"
        to="/interest"
        onClick={toggleMenu}
      >
        <FaIcon.FaPinterest /> Interest
      </NavLink>
    </div>
  </div>
);
