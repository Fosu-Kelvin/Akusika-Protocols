import "./Navbar.scss";
import logo from "../images/LOGO01.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {FaInstagram,FaTiktok,FaFacebook,FaTwitter } from 'react-icons/fa'
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);


    const today = new Date();
    const year = today.getFullYear();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
     <nav className={`${toggleIcon ? "active01" : ""}`}>
    <header className={`navbar-container ${toggleIcon ?  "active" :""}`}>
     
        <ol className={`nav-list ${toggleIcon ? "nav-list-1" : ""}`}>
          <li>
            <Link to="/" onClick={() => setToggleIcon(false)}>
  <img className="logo-icon" src={logo} alt="akusika protocol" />
</Link>

          
          </li>
          <li className='non-toggle'>
            <Link to={"/about"}>About</Link>
          </li>
          <li className='non-toggle'>
            <Link to={"/service"}>Service</Link>
          </li>
          <li className='non-toggle'>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li
            className="toggle_icon" onClick={handleToggleIcon}>
            {toggleIcon ? "Close" : "Menu"}
          </li>
        </ol>
    
    </header>
    <ul className={`active03 ${toggleIcon ? "active02" : ""}`}>
  <li><Link to="/about" onClick={handleToggleIcon}>About</Link></li>
  <li><Link to="/service" onClick={handleToggleIcon}>Service</Link></li>
  <li><Link to="/contact" onClick={handleToggleIcon}>Contact</Link></li>
</ul>

    
  <div className={`social-icons ${toggleIcon ? "social-icon01":""}`}>
    
    <a style={{all:"unset"}} href="https://www.instagram.com/akusikaprotocols/"><FaInstagram size={24}/></a>
    <FaTwitter size={24}/>
    <FaFacebook size={24}/>
    <FaTiktok size={24}/>
   
  </div>
  <p className={` p-copyright ${toggleIcon?"p-copyright-nav":""}` }>Akusika Protocols © {year} . ALL RIGHTS RESERVED.</p>
    </nav>
  );
};

export default Navbar;
