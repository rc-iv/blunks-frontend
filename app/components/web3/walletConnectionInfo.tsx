"use client";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import ConnectButton from "./connectButton";

export function WalletConnectInfo() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const truncatedAddress = address?.slice(0, 6) + "..." + address?.slice(-4);

  return (
    <div>
      {!isConnected && <ConnectButton />}
      {isConnected && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-blast-100 text-lg mx-auto text-center">
            {truncatedAddress}
          </p>
        </div>
      )}
    </div>
  );
}
