import { WalletConnectInfo } from "../web3/walletConnectionInfo";
import { NavBarTabs } from "./navbarTabs";
// import from next navigation to find current route

export function Navbar() {
  return (
    <div>
      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-5xl text-blast-300 font-Geom-Graphic-Bold-Italic ml-20">
            BLUNKS
          </h1>
        </div>
        <NavBarTabs />
        <div>
          <WalletConnectInfo />
        </div>
      </div>
      <div className="bg-camo-400 h-[2px] w-full mx-auto my-4"></div>
    </div>
  );
}
