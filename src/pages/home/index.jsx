import { useState } from "react";
import { useWeather } from "../../utils/hooks";
import {
  Cloud,
  MapPin,
  History,
  TrendingUp,
  Thermometer,
  Wind,
  Droplets,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const { weatherData } = useWeather();

  /**
   * Api data
   */
  const weatherDataItem = weatherData?.data;

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Multi-City Support",
      description:
        "Search and track weather across multiple cities worldwide with instant updates",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Search History",
      description:
        "Quick access to recently searched cities for seamless navigation",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "7-Day Forecast",
      description:
        "Detailed weather predictions with hourly breakdowns and trends",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Unit Conversion",
      description: "Toggle between Fahrenheit and Celsius for your preference",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const weatherMetrics = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      label: "Temperature",
      value: weatherDataItem?.temp_c ? `${weatherDataItem.temp_c}°C` : "N/A",
    },
    {
      icon: <Wind className="w-5 h-5" />,
      label: "Wind Speed",
      value: weatherDataItem?.wind_kph
        ? `${weatherDataItem.wind_kph} kph`
        : "N/A",
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: "Humidity",
      value: weatherDataItem?.humidity ? `${weatherDataItem.humidity}%` : "N/A",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Visibility",
      value: weatherDataItem?.vis_km ? `${weatherDataItem.vis_km} km` : "N/A",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Cloud className="w-24 h-24 text-blue-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Weather App
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Your comprehensive weather companion with real-time forecasts,
            intelligent search, and beautiful visualizations
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <Link to="/weather">Get Started</Link>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Link to="/learn-more">Learn More</Link>
            </button>
          </div>

          <div className="text-center mb-8">
            <MapPin className="w-6 h-6 inline-block text-blue-400 mr-2" />
            <span className="text-white text-2xl font-bold">
              {weatherDataItem?.location_name || "Location"}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {weatherMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">{metric.icon}</div>
                  <span className="text-gray-400 text-sm">{metric.label}</span>
                </div>
                <p className="text-white font-semibold text-lg">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Powerful Features
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Everything you need for accurate weather tracking
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeFeature === index ? "scale-105" : "hover:scale-102"
              }`}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {activeFeature === index && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Built with Modern Technology
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Leveraging the latest tools for optimal performance
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">R</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">React</h3>
              <p className="text-gray-400">Modern UI framework</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-400">Beautiful styling</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">API</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Weather API
              </h3>
              <p className="text-gray-400">Real-time data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
              100+
            </div>
            <p className="text-gray-400 text-lg">Cities Supported</p>
          </div>

          <div className="group">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
              7-Day
            </div>
            <p className="text-gray-400 text-lg">Forecast Range</p>
          </div>

          <div className="group">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
              Real-time
            </div>
            <p className="text-gray-400 text-lg">Data Updates</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-400">
            Built with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
