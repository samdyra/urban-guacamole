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
      Target: 0,
      aktualisasi: 27.21,
    },
    {
      name: "2015",
      Target: 0.15,
      aktualisasi: 28.11,
    },
    {
      name: "2020",
      Target: 0.3,
      aktualisasi: 28.74,
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
            {/* <linearGradient id="Target" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient> */}
            <linearGradient id="aktualisasi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FFA500" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#FFA500" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis type="number" domain={[20, 45]} />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Target"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#Target)"
          />
          <Area
            type="monotone"
            dataKey="aktualisasi"
            stroke="#FFA500"
            fillOpacity={1}
            fill="url(#aktualisasi)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
