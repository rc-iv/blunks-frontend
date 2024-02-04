import React from "react";
import { DisplayEthBalance } from "./components/web3/displayEthBalance";
import { DisplayNftBalance } from "./components/web3/displayNftBalance";
import { ProgressBar } from "./components/web3/progressBar";
import Image from "next/image";
import { FooterLinkDisplay } from "./components/ui/footerLinkDisplay";
import { BodyImageWithText } from "./components/ui/bodyImageWithText";
import { Navbar } from "./components/ui/navbar";

export default function Home() {
  const totalImages = 32;
  const imagesPerRow = 7;
  const numRows = Math.ceil(totalImages / imagesPerRow);

  return (
    <div>
      <div className="md:flex md:justify-between">
        <div className="flex flex-col items-center justify-center md:w-1/4 ml-4">
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
          <p className="text-xl text-blast-100 w-1/2 mx-auto">SUPPLY : 4444</p>
          <p className="text-xl text-blast-100 w-1/2 mx-auto">PRICE : 0.005</p>
          <p className="text-xl text-blast-100 w-1/2 mx-auto">
            VIBES: Immaculate
          </p>
          <p className="text-xl text-blast-100 w-1/2 mx-auto">MEMES: Spicy</p>
          <div className="bg-camo-400 h-[1px] w-3/4 mx-auto my-4"></div>
          <Image
            className="rounded-lg my-auto"
            alt="blunk"
            src="/images/blunk 1.png"
            priority={true}
            width={250}
            height={250}
          />
        </div>
        <div className="bg-camo-400 mx-auto w-2/3 h-[2px] my-4 md:min-h-[400px] md:w-[1px] md:my-auto "></div>
        <div className="w-full md:w-2/3 md:mx-10">
          <ProgressBar />
          <div className="bg-camo-400 h-[2px] w-full mx-auto my-4"></div>
          <BodyImageWithText
            alt="blunk 2"
            image="/images/blunk 2.png"
            text="Blunks are a collection of 4444 unique NFTs on the Blast blockchain."
          />
          <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>

          <BodyImageWithText
            alt="blunk 3"
            image="/images/blunk 3.png"
            text="We aim to be one of the OG communities in the Blast ecosystem."
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
          <div className="md:hidden">
            <ProgressBar />
            <div className="bg-camo-400 h-[1px] w-full mx-auto my-4"></div>
          </div>
          <FooterLinkDisplay />
        </div>
      </div>
      <div className="bg-camo-400 h-[3px] w-full mx-auto mt-4"></div>
    </div>
  );
}
