
export function MultiDayForecast({ forecastData, unit }) {
 

  const getTemp = (celsius) => {
    return unit === "fahrenheit" 
      ? Math.round((celsius * 9) / 5 + 32) 
      : Math.round(celsius);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">7-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center hover:bg-white/30 transition-all"
          >
            <p className="text-blue-100 text-sm font-semibold mb-2">{day.date}</p>
            <div className="flex justify-center mb-2">
              <img
                src={day.icon}
                alt={day.condition}
                className="w-12 h-12"
                onError={(e) => e.target.style.display = "none"}
              />
            </div>
            <p className="text-xs text-blue-100 mb-2 line-clamp-2">{day.condition}</p>
            <div className="flex justify-center gap-2">
              <span className="text-white font-bold">
                {getTemp(day.maxTemp)}°
              </span>
              <span className="text-blue-200">
                {getTemp(day.minTemp)}°
              </span>
            </div>
            <p className="text-xs text-blue-100 mt-2">💧 {day.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}