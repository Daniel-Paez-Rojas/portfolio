import React from "react";
import heroImage from "../../assets/images/CV_Imagen.jpg";
import Image from "react-bootstrap/Image";

const HeroImage = () => {
  return (
    <Image
      src={heroImage}
      alt="Foto de Daniel Andrés Páez Rojas"
      title="Foto de Daniel Andrés Páez Rojas"
      roundedCircle
      className="hero-image"
    />
  );
};

export default HeroImage;
