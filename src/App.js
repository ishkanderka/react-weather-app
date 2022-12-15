import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
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
        </footer>
      </div>
    </div>
  );
}
