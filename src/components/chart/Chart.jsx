import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ aspect, title, actualData }) => {
  const data = [
    {
      name: "H-1",
      Target: 0,
      aktualisasi: actualData ? actualData[0].hari1 : 0,
    },
    {
      name: "H-2",
      Target: 0.15,
      aktualisasi: actualData ? actualData[0].hari2 : 0,
    },
    {
      name: "H-3",
      Target: 0.3,
      aktualisasi: actualData ? actualData[0].hari3 : 0,
    },
    {
      name: "H-4",
      Target: 0.475,
      aktualisasi: actualData ? actualData[0].hari4 : 0,
    },
    {
      name: "H-5",
      Target: 0.545,
      aktualisasi: actualData ? actualData[0].hari5 : 0,
    },
    {
      name: "H-6",
      Target: 0.605,
      aktualisasi: actualData ? actualData[0].hari6 : 0,
    },
    {
      name: "H-7",
      Target: 0.665,
      aktualisasi: actualData ? actualData[0].hari7 : 0,
    },
    {
      name: "H-8",
      Target: 0.725,
      aktualisasi: actualData ? actualData[0].hari8 : 0,
    },
    {
      name: "H-9",
      Target: 0.785,
      aktualisasi: actualData ? actualData[0].hari9 : 0,
    },
    {
      name: "H-10",
      Target: 1,
      aktualisasi: actualData ? actualData[0].hari10 : 0,
    },
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
            <linearGradient id="Target" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="aktualisasi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
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
