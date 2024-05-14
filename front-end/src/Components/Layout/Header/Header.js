import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const hideNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="navbar">
      <div className="navbar-image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <GiHamburgerMenu />
      </div>
      <div className={`navbar-links  ${showNavbar && "active"}`}>
        <div>
          <h2>
            <Link to="/" onClick={hideNavbar}>
              Home
            </Link>
          </h2>
          <h2>
            <Link to="/products" onClick={hideNavbar}>
              Products
            </Link>
          </h2>
          <h2>
            <Link to="/about" onClick={hideNavbar}>
              About
            </Link>
          </h2>
          <h2>
            <Link to="/contact" onClick={hideNavbar}>
              Contact
            </Link>
          </h2>
          <h2>
            <Link to="/search" onClick={hideNavbar}>
              <FaSearch />
            </Link>
          </h2>
          {/* <button
            className="logout-btn"
          >
            Logout
            <span className="login-btn-green login-btn-red">
            </span>
          </button> */}
          <h2>
          <Link to="/login" onClick={hideNavbar}>
            <button className="login-btn">
              <span className="login-btn-green login-btn-red">Login</span>
            </button>
          </Link></h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
