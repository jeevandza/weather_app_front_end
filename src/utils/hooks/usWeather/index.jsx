import { createContext, useContext, useEffect, useState } from "react";
import {
  getWeatherData,
  getWeatherForecastData,
} from "../../controllers/weather";
import { useLocationFetcher } from "../index";
import { useFetch } from "../index";
import {
  saveSearchHistory,
  getSearchHistory,
  clearSearchHistory,
} from "../../localStorageService";
import { AVAILABLE_CITIES } from "../../../constants";
import { useDebounce } from "../custom/useDebounce";

const WeatherContextProvider = createContext(null);

/**
 * Global
 */
export const useWeather = () => useContext(WeatherContextProvider);

/**
 * Context binds
 */
function useWeatherContextProvider() {
  const { location } = useLocationFetcher();
  const [geoLocation, setGeoLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [recentCities, setRecentCities] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  /**
   * Debounce delay of 1.5 seconds
   */
  const debouncedCity = useDebounce(selectedCity, 1500);

  /**
   * Weather fetch hook
   */
  const {
    data: weatherData,
    loading: isWeatherDataLoading,
    fetchData: fetchWeatherData,
  } = useFetch((q) => getWeatherData(q));

  const locationName = weatherData?.data?.location_name;

  /**
   * Forecast fetch hook
   */
  const {
    data: forecastData,
    loading: isForecastDataLoading,
    fetchData: fetchForecastWeather,
  } = useFetch((q) => getWeatherForecastData(q));

  /**
   * Set geoLocation when location changes
   */
  useEffect(() => {
    if (location.lat && location.lon)
      setGeoLocation(`${location.lat},${location.lon}`);
  }, [location]);

  /**
   * Fetch weather when geoLocation or debouncedCity changes
   */
  useEffect(() => {
    if (debouncedCity || geoLocation) {
      fetchWeatherData(debouncedCity || geoLocation);
    }
  }, [geoLocation, debouncedCity]);

  /**
   * Fetch forecast for 7 days based on city or weatherData location
   */
  useEffect(() => {
    const city = debouncedCity || locationName;
    if (city) {
      fetchForecastWeather(city, "forecast");
    }
  }, [debouncedCity, locationName]);

  /**
   * Save search history when weather data is available
   */
  useEffect(() => {
    if (weatherData && debouncedCity?.length > 2) {
      saveSearchHistory(debouncedCity);
      setRecentCities(getSearchHistory());
    }
  }, [weatherData, debouncedCity]);

  /**
   * Load search history on mount
   */
  useEffect(() => setRecentCities(getSearchHistory()), []);

  /**
   * On select city
   */
 const handleCityChange = (city) => {
  const formattedCity = city
    ? city.charAt(0).toUpperCase() + city.slice(1)
    : ""; 
  setSelectedCity(formattedCity);
};

  /**
   * Show previous history
   */
  const handleShowHistory = (show) => {
    setShowHistory(show);
  };

  /**
   * Clear previous history
   */
  const handleClearHistory = () => {
    clearSearchHistory();
    setRecentCities([]);
  };

  return {
    /**
     * Weather
     */
    weatherData,
    isWeatherDataLoading,
    refetchWeather: fetchWeatherData,
    geoLocation,

    /**
     * Forecast
     */
    forecastData,
    isForecastDataLoading,

    /**
     * Search and city management
     */
    cities: AVAILABLE_CITIES,
    selectedCity,
    recentCities,
    showHistory,
    handleCityChange,
    handleShowHistory,
    handleClearHistory,
    locationName,
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
