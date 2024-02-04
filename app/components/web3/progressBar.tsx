"use client";
import { useTotalSupply } from "../hooks/useTotalSupply";
import MintButton from "./mintButton";

export function ProgressBar() {
  const maxSupply = 4444;
  let mintedSupply = useTotalSupply();
  let mintProgress;
  let displayText;
  if (mintedSupply > maxSupply / 2) {
    mintProgress = (mintedSupply / maxSupply) * 100;
    displayText = "Astropunks Minted";
  } else {
    mintProgress = 100 - (mintedSupply / maxSupply) * 100;
    displayText = "Astropunks Remaining";
    mintedSupply = maxSupply - mintedSupply;
  }

  const mintProgressRounded = Math.round(mintProgress);
  return (
    <div className="md:flex md:justify-end">
      <div className="ml-16 mx-auto md:mx-10">
        <MintButton />
      </div>

      <div className="md:w-1/2 text">
        <div className="flex justify-between">
          <div className="mx-auto md:flex md:gap-x-28">
            <h2 className="text-camo-300 text-center text-xl">Mint Progress</h2>
            <p className="text-blast-100">
              {mintedSupply} of {maxSupply} {displayText}
            </p>
          </div>
        </div>
        <div className="w-full bg-camo-500 h-[15px] my-auto">
          <div
            className={`bg-blast-300 h-[15px]`}
            style={{ width: `${mintProgressRounded}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
