"use client";

export default function TradePage() {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-white p-4">
      <h1 className="text-2xl font-bold text-[#F7931A]">🔥 Awesome DEX</h1>
      <p className="text-gray-400 mt-2">Halaman Trade - Coming Soon!</p>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-[#1E2329] rounded-lg p-8 border border-[#2B3139]">
          <p className="text-gray-500 text-center">📊 Chart akan muncul di sini</p>
        </div>
        <div className="bg-[#1E2329] rounded-lg p-8 border border-[#2B3139]">
          <p className="text-gray-500 text-center">📖 Orderbook akan muncul di sini</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-500 border-t border-[#2B3139] pt-4">
        🟠 Awesome DEX • Built by Musk Team
      </div>
    </div>
  );
}
