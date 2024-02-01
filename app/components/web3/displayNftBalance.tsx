"use client";
import { useNftBalance } from "../hooks/useNftBalance";

export function DisplayNftBalance({className}: Readonly<{className: string}>) {
  const nftBalance = useNftBalance();
  return <p className={className}>{nftBalance}</p>;
}
