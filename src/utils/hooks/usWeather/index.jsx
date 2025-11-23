import { createContext, useContext, useEffect, useState } from "react";
import { getWeatherData } from "../../controllers/weather";
import { useLocationFetcher } from "../index";
import { useFetch } from "../index";

const WeatherContextProvider = createContext(null);

export const useWeather = () => useContext(WeatherContextProvider);

function useWeatherContextProvider() {
  const { location } = useLocationFetcher();

  const [geoLocation, setGeoLocation] = useState(null);

  console.log(geoLocation, "location");

  /**
   * Weather fetch hook
   */
  const {
    data: weatherData,
    loading: isWeatherDataLoading,
    fetchData: fetchWeatherData,
  } = useFetch((lat, lon) => getWeatherData(lat, lon));
  /**
   * Set initial geolocation once ready
   */
  useEffect(() => {
    setGeoLocation({
      lon: location.lon,
      lat: location.lat,
    });
  }, [location]);

  /**
   * Fetch weather only when geoLocation becomes available
   */
  useEffect(() => {
    if (geoLocation?.lat && geoLocation?.lon) {
      fetchWeatherData(geoLocation.lon, geoLocation.lat);
    }
  }, [geoLocation?.lat && geoLocation?.lon]);

  return {
    weatherData,
    isWeatherDataLoading,
    refetchWeather: fetchWeatherData,
    geoLocation,
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
