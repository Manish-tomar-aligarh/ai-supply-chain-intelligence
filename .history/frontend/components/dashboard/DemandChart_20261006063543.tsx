"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", demand: 4200 },
  { month: "Feb", demand: 5100 },
  { month: "Mar", demand: 4700 },
  { month: "Apr", demand: 6200 },
  { month: "May", demand: 5800 },
  { month: "Jun", demand: 7100 },
  { month: "Jul", demand: 7600 },
];

export default function DemandChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="demandGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#22D3EE"
                stopOpacity={0.3}
              />

              <stop
                offset="100%"
                stopColor="#22D3EE"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1F2937"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            stroke="#64748B"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#64748B"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #1F2937",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="demand"
            stroke="#22D3EE"
            strokeWidth={2}
            fill="url(#demandGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}