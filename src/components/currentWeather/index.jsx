import { Sun, Droplets, Wind, MapPin } from "lucide-react";
import { UnitToggle, NoDataFound } from "../../components";

export function CurrentWeather({ weatherData, unit, onUnitChange }) {
  const getTemp = (celsius) =>
    unit === "fahrenheit"
      ? Math.round((celsius * 9) / 5 + 32)
      : Math.round(celsius);

  return (
    <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
      <>
        {!weatherData ? (
          <NoDataFound title="No weather data available" />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-white">
                {weatherData.location_name}
              </h1>
              <UnitToggle unit={unit} onUnitChange={onUnitChange} />
            </div>

            <div className="flex items-center gap-2 mb-8 text-white">
              <MapPin size={20} />
              <p className="text-blue-100 text-sm">
                {weatherData.region}, {weatherData.country}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/20 rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Sun size={80} className="text-yellow-300 drop-shadow-lg" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-2">
                  {getTemp(weatherData.temp_c)}°
                  {unit === "fahrenheit" ? "F" : "C"}
                </h2>
                <p className="text-2xl text-blue-50 font-semibold mb-4">
                  {weatherData.condition_text}
                </p>
                <p className="text-blue-100">
                  Feels like {getTemp(weatherData.feelslike_c)}°
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <Droplets size={32} className="text-cyan-300 mx-auto mb-3" />
                  <p className="text-blue-100 text-sm mb-2">Humidity</p>
                  <p className="text-3xl font-bold text-white">
                    {weatherData.humidity}%
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <Wind size={32} className="text-cyan-300 mx-auto mb-3" />
                  <p className="text-blue-100 text-sm mb-2">Wind</p>
                  <p className="text-3xl font-bold text-white">
                    {weatherData.wind_mph} mph
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}
