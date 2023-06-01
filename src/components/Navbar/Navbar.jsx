import React from "react";
import "./Navbar.css";

const Navbar = ({ activate }) => {
  const goHome = () => {
    activate();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <button
          onClick={goHome}
          style={{
            padding: "0",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <img
            className="navbar-logo-img"
            src="https://res.cloudinary.com/drdgu83bp/image/upload/v1685390672/piweather/logo_o2kw6f.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
