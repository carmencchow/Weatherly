import React from 'react'
import { useState } from 'react'
// import './Temperature.css';

function Temperature (props) {
  const [temp, setTemp] = useState('celsius')

  function toFahrenheit(event){
    setTemp('fahrenheit');
  }

  function toCelsius(event){
    setTemp('celsius');
  }

  if (temp === 'fahrenheit'){
    return (
      <div className="temperature-container">
        <div className="temperature">
          {Math.round(props.temp)} <sup>° F</sup>
        </div> 
      </div>
    );

  } else { 
    return(
    <div className="temperature-container">
    <div className="temperature">
      {Math.round(props.temp)} <sup>° F</sup>
    </div> 
  </div>
    );
  }

  const handleChange = () => {
    console.log('Changing units')
    return setTemp(!temp);
  };

// //   return (
// //     <div className="Temperature-section">
// //       <button className="Temperature-button" onClick={() => handleChange()}>
// //         <div className="fahrenheit">F </div>
// //         <div className="celsius">C </div>
// //       </button>
// //       {temp ? 'Celsius' : 'Fahrenheit'}
// //     </div>
// //   )
// // }

}

export default Temperature


