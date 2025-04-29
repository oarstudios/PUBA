import React from "react";
import "./Welcome.css";

import CameraIcon from "../../Images/camera-icon.png"; // Replace with your camera illustration path

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <div className="welcome-left">
          <img src={CameraIcon} alt="Camera Icon" className="camera-icon" />
        </div>
        <div className="welcome-right">
          <h1 className="welcome-title">Welcome to PUBA,</h1>
          <p className="welcome-description">
          Rooted in the rich narrative traditions of India, our production house is a dynamic creative studio committed to crafting compelling visual experiences across film, digital, and branded content. We blend innovative storytelling with cinematic precision, driven by a vision to elevate indigenous voices and redefine contemporary entertainment. With a focus on artistic integrity and technical excellence, we are building stories that resonate globally while staying deeply connected to cultural authenticity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
