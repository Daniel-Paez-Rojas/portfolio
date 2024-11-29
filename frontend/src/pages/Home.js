import React from "react";
import HomeImage from "../components/Home/HomeImage";
import HomeInfo from "../components/Home/HomeInfo";
import { Row, Col, Stack } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home">
      <Stack className="vh-100 d-flex justify-content-center align-items-center">
        <Row
          className="d-flex flex-column flex-lg-row align-items-stretch g-4 p-0 m-5 w-100"
        >
          <Col
            sm={12}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <HomeImage />
          </Col>
          <Col
            sm={12}
            lg={6}
            id="hero-info"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <HomeInfo />
          </Col>
        </Row>
      </Stack>
    </section>
  );
};

export default Home;
