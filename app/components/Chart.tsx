export default function Chart() {
  return (
    <div className="bg-[#1E2329] rounded-lg p-4 border border-[#2B3139]">
      <div className="text-sm text-gray-400 mb-2">📊 Chart</div>
      <div className="h-[300px] flex items-center justify-center border border-dashed border-[#2B3139] rounded-lg">
        <p className="text-gray-500 text-sm">TradingView Chart akan muncul di sini</p>
      </div>
      <div className="flex gap-2 mt-3 text-xs">
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
