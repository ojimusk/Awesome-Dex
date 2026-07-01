"use client";

import { useState } from "react";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = () => {
    // Simulasi connect
    setConnected(true);
    setAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAddress("");
  };

  if (connected) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-300">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        </div>
        <button
          onClick={disconnectWallet}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs px-3 py-1 rounded-lg"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      className="bg-[#F7931A] hover:bg-[#E07C0F] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
    >
      Connect Wallet
    </button>
  );
}
