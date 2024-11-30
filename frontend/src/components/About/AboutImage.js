import React from "react";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/images/CV_Imagen.jpg";

function AboutImage() {
    return (
        <Image src={heroImage} id="about__image" title="Image of Daniel Paez" alt="Image of Daniel Paez"></Image>
    );
}

export default AboutImage;