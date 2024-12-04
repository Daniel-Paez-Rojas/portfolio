import React from "react";
import AboutHeading from "../components/About/AboutHeading";
import AboutImage from "../components/About/AboutImage";
import AboutInfo from "../components/About/AboutInfo";
import { Stack } from "react-bootstrap";

function About() {
  return (
    <article id="about">
      <AboutHeading />
      <Stack id="about-content">
        <AboutImage />
        <AboutInfo />
      </Stack>
    </article>
  );
}

export default About;
