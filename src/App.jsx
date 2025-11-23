import "./App.css";
import { useState } from "react";
import { useWeather } from "./utils/hooks";
import { Loader, WeatherCard, CountryCitySelector } from "./components";
import { transformForecastData, transformChartData } from "./utils/helpers";

function App() {
  const {
    isWeatherDataLoading,
    weatherData,
    isForecastDataLoading,
    forecastData,
  } = useWeather();
  const [unit, setUnit] = useState("fahrenheit");

  /**
   * Current weather data
   */
  const weatherDataItem = weatherData?.data;

  /**
   * Forecast weather data
   */
  const forecastApiData = forecastData
    ? transformForecastData(forecastData)
    : [];
  const chartDataApiData = forecastData ? transformChartData(forecastData) : [];

  console.log(forecastData, "forecastData");

  return (
    <div>
      <CountryCitySelector onSelect={() => null} />
      <WeatherCard
        isWeatherDataLoading={isWeatherDataLoading}
        isForeCastLoading={isForecastDataLoading}
        weatherData={weatherDataItem}
        forecastData={forecastApiData}
        chartData={chartDataApiData}
        unit={unit}
        onUnitChange={setUnit}
      />
    </div>
  );
}

export default App;
