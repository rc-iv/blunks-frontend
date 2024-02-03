// hooks/useTotalSupply.ts
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi } from "../web3/contractAbi";

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL!;
const provider = new ethers.JsonRpcProvider(rpcUrl);

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export function useTotalSupply() {
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    async function fetchTotalSupply() {
      try {
        const balance = await contract.totalSupply();
        setTotalSupply(balance.toString());
      } catch (error) {
        console.error("Error fetching total supply:", error);
        setTotalSupply(NaN);
      }
      
    }

    fetchTotalSupply(); // Initial fetch

    // const intervalId = setInterval(fetchTotalSupply, 60000); // Set to fetch every 60 seconds

    // // Cleanup function to clear the interval when the component unmounts
    // return () => clearInterval(intervalId);
  }, []);

  return totalSupply;
}
