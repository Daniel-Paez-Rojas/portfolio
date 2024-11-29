import React from 'react';
import Row from 'react-bootstrap/Row';

const HeroText = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center align-content-center text-center">
        <h1>Daniel Andrés Páez Rojas</h1>
        <p className="fs-2" id='profession'>Web Developer</p>
        <p>Passionate about web development and
        web design, I define myself for being
        a person with a great desire to learn 
        and to work</p>
    </Row>
  );
};

export default HeroText;
