/**
 * Forecast modified data
 */
export function transformForecastData(apiData) {
  if (!apiData?.data?.forecast?.forecastday) return [];

  const tz = apiData.data.location.tz_id; 

  return apiData.data.forecast.forecastday.slice(0, 7).map((day) => ({
    date: new Date(day.date + "T00:00:00").toLocaleDateString(undefined, {
      weekday: "short",
      timeZone: tz,
    }),
    icon: `https:${day.day.condition.icon}`,
    condition: day.day.condition.text,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
    humidity: Math.round(day.day.avghumidity),
  }));
}

/**
 * Chart modified data
 */
export function transformChartData(apiData) {
  const hourlyData = apiData?.data?.forecast?.forecastday?.[0]?.hour;
  if (!hourlyData) return [];

  const tz = apiData.data.location.tz_id;

  return hourlyData.filter((_, index) => index % 3 === 0).map((hour) => ({
    time: new Date(hour.time).toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: tz,
    }),
    temp: hour.temp_c,
    humidity: hour.humidity,
  }));
}
