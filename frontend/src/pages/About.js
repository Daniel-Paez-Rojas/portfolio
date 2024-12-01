import React from "react";
import AboutHeading from "../components/About/AboutHeading";
import AboutImage from "../components/About/AboutImage";
import AboutInfo from "../components/About/AboutInfo";
import { Stack } from "react-bootstrap";

function About() {
  /* TODO:
  * 1: exact same size for each card
  * 2: Normal size for the button
  * 3: Fix mobile display for about and for home
  */

  return (
    <article id="about">
      <AboutHeading />
      <Stack>
        <AboutImage />
        <AboutInfo />
      </Stack>
    </article>
  );
}

export default About;
