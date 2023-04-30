import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/images/Wolf.svg'


const Header = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  return (

    <nav className="navbar navbar-expand-lg sticky-top">
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
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="/user/home">
            <img
              src={logo}
              height={40}
              alt="MDB Logo"
              loading="lazy"
            />
          </NavLink>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3 me-lg-0 dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Manage
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/user/artwork">Manage Arts</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/user/exhibition">Manage Exhibition</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/aboutus">
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/browseExhibition">
                Browse Exhibition
              </NavLink>
            </li>
          </ul>
          <div className="dropdown">
            <NavLink
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.gtedt4wDkBFqRkh0o8KRqAHaHa&pid=Api&P=0"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </NavLink>
            <span>{currentUser.name}</span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <NavLink className="nav-item dropdown-item" to="/user/profile">My profile</NavLink>
              </li>
              <li>
                <NavLink className="nav-item dropdown-item" to="#">Settings</NavLink>
              </li>
              <li>
                <NavLink className="nav-item dropdown-item" to="#">Logout</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};

export default Header;
