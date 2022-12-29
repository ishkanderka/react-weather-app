import React, { useState } from "react";
import axios from "axios";

export default function Header(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      city: response.data.city,
    });
  }

  function displayCity(event) {
    event.preventDefault();
    search();
    setCity();
  }

  function search() {
    const apiKey = "bb6baff71441307f3828bdt1a95do413";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <header>
        <div className="row highlighted-cities justify-content-center">
          <div className="col-2 header-city">
            <a href="/" className="cities" onClick={displayCity}>
              {" "}
              New York
            </a>
          </div>
          <div className="col-2 header-city">
            <a href="/" className="cities">
              Toronto
            </a>
          </div>
          <div className="col-2 header-city">
            <a href="/" className="cities">
              London
            </a>
          </div>
          <div className="col-2 header-city">
            <a href="/" className="cities">
              Berlin
            </a>
          </div>
          <div className="col-2 header-city india">
            <a href="/" className="cities">
              New Delhi
            </a>
          </div>
        </div>
      </header>
    );
  } else {
    search();
    return null;
  }
}
