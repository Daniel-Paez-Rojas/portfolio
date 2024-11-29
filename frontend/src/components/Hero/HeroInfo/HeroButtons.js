import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faComment } from "@fortawesome/free-solid-svg-icons";

const HeroButtons = () => {
  return (
    <div className="hero__buttons d-flex justify-content-center mb-3">
      <Button download variant="outline-dark" className="me-3 rounded-pill">
        Download CV
        <FontAwesomeIcon
            icon={faDownload}
            className="ms-2"
          />
      </Button>
      <Button
        href="#contact"
        className="me-3 rounded-pill text-light"
        variant="dark"
      >
        Contact Info
        <FontAwesomeIcon
            icon={faComment}
            className="ms-2"
          />
      </Button>
    </div>
  );
};

export default HeroButtons;
