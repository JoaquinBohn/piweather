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
            src="https://res.cloudinary.com/drdgu83bp/image/upload/v1685982370/piweather/logo_qoyf8l.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
