import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      date: "Sat, Nov 19, ",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png`,
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <header>
                <div className="row highlighted-cities justify-content-center">
                  <div className="col-2 header-city">
                    <a href="/" className="cities">
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

              <div className="row search-row justify-content-center">
                <div className="col-9">
                  <form className="mt-3 mb-3 search-form">
                    <div className="row gx-0">
                      <div className="col">
                        <input
                          type="text"
                          placeholder="Enter city name"
                          className="form-control border-0"
                          autoFocus="on"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-auto px-1 buttons">
                        <button
                          type="submit"
                          className="btn btn-outline-primary btn-block"
                        >
                          <i className="fas fa-search"></i> SEARCH
                        </button>
                      </div>

                      <div className="col-auto">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-block current-location"
                        >
                          <i className="fas fa-map-marker-alt me-1"> </i>{" "}
                          LOCATION
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="weather-data">
                <div className="location-time">
                  <ul className="search-result">
                    <li className="city">
                      <h1>{weather.city}</h1>
                    </li>
                    <li className="current-date">
                      <h6>
                        <span>Updated on </span>
                        <span>{weather.date}</span>
                        <span>22:26 </span>
                        <span>p.m.</span>
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-uppercase">{weather.description}</h6>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row weather-details">
                <div className="col-7 mt-0">
                  <div className="d-flex justify-content-center align-items-center current-city-temp">
                    <img
                      src={weather.iconUrl}
                      alt={weather.description}
                      className="weather-icon"
                      width="140"
                      height="135"
                    />
                    <div className="current-weather-temp">
                      <span id="degrees">
                        {Math.round(weather.temperature)}
                      </span>
                      <span className="units">
                        <a href="/" className="temp-difference">
                          °C
                        </a>
                        |
                        <a href="/" className="temp-difference">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-4 weather-details mt-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <ul className="feels">
                      <li className="humidity">
                        <span>Humidity: {weather.humidity}%</span>
                      </li>
                      <li className="wind">
                        <span>Wind: {Math.round(weather.wind)} km/h</span>
                      </li>
                      <li className="temp">
                        <span>
                          Feels like: {Math.round(weather.feelsLike)}°C
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <small>
              This project was coded by{" "}
              <a
                href="https://effulgent-taffy-f461a8.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Victoria Shmidt
              </a>{" "}
              and is{" "}
              <a
                href="https://github.com/ishkanderka/React-Weather-App"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bb6baff71441307f3828bdt1a95do413";
    let city = "Kyiv";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
