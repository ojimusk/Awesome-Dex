"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect otomatis ke halaman Trade
    router.push("/trade");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center">
      <p className="text-[#F7931A] text-xl">Loading Awesome DEX...</p>
    </div>
  );
}
