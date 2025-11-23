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

export async function getWeatherForecastData(q, type) {
  return await api.GET(`/weather?q=${q}&type=${type}`);
}
