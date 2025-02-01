import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "cal-sans";
import "./Navbar.css";
import logo from "../../Images/logoMain.png";

const Navbar = ({ onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (scrollToSection) => {
    setMenuOpen(false); // Close menu after clicking
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection();
      }, 100);
    } else {
      scrollToSection();
    }
  };

  const handleLinkClick = (path) => {
    setMenuOpen(false); // Close menu after clicking
    navigate(path);
  };

  return (
    <nav className="navbar">
      {/* PUBA Logo with Home Link */}
      <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="PUBA Logo" />
      </Link>

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </div>

      {/* Menu */}
      <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <ul className="menu-links">
          <li
            className={location.pathname === "/submit-profile" ? "active" : ""}
            onClick={() => handleLinkClick("/submit-profile")}
          >
            Submit Profile
          </li>
          <li onClick={() => handleNavigation(onScrollTo.welcome)}>About Us</li>
          <li onClick={() => handleNavigation(onScrollTo.whatWeDo)}>What We Do</li>
          <li onClick={() => handleNavigation(onScrollTo.contactUs)}>
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
