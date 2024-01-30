import React from "react";
import { WalletConnectInfo } from "./components/web3/walletConnectionInfo";

export default function Home() {
  const totalImages = 32;
  const imagesPerRow = 7;
  const numRows = Math.ceil(totalImages / imagesPerRow);

  return (
    <div className="min-h-screen ">
      <div className="w-[97%] mx-auto mt-6 border-[#404833] border-4 bg-gradient-to-b from-camo-700 from-40% via-camo-600 to-camo-500 rounded-lg">
        <div className="flex justify-between my-4">
          <h1 className="text-6xl text-blast-300 font-Geom-Graphic-Bold-Italic ml-20">
            ASTROPUNKS
          </h1>
          <WalletConnectInfo />
        </div>
        <div className="bg-camo-400 h-[1px] w-11/12 mx-auto my-4"></div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center w-1/4">
            <p className="text-blast-100 text-lg mx-auto text-center">Eth Balance: 0.552936</p>
            <p className="text-blast-100 text-lg mx-auto text-center">AtroPunk Points: 0.552936</p>
            <button className="bg-blast-300 text-black text-xl border-2 px-10 h-12 my-2 cut-corners-button rounded-xl">
              MINT ASTROPUNK
            </button>

            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <p className="text-blast-100 p-10">
              First section
            </p>
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <p className="text-blast-100 p-10">
              Second section
            </p>
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
          </div>
          <div className="bg-camo-400 min-h-[400px] w-[1px] my-auto mx-auto"></div>
          <div className="w-2/3 mx-10">
            <div className="flex justify-between">
              <h1 className="text-blast-100 text-4xl">
                Mint Progress
              </h1>
              <div className="w-1/2">
                <div className="flex justify-between">
                  <h2 className="text-camo-300 text-xl">
                    Mint Goal
                  </h2>
                  <p className="text-blast-100">
                    2222 of 4444 AstroPunks minted
                  </p>
                </div>
                <div className="w-full bg-camo-500 h-[15px] my-auto">
                  <div className="bg-blast-300 w-[90%] h-[15px]"></div>
                </div>
              </div>
            </div>
            <div className="bg-camo-400 h-[1px] w-fullmx-auto my-4"></div>
            <div className="flex justify-between">
              <h2 className="text-blast-100 text-2xl my-auto">
                Mint Your AstroPunk
              </h2>
              <div className="flex">
                <p className="text-blast-100 text-lg my-auto"></p>
                <button className="bg-blast-100 text-black text-xl border-2 px-10 h-12 mt-2 m-2 cut-corners-button rounded-xl">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">
              4,444 unique collectible characters with proof of ownership stored
              on the Blast Layer 2 blockchain.
            </p>
            <div className="bg-camo-400 h-[1px] w-fullmx-auto my-4"></div>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">
              AstroPunks are one of the earliest and most iconic examples of
              "Non-Fungible Tokens” minted on Blast.{" "}
            </p>
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">
              Section 3
            </p>
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
