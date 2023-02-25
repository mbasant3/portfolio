import React, { Component, Fragment } from "react";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import "./about.css";
import resumeData from "../resumeData";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <div className="text-center mt-4 mb-4">
            <h1
              className="displ
         ay-3"
            >
              {resumeData.name}
            </h1>
            <img
              className="img-thumbnail justify-content-end"
              src={resumeData.image}
              alt="Profile"
            />{" "}
          </div>
          <h3 className="lead text-center mt-4 mb-4">{resumeData.role}</h3>
          <p className="lead">
            <li>
              I'm {<strong>Basant Mandal</strong>} from <strong>Mumbai</strong>{" "}
              currently pursiuing my bachelor's deree from{" "}
              <strong>Thakur College of Science and Commerce.</strong>
            </li>
            <li>
              I wanted to update my knowledge as soon as something updated.
            </li>{" "}
            <li>
              I <em>believe</em> that to be successful in life, one needs to be
              obsessive with their dreams and keep working towards them.
            </li>
          </p>
          <hr className="my-4" />
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <h4>
                  <span>{resumeData.name}</span>
                </h4>
                <br></br>
                <h3>
                  <span>{resumeData.address}</span>
                </h3>
                <br></br>
                <a
                  className="spaces github"
                  title="Github"
                  href={resumeData.github}
                >
                  <FaIcons.FaGithub size={50} />
                </a>
                <a
                  className="spaces insta"
                  title="Instagram"
                  href={resumeData.instagram}
                >
                  <FaIcons.FaInstagram size={50} />
                </a>
                <a
                  className="spaces linkedin"
                  title="Linkedin"
                  href={resumeData.linkedin}
                >
                  <FaIcons.FaLinkedin size={50} />
                </a>{" "}
                <a
                  className="spaces website"
                  title="Website"
                  href={resumeData.website}
                >
                  <CgIcons.CgWebsite size={50} />
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
