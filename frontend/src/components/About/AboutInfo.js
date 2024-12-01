import React from "react";
import Stack from 'react-bootstrap/Stack';
import AboutInfoCards from "./AboutInfo/AboutInfoCards";
import AboutInfoText from "./AboutInfo/AboutInfoText";
import AboutInfoButton from "./AboutInfo/AboutInfoButton";

function AboutInfo() {
  return (
    <Stack id="about-info">
      <AboutInfoCards />
      <AboutInfoText />
      <AboutInfoButton />
    </Stack>
  );
}

export default AboutInfo;
