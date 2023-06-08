import React, { useEffect, useState, useContext } from "react";
import "./Weather.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { UnitsContext } from "../../context/UnitsContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Weather = () => {
  const { getUnits, getTempUnit, getWindUnit, MilesPerHourToKmPerHour } =
    useContext(UnitsContext);

  //Esta seccion se encarga de obtener el ancho de pantalla cada vez que cambia
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);
  //---------------------------------------------------------------------------

  //Esta seccion maneja la logica de asignacion de animaciones
  const [activateAnimation, setActivateAnimation] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();

  const activate = () => {
    setActivateAnimation(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    if (activateAnimation) {
      setFadeAnimation("weather-fade");
    }
  }, [activateAnimation]);
  //---------------------------------------------------------------------------

  //Esta seccion maneja la logica de la request a la api y la obtencion de los datos
  //Primero se usa la api de geolocalizacion para obtener los valores de latitud y longitud
  //Luego se hace la request a la api de openweather para obtener los datos del tiempo
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDetails(false);
    const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=4ddd21df58bbb82ea15279b5f4f07fc2`;
    axios
      .get(cityUrl)
      .then((response) => {
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
      })
      .catch((error) => {
        Swal.fire(
          "Location error",
          "Invalid location, please try again",
          "error"
        );
      });
  };

  useEffect(() => {
    if (latitude) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${getUnits()}&appid=4ddd21df58bbb82ea15279b5f4f07fc2`;
      axios
        .get(weatherUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          Swal.fire(
            "Unexpected error",
            "Something went wrong, please try again",
            "error"
          );
        });
    }
  }, [latitude, longitude, getUnits]);
  //---------------------------------------------------------------------------

  //Esta seccion maneja la logica de la creacion y descarga del archivo txt con los datos del tiempo
  const createTXTFile = () => {
    var currentDate = new Date();
    var dateTime =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear() +
      " - " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const text = `${data.name} - ${dateTime}\nTemperature: ${
      data.main.temp
    }${getTempUnit()}\nTemperature feels like: ${
      data.main.feels_like
    }${getTempUnit()}\n${data.weather[0].main}\nWind speed: ${
      getUnits() === "imperial"
        ? data.wind.speed
        : MilesPerHourToKmPerHour(data.wind.speed).toFixed(2)
    }${getWindUnit()}\nHumidity: ${data.main.humidity}%\nDescription: ${
      data.weather[0].description
    }\nPressure: ${data.main.pressure}hPa\nVisibility: ${
      data.visibility
    }m\nWind direction: ${data.wind.deg}º\nClouds: ${
      data.clouds.all
    }%\nRain volume for the last hour: ${
      data.rain ? data.rain["1h"] : 0
    }mm\nSnow volume for the last hour: ${data.snow ? data.snow["1h"] : 0}mm`;

    return text;
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([createTXTFile()], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = data.name + data.weather[0].id + ".txt";
    document.body.appendChild(element);
    element.click();
  };
  //---------------------------------------------------------------------------

  return (
    <div
      className={showDetails ? "weather-detailed" : "weather"}
      id={fadeAnimation}
    >
      <Navbar activate={activate} />
      <form className="search">
        <input
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {data.name ? (
        <div className="weather-full-container">
          <div className="weather-container">
            <div className="circle" id="weather-top">
              <div>
                <p>{data.name}</p>
              </div>
              <div>
                <h1>
                  {data.main.temp}
                  {getTempUnit()}
                </h1>
              </div>
              <div>
                <p className="bold">{data.weather[0].main}</p>
              </div>
            </div>
            <div className="weather-block">
              <div className="circle" id="temp-feels">
                <p>Feels like</p>
                <p className="bold">
                  {data.main.feels_like}
                  {getTempUnit()}
                </p>
              </div>

              <div className="circle" id="wind">
                <p>Wind speed</p>
                <p className="bold">
                  {getUnits() === "imperial"
                    ? data.wind.speed
                    : MilesPerHourToKmPerHour(data.wind.speed).toFixed(2)}
                  {getWindUnit()}
                </p>
              </div>

              <div className="circle" id="humidity">
                <p>Humidity</p>
                <p className="bold">{data.main.humidity}%</p>
              </div>
            </div>
          </div>
          <div className="extension">
            <Button
              variant="contained"
              onClick={() => {
                setShowDetails(true);
              }}
              sx={{
                width: { xs: "150px", md: "100px", lg: "200px" },
                height: { xs: "30px", md: "40px", lg: "50px" },
              }}
              size={screenWidth < 481 ? "small" : "medium"}
            >
              <a href="#show-details" className="extend-link">
                Extend details
              </a>
            </Button>

            <Button
              variant="contained"
              onClick={downloadFile}
              sx={{
                width: { xs: "150px", md: "100px", lg: "200px" },
                height: { xs: "30px", md: "40px", lg: "50px" },
                fontSize: { xs: "12px", md: "15px" },
              }}
              size={screenWidth < 481 ? "small" : "medium"}
            >
              Download data
            </Button>
          </div>
          <div
            className={showDetails ? "weather-details" : "hide-details"}
            id="show-details"
          >
            <p>Description: {data.weather[0].description}</p>
            <p>Pressure: {data.main.pressure}hPa</p>
            <p>Visibility: {data.visibility}m</p>
            <p>Wind direction: {data.wind.deg}º</p>
            <p>Clouds: {data.clouds.all}%</p>
            <p>
              Rain volume for the last hour: {data.rain ? data.rain["1h"] : 0}mm
            </p>
            <p>
              Snow volume for the last hour: {data.snow ? data.snow["1h"] : 0}mm
            </p>
          </div>
        </div>
      ) : (
        <div className="empty"></div>
      )}
    </div>
  );
};

export default Weather;
