import React from "react";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function AboutInfoButton() {
  return (
    <div className="d-flex justify-content-center align-items-end">
      <Button text="Download CV" icon={<FontAwesomeIcon icon={faDownload} />} />
    </div>
  );
}

export default AboutInfoButton;
