import React from "react";
import "../Header/Header.css";
import logo from "../Assets/Your-season-Final-Logo-v1/Your-season-Final-Logo-v1.png";
// import playstore from "../Assets/appstore.svg";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark header">
      <div class="container-fluid headerContainer">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <div className="logocontainer">
          <img src={logo} className="logo"></img>
        </div>

        {/* <div className='d-flex justify-content-center align-item-center flex-row'> */}
        <div
          class="collapse navbar-collapse flex-1 menuContainer"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active " aria-current="page" href="#">
              <li>Home</li>
            </a>
            <a class="nav-link" href="#">
              <li>About Us</li>
            </a>
            <a class="nav-link" href="#">
              <li>Services</li>
            </a>
            <a class="nav-link" href="#">
              <li>Download</li>
            </a>
            <a class="nav-link" href="#">
              <li>Contact Us</li>
            </a>
          </div>
          <div className="playstoreContainers">
            <div className="googlePlay">
              <button>playStore</button>
            </div>
            <div className="playStore">
              <button>playStore</button>
            </div>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
