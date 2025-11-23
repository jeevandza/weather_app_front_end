import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function TemperatureChart({ chartData, unit }) {
  if (!chartData || chartData.length === 0) {
    return <div className="text-white text-center py-8">No chart data available</div>;
  }

  const getTemp = (celsius) => {
    return unit === "fahrenheit" 
      ? Math.round((celsius * 9) / 5 + 32) 
      : Math.round(celsius);
  };

  const formattedData = chartData.map((item) => ({
    time: item.time,
    temp: getTemp(item.temp),
    humidity: item.humidity,
  }));

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">Temperature Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#60a5fa"
            strokeWidth={2}
            dot={{ fill: "#60a5fa", r: 4 }}
            name="Temperature"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}