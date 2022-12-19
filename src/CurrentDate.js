import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours > 10) {
    hours = `${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes > 10) {
    minutes = `${minutes}`;
  }
  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
