import logo from "../../assets/BIA_Logo.png";
import React from "react";
import "../Navbar/Navbar.css";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="navbar">
      <img src={logo} className="logo" alt="" />

      <div>
        <div class="btn-group">
          <button class="btn"><Link to="/">Home</Link></button>
          <button class="btn dropdown"><Link to="/whatwedo">What We Do</Link></button>
          <button class="btn dropdown"><Link to="/getinvolved">Get Involved</Link></button>
        </div>
        <button class="btn" id="prospectus">
          Download Prospectus
        </button>
      </div>
    </div>
  );
}

export default NavBar;
