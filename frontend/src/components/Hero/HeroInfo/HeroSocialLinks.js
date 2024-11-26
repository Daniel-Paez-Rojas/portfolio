import React from "react";

const HeroSocialLinks = () => {
  const socialLinks = [
    {
      href: "www.linkedin.com/in/daniel-andres-paez-rojas",
      icon: "fa-linkedin"
    },
    { href: "https://github.com/Daniel-Paez-Rojas", icon: "fa-github" }
  ];

  return (
    <div id="hero__social-links">
      {socialLinks.map((link, index) =>
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab ${link.icon}`} />
        </a>
      )}
    </div>
  );
};

export default HeroSocialLinks;
