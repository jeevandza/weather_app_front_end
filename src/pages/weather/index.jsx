import { useState } from "react";
import { useWeather } from "../../utils/hooks";
import { WeatherCard, CountryCitySelector } from "../../components";
import { transformForecastData, transformChartData } from "../../utils/helpers";

export function Weather() {
  const {
    isWeatherDataLoading,
    weatherData,
    isForecastDataLoading,
    forecastData,

    cities,
    selectedCity,
    recentCities,
    showHistory,
    handleCityChange,
    handleShowHistory,
    handleClearHistory,
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


  return (
    <div>
      <CountryCitySelector
        cities={cities}
        selectedCity={selectedCity}
        recentCities={recentCities}
        showHistory={showHistory}
        onCityChange={handleCityChange}
        onShowHistory={handleShowHistory}
        loading={isWeatherDataLoading}
        onClearHistory={handleClearHistory}
      />
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
