import "./App.css";
import { useWeather } from "./utils/hooks";
import { Loader, WeatherCard } from "./components";
import { NoDataFound } from "./components/noDataFound";

function App() {
  const { isWeatherDataLoading, weatherData } = useWeather();

  const weatherDataItem = weatherData?.data;

  console.log(weatherDataItem, "weatherData");

  return (
    <div>
      {isWeatherDataLoading || !weatherDataItem ? (
        <Loader />
      ) : weatherDataItem?.location ? (
        <WeatherCard weatherData={weatherDataItem} />
      ) : (
        <NoDataFound title="No Weather Data" description="Unable to fetch weather data. Please try again." />
      )}
    </div>
  );
}

export default App;