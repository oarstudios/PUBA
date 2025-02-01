import React from "react";
import "./Intro.css";
import Logo from "../../Images/PUBA logo (3) 1.png"; // Replace with the path to your logo file

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <img src={Logo} alt="Puba Productions Logo" className="intro-logo" />
        <p className="intro-text">FROM CONCEPT TO CREATION, WE'VE GOT YOU COVERED.</p>
      </div>
    </div>
  );
};

export default Intro;

