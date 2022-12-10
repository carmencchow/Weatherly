import React from 'react'
import { useState } from 'react'

function Temperature (props) {
  const [temp, setTemp] = useState('celsius')

  function toFahrenheit(event){
    setTemp('fahrenheit');
    console.log('button clicked')
  }

  function toCelsius(event){
    setTemp('celsius');
    console.log('button clicked')
  }

  if (temp === 'fahrenheit'){

    return (
      <div className="temperature">{(props.weather.main.temp) *1.8 + 32} 
        <sup>
          <span className="cel" onClick={toCelsius}>° C </span>
          <span className="fah" onClick={toFahrenheit}>° F</span>
        </sup>
      </div> 
   
      // <div className="weather">{weather.weather[0].description}</div>
      // <div className="high-low">
      //   <div className="high">High: {Math.round(weather.main.temp_max)} ° C</div>
      //   <div className="low">Low: {Math.round(weather.main.temp_min)} ° C</div>
      // </div>
    )

  } else { 
    return(
    <div className="temperature-container">
    <div className="temperature">
      {Math.round(props.temp)} 
      {/* <sup>° C</sup> */}
    </div> 
  </div>
    );
  }

  const handleChange = () => {
    console.log('Changing units')
    return setTemp(!temp);
  };

}


export default Temperature


