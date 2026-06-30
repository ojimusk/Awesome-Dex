export default function Orderbook() {
  // Data dummy
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
        {/* Header */}
        <div className="grid grid-cols-3 text-gray-500 border-b border-[#2B3139] pb-2">
          <span>Price</span>
          <span className="text-right">Size</span>
          <span className="text-right">Total</span>
        </div>
        
        {/* Ask (Sell) - Warna Merah */}
        {asks.map((item, i) => (
          <div key={i} className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1 rounded">
            <span>{item.price}</span>
            <span className="text-right">{item.size}</span>
            <span className="text-right">{item.total}</span>
          </div>
        ))}
        
        {/* Spread */}
        <div className="text-center py-2 text-xs text-gray-500 border-y border-[#2B3139]">
          Spread: 0.05%
        </div>
        
        {/* Bid (Buy) - Warna Hijau */}
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
