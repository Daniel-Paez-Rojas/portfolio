import React from "react";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/images/CV_Imagen.jpg";

function AboutImage() {
  return (
    <div id="div-about__image">
      <Image
        src={heroImage}
        id="about__image"
        title="Image of Daniel Paez"
        alt="Image of Daniel Paez"
      />
    </div>
  );
}

export default AboutImage;
