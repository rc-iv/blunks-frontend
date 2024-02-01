import React from "react";
import { WalletConnectInfo } from "./components/web3/walletConnectionInfo";
import MintButton from "./components/web3/mintButton";
import { DisplayEthBalance } from "./components/web3/displayEthBalance";
import { DisplayNftBalance } from "./components/web3/displayNftBalance";
import { ProgressBar } from "./components/web3/progressBar";
import Image from "next/image";
import { FooterLinkDisplay } from "./components/ui/footerLinkDisplay";
import { BodyImageWithText } from "./components/ui/bodyImageWithText";

export default function Home() {
  const totalImages = 32;
  const imagesPerRow = 7;
  const numRows = Math.ceil(totalImages / imagesPerRow);

  return (
    <div className="min-h-[90%]">
      <div className="w-[98%] mx-auto mt-4 border-[#404833] border-4 bg-gradient-to-b from-camo-700 from-40% via-camo-600 to-camo-500 rounded-lg">
        <div className="flex justify-between my-4">
          <h1 className="text-5xl text-blast-300 font-Geom-Graphic-Bold-Italic ml-20">
            BLUNKS
          </h1>
          <WalletConnectInfo />
        </div>
        <div className="bg-camo-400 h-[1px] w-11/12 mx-auto my-4"></div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center w-1/4 ml-4">
            <div className="flex">
              <p className="text-blast-100 text-lg mx-auto text-center mr-1">
                Eth Balance:
              </p>
              <DisplayEthBalance className="text-blast-100 text-lg font-bold" />
            </div>
            <div className="flex">
              <p className="text-blast-100 text-lg mx-auto text-center mr-1">
                Blunks Owned:
              </p>
              <DisplayNftBalance className="text-blast-100 text-lg font-bold" />
            </div>
            <div className="bg-camo-400 h-[1px] w-3/4 mx-auto my-4"></div>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">
              SUPPLY : 4444
            </p>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">
              PRICE : 0.005
            </p>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">
              VIBES: Immaculate
            </p>
            <p className="text-xl text-blast-100 w-1/2 mx-auto">MEMES: Spicy</p>
            <div className="bg-camo-400 h-[1px] w-3/4 mx-auto my-4"></div>
            <Image
              alt="blunk"
              src="/images/blunk 1.png"
              width={300}
              height={300}
            />
          </div>
          <div className="bg-camo-400 min-h-[400px] w-[1px] my-auto mx-auto"></div>
          <div className="w-2/3 mx-10">
            <ProgressBar />
            <div className="bg-camo-400 h-[1px] w-fullmx-auto my-4"></div>
            <div className="flex justify-between">
              <h2 className="text-blast-100 text-2xl my-auto">
                Mint Your Blunk
              </h2>
              <div className="flex">
                <p className="text-blast-100 text-lg my-auto"></p>
                <MintButton />
              </div>
            </div>
            {/* </div>
          <div> */}
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <BodyImageWithText
              alt="blunk 2"
              image="/images/blunk 2.png"
              text="Blunks are a collection of 4444 unique NFTs on the Blast blockchain."
            />
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>

            <BodyImageWithText
              alt="blunk 3"
              image="/images/blunk 3.png"
              text="Blunks aim to be the most vibrant and active community in the Blast ecosystem."
            />

            <div className="bg-camo-400 h-[1px] w-fullmx-auto my-4"></div>
            <BodyImageWithText
              alt="blunk 4"
              image="/images/blunk 4.png"
              text="100% token gated discord where fellow degens, builders, and artists can connect and collaborate."
            /> 
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <BodyImageWithText
              alt="blunk 5"
              image="/images/blunk 5.png"
              text="Blast off and mint your Blunk today!"
            />
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
            <FooterLinkDisplay />
            
          </div>
        </div>
        <div className="bg-camo-400 h-[3px] w-full mx-auto mt-4"></div>
      </div>
      
    </div>
  );
}
