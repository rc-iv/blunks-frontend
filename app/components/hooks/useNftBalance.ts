// hooks/useNftBalance.ts
import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { contractAbi } from "../web3/contractAbi";

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL!;
const provider = new ethers.JsonRpcProvider(rpcUrl)

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export function useNftBalance() {
  const { chainId, address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [nftBalance, setNftBalance] = useState("0");

  useEffect(() => {
    async function fetchNFTBalance() {
      if (!isConnected || !address || !walletProvider) return;

      const contract = new ethers.Contract(contractAddress, contractAbi, provider);
      try {
        const balance = await contract.balanceOf(address);
        setNftBalance(balance.toString());
      } catch (error) {
        console.error("Error fetching NFT balance:", error);
        setNftBalance("Error");
      }
    }

    fetchNFTBalance();
  }, [address, isConnected, walletProvider]);

  return nftBalance;
}
