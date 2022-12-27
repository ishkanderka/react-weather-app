import React from "react";

export default function Header() {
  return (
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
  );
}
