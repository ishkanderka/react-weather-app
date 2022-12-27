import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import Header from "./Header";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "bb6baff71441307f3828bdt1a95do413";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <Header />
              <div className="row search-row justify-content-center">
                <div className="col-9">
                  <form
                    className="mt-3 mb-3 search-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="row gx-0">
                      <div className="col">
                        <input
                          type="search"
                          placeholder="Enter city name"
                          className="form-control border-0"
                          autoFocus="on"
                          autoComplete="off"
                          onChange={handleCitySearch}
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
              <WeatherInfo info={weather} />
              <hr />
              <WeatherForecast coordinates={weather.coordinates} />
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
    search();
    return "Loading...";
  }
}
