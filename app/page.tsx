export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0E11] text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#F7931A]">Awesome</span> DEX
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Bitcoin-Only Decentralized Exchange
        </p>
        <a href="/trade">
          <button className="mt-6 bg-[#F7931A] hover:bg-[#E07C0F] text-black font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors">
            🚀 Launch App
          </button>
        </a>
        <p className="mt-8 text-xs text-gray-600 border-t border-[#1E2329] pt-4">
          🟠 Built by Musk Team • Non-custodial
        </p>
      </div>
    </div>
  );
}
