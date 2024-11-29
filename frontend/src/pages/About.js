import React from "react";
import AboutHeading from "../components/About/AboutHeading";
import AboutImage from "../components/About/AboutImage";
import AboutInfo from "../components/About/AboutInfo";
import { Stack } from "react-bootstrap";

function About() {
  return (
    <Stack className="vh-100" id="about">
      <AboutHeading />
      <AboutImage />
      <AboutInfo />
    </Stack>
  );
}

export default About;