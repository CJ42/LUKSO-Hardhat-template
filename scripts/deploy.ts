import { ethers } from "hardhat";

import {MyNFTCollection__factory} from "../typechain-types";

import {LSP8_TOKEN_ID_TYPES} from "@lukso/lsp-smart-contracts"

async function deployLSP8Collection() {
  const accounts = await ethers.getSigners();
  const signer = accounts[0];

  const lsp8ContractFactory = new ethers.ContractFactory(
    MyNFTCollection__factory.abi,
    MyNFTCollection__factory.bytecode,
    signer
  )

  const lsp8Contract = await lsp8ContractFactory.deploy(
    "NFT Collection Name", // collection name
    "NFT", // collection symbol
    signer.address,
    LSP8_TOKEN_ID_TYPES.NUMBER
  );

  await lsp8Contract.waitForDeployment();

  console.log(lsp8Contract)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployLSP8Collection().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
