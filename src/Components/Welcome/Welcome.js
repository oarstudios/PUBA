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
            Where creativity meets execution to bring your ideas to life. As a
            full-service production agency, we specialize in delivering
            end-to-end solutions for projects of any scale or medium. From
            concept development and pre-production to flawless execution and
            post-production polish, we handle it all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
