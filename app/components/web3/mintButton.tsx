"use client";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { contractAbi } from "./contractAbi";
import ConnectButton from "./connectButton";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export default function MintButton() {
  const { address, isConnected, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const mintToken = async () => {
    if (!isConnected || !walletProvider) {
      alert("Please connect your wallet first");
      return;
    }

    if (chainId !== 168587773) {
      alert("Please switch to the Blast Sepolia network");
      return;
    }

    const mintPrice = ethers.parseEther("0.005");
    // convert to hex string
    const mintPriceHex = ethers.toBeHex(mintPrice);
    const quantity = 1;

    try {
      const contractInterface = new ethers.Interface(contractAbi);
      const data = contractInterface.encodeFunctionData("mint", [quantity]);
      const tx = {
        from: address,
        to: contractAddress,
        value: mintPriceHex,
        data: data
      };

      const txHash = await walletProvider.request({
        method: "eth_sendTransaction",
        params: [tx],
      });

      alert(`Transaction sent: ${txHash}`);

      const receipt = await walletProvider.request({
        method: "eth_getTransactionReceipt",
        params: [txHash],
      });

      alert(`AstroPunk Minted Successfully!`);
    } catch (error) {
      console.log(error);
      alert("Error minting token");
    }
  };
  return (
    <div>
      {!isConnected && <ConnectButton />}
      {isConnected && (
        <button
          className="bg-blast-100 text-black text-xl border-2 px-16 h-12 mt-2 m-2 cut-corners-button rounded-xl"
          onClick={mintToken}
        >
          Mint Blunk
        </button>
      )}
    </div>
  );
}