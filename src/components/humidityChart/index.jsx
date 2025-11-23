import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export function HumidityChart({ chartData }) {
  if (!chartData || chartData.length === 0) {
    return <div className="text-white text-center py-8">No chart data available</div>;
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">Humidity Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
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
            dataKey="humidity"
            stroke="#06b6d4"
            strokeWidth={2}
            dot={{ fill: "#06b6d4", r: 4 }}
            name="Humidity"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}