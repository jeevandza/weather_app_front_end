import { MultiDayForecast, HumidityChart, TemperatureChart, NoDataFound } from "../../components";




export function ForecastAndCharts({ forecastData = [], chartData = [], unit }) {

   if (!forecastData?.length) {
    return <NoDataFound title="No forecast data available" />
  }
  
  return (
    <div className="space-y-6">
      <MultiDayForecast forecastData={forecastData} unit={unit} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TemperatureChart chartData={chartData} unit={unit} />
        <HumidityChart chartData={chartData} />
      </div>
    </div>
  );
}