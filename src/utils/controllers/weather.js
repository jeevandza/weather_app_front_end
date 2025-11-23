import { api } from "../config/api_service";

/**
 * Get weather data
 */
export async function getWeatherData(lon, lat) {
  return await api.GET(`/weather?lon=${lon}&lat=${lat}`);
}
