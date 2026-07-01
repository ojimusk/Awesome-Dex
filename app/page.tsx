"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect langsung ke halaman Trade
    router.push("/trade");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#F7931A]">🔥 Awesome DEX</h1>
        <p className="text-gray-500 mt-2 text-sm">Loading...</p>
      </div>
    </div>
  );
}
