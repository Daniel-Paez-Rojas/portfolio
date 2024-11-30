import React from "react";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function AboutInfoButton() {
  return (
    <Button
      text="Download CV"
      icon={<FontAwesomeIcon icon={faDownload} />}
    />
  );
}

export default AboutInfoButton;
