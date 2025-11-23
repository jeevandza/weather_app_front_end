import { createContext, useContext, useEffect, useState } from "react";
import { getWeatherData, getWeatherForecastData } from "../../controllers/weather";
import { useLocationFetcher } from "../index";
import { useFetch } from "../index";

const WeatherContextProvider = createContext(null);

export const useWeather = () => useContext(WeatherContextProvider);

function useWeatherContextProvider() {
  const { location } = useLocationFetcher();

  const [geoLocation, setGeoLocation] = useState("");

  console.log(geoLocation, "location");

  /**
   * Weather fetch hook
   */
  const {
    data: weatherData,
    loading: isWeatherDataLoading,
    fetchData: fetchWeatherData,
  } = useFetch((q) => getWeatherData(q));
  /**
   * Set initial geolocation once ready
   */
  useEffect(() => {
    if (location.lon && location.lat) {
      const concatLonLat = `${location.lat},${location.lon}`;
      setGeoLocation(concatLonLat);
    }
  }, [location]);
  /**
   * Fetch weather only when geoLocation becomes available based on browser
   */
  useEffect(() => {
    if (geoLocation) {
      fetchWeatherData(geoLocation);
    }
  }, [geoLocation]);

  /**
   * Forecast data of 7 days
   */
  const {
    data: forecastData,
    loading: isForecastDataLoading,
    fetchData: fetchForecastWeather,
  } = useFetch((q, type) => getWeatherForecastData(q, type));
  /**
   * Fetch forecast for 7 days
   */
  useEffect(() => {
    if (geoLocation) {
      fetchForecastWeather(geoLocation, "forecast");
    }
  }, [geoLocation]);

  return {
    weatherData,
    isWeatherDataLoading,
    refetchWeather: fetchWeatherData,
    geoLocation,

    isForecastDataLoading,
    forecastData,
  };
}

export const ProviderWeatherContext = ({ children }) => {
  const context = useWeatherContextProvider();

  return (
    <WeatherContextProvider.Provider value={context}>
      {children}
    </WeatherContextProvider.Provider>
  );
};
