import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-data">
        <div className="location-time">
          <ul className="search-result">
            <li className="city">
              <h1 className="text-uppercase">{props.data.city}</h1>
            </li>
            <li className="current-date">
              <h6>
                <span>Updated on </span>
                <span>
                  <CurrentDate date={props.data.date} />
                </span>
                <span>p.m.</span>
              </h6>
            </li>
            <li>
              <h6 className="text-uppercase">{props.data.description}</h6>
            </li>
          </ul>
        </div>
      </div>

      <div className="row weather-details">
        <div className="col-7 mt-0">
          <div className="d-flex justify-content-center align-items-center current-city-temp">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="weather-icon"
              width="140"
              height="135"
              id="icon"
            />
            <div className="current-weather-temp">
              <span id="degrees">{Math.round(props.data.temperature)}</span>
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
                <span>Humidity: {props.data.humidity}%</span>
              </li>
              <li className="wind">
                <span>Wind: {Math.round(props.data.wind)} km/h</span>
              </li>
              <li className="temp">
                <span>Feels like: {Math.round(props.data.feelsLike)}°C</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
