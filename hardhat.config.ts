import { HardhatUserConfig } from 'hardhat/config';
import { NetworkUserConfig } from 'hardhat/types';
import '@nomicfoundation/hardhat-toolbox';

import * as dotenv from 'dotenv';
dotenv.config();

function getTestnetChainConfig(): NetworkUserConfig {
  const config: NetworkUserConfig = {
    url: 'https://rpc.testnet.lukso.network',
    chainId: 4201,
  };

  if (process.env.PRIVATE_KEY !== undefined) {
    config['accounts'] = [process.env.PRIVATE_KEY];
  }

  return config;
}

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v6',
  },
  networks: {
    luksoTestnet: getTestnetChainConfig(),
  },
};

export default config;
