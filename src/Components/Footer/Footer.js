import React from 'react';
import './Footer.css';
import logo from "../../Images/logoBlack.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="header-content">
        <div className="header-left">
          <h3>PUBA PRODUCTIONS</h3>
          <h1>2024</h1>
        </div>
        <div className="header-right">
          <h2>Mumbai, Maharashtra</h2>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="menu">
          <h4>MENU</h4>
          <ul>
            <li>Submit Profile</li>
            <li>Our Vision</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="connect">
          <h4>CONNECT</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>X</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="footer-credits">
        <p>©Puba Productions 2024 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
