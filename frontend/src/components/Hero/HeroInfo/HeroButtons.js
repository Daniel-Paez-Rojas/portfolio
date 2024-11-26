import React from "react";

const HeroButtons = () => {
  return (
    <div className="hero__buttons">
      <a 
        href="https://drive.google.com/uc?export=download&id=1dxxD5FLRdKxJAUfGSIf4S4CUxWG6VHKQ" 
        download 
        className="btn btn-outline-secondary me-3"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-secondary text-light">
        Contact Info
      </a>
    </div>
  );
};

export default HeroButtons;
