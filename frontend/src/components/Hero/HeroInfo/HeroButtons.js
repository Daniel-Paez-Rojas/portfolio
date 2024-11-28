import React from "react";
import Button from "react-bootstrap/Button";

const HeroButtons = () => {
  return (
    <div className="hero__buttons d-flex justify-content-center mb-3">
      <Button download variant="outline-dark" className="me-3 rounded-pill">
        Download CV
      </Button>
      <Button
        href="#contact"
        className="me-3 rounded-pill text-light"
        variant="dark"
      >
        Contact Info
      </Button>
    </div>
  );
};

export default HeroButtons;
