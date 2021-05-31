import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <form id="city-search-form">
        <input
          type="search"
          id="city-input"
          placeholder="Enter a city name..."
          autoComplete="off"
        />
        <input type="submit" id="submitCity" value="🔍" />
      </form>

      <h1 id="city-heading">Bordeaux</h1>
      <h2 id="date-hour" />
      <section className="currentWeather">
        <div className="row">
          <div className="col-4">
            <h3 id="current-weather-description">Sunny</h3>
            <div className="row">
              <div
                className="col-5 currentTemperature"
                id="current-temperature"
              >
                18
              </div>
              <div className="col-7">
                <div className="row">
                  <div className="col-12 unit-Choice">
                    <div className="form-check">
                      <input
                        type="radio"
                        name="unit"
                        id="celsius-degrees-input"
                        defaultChecked
                      />
                      <label
                        for="celsius-degree-input"
                        className="temperatureUnit"
                        id="celsius-degrees-label"
                      >
                        °C
                      </label>
                    </div>
                  </div>
                  <div className="col-12 unit-Choice">
                    <div className="form-check">
                      <input
                        type="radio"
                        id="fahrenheit-degrees-input"
                        name="unit"
                      />
                      <label
                        for="fahrenheit-degrees-input"
                        className="temperatureUnit"
                        id="fahrenheit-degrees-label"
                      >
                        °F
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <i className="fas" id="current-weather-icon"></i>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12" id="feels-like">
                Feels like: <span id="feels-like-temperature">18</span>°C
              </div>
              <div className="col-12" id="wind-speed">
                Wind: <span id="wind-speed-value">8</span>km/h
              </div>
              <div className="col-12" id="humidity">
                Humidity: 33%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
