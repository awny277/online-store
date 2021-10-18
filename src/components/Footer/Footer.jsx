import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './style.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 onlineStore">
            <h1>Online Store</h1>
            <div className="info">
              <i className="fas fa-envelope"></i>
              <p>184 Main Rd E, St Albans
                VIC 3021, elmahalla</p>
            </div>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <a href="mailto:contact@company.com">contact@company.com </a>
            </div><div className="info">
              <i className="fas fa-phone-alt"></i>
              <p>+123 456 7898</p>
            </div>
            <div className="links ">
              <a href="https://www.google.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.google.com">
                <i className="fab fa-twitter"></i>
              </a >
              <a href="https://www.google.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.google.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.google.com">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 Categories">
            <h4>Categories</h4>
            <div className="navlink">
              <NavLink className="linksPages" to="/MenProducts">men</NavLink>
              <NavLink className="linksPages" to="/WomenProducts">women</NavLink>
              <NavLink className="linksPages" to="/KidsProducts">kids</NavLink>
              <NavLink className="linksPages" to="/WomenProducts">shoes</NavLink>
              <NavLink className="linksPages" to="/WomenProducts">dress</NavLink>
              <NavLink className="linksPages" to="/MenProducts">Accessories</NavLink>
            </div>
          </div>
          <div className="col-md-2 Categories">
            <h4>Infomation</h4>
            <div className="navlink">
              <NavLink className="linksPages" to="/About">about us</NavLink>
              <NavLink className="linksPages" to="/Contact">contact</NavLink>
              <NavLink className="linksPages" to="/About">Terms & Conditions</NavLink>
              <NavLink className="linksPages" to="/About">Returns & Exchanges</NavLink>
              <NavLink className="linksPages" to="/About">Shipping & Delivery</NavLink>
              <NavLink className="linksPages" to="/About">Privacy Policy</NavLink>
            </div>
          </div>
          <div className="col-md-2 Categories">
            <h4>Useful links</h4>
            <div className="navlink">
              <NavLink className="linksPages" to="/About">Store Location</NavLink>
              <NavLink className="linksPages" to="/WomenProducts">Latest News</NavLink>
              <NavLink className="linksPages" to="/About">My Account</NavLink>
              <NavLink className="linksPages" to="/About">Size Guide</NavLink>
              <NavLink className="linksPages" to="/Contact">FAQs 2</NavLink>
              <NavLink className="linksPages" to="/Contact">FAQs</NavLink>
            </div>
          </div>
          <div className="col-md-3 Categories">
            <h4>Newsletter Signup</h4>
            <div className="navlink">
              <p>Subscribe to our newsletter and get 10% off your first purchase</p>
              <div className="subscribe">
                <input type="text" />
                <NavLink className="linksPages" to="/Contact">subscribe</NavLink>
              </div>
              <NavLink className="linksPages" to="/Contact">FAQs</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>)
    ;
}

export default Footer;