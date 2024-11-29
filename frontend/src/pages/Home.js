import React from "react";
import HeroImage from "../components/Hero/HeroImage";
import HeroInfo from "../components/Hero/HeroInfo";
import MainNavbar from "../components/Navbar";
import { Row, Col, Stack } from "react-bootstrap";

const Home = () => {
  return (
    <Stack gap={5}>
      <MainNavbar />
      <Row id="home-row" className="vh-100 align-items-stretch">
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center p-0"
        >
          <HeroImage />
        </Col>
        <Col
          sm={12}
          md={6}
          id="hero-info"
        >
          <HeroInfo />
        </Col>
      </Row>
    </Stack>
  );
};

export default Home;
