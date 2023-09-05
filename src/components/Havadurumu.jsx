import React, { useEffect, useState } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import "./responsive/Havadurumu.css"
const Havadurumu = () => {
  const key = "4e6cba2969f6819c1c9071385bec5ad6";
  const fetchapi = `https://api.openweathermap.org/data/2.5/weather?q=İstanbul&appid=${key}&units=metric&lang=tr`;
  const fetchapi2 = `https://api.openweathermap.org/data/2.5/weather?q=Antalya&appid=${key}&units=metric&lang=tr`;
  const fetchapi3 = `https://api.openweathermap.org/data/2.5/weather?q=İzmir&appid=${key}&units=metric&lang=tr`;
  const fetchapi4 = `https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=${key}&units=metric&lang=tr`;
  const [weatherData, setWeatherData] = useState(null);
  const [weatherData2, setWeatherData2] = useState(null);
  const [weatherData3, setWeatherData3] = useState(null);
  const [weatherData4, setWeatherData4] = useState(null);
  useEffect(() => {
    fetch(fetchapi)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
      });
  }, []);
  useEffect(() => {
    fetch(fetchapi2)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData2(data)
      });
  }, []);
  useEffect(() => {
    fetch(fetchapi3)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData3(data)
      });
  }, []);
  useEffect(() => {
    fetch(fetchapi4)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData4(data)
      });
  }, []);
  return (
    <div className="Havadurumu">
      <h2>Hava Durumu</h2>
      <div className="cizgi"></div>
      <div className="havadurumu-container">
      {weatherData && (  <div className="havadurumu-title">
          <BsFillCloudSunFill color="white" size={100} />
          <p>İstanbul</p>
          <p>{weatherData.main.temp}&deg;</p>
          <p>{weatherData.weather[0].description}</p>
        </div>)}
      </div>
      <div className="havadurumu-content">
      {weatherData2 && (  <div className="havadurumu-title">
          <BsFillCloudSunFill color="white" size={100} />
          <p>Antalya</p>
          <p>{weatherData2.main.temp}&deg;</p>
          <p>{weatherData2.weather[0].description}</p>
        </div>)}
        {weatherData3 && (  <div className="havadurumu-title">
          <BsFillCloudSunFill color="white" size={100} />
          <p>İzmir</p>
          <p>{weatherData3.main.temp}&deg;</p>
          <p>{weatherData3.weather[0].description}</p>
        </div>)}
        {weatherData4 && (  <div className="havadurumu-title">
          <BsFillCloudSunFill color="white" size={100} />
          <p>Ankara</p>
          <p>{weatherData4.main.temp}&deg;</p>
          <p>{weatherData4.weather[0].description}</p>
        </div>)}
      </div>
    </div>
  );
};

export default Havadurumu;
