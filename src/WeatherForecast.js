import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast({
      day: response.data.daily[0].temperature.day,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
      description: response.data.daily[0].condition.description,
      maxTemp: response.data.daily[0].temperature.maximum,
      minTemp: response.data.daily[0].temperature.minimum,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecastDay={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `bb6baff71441307f3828bdt1a95do413`;
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
