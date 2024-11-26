import React from 'react';
import HeroImage from '../components/Hero/HeroImage';
import HeroInfo from '../components/Hero/HeroInfo';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
      <Row className="align-items-center" id="home-row">
        <Col md={6}>
          <HeroImage />
        </Col>
        <Col md={6}>
          <HeroInfo />
        </Col>
      </Row>
  );
};

export default Home;
