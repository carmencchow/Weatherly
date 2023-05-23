import React, { useState } from "react";
import { BsSun, BsMoon, BsWind, BsSearch } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { IconContext } from "react-icons";
import WeatherIcons from "./components/WeatherIcons";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [fiveDay, setFiveDay] = useState("");
  const [weather, setWeather] = useState({});

  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`;

  const search = (e) => {
    if (e.key === "Enter") {
      searchFiveDay();
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setCity("");
        });
    }
  };

  const searchFiveDay = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`
    )
      .then((response) => response.json())
      .then((result) => {
        setFiveDay(result);
      });
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 18
            ? "App cold"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search">
          <input
            type="text"
            className="searchbar"
            value={city}
            placeholder="Search for location"
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={search}
          />
        </div>

        <div className="city">
          Weather for{" "}
          <span>
            {weather.name} {weather && weather.sys && weather.sys.country}
          </span>
        </div>
        <h5>
          <div className="updated">
            Updated on {new Date().toLocaleDateString()}
            <br></br>
            {new Date().toLocaleTimeString()}
          </div>
        </h5>

        <div className="short-term">Today's weather</div>
        {typeof weather.main != "undefined" ? (
          <div className="current-weather">
            <div className="current-display">
              <div className="leftside">
                <div className="temperature-box">
                  <div className="temperature">
                    {Math.round(weather.main.temp)}
                    <span className="celsius">°C</span>
                  </div>
                </div>

                <div className="high-low">
                  <div className="high">
                    High: {Math.round(weather.main.temp_max)} ° C
                  </div>
                  <div className="low">
                    Low: {Math.round(weather.main.temp_min)} ° C
                  </div>
                </div>
              </div>

              <div className="centre">
                <WeatherIcons
                  id="current-icon"
                  code={weather.weather[0].icon}
                />
                <div className="weather">{weather.weather[0].description}</div>
              </div>
            </div>

            <div className="weather-stats">
              <div className="items">
                <div className="icon">
                  <IconContext.Provider value={{ style: { fontSize: "30px" } }}>
                    <BsSun />
                  </IconContext.Provider>
                  <span>Sunrise</span>
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>

              <div className="items">
                <div className="icon">
                  <IconContext.Provider value={{ style: { fontSize: "28px" } }}>
                    <BsMoon />
                  </IconContext.Provider>
                  <span>Sunset</span>
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>

              <div className="items">
                <div className="icon">
                  <IconContext.Provider
                    value={{ style: { fontSize: "30px", paddingRight: 0 } }}
                  >
                    <BsWind />
                  </IconContext.Provider>
                  <span>Wind</span>
                  {weather.wind.speed} m/s
                </div>
              </div>

              <div className="items">
                <div className="icon">
                  <IconContext.Provider value={{ style: { fontSize: "31px" } }}>
                    <WiHumidity />
                  </IconContext.Provider>
                  <span>Humidity</span>
                  {weather.main.humidity} %
                </div>
              </div>
            </div>

            <div className="five-day-forecast">
              <span className="long-term">Next 5 Days</span>
              {days.map((day, i) => {
                return (
                  <div className="day">
                    <div className="day-row">
                      <p className="dayofweek">{day}</p>
                      {/* <p className="dayofweek">
                        {fiveDay &&
                          fiveDay.list &&
                          fiveDay.list[i + 1] &&
                          (fiveDay.list[i + 1].dt * 1000).toLocaleString("en", {
                            weekday: "long",
                          })}
                      </p> */}
                      <WeatherIcons
                        code={
                          fiveDay &&
                          fiveDay.list &&
                          fiveDay.list[i + 1] &&
                          fiveDay.list[i + 1].weather &&
                          fiveDay.list[i + 1].weather[0] &&
                          fiveDay.list[i + 1].weather[0].icon
                        }
                      />
                      <span className="day-temp">
                        <span>
                          {Math.round(
                            fiveDay &&
                              fiveDay.list &&
                              fiveDay.list[i + 1] &&
                              fiveDay.list[i + 1].main &&
                              fiveDay.list[i + 1].main.temp
                          )}
                          ° C
                        </span>
                      </span>
                      <span id="five-weather">
                        {fiveDay &&
                          fiveDay.list &&
                          fiveDay.list[i + 1] &&
                          fiveDay.list[i + 1].weather[0].description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Footer />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
