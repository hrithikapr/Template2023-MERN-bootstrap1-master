import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/images/Wolf.svg'


const Header = () => {

  return (

    <nav  className="navbar navbar-expand-lg sticky-top">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="/main/home">
            <img
              src={logo}
              height={40}
              alt="Logo"
              loading="lazy"
            />
          </NavLink>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/aboutus">
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/browseExhibition">
                Browse Exhibition
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul  className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <NavLink className="nav-link" to="/main/signup">
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/signin">
                Signin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
