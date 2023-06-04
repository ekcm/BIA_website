import logo from "../../assets/BIA_Logo.png";
import React from "react";
import "../Navbar/Navbar.css";

function NavBar() {
  return (
    <div class="navbar">
      <img src={logo} className="logo" alt="" />

      <div>
        <div class="btn-group">
          <button class="btn">Home</button>
          <button class="btn dropdown">What we do</button>
          <button class="btn dropdown">Get involved</button>
        </div>
        <button class="btn" id="prospectus">
          Download Prospectus
        </button>
      </div>
    </div>
  );
}

export default NavBar;
