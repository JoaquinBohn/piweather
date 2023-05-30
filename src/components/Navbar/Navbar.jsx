import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="navbar-logo-img"
            src="https://res.cloudinary.com/drdgu83bp/image/upload/v1685390672/piweather/logo_o2kw6f.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
