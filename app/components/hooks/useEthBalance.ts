// hooks/useEthBalance.ts
import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";

export function useEthBalance() {
  const { chainId, address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    async function fetchBalance() {
      if (walletProvider && address) {
        const balanceBigInt = await walletProvider.request({
            method: "eth_getBalance",
            params: [address],
            });
        const balanceInEth = ethers.formatEther(balanceBigInt);
        setBalance(balanceInEth);
      }
    }

    if (isConnected) {
      fetchBalance();
    }
  }, [walletProvider, address, isConnected, chainId]);

  return balance;
}
