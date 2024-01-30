import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-xl flex justify-between py-4">
      <div>
        <Link className="m-2" href="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="m-2" href="/about">
          About
        </Link>
        <Link className="m-2" href="/explore">
          Explore
        </Link>
        <Link className="m-2" href="/mint">
          Mint
        </Link>
      </div>
    </div>
  );
}
