// import React from "react";

// // type Temperature = {
// //     temp: 0;
// // };

// interface TemperatureProps {
  
//     temperature: Number
  
// }

// const WeatherReport: React.FunctionComponent<TemperatureProps> = (props) => {
//   console.log(props.temperature)
//     return (
//         <div className="App-header">
//       <h2>Local Temps</h2>
//       {/* <div>
//         {props.temp === 0 ? (
//           "Click button to get your local temperature"
//         ) : (
//           <h4>
//             Temperature:
//             {((props.temp - 273.15) * 1.8 + 32).toFixed(0)} F
//           </h4>
//         )}
//       </div> */}
//     </div>
//     )
// }

// export default WeatherReport;

interface WeatherProps {
  temperature: Number
}
 
const Weather: React.FunctionComponent<WeatherProps> = (props) => {
  console.log(props.temperature)
  return ( <div></div> );
}
 
export default Weather;