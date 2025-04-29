import React from 'react';
import './Footer.css';
import logo from "../../Images/logoBlack.png"
import { Link } from 'react-router-dom';

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
  <li>
    <Link to={'/submit-profile'}>Submit Profile</Link>
    </li>
  <li>
    <Link to={'/ourvision'}>Our Vision</Link>
  </li>
  <li>
    <a href="mailto:pubaproductions@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
      Email Us
    </a>
  </li>
  <li>
    <a href="tel:+918451906113" style={{ color: 'inherit', textDecoration: 'none' }}>
      Call Us
    </a>
  </li>
  <li>
    <Link to={'/ourservices'}>Our Services</Link>
  </li>
</ul>

        </div>
        <div className="connect">
          <h4>CONNECT</h4>
          <ul>
            <li>
            <a
      href="https://www.instagram.com/pubaproductions?igsh=YncxbGhpbnAzaHdv"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      Instagram
    </a>
            </li>
            {/* <li>Facebook</li> */}
            <li>
            <a
      href="https://youtube.com/@pubaproductions?si=_X5OuqVlN4cXe4PR"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      YouTube
    </a>
            </li>
            {/* <li>X</li> */}
            {/* <li>LinkedIn</li> */}
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
