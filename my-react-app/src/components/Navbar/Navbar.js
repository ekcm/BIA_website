import logo from "../../assets/BIA_Logo.png";
import { React, useState } from "react";
import "../Navbar/Navbar.css";
import { Outlet, Link } from "react-router-dom";

import {
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <div class="navbar">
      <img src={logo} className="logo" alt="" />

      <nav>
        <div className={nav ? ["btn_menu", "active"].join(' ') : ["btn_menu"]}>
            <button class="btn"><Link to="/">Home</Link></button>
            <button class="btn dropdown"><Link to="/whatwedo">What We Do</Link></button>
            <button class="btn dropdown"><Link to="/getinvolved">Get Involved</Link></button>
            <button class="btn" id="prospectus">
              Download Prospectus
            </button>
        </div>
      </nav>
      <div onClick={() => setNav(!nav)} className="mobile_menu_btn">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </div>
  );
}

export default NavBar;
