import React from "react";
import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faProjectDiagram,
  faLifeRing
} from "@fortawesome/free-solid-svg-icons";

function AboutInfoCards() {
  const cards = [
    {
      icon: <FontAwesomeIcon icon={faProjectDiagram} />,
      text: "Experience",
      subtext: "None yet"
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      text: "Projects",
      subtext: "1 project"
    },
    {
      icon: <FontAwesomeIcon icon={faLifeRing} />,
      text: "Support",
      subtext: "Soon"
    }
  ];

  return (
    <div id="about-info-cards">
      {cards.map((card, index) =>
        <Card
          key={index}
          icon={card.icon}
          text={card.text}
          subtext={card.subtext}
          className="custom-card"
        />
      )}
    </div>
  );
}

export default AboutInfoCards;
