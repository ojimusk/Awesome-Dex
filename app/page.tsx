import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-bitcoin-500">Awesome</span> DEX
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Bitcoin-Only Decentralized Exchange
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/trade">
            <Button className="bg-bitcoin-500 hover:bg-bitcoin-600 text-black font-semibold text-lg px-8 py-6">
              🚀 Launch App
            </Button>
          </Link>
          <Button variant="outline">Documentation</Button>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          🟠 Built by Musk Team • Non-custodial • Premium Trading Experience
        </div>
      </div>
    </main>
  );
}
