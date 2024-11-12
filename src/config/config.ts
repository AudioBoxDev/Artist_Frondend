import '@rainbow-me/rainbowkit/styles.css';
import { createConfig, http } from 'wagmi'
import { injected, metaMask, safe, walletConnect  } from '@wagmi/connectors'
import {
  mainnet,
    polygon,
    optimism,
    lisk,
    liskSepolia,
  } from 'wagmi/chains';

  declare module 'wagmi' {
    interface Register {
      config: typeof config
    }
  }
  
  const projectId:any = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const config = createConfig({
    chains: [liskSepolia, lisk, polygon,mainnet, optimism],
    connectors: [injected(), walletConnect({ projectId }),],
    transports: {
      [lisk.id]: http(),
      [polygon.id]: http(),
      [mainnet.id]: http(),
      [optimism.id]: http(),
      [liskSepolia.id]: http(),
    },
    ssr : true
});

