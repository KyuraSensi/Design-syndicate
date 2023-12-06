import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const buttonStyle = {
    border: "none",
    background: "transparent",
  };
  const fontColor = {
    color: "#545454",
    textDecoration: "none",
  };
  return (
    <>
      <div className="navBanner">
        <nav className="navbar">
          <div className="nav-content">
            <Link className="logo" to="/"></Link>
            {/* //////////////LINK BOX ONE////////////////////////////// */}
            <div className="link-1">
              <Link to="/" style={fontColor}>
                Home
              </Link>
              <Link to="/" style={fontColor}>
                About Us
              </Link>
              <Link to="/" style={fontColor}>
                Products
              </Link>
            </div>
            {/* //////////////LINK BOX ONE////////////////////////////// */}
            <button className=".search-icon" style={buttonStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="35"
                viewBox="0 0 39 37"
                fill="none"
              >
                <path
                  d="M33.9295 17.7047C33.9295 27.0752 26.3333 34.6715 16.9628 34.6715C7.59235 34.6715 -0.00390625 27.0752 -0.00390625 17.7047C-0.00390625 8.33427 7.59235 0.738007 16.9628 0.738007C26.3333 0.738007 33.9295 8.33427 33.9295 17.7047ZM3.87911 17.7047C3.87911 24.9307 9.73689 30.7884 16.9628 30.7884C24.1887 30.7884 30.0465 24.9307 30.0465 17.7047C30.0465 10.4788 24.1887 4.62103 16.9628 4.62103C9.73689 4.62103 3.87911 10.4788 3.87911 17.7047Z"
                  fill="#545454"
                />
                <rect
                  x="28.8579"
                  y="25.1749"
                  width="12.5258"
                  height="4.38818"
                  rx="2.19409"
                  transform="rotate(37.6388 28.8579 25.1749)"
                  fill="#545454"
                />
              </svg>
            </button>
            {/* //////////////LINK BOX ONE////////////////////////////// */}
            <div className="link-2">
              <Link to="/" style={fontColor}>
                Technical Data Sheets
              </Link>
              <Link to="/" style={fontColor}>
                Wallpaper Symbol Guide
              </Link>
            </div>
            {/* //////////////LINK BOX ONE////////////////////////////// */}
            <button style={buttonStyle}>
              <img src="Menu Icons.png" alt="" width="25px" height="13px" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
