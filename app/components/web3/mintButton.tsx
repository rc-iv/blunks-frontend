"use client";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { contractAbi } from "./contractAbi";
import ConnectButton from "./connectButton";
import { useState } from "react";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export default function MintButton() {
  const { address, isConnected, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [quantity, setQuantity] = useState(1);
  const mintPrice = 0.005;
  
  const mintToken = async () => {
    if (!isConnected || !walletProvider) {
      alert("Please connect your wallet first");
      return;
    }

    const targetChainId = "0xA0C71FD";

    if (chainId !== parseInt(targetChainId, 16)) {
      try {
        await walletProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: targetChainId }], // Requires hexadecimal chainId
        });
        // Chain switched successfully, you can proceed with the transaction after this
      } catch (error) {
        const switchError = error as { code: number };
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await walletProvider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: targetChainId,
                  chainName: "Blast Sepolia", // Example name, replace with actual
                  nativeCurrency: {
                    symbol: "ETH", // Example symbol, replace with actual
                    decimals: 18,
                  },
                  rpcUrls: ["https://sepolia.blast.io"],
                  blockExplorerUrls: ["https://testnet.blastscan.io"],
                },
              ],
            });
            // The network has been added successfully.
          } catch (addError) {
            console.error("Error adding new chain", addError);
          }
        }
        console.error("Error switching chain", switchError);
        return;
      }
    }

    const mintCost = ethers.parseEther((mintPrice * quantity).toString());
    // convert to hex string
    const mintCostHex = ethers.toBeHex(mintCost);

    try {
      const contractInterface = new ethers.Interface(contractAbi);
      const data = contractInterface.encodeFunctionData("mint", [quantity]);
      const tx = {
        from: address,
        to: contractAddress,
        value: mintCostHex,
        data: data,
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
    } catch (error) {
      console.log(error);
      alert("Error minting token");
    }
  };
  return (
    <div>
      {!isConnected && <ConnectButton />}
      {isConnected && (
        <div className="flex">
          <button
            className="bg-blast-100 text-black text-xl border-2 px-16 h-12 mt-2 m-2 cut-corners-button rounded-xl"
            onClick={mintToken}
          >
            Mint Blunk
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min={1}
            max={10}
            className="bg-blast-100 border-2 text-xl w-16 h-12 m-2 rounded-xl text-center"
          />
        </div>
      )}
    </div>
  );
}
