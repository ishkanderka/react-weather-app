import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day ">Monday</div>
          <div className="d-flex justify-content-center align-items-center ">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="weather-icon"
              width="60"
              height="60"
            />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19°</span>
            <span className="WeatherForecast-temperature-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
