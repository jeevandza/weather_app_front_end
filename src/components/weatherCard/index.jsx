import { Cloud, Droplets, Wind, MapPin, Sun } from "lucide-react";

export function WeatherCard({ weatherData }) {
  const { location, current } = weatherData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <div className="flex items-center gap-2 mb-8 text-white">
          <MapPin size={20} />
          <div>
            <h1 className="text-2xl font-bold">{location.name}</h1>
            <p className="text-blue-100 text-sm">
              {location.region}, {location.country}
            </p>
          </div>
        </div>

        <div className="bg-white/20 rounded-2xl p-8 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <Sun size={80} className="text-yellow-300 drop-shadow-lg" />
          </div>

          <p className="text-blue-100 text-lg mb-2">Current Weather</p>
          <h2 className="text-5xl font-bold text-white mb-2">
            {current.temp_f}°F
          </h2>
          <p className="text-2xl text-blue-50 font-semibold mb-4">
            {current.condition.text}
          </p>
          <p className="text-blue-100">Feels like {current.feelslike_f}°F</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Droplets size={32} className="text-cyan-300" />
            </div>
            <p className="text-blue-100 text-sm mb-2">Humidity</p>
            <p className="text-3xl font-bold text-white">{current.humidity}%</p>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Wind size={32} className="text-cyan-300" />
            </div>
            <p className="text-blue-100 text-sm mb-2">Wind Speed</p>
            <p className="text-3xl font-bold text-white">
              {current.wind_mph} mph
            </p>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
            <span className="text-blue-100">Temperature</span>
            <span className="text-white font-semibold">
              {current.temp_c}°C / {current.temp_f}°F
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-100">Last Updated</span>
            <span className="text-white font-semibold text-sm">
              {current.last_updated}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
