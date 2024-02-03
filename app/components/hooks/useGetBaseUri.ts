import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractAbi } from '../web3/contractAbi'; // Adjust the path as necessary

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

function useGetBaseUri() {
  const [baseUri, setBaseUri] = useState('');

  useEffect(() => {
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const fetchBaseUri = async () => {
      try {
        const uri = await contract.baseURI_(); // Adjust based on your contract's function name
        setBaseUri(uri);
      } catch (error) {
        console.error('Failed to fetch base URI:', error);
      }
    };

    fetchBaseUri();
  }, []); // Empty dependency array means this effect runs once on mount

  return baseUri;
}

export default useGetBaseUri;