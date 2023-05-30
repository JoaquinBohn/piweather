import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goWeather = () => {
    navigate("/weather");
  };

  return (
    <div className="home">
      <div className="logo">
        <img
          className="logo-img"
          src="https://res.cloudinary.com/drdgu83bp/image/upload/v1685390672/piweather/logo_o2kw6f.png"
          alt=""
        />
      </div>
      <div className="home-buttons">
        <Button variant="outlined" onClick={goWeather}>
          Weather today
        </Button>
        <Button variant="outlined">Record</Button>
        <Button variant="outlined">Numbers</Button>
      </div>
    </div>
  );
};

export default Home;
