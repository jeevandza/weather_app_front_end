import { MapPin, ChevronDown, History, Trash2 } from "lucide-react";

export function CountryCitySelector({ 
  cities = [],
  selectedCity = "",
  recentCities = [],
  showHistory = true,
  onCityChange = () => {},
  onShowHistory = () => {},
  onClearHistory = () => {},
  loading = false 
}) {
  const handleCitySelect = (city) => {
    onCityChange(city);
    onShowHistory(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 px-4 py-3 md:px-6 md:py-4 relative z-30">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-3 md:p-4 border border-white/20">
          
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={22} className="text-blue-300" />
            <h2 className="text-lg md:text-xl font-bold text-white">Select City</h2>
          </div>

          {/* City Input */}
          <div className="relative">
            <label className="block text-xs md:text-sm font-semibold text-blue-100 mb-2">
              City
            </label>
            <div className="relative">
              <input
                type="text"
                value={selectedCity}
                onChange={(e) => {
                  onCityChange(e.target.value);
                  onShowHistory(true);
                }}
                onFocus={() => onShowHistory(true)}
                onBlur={() => setTimeout(() => onShowHistory(false), 200)}
                placeholder="Search city..."
                disabled={loading}
                className={`w-full backdrop-blur border-0 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base font-medium transition-all ${
                  loading
                    ? "opacity-50 cursor-not-allowed bg-white/10 text-blue-200"
                    : "bg-white/20 text-white placeholder-blue-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300"
                }`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                {loading ? (
                  <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <ChevronDown size={16} className="text-blue-200" />
                )}
              </div>
            </div>

            {/* Dropdown - History & Cities */}
            {showHistory && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-lg border border-slate-600 shadow-2xl z-50 max-h-64 overflow-y-auto">
                
                {/* Previously Searched */}
                {recentCities.length > 0 && (
                  <>
                    <div className="sticky top-0 px-3 py-2 border-b border-slate-600 bg-slate-900 flex items-center justify-between">
                      <p className="text-xs font-semibold text-blue-300 flex items-center gap-2">
                        <History size={14} /> Previously Searched
                      </p>
                      <button
                        onClick={() => onClearHistory()}
                        className="p-1 hover:bg-slate-700 rounded transition-all text-red-400 hover:text-red-300"
                        title="Clear history"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="py-2">
                      {recentCities.map((city, index) => (
                        <button
                          key={index}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleCitySelect(city);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-slate-700 transition-all"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-slate-600" />
                  </>
                )}

                {/* All Cities */}
                <div className="py-2">
                  <div className="px-4 py-1">
                    <p className="text-xs font-semibold text-blue-300">All Cities</p>
                  </div>
                  {cities.length > 0 ? (
                    cities.map((city) => (
                      <button
                        key={city.name}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleCitySelect(city.name);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-slate-700 transition-all"
                      >
                        {city.name}
                      </button>
                    ))
                  ) : (
                    null
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Selected Info */}
          {selectedCity && (
            <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2 text-blue-50">
              <MapPin size={14} className="text-green-300" />
              <p className="text-xs md:text-sm font-semibold">
                Selected: {selectedCity}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}