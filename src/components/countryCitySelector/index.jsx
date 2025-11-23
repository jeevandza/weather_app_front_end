import { Globe, MapPin, ChevronDown } from "lucide-react";

export function CountryCitySelector({ 
  countries = [], 
  filteredCities = [],
  selectedCountry = "",
  selectedCity = "",
  onCountryChange = () => {},
  onCityChange = () => {},
  loading = false 
}) {

  return (
    <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 px-4 py-3 md:px-6 md:py-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-3 md:p-4 border border-white/20">
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <Globe size={22} className="text-blue-300" />
            <h2 className="text-lg md:text-xl font-bold text-white">Select Location</h2>
          </div>

          {/* Selectors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            
            {/* Country Selector */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-blue-100 mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => onCountryChange(e.target.value)}
                  className="w-full bg-white/20 backdrop-blur border-0 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white font-medium appearance-none cursor-pointer hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                >
                  <option value="" className="bg-slate-800 text-white">
                    Select country
                  </option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name} className="bg-slate-800 text-white">
                      {country.name}
                    </option>
                  ))}
                </select>
                <ChevronDown 
                  size={16} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 pointer-events-none"
                />
              </div>
            </div>

            {/* City Selector */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-blue-100 mb-2">
                City
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => onCityChange(e.target.value)}
                  disabled={!selectedCountry || loading}
                  className={`w-full backdrop-blur border-0 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base font-medium appearance-none cursor-pointer transition-all ${
                    !selectedCountry || loading
                      ? "opacity-50 cursor-not-allowed bg-white/10 text-blue-200"
                      : "bg-white/20 text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  }`}
                >
                  <option value="" className="bg-slate-800 text-white">
                    {loading ? "Loading..." : "Select city"}
                  </option>
                  {filteredCities.map((city) => (
                    <option key={city.name} value={city.name} className="bg-slate-800 text-white">
                      {city.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <ChevronDown size={16} className="text-blue-200" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Info */}
          {selectedCountry && selectedCity && (
            <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2 text-blue-50">
              <MapPin size={14} className="text-green-300" />
              <p className="text-xs md:text-sm font-semibold">
                {selectedCity}, {selectedCountry}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}