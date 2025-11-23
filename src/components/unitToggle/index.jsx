


export function UnitToggle({ unit, onUnitChange }) {
  return (
    <div className="flex gap-2 bg-white/20 backdrop-blur rounded-full p-1 w-fit">
      <button
        onClick={() => onUnitChange("celsius")}
        className={`px-4 py-2 rounded-full font-semibold transition-all ${
          unit === "celsius"
            ? "bg-white/40 text-white"
            : "text-blue-100 hover:bg-white/10"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onUnitChange("fahrenheit")}
        className={`px-4 py-2 rounded-full font-semibold transition-all ${
          unit === "fahrenheit"
            ? "bg-white/40 text-white"
            : "text-blue-100 hover:bg-white/10"
        }`}
      >
        °F
      </button>
    </div>
  );
}
