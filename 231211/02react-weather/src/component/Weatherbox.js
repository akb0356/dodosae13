import React from "react";

const Weatherbox = ({ weather }) => {
  // if (!weather || !weather.main || !weather.weather || !weather.weather[0]) {
  //   return `wait...`;
  // }
  const temperatureC = weather && weather.main.temp;
  const humidity = weather && weather.main.humidity;
  const currentWeather = weather && weather.weather[0]?.description;
  return (
    <div className="weather-Box">
      <h2>{weather?.name}🏙️</h2>
      <h2>
        온도 : {temperatureC}℃ / 습도 : {humidity}%
      </h2>
      <h3>{currentWeather}</h3>
    </div>
  );
};

export default Weatherbox;
