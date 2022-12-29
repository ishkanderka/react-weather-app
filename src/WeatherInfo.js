import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-data">
        <div className="location-time">
          <ul className="search-result">
            <li className="city">
              <h1 className="text-uppercase">{props.info.city}</h1>
            </li>
            <li className="current-date">
              <h6>
                <span>Updated on </span>
                <span>
                  <CurrentDate date={props.info.date} />
                </span>
              </h6>
            </li>
            <li>
              <h6 className="text-uppercase fw-bold">
                {props.info.description}
              </h6>
            </li>
          </ul>
        </div>
      </div>

      <div className="row weather-details">
        <div className="col-7 mt-0">
          <div className="d-flex justify-content-center align-items-center current-city-temp">
            <img
              src={props.info.iconUrl}
              alt={props.info.description}
              className="weather-icon"
              width="140"
              height="135"
            />
            <div className="current-weather-temp">
              <WeatherTemperature celsius={props.info.temperature} />
            </div>
          </div>
        </div>

        <div className="col-4 weather-details mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <ul className="feels">
              <li className="humidity">
                <span>Humidity: {props.info.humidity}%</span>
              </li>
              <li className="wind">
                <span>Wind: {Math.round(props.info.wind)} km/h</span>
              </li>
              <li className="temp">
                <span>Feels like: {Math.round(props.info.feelsLike)}°C</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
