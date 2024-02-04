"use client";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import ConnectButton from "./connectButton";
import Image from "next/image";
import { DisplayEthBalance } from "./displayEthBalance";

export function WalletConnectInfo() {
  const { address, isConnected } = useWeb3ModalAccount();

  const truncatedAddress = address?.slice(0, 6) + "..." + address?.slice(-4);
  return (
    <div className="mt-4 md:mt-2 ml-5 md:ml-0 md:mr-8">
      {!isConnected && <ConnectButton />} 
      {isConnected && (
        <div className="flex items-center md:justify-center md:mr-12">
          <Image alt="blast logo" src="/images/blast_logo_icon_yellow.svg" width={50} height={50} />
          <p className="text-blast-100 text-lg mx-auto text-center md:ml-1 md:mr-5">
            {truncatedAddress}
          </p>
          <Image alt="eth logo" src="/images/eth_logo.svg" width={20} height={10} />
          <DisplayEthBalance className="text-blast-100 text-lg mx-auto text-center ml-1"/>
        </div>
      )}
    </div>
  );
}
