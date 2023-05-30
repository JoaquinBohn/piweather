import React from "react";
import Home from "./components/Home/Home";
import Weather from "./components/Weather/Weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=pigue&appid=4ddd21df58bbb82ea15279b5f4f07fc2`;

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.9832406&lon=-81.243372&appid=4ddd21df58bbb82ea15279b5f4f07fc2`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
