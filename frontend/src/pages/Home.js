import React from "react";
import HeroImage from "../components/Hero/HeroImage";
import HeroInfo from "../components/Hero/HeroInfo";
import MainNavbar from "../components/Navbar";
import { Row, Col, Stack } from "react-bootstrap";

const Home = () => {
  return (
    <Stack className="vh-100">
      <MainNavbar />
      <Row id="home-row" className="vh-100 flex-column flex-lg-row align-items-stretch g-4 p-0 m-5">
        <Col
          sm={12}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <HeroImage />
        </Col>
        <Col
          sm={12}
          lg={6}
          id="hero-info"
        >
          <HeroInfo />
        </Col>
      </Row>
    </Stack>
  );
};

export default Home;
