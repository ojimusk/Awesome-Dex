"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TradePage() {
  const [price, setPrice] = useState("96,450");
  const [change, setChange] = useState("+2.4%");

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header Harga */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">BTC/USDT</h1>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-bitcoin-500">
              ${price}
            </span>
            <span className="text-green-500 font-semibold">{change}</span>
          </div>
        </div>
        <Button className="bg-bitcoin-500 hover:bg-bitcoin-600 text-black">
          Connect Wallet
        </Button>
      </div>

      {/* 3 Kolom Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Kolom Kiri: Chart */}
        <div className="lg:col-span-2">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                📊 Chart
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">
                TradingView Chart akan muncul di sini
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Kolom Kanan: Orderbook */}
        <div>
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                📖 Orderbook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="grid grid-cols-3 text-muted-foreground border-b border-border pb-2">
                  <span>Price</span>
                  <span className="text-right">Size</span>
                  <span className="text-right">Total</span>
                </div>
                {/* Ask (Sell) */}
                <div className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1">
                  <span>96,500</span>
                  <span className="text-right">0.45</span>
                  <span className="text-right">12.3</span>
                </div>
                <div className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1">
                  <span>96,450</span>
                  <span className="text-right">0.89</span>
                  <span className="text-right">24.7</span>
                </div>
                <div className="grid grid-cols-3 text-red-400 hover:bg-red-500/10 py-1">
                  <span>96,400</span>
                  <span className="text-right">1.23</span>
                  <span className="text-right">45.6</span>
                </div>
                {/* Spread */}
                <div className="text-center py-2 text-xs text-muted-foreground border-y border-border">
                  Spread: 0.05%
                </div>
                {/* Bid (Buy) */}
                <div className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1">
                  <span>96,350</span>
                  <span className="text-right">0.67</span>
                  <span className="text-right">18.2</span>
                </div>
                <div className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1">
                  <span>96,300</span>
                  <span className="text-right">0.92</span>
                  <span className="text-right">33.8</span>
                </div>
                <div className="grid grid-cols-3 text-green-400 hover:bg-green-500/10 py-1">
                  <span>96,250</span>
                  <span className="text-right">1.45</span>
                  <span className="text-right">56.4</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom: News & Fear Greed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              😱 Fear & Greed Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-yellow-500">42</div>
              <div className="text-sm">Fear</div>
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[42%] bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              📰 Bitcoin News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">🟢</span>
                <span className="text-muted-foreground">BTC ETF inflow $245M</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">🔴</span>
                <span className="text-muted-foreground">Fed signals rate hike</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">⚪</span>
                <span className="text-muted-foreground">Bitcoin hash rate ATH</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-muted-foreground border-t border-border pt-4">
        🟠 Awesome DEX • Built by Musk Team • Non-custodial
      </div>
    </div>
  );
        }
