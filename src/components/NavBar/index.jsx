import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div>
      <p className="sale">
        today deal sale of 70% . End in 7 Days 00:00:00 harry up{"   "}
        <span>
          <i className="fas fa-arrow-right arrow"></i>
        </span>
      </p>
      <div className="offer text-center d-none d-lg-flex">
        <ul className=" list-unstyled ">
          <li className="d-inline m-3">
            <i className="fas fa-phone-alt"></i> <span>+0123456789</span>
          </li>
          <li className="d-inline">
            <i className="fas fa-envelope"></i> <span>store@gmail.com</span>
          </li>
        </ul>
        <p className="p-center">
          summer sale discount off <span className="red">50%</span>{" "}
          <span className="black">!shop now</span>
        </p>
        <p className="btn-lang">
          <span className="m-3">
            Engilsh
            <i className="fas fa-chevron-down m-1"></i>
          </span>
          <span className="m-3">
            <img
              src="https://cache.vtrcdn.com/orion/images/icon/flags/flag_en.png"
              alt=""
              width="30px"
              height="20px"
            />{" "}
            <i className="fas fa-chevron-down m-1"></i>
          </span>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " aria-current="page" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link Man" to="/MenProducts">
                Man
              </NavLink>
              <NavLink className="nav-link" to="/WomenProducts">
                women
              </NavLink>
              <NavLink className="nav-link Kids" to="/KidsProducts">
                kids
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>{" "}
                <span>{props.couunt}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
