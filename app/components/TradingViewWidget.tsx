"use client";

import { useEffect, useRef } from "react";
import { createChart, ColorType } from "@tradingview/lightweight-charts";

export default function TradingViewWidget() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "#1E2329" },
        textColor: "#8B8B8B",
      },
      grid: {
        vertLines: { color: "#2B3139" },
        horzLines: { color: "#2B3139" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
    });

    // Data dummy
    const data = [
      { time: "2024-01-01", value: 45000 },
      { time: "2024-01-02", value: 45500 },
      { time: "2024-01-03", value: 45200 },
      { time: "2024-01-04", value: 45800 },
      { time: "2024-01-05", value: 46200 },
      { time: "2024-01-06", value: 46000 },
      { time: "2024-01-07", value: 46500 },
    ];

    const lineSeries = chart.addLineSeries({
      color: "#F7931A",
      lineWidth: 2,
    });

    lineSeries.setData(data);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
      <div className="text-sm text-gray-400 mb-2">📊 Chart</div>
      <div ref={chartContainerRef} className="w-full" />
      <div className="flex gap-2 mt-3 text-xs flex-wrap">
        <button className="px-3 py-1 bg-[#2B3139] rounded hover:bg-[#3B4149]">1m</button>
        <button className="px-3 py-1 bg-[#2B3139] rounded hover:bg-[#3B4149]">5m</button>
        <button className="px-3 py-1 bg-[#F7931A] text-black rounded font-semibold">15m</button>
        <button className="px-3 py-1 bg-[#2B3139] rounded hover:bg-[#3B4149]">1H</button>
        <button className="px-3 py-1 bg-[#2B3139] rounded hover:bg-[#3B4149]">4H</button>
        <button className="px-3 py-1 bg-[#2B3139] rounded hover:bg-[#3B4149]">D</button>
      </div>
    </div>
  );
}
