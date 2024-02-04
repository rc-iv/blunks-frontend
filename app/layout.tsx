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
      </Head>

      <body className="min-h-screen font-Geom-Graphic-Bold">
        <Web3ModalProvider>
          <div className="min-h-[90%]">
            <div className="md:w-[98%] mx-auto md:mt-10 border-[#404833] border-4 bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B] rounded-lg">
              <Navbar />
              {children}
            </div>
          </div>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
