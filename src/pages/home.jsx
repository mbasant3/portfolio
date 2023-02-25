import React, { Fragment } from "react";
import resumeData from "../resumeData";
import { Container, Row, Col } from "react-bootstrap";
import Parts from "../Parts";
import Info from "../components/type";
import Image from "../assets/image/profilepiccut.jpeg";

function Home() {
  return (
    <Fragment>
      <section className="text-center">
        <Container fluid className="home-section" id="home">
          <Parts />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Welcome{" "}
                </h1>
                <h2 className="heading-name">
                  I am
                  <strong className="main-name"> {resumeData.name}</strong>
                </h2>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Info />
                </div>
              </Col>
              <Col
                md={5}
                className="home-section"
                style={{ paddingBottom: 20 }}
              >
                <img
                  src={Image}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        {/* <Home2 /> */}
      </section>
    </Fragment>
  );
}
export default Home;
