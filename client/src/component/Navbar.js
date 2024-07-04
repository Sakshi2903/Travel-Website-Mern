import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" href="#">
          WanderLust
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <NavLink className="nav-link" to="/">
              <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
