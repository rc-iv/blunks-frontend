import Image from "next/image";
import { WalletConnectInfo } from "../web3/walletConnectionInfo";
import { NavBarTabs } from "./navbarTabs";
// import from next navigation to find current route

export function Navbar() {
  return (
    <div>
      <div className="md:flex md:justify-between my-4">
        <div className="flex">
          <Image
            alt="blast logo"
            src="/images/blast_logo_icon_yellow.svg"
            width={60}
            height={60}
            className="ml-20"
          />
          <h1 className="text-5xl text-blast-300 font-Geom-Graphic-Bold-Italic mt-2">
            LUNKS
          </h1>
        </div>
          <NavBarTabs />
          <WalletConnectInfo />
      </div>
      <div className="bg-camo-400 h-[2px] w-full mx-auto my-4"></div>
    </div>
  );
}
