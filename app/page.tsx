import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#0B0E11]">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#F7931A]">Awesome</span> DEX
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Bitcoin-Only Decentralized Exchange
        </p>
        <Link href="/trade">
          <button className="bg-[#F7931A] hover:bg-[#E07C0F] text-black font-bold text-lg px-8 py-4 rounded-lg">
            🚀 Launch App
          </button>
        </Link>
        <div className="mt-12 text-sm text-gray-500">
          🟠 Built by Musk Team • Non-custodial
        </div>
      </div>
    </main>
  );
}
