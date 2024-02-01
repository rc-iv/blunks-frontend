"use client";
import { useTotalSupply } from "../hooks/useTotalSupply";

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
  console.log(mintProgressRounded);
  return (
    <div className="flex justify-between">
      <h1 className="text-blast-100 text-4xl font-Geom-Graphic-Bold-Italic">MINT PROGRESS</h1>
      <div className="w-1/2">
        <div className="flex justify-between">
          <h2 className="text-camo-300 text-xl">Mint Progress</h2>
          <p className="text-blast-100">
            {mintedSupply} of {maxSupply} {displayText}
          </p>
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