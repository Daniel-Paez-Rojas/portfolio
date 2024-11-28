import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroSocialLinks = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/daniel-andres-paez-rojas",
      icon: faLinkedin
    },
    {
      href: "https://github.com/Daniel-Paez-Rojas",
      icon: faGithub
    }
  ];

  return (
    <div id="hero__social-links" className="d-flex justify-content-center">
      {socialLinks.map((link, index) =>
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-wrapper"
        >
          <FontAwesomeIcon
            icon={link.icon}
            className="me-3 fa-circle text-dark fa-2x"
          />
        </a>
      )}
    </div>
  );
};

export default HeroSocialLinks;
