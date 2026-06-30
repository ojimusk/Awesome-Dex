"use client";

import { useState } from "react";

export default function TradePage() {
  const [price, setPrice] = useState("96,450");
  const [change, setChange] = useState("+2.4%");

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white p-4">
      {/* Header Harga */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">BTC/USDT</h1>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#F7931A]">
              ${price}
            </span>
            <span className="text-green-500 font-semibold">{change}</span>
          </div>
        </div>
        <button className="bg-[#F7931A] hover:bg-[#E07C0F] text-black font-semibold px-4 py-2 rounded-lg">
          Connect Wallet
        </button>
      </div>

      {/* 3 Kolom Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Kolom Kiri: Chart */}
        <div className="lg:col-span-2">
          <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
            <div className="text-sm text-gray-400 mb-2">📊 Chart</div>
            <div className="h-[400px] flex items-center justify-center border border-dashed border-[#2B3139] rounded-lg">
              <p className="text-gray-500">TradingView Chart akan muncul di sini</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Orderbook */}
        <div>
          <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
            <div className="text-sm text-gray-400 mb-2">📖 Orderbook</div>
            <div className="space-y-1 text-sm">
              <div className="grid grid-cols-3 text-gray-400 border-b border-[#2B3139] pb-2">
                <span>Price</span>
                <span className="text-right">Size</span>
                <span className="text-right">Total</span>
              </div>
              {/* Ask (Sell) */}
              <div className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1">
                <span>96,500</span>
                <span className="text-right">0.45</span>
                <span className="text-right">12.3</span>
              </div>
              <div className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1">
                <span>96,450</span>
                <span className="text-right">0.89</span>
                <span className="text-right">24.7</span>
              </div>
              <div className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1">
                <span>96,400</span>
                <span className="text-right">1.23</span>
                <span className="text-right">45.6</span>
              </div>
              {/* Spread */}
              <div className="text-center py-2 text-xs text-gray-400 border-y border-[#2B3139]">
                Spread: 0.05%
              </div>
              {/* Bid (Buy) */}
              <div className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1">
                <span>96,350</span>
                <span className="text-right">0.67</span>
                <span className="text-right">18.2</span>
              </div>
              <div className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1">
                <span>96,300</span>
                <span className="text-right">0.92</span>
                <span className="text-right">33.8</span>
              </div>
              <div className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1">
                <span>96,250</span>
                <span className="text-right">1.45</span>
                <span className="text-right">56.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: News & Fear Greed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
          <div className="text-sm text-gray-400 mb-2">😱 Fear & Greed Index</div>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-yellow-500">42</div>
            <div className="text-sm">Fear</div>
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[42%] bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
          <div className="text-sm text-gray-400 mb-2">📰 Bitcoin News</div>
          <div className="space-y-2 text-sm">
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
              <span className="text-gray-300">Bitcoin hash rate ATH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-500 border-t border-[#2B3139] pt-4">
        🟠 Awesome DEX • Built by Musk Team • Non-custodial
      </div>
    </div>
  );
}
