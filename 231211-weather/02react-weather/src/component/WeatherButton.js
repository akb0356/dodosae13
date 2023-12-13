import React from "react";
import { Button } from "react-bootstrap";
// 반드시 css도 함께 넣어야 돌아갑니다.
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div className="weatherButton">
      <Button onClick={() => handleCityChange("current")} variant="primary">
        Current Location
      </Button>
      {cities.map((it) => (
        <Button onClick={() => setCity(it)} variant="primary">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
