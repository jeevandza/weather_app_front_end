import {
  ForecastAndCharts,
  CurrentWeather,
  Loader,
} from "../../components";

export function WeatherCard({
  weatherData,
  forecastData,
  chartData,
  unit,
  onUnitChange,
  isWeatherDataLoading,
  isForeCastLoading,
}) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {isWeatherDataLoading  ? (
          <Loader variant="section" />
        ) : (
          <CurrentWeather
            weatherData={weatherData}
            unit={unit}
            onUnitChange={onUnitChange}
          />
        )}

        {isForeCastLoading ? (
          <Loader variant="section" />
        ) : (
          <ForecastAndCharts
            forecastData={forecastData}
            chartData={chartData}
            unit={unit}
          />
        )}
      </div>
    </div>
  );
}
