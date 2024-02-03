import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useTotalSupply } from "./useTotalSupply";
import { contractAbi } from "../web3/contractAbi";
import { parse } from "path";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!.toLowerCase();

function useUserNftInventory(address: `0x${string}`, balance: number) {
  const [userNfts, setUserNfts] = useState<string[]>([]);
  const totalSupply = useTotalSupply(); // Assuming this hook returns the total supply correctly

  useEffect(() => {
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const fetchUserNfts = async () => {
      let foundNfts = [];
      for (let tokenId = 0; foundNfts.length < balance && tokenId < totalSupply; tokenId++) {
        try {
          const owner = await contract.ownerOf(tokenId);
          if (owner.toLowerCase() === address.toLowerCase()) {
            const tokenIdJson = parseInt(tokenId.toString())+1;
            foundNfts.push(tokenIdJson.toString());
          }
        } catch (error) {
          console.error(`Error fetching owner for token ID ${tokenId}:`, error);
          // Optionally handle tokens that might not exist or other errors
        }
        // sleep for .5 seconds to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      setUserNfts(foundNfts);
    };

    if (address && totalSupply > 0 && balance > 0) {
      fetchUserNfts();
    }
  }, [address, totalSupply, balance]);

  return userNfts;
}

export default useUserNftInventory;