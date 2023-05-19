// import React, { useState } from "react";
// import logo from "./logo.svg";
// import ReactAnimatedWeather from "react-animated-weather";
// import { BsSun, BsMoon, BsWind } from "react-icons/bs";
// import { WiHumidity } from "react-icons/wi";
// import { IconContext } from "react-icons";
// import WeatherIcons from "./components/WeatherIcons";
// import Footer from "./components/Footer";
// import Temperature from "./components/Temperature";
// import "./App.css";

// function App() {
//   const [city, setCity] = useState("");
//   const [fiveDay, setFiveDay] = useState("");
//   const [weather, setWeather] = useState({});
//   const [unit, setUnit] = useState("C");
//   const [hiTemp, setHiTemp] = useState();
//   const [lowTemp, setLowTemp] = useState();

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`;

//   const search = (e) => {
//     if (e.key === "Enter") {
//       searchFiveDay();
//       fetch(url)
//         .then((response) => response.json())
//         .then((result) => {
//           console.log("search", result);
//           setWeather(result);
//           setCity("");
//         });
//     }
//   };

//   const searchFiveDay = () => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         console.log("search five day", result);
//         setFiveDay(result);
//       });
//   };

//   // const changeUnit = unit === 'C' ? 'F' : 'C'

//   const convertUnits = () => {
//     //   if (unit === 'C'){
//     //     console.log(Math.round(weather.main.temp))
//     //     setUnit(changeUnit)
//     //     setTemp(Math.round(weather.main.temp))
//     //     setLowTemp(Math.round(weather.main.temp))
//     //     setHiTemp(Math.round(weather.main.temp))
//     //   }
//     //   else {
//     //     console.log(Math.round((weather.main.temp) * 9/5 + 32))
//     //     setUnit(changeUnit)
//     //     setTemp(Math.round((weather.main.temp) * 9/5 + 32))
//     //   }
//   };

//   return (
//     <div
//       className={
//         typeof weather.main != "undefined"
//           ? weather.main.temp < 18
//             ? "App cold"
//             : "App"
//           : "App"
//       }
//     >
//       <main>
//         <div className="search">
//           <input
//             type="text"
//             className="searchbar"
//             value={city}
//             placeholder="Enter Location"
//             onChange={(e) => setCity(e.target.value)}
//             onKeyPress={search}
//           />
//         </div>

//         {typeof weather.main != "undefined" ? (
//           <div className="current-weather">
//             {/* ---------- Today's Weather ---------------- */}

//             <div className="current-display">
//               <div className="leftside">
//                 <div className="temperature-box">
//                   <div className="temperature">
//                     {/* <h4>{temp}</h4> */}
//                     <Temperature temp={weather.main.temp} />
//                     <sup>
//                       <span onClick={convertUnits} className="cel">
//                         {" "}
//                         C{" "}
//                       </span>
//                       <span onClick={convertUnits} className="fah">
//                         {" "}
//                         F
//                       </span>
//                     </sup>
//                   </div>
//                   <div className="weather">
//                     {weather.weather[0].description}
//                   </div>
//                 </div>

//                 <div className="high-low">
//                   <div className="high">
//                     High: {Math.round(weather.main.temp_max)} ° C
//                   </div>
//                   <div className="low">
//                     Low: {Math.round(weather.main.temp_min)} ° C
//                   </div>
//                 </div>
//               </div>

//               {/* -------- Center -------- */}

//               <div className="centre">
//                 <WeatherIcons
//                   id="current-icon"
//                   code={weather.weather[0].icon}
//                 />
//               </div>

//               {/* -------- Right Side -------- */}
//               <div className="rightside">
//                 <div className="city">
//                   {weather.name}, {weather.sys.country}
//                 </div>

//                 <div className="right-weather-info">
//                   <div className="sunrise">
//                     <div className="icon">
//                       <IconContext.Provider
//                         value={{ style: { fontSize: "30px" } }}
//                       >
//                         <BsSun />
//                       </IconContext.Provider>
//                     </div>
//                     <div className="time">
//                       <span>Sunrise</span>
//                       {new Date(
//                         weather.sys.sunrise * 1000
//                       ).toLocaleTimeString()}
//                     </div>
//                   </div>

//                   <div className="sunset">
//                     <div className="icon">
//                       <IconContext.Provider
//                         value={{ style: { fontSize: "30px" } }}
//                       >
//                         <BsMoon />
//                       </IconContext.Provider>
//                     </div>
//                     <div className="time">
//                       <span>Sunset</span>
//                       {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
//                     </div>
//                   </div>

//                   <div className="wind">
//                     <IconContext.Provider
//                       value={{ style: { fontSize: "30px", paddingRight: 0 } }}
//                     >
//                       <BsWind />
//                     </IconContext.Provider>

//                     <div className="label">
//                       Wind speed: {weather.wind.speed} m/sec
//                     </div>
//                   </div>

//                   <div className="humidity">
//                     <IconContext.Provider
//                       value={{ style: { fontSize: "45px" } }}
//                     >
//                       <WiHumidity />
//                     </IconContext.Provider>

//                     <div className="label">
//                       Humidity: {weather.main.humidity} %
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ---------- Five Day Display ----------- */}

//             <div className="five-day-forecast">
//               <div className="day">
//                 <p>Mon</p>
//                 <WeatherIcons
//                   code={
//                     fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[1] &&
//                     fiveDay.list[1].weather &&
//                     fiveDay.list[1].weather[0] &&
//                     fiveDay.list[1].weather[0].icon
//                   }
//                 />
//                 <p>
//                   {Math.round(
//                     fiveDay &&
//                       fiveDay.list &&
//                       fiveDay.list[1] &&
//                       fiveDay.list[1].main &&
//                       fiveDay.list[1].main.temp
//                   )}
//                   ° C
//                 </p>
//                 <p id="five-weather">
//                   {fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[1] &&
//                     fiveDay.list[1].weather &&
//                     fiveDay.list[1].weather[0] &&
//                     fiveDay.list[1].weather[0].description}
//                 </p>
//               </div>

//               <div className="day">
//                 <p>Tues</p>
//                 <WeatherIcons
//                   code={
//                     fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[2] &&
//                     fiveDay.list[2].weather &&
//                     fiveDay.list[2].weather[0] &&
//                     fiveDay.list[2].weather[0].icon
//                   }
//                 />
//                 <p>
//                   {Math.round(
//                     fiveDay &&
//                       fiveDay.list &&
//                       fiveDay.list[2] &&
//                       fiveDay.list[2].main &&
//                       fiveDay.list[2].main.temp
//                   )}
//                   ° C
//                 </p>
//                 <p id="five-weather">
//                   {fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[2] &&
//                     fiveDay.list[2].weather &&
//                     fiveDay.list[2].weather[0] &&
//                     fiveDay.list[2].weather[0].description}
//                 </p>
//               </div>

//               <div className="day">
//                 <p>Wed</p>
//                 <WeatherIcons
//                   code={
//                     fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[3] &&
//                     fiveDay.list[3].weather &&
//                     fiveDay.list[3].weather[0] &&
//                     fiveDay.list[3].weather[0].icon
//                   }
//                 />
//                 <p>
//                   {Math.round(
//                     fiveDay &&
//                       fiveDay.list &&
//                       fiveDay.list[3] &&
//                       fiveDay.list[3].main &&
//                       fiveDay.list[3].main.temp
//                   )}
//                   ° C
//                 </p>
//                 <p id="five-weather">
//                   {fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[3] &&
//                     fiveDay.list[3].weather &&
//                     fiveDay.list[3].weather[0] &&
//                     fiveDay.list[3].weather[0].description}
//                 </p>
//               </div>

//               <div className="day">
//                 <p>Thurs</p>
//                 <WeatherIcons
//                   code={
//                     fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[1] &&
//                     fiveDay.list[4].weather &&
//                     fiveDay.list[4].weather[0] &&
//                     fiveDay.list[4].weather[0].icon
//                   }
//                 />
//                 <p>
//                   {Math.round(
//                     fiveDay &&
//                       fiveDay.list &&
//                       fiveDay.list[4] &&
//                       fiveDay.list[4].main &&
//                       fiveDay.list[4].main.temp
//                   )}
//                   ° C
//                 </p>
//                 <p id="five-weather">
//                   {fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[4] &&
//                     fiveDay.list[4].weather &&
//                     fiveDay.list[4].weather[0] &&
//                     fiveDay.list[4].weather[0].description}
//                 </p>
//               </div>

//               <div className="day">
//                 <p>Fri</p>
//                 <WeatherIcons
//                   code={
//                     fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[5] &&
//                     fiveDay.list[5].weather &&
//                     fiveDay.list[5].weather[0] &&
//                     fiveDay.list[5].weather[0].icon
//                   }
//                 />
//                 <p>
//                   {Math.round(
//                     fiveDay &&
//                       fiveDay.list &&
//                       fiveDay.list[5] &&
//                       fiveDay.list[5].main &&
//                       fiveDay.list[5].main.temp
//                   )}
//                   ° C
//                 </p>
//                 <p id="five-weather">
//                   {fiveDay &&
//                     fiveDay.list &&
//                     fiveDay.list[5] &&
//                     fiveDay.list[5].weather &&
//                     fiveDay.list[5].weather[0] &&
//                     fiveDay.list[5].weather[0].description}
//                 </p>
//               </div>
//             </div>

//             <Footer />
//           </div>
//         ) : (
//           ""
//         )}
//       </main>
//     </div>
//   );
// }
// <div></div>;

// export default App;
