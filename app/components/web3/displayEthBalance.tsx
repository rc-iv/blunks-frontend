"use client";
import { useEthBalance } from "../hooks/useEthBalance";

export function DisplayEthBalance({className}: Readonly<{className: string}>) {
  const ethBalance = useEthBalance();
  const truncatedEthBalance = ethBalance?.slice(0, 5);
  return <p className={className}>{truncatedEthBalance}</p>;
}
