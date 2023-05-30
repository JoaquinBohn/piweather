import React, { useState } from "react";
import "./Weather.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  //const [latitude, setLatitude] = useState('');
  //const [longitude, setLongitude] = useState('');

  //const cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4ddd21df58bbb82ea15279b5f4f07fc2";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(weatherUrl).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="weather">
      <Navbar />
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="weather-container">
        <div className="circle" id="humidity">
          <p>Humidity: 50%</p>
        </div>
        <div className="circle" id="weather-top">
          <div className="location">
            <p>Pigue</p>
          </div>
          <div className="temp">
            <h1>60ºF</h1>
          </div>
          <div className="weather-description">
            <p>Sunny</p>
          </div>
        </div>

        <div className="circle" id="temp-feels">
          <p>Feels: 64ºF</p>
        </div>
        <div className="circle" id="wind">
          <p>Wind: 25 MPH</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
