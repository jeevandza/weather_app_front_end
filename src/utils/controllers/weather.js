import { api } from "../config/api_service";

/**
 * Get weather data
 */
export async function getWeatherData(q) {
  return await api.GET(`/weather?q=${q}`);
}

/**
 * Get forecast data
 */

export async function getWeatherForecastData(city) {
  return await api.GET(`/forecast?q=${city}`);
}
