// // 1. Temperature will be a child component of App.js
// // 2. Import Temperature into App.js, create a function and pass it down as a prop to Temperature in the render method
// // 3. Render Temperature 

// import React from 'react'
// import { useState } from 'react'

// function Temperature (props) {
//   // const [temp, setTemp] = useState('celsius')
//   const [unit, setUnit] = useState('celsius')
//   // const [hiTemp, setHiTemp] = useState()
//   // const [lowTemp, setLowTemp] = useState()
//   // const [temp, setTemp] = useState()

//   // {convertUnits}

//   const changeUnit = unit === 'C' ? 'F' : 'C'

//     if (unit === 'celsius'){
//       <Temperature temp={Math.round(props.weather.main.temp)}/>
//       console.log(Math.round(props.weather.main.temp))
//       setUnit(props.convertUnits)
//   //     setTemp(Math.round(weather.main.temp))
//   //     setLowTemp(Math.round(weather.main.temp))
//   //     setHiTemp(Math.round(weather.main.temp))
//   //   }
//   //   else {
//   //     console.log(Math.round((weather.main.temp) * 9/5 + 32))
//   //     setUnit(changeUnit)
//   //     setTemp(Math.round((weather.main.temp) * 9/5 + 32))
//     }

//   function toFahrenheit(event){
//     setUnit('fahrenheit');
//     console.log('button clicked')
//   }

//   function toCelsius(event){
//     setUnit('celsius');
//     console.log('button clicked')
//   }

//   // if (temp === 'fahrenheit'){

//     return (
//       <div className="temperature">{(props.weather.main.temp) *1.8 + 32} 
//         <sup>
//           <span className="cel" onClick={toCelsius}>° C </span>
//           <span className="fah" onClick={toFahrenheit}>° F</span>
//         </sup>
//       </div> 
   
//       // <div className="weather">{weather.weather[0].description}</div>
//       // <div className="high-low">
//       //   <div className="high">High: {Math.round(weather.main.temp_max)} ° C</div>
//       //   <div className="low">Low: {Math.round(weather.main.temp_min)} ° C</div>
//       // </div>
//     )

//   // } else { 
//     return(
//     <div className="temperature-container">
//     <div className="temperature">
//       {Math.round(props.temp)} {/* <sup>° C</sup> */}
//     </div> 
//   </div>
//     );
//   }
// }

// export default Temperature


