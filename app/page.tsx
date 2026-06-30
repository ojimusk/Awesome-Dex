import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-bitcoin-500">Awesome</span> DEX
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Bitcoin-Only Decentralized Exchange
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-bitcoin-500 hover:bg-bitcoin-600 text-black font-semibold">
            Launch App
          </Button>
          <Button variant="outline">Documentation</Button>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          🟠 Built by Musk Team • Non-custodial • Premium Trading Experience
        </div>
      </div>
    </main>
  );
}
