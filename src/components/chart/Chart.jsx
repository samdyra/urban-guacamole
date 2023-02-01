import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ aspect, title, actualData }) => {
  const data = [
    {
      name: "2010",
      UHI: 32.21,
    },
    {
      name: "2015",
      UHI: 33.11,
    },
    {
      name: "2020",
      UHI: 34.74,
    }
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={700}
          height={100}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="UHI" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FFA500" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#FFA500" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis type="number" domain={[20, 30]} />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="UHI"
            stroke="#FFA500"
            fillOpacity={1}
            fill="url(#UHI)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
