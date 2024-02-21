"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavBarTabs() {
  const pathname = usePathname();

  const selectedStyle =
    "text-xl text-blast-100 font-Geom-Graphic-Bold-Italic mt-6";
  const unselectedStyle =
    "text-xl text-camo-400 font-Geom-Graphic-Bold-Italic mt-6";

  if (pathname === "/") {
    return (
      <div className="flex justify-center md:justify-normal gap-x-10">
        <h2 className={selectedStyle}>Home</h2>
        {/* <Link href="/profile">
          <h2 className={unselectedStyle}>My Blunks</h2>
        </Link> */}
        <h2 className={unselectedStyle}>My Blunks</h2>
      </div>
    );
  }
  return (
    <div className="flex gap-x-10">
      <Link href="/">
        <h2 className={unselectedStyle}>Home</h2>
      </Link>
      <h2 className={selectedStyle}>My Blunks</h2>
    </div>
  );
}
