"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export function NFTDisplay({
  cid,
  tokenId,
}: Readonly<{ cid: string; tokenId: number }>) {
  const [nftData, setNftData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchNftData = async () => {
      try {
        const url = `https://ipfs.io/ipfs/${cid}/${tokenId}`;
        console.log(`URL is: ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        setNftData(data);
        const baseImageUrl = data.file_url;

        setImageUrl(baseImageUrl.replace("ipfs://", "https://ipfs.io/ipfs/"));
        console.log(`Image URL is: ${imageUrl}`);

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
      <img alt={nftData.name} src={imageUrl} className="h-3/4"/>
      <h3 className="text-blast-100 text-center">{nftData.name}</h3>
    </div>
  );
}
