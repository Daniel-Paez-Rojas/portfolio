import React from "react";
import AboutHeading from "../components/About/AboutHeading";
import AboutImage from "../components/About/AboutImage";
import AboutInfo from "../components/About/AboutInfo";
import { Stack } from "react-bootstrap";

function About() {
  return (
    <section id="about">
      <Stack className="vh-100" id="about">
        <AboutHeading />
        <AboutImage />
        <AboutInfo />
      </Stack>
    </section>
  );
}

export default About;
