import React from "react";
import heroImage from "../../assets/images/CV_Imagen.jpg";
import Image from "react-bootstrap/Image";

const HeroImage = () => {
  return (
    <Image
      src={heroImage}
      alt="Image of Daniel Andrés Páez Rojas"
      title="Image of Daniel Andrés Páez Rojas"
      roundedCircle
      className="hero-image"
    />
  );
};

export default HeroImage;
