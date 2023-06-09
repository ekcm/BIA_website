import logo from "../../assets/BIA_Logo.png";
import React from "react";
import "./Sig.css";
import logo2 from "../../assets/BIA_Logo.png";

export default function Sig() {
  return (
    <footer className="signature-bar">
      <div className="bar-items">
        <div className="logo-container">
          <img src={logo2} className="logo-image" alt="" />
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="path/to/linkedin.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="path/to/instagram.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </div>
      </div>
      <div className="bar-items">
        <h3 className="bar-item">Home</h3>
        <div className="bar-items-comps">
          <p>We are SMUBIA</p>
          <p>What we achieved</p>
        </div>
      </div>
      <div className="bar-items">
        <h3 className="bar-item">What we do</h3>
        <div className="bar-items-comps">
          <p>Workshops</p>
          <p>Data Associate Programme</p>
          <p>Featured projects</p>
        </div>
      </div>
      <div className="bar-items">
        <h3 className="bar-item">Get involved</h3>
        <div className="bar-items-comps">
          <p>Past events with companies</p>
          <p>What we need help with</p>
        </div>
      </div>
      <div className="bar-items">
        <h3 className="bar-item">Where to find us</h3>
        <div className="bar-items-comps">
          <p>
            Institute of Innovation & Entrepreneurship
            <br />
            Singapore Management University
            <br />
            Level 5, SMU Connexion
            <br />
            40 Stamford Road
            <br />
            Singapore 178908
          </p>
        </div>
      </div>
    </footer>
  );
}
