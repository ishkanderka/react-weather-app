import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastDay.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastDay.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.forecastDay.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day ">{day()}</div>
      <div className="d-flex justify-content-center align-items-center ">
        <img
          src={props.forecastDay.condition.icon_url}
          alt={props.forecastDay.condition.description}
          className="forecast-icon"
          width="70"
          height="70"
        />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {" "}
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
