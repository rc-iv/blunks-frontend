"use client";
import { useWeb3Modal } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <div>
      <button
        className="bg-blast-100 text-black text-lg border-2 px-10 h-12 cut-corners-button rounded-xl"
        onClick={() => open()}
      >
        Connect Wallet
      </button>
    </div>
  );
}
