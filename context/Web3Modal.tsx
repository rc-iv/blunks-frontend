'use client'
import dotenv from 'dotenv';
dotenv.config();

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const blastTestNet = {
    chainId: 168587773,
    name: 'Blast Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://testnet.blastscan.io', 
    rpcUrl: 'https://sepolia.blast.io'
    }

// 3. Create modal
const metadata = {
  name: 'Astropunks',
  description: 'Astropunks are one of the earliest and most iconic examples of "Non-Fungible Tokens” minted on Blast.',
  url: 'https://www.blastropunks.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [blastTestNet, mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeVariables: {
    '--w3m-color-mix': '#FCFC03',
    '--w3m-color-mix-strength': 20,
    '--w3m-font-family': 'geom-graphic',
    '--w3m-accent': '#2A2B1F',
    "--w3m-font-size-master" : "12px",
  },
  themeMode: 'dark'
})

export function Web3ModalProvider({ children}: { children: React.ReactNode }) {
  return children
}