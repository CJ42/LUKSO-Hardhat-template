import { LSPFactory } from '@lukso/lsp-factory.js';
import { ethers } from 'hardhat';

import * as dotenv from "dotenv"
dotenv.config()

const provider = 'https://rpc.testnet.lukso.network';

const lspFactory = new LSPFactory(provider, {
  deployKey: process.env.PRIVATE_KEY, // Private key of the account which will deploy smart contracts
  chainId: 4201,
});

async function setStickerMetadata() {
    const accounts = await ethers.getSigners()
    const signer = accounts[0]

    console.log(process.env.PRIVATE_KEY)
    console.log(signer)
}

setStickerMetadata().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });