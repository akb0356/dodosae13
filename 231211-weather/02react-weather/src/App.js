import "./App.css";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Weatherbox from "./component/Weatherbox";
import WeatherButton from "./component/WeatherButton";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(undefined);
  const cities = ["Paris", "New York", "Tokyo", "Seoul"];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //동기처리 되어서 한번에 주르륵 불러오려하기 때문에 json파일이 안끌고와진다.
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setWeather(getCurrentLocation());
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#fff" size={100} loading={loading} />
        </div>
      ) : (
        <div className="container">
          <Weatherbox weather={weather} />
          <WeatherButton
            handleCityChange={handleCityChange}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
