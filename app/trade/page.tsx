"use client";

import { useState } from "react";
import Chart from "../components/Chart";
import Orderbook from "../components/Orderbook";
import Analysis from "../components/Analysis";

export default function TradePage() {
  const [price, setPrice] = useState("96,450");
  const [change, setChange] = useState("+2.4%");

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold">BTC/USDT</h1>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#F7931A]">
              ${price}
            </span>
            <span className="text-green-500 text-sm">{change}</span>
          </div>
        </div>
        <button className="bg-[#F7931A] hover:bg-[#E07C0F] text-black font-semibold px-4 py-2 rounded-lg text-sm">
          Connect Wallet
        </button>
      </div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Kolom Kiri: Chart (2/3) */}
        <div className="lg:col-span-2">
          <Chart />
        </div>

        {/* Kolom Kanan: Orderbook (1/3) */}
        <div>
          <Orderbook />
        </div>
      </div>

      {/* Bottom: Analysis */}
      <div className="mt-4">
        <Analysis />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-gray-600 border-t border-[#1E2329] pt-4">
        🟠 Awesome DEX • Built by Musk Team • Non-custodial
      </div>
    </div>
  );
}
