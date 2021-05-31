import "./index.css";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <Forecast />
      <Footer />
    </div>
  );
}
