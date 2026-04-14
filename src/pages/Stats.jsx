import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FriendContextApi } from "../context-api/FriendContext";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
];

const PieChartComponent = () => {
  const { friends = [] } = useContext(FriendContextApi);

  if (!friends.length) {
    return <p className="text-center">Loading chart...</p>;
  }

  // 🔥 Sort + Top 5 + Others
  const sorted = [...friends].sort((a, b) => b.goal - a.goal);
  const topFive = sorted.slice(0, 5);
  const others = sorted.slice(5);

  const othersTotal = others.reduce((sum, item) => sum + item.goal, 0);

  const chartData = [
    ...topFive.map((item) => ({
      name: item.name,
      value: item.goal,
    })),
    ...(othersTotal > 0 ? [{ name: "Others", value: othersTotal }] : []),
  ];

  return (
    <div>
      <p className="mb-4 text-2xl font-bold">Friendship Analytics Days:</p>
      <div className="w-full h-[400px] shadow-2xl">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50} // 🔥 doughnut style
              label
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
