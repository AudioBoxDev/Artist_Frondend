import '@rainbow-me/rainbowkit/styles.css';
import { createConfig, http } from 'wagmi'
import { injected, metaMask, safe, walletConnect  } from 'wagmi/connectors'
import {
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
    chains: [liskSepolia, lisk, polygon, optimism],
    connectors: [injected(), metaMask(), safe(), walletConnect({ projectId }),],
    transports: {
      [lisk.id]: http(),
      [polygon.id]: http(),
      [optimism.id]: http(),
      [liskSepolia.id]: http(),
    },
    ssr : true
});