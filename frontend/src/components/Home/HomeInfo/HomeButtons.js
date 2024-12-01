import React from "react";
import Button from "../../Button"; // Asegúrate de que la ruta sea correcta.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faComment } from "@fortawesome/free-solid-svg-icons";

const HeroButtons = () => {
  return (
    <div className="hero__buttons d-flex justify-content-center mb-3">
      <Button
        text="Download CV"
        icon={<FontAwesomeIcon icon={faDownload} />}
        type="button"
      />
      <Button
        text="Contact Info"
        icon={<FontAwesomeIcon icon={faComment} />}
        type="button"
      />
    </div>
  );
};

export default HeroButtons;
