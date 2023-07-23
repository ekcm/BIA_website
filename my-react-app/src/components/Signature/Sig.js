import React from "react";
import "./Sig.css";
import logo2 from "../../assets/BIA_Logo.png";
import ig from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import { auto } from "@popperjs/core";
import { HashLink as Link } from 'react-router-hash-link';


export default function Sig() {
  return (
    <footer className="signature-bar">
      <div className="bar-items">
        <div className="logo-container">
          <img src={logo2} className="logo-image" alt="" />
        </div>
        <div className="social-links flush-left">
          <a
            href="https://www.linkedin.com/company/smubia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="social-icon"
              width={30}
              height={auto}
            />
          </a>
          <a
            href="https://www.instagram.com/smu.bia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ig}
              alt="Instagram"
              className="social-icon"
              width={30}
              height={auto}
            />
          </a>
        </div>
      </div>
      <div className="bar-items">
      <Link to="/#top"><h3 className="bar-item">Home</h3></Link>
        <div className="bar-items-comps">
        <p><Link to="/#top">We are SMUBIA</Link></p>
        <p><Link to="/#top">What we achieved</Link></p>
        </div>
      </div>
      <div className="bar-items">
      <Link to="/WhatWeDo#top"><h3 className="bar-item">What we do</h3></Link>
        <div className="bar-items-comps">
        <p><Link to="/WhatWeDo#top">Workshops</Link></p>
        <p><Link to="/WhatWeDo#top">Data Associate Programme</Link></p>
        <p><Link to="/WhatWeDo#top">Featured projects</Link></p>
        </div>
      </div>
      <div className="bar-items">
      <Link to="/GetInvolved#top"><h3 className="bar-item">Get involved</h3></Link>
        <div className="bar-items-comps">
        <p><Link to="/GetInvolved#top">Past events with companies</Link></p>
        <p><Link to="/GetInvolved#top">What we need help with</Link></p>
        </div>
      </div>
      <div className="bar-items">
        <h3 className="bar-item">Where to find us</h3>
        <div className="bar-items-comps">
          <a href="https://goo.gl/maps/FbAHdtdAouhEmrNF6" class="custom-link">
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
          </a>
        </div>
      </div>
    </footer>
  );
}
