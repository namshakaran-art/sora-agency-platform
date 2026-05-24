import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarMain.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="lefttext">
        <Link to="/" className="nav-link1">
          <h1>SORA</h1>
        </Link>
      </div>

      {/* RIGHT NAV */}
      <div className={`righttext ${menuOpen ? "active" : ""}`}>

        <Link
          to="/services"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <h1>Services</h1>
        </Link>

        <Link
          to="/process"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <h1>Process</h1>
        </Link>

        <Link
          to="/pricing"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <h1>Pricing</h1>
        </Link>

        <Link
          to="/faq"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <h1>FAQ</h1>
        </Link>

        {/* CTA */}
        <div className="nav-actions">

          <Link to="/contact">
            <button className="contact-btn">
              <span>Let's Talk</span>
            </button>
          </Link>

        </div>

      </div>

      {/* MENU ICON */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "ri-close-line" : "ri-menu-fill"}></i>
      </div>

    </nav>
  );
};

export default Navbar;