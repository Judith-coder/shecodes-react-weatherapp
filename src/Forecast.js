import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <section className="forecast">
        <h4>Next hours...</h4>
        <div className="row" id="hourly-forecast"></div>
        <h4 className="nextDaysForecast">Next days...</h4>
        <div className="row" id="daily-forecast"></div>
      </section>
    </div>
  );
}
