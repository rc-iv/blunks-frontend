import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Web3ModalProvider } from "../context/Web3Modal";

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
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
