"use client";

import { useState } from "react";
import TradingViewWidget from "../components/TradingViewWidget";
import WalletConnect from "../components/WalletConnect";

// ============ KOMPONEN ORDERBOOK ============
function Orderbook() {
  const asks = [
    { price: "96,500", size: "0.45", total: "12.3" },
    { price: "96,450", size: "0.89", total: "24.7" },
    { price: "96,400", size: "1.23", total: "45.6" },
  ];
  const bids = [
    { price: "96,350", size: "0.67", total: "18.2" },
    { price: "96,300", size: "0.92", total: "33.8" },
    { price: "96,250", size: "1.45", total: "56.4" },
  ];

  return (
    <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
      <div className="text-sm text-gray-400 mb-2">📖 Orderbook</div>
      <div className="space-y-1 text-xs">
        <div className="grid grid-cols-3 text-gray-500 border-b border-[#2B3139] pb-2">
          <span>Price</span>
          <span className="text-right">Size</span>
          <span className="text-right">Total</span>
        </div>
        {asks.map((item, i) => (
          <div key={i} className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1 rounded">
            <span>{item.price}</span>
            <span className="text-right">{item.size}</span>
            <span className="text-right">{item.total}</span>
          </div>
        ))}
        <div className="text-center py-2 text-xs text-gray-500 border-y border-[#2B3139]">
          Spread: 0.05%
        </div>
        {bids.map((item, i) => (
          <div key={i} className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1 rounded">
            <span>{item.price}</span>
            <span className="text-right">{item.size}</span>
            <span className="text-right">{item.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ KOMPONEN ANALYSIS ============
function Analysis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
        <div className="text-sm text-gray-400 mb-2">😱 Fear & Greed Index</div>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-yellow-500">42</div>
          <div className="text-sm text-gray-300">Fear</div>
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-[42%] bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">Updated: 5 min ago</div>
      </div>

      <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
        <div className="text-sm text-gray-400 mb-2">📰 Bitcoin News</div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-green-400">🟢</span>
            <span className="text-gray-300">BTC ETF inflow $245M</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">🔴</span>
            <span className="text-gray-300">Fed signals rate hike</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">⚪</span>
            <span className="text-gray-300">Bitcoin hash rate reaches ATH</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">🟢</span>
            <span className="text-gray-300">MicroStrategy buys 1,000 BTC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ HALAMAN UTAMA TRADE ============
export default function TradePage() {
  const [price] = useState("96,450");
  const [change] = useState("+2.4%");

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold">BTC/USDT</h1>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#F7931A]">${price}</span>
            <span className="text-green-500 text-sm">{change}</span>
          </div>
        </div>
        <WalletConnect />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TradingViewWidget />
        </div>
        <div>
          <Orderbook />
        </div>
      </div>

      <div className="mt-4">
        <Analysis />
      </div>

      <div className="mt-6 text-center text-xs text-gray-600 border-t border-[#1E2329] pt-4">
        🟠 Awesome DEX • Built by Musk Team • Non-custodial
      </div>
    </div>
  );
}
