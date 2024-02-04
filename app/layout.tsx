import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Web3ModalProvider } from "../context/Web3Modal";
import { Navbar } from "./components/ui/navbar";

export const metadata: Metadata = {
  title: "Blunks",
  description: "Launching into the BLAST ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/izc8bxp.css"
        ></link>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className="min-h-screen font-Geom-Graphic-Bold">
        <Web3ModalProvider>
          <div className="md:w-[98%] mx-auto md:mt-5 border-[#404833] border-4 bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B] rounded-lg">
            <Navbar />
            {children}
          </div>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
