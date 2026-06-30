export default function Analysis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Fear & Greed */}
      <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
        <div className="text-sm text-gray-400 mb-2">😱 Fear & Greed Index</div>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-yellow-500">42</div>
          <div className="text-sm text-gray-300">Fear</div>
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-[42%] bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Updated: 5 min ago
        </div>
      </div>

      {/* News */}
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
