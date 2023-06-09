import React, { useState, useEffect, useContext } from "react";
import { UnitsContext } from "../../context/UnitsContext";
import "./Home.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { changeUnits, getUnits } = useContext(UnitsContext);

  const [active, setActive] = useState(false);
  const [homeAnimation, setHomeAnimation] = useState("");
  const [logoAnimation, setLogoAnimation] = useState("");
  const [imgAnimation, setImgAnimation] = useState("");
  const [animation, setAnimation] = useState("");

  const navigate = useNavigate();

  const goWeather = () => {
    setTimeout(() => {
      setHomeAnimation("after-animate-home");
      setLogoAnimation("after-animate-logo");
      setImgAnimation("after-animate-img");
      setAnimation("after-animate");
    }, 1000);
    setActive(true);
    setTimeout(() => {
      navigate("/weather");
    }, 1100);
  };

  useEffect(() => {
    if (active) {
      setHomeAnimation("animate-home");
      setLogoAnimation("animate-logo");
      setImgAnimation("animate-img");
      setAnimation("animate");
    }
  }, [active]);

  return (
    <div className="home-background">
      <div className="home" id={homeAnimation}>
        <div className="logo" id={logoAnimation}>
          <img
            className="logo-img"
            id={imgAnimation}
            src="https://res.cloudinary.com/drdgu83bp/image/upload/v1685982370/piweather/logo_qoyf8l.png"
            alt=""
          />
        </div>
        <div className="home-bottom">
          <div className="home-buttons" id={animation}>
            <Button
              variant="outlined"
              onClick={goWeather}
              style={{
                minWidth: "50px",
                minHeight: "50px",
              }}
            >
              Weather now!
            </Button>
            {getUnits() === "imperial" ? (
              <Button
                variant="outlined"
                onClick={() => changeUnits("metric")}
                style={{
                  minWidth: "50px",
                  minHeight: "50px",
                }}
              >
                Use Metric System
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => changeUnits("imperial")}
                style={{
                  minWidth: "50px",
                  minHeight: "50px",
                }}
              >
                Use Imperial System
              </Button>
            )}
          </div>
        </div>
        <h4>Powered by ©Santoto</h4>
      </div>
    </div>
  );
};

export default Home;
