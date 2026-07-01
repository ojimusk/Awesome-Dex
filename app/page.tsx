"use client";

export default function Home() {
  const goToTrade = () => {
    window.location.href = "/trade";
  };

  return (
    <div className="min-h-screen bg-[#0B0E11] flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-[#F7931A]">Awesome</span> DEX
      </h1>
      <p className="text-gray-400 mb-6">Bitcoin-Only Decentralized Exchange</p>
      <button
        onClick={goToTrade}
        className="bg-[#F7931A] hover:bg-[#E07C0F] text-black font-bold px-8 py-3 rounded-lg text-lg"
      >
        🚀 Launch App
      </button>
      <p className="mt-8 text-xs text-gray-600">🟠 Built by Musk Team</p>
    </div>
  );
}
