"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface nftData {
  name: string;
  file_url: string;
}
export function NFTDisplay({
  cid,
  tokenId,
}: Readonly<{ cid: string; tokenId: number }>) {
  const [nftData, setNftData] = useState<nftData | null>(null);

  useEffect(() => {
    const fetchNftData = async () => {
      try {
        const url = `https://ipfs.io/ipfs/${cid}/${tokenId}`;
        const response = await fetch(url);
        const data = await response.json();
        setNftData(data);
        const baseImageUrl = data.file_url;
        setNftData({...data, file_url: baseImageUrl.replace("ipfs://", "https://ipfs.io/ipfs/")});
        
      } catch (error) {
        console.error("Failed to fetch NFT data:", error);
      }
    };

    fetchNftData();
  }, [cid, tokenId]);
  if (!nftData) {
    return <div>Loading NFT data...</div>; // Render loading state or null if you prefer
  }

  // Rendering of NFT data after it's been loaded
  return (
    <div className="">
      <img alt={nftData.name} src={nftData.file_url} width={200}/>
      <h3 className="text-blast-100 text-center">{nftData.name}</h3>
    </div>
  );
}
