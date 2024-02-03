"use client";
import React from "react";
import useUserNftInventory from "../components/hooks/useUserNftInventory";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useNftBalance } from "../components/hooks/useNftBalance";
import useGetBaseUri from "../components/hooks/useGetBaseUri";
import { NFTDisplay } from "../components/ui/nftDisplay";

export default function Profile() {
  const { address, isConnected } = useWeb3ModalAccount();
  const userNftBalance = useNftBalance();
  const userNfts = isConnected
    ? useUserNftInventory(address!, parseInt(userNftBalance))
    : [];
  const baseUri = useGetBaseUri();

  // remove first 7 characters from baseUri to get the CID
  const cid = baseUri?.slice(7);

  //   console.log(`Base URI is: ${baseUri!}`);
  //   console.log(`User address is: ${address!}`);
  //   console.log(`the cid is: ${cid}`);

  if (!isConnected) {
    return (
      <div className="bg-black w-1/2 min-h-dvh mx-auto border-camo-300 border-2 rounded-md">
        <h1 className="text-blast-100">Please connect your wallet</h1>
      </div>
    );
  }
  return (
    <div className="bg-black w-1/2 min-h-dvh mx-auto border-camo-300 border-2 rounded-md">
      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {userNfts.map((tokenId) => (
          <NFTDisplay key={tokenId} cid={cid} tokenId={parseInt(tokenId)} />
        ))}
      </div>
    </div>
  );
}
