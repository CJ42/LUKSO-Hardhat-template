import { ethers } from "hardhat";

import {BasicNFTCollection, BasicNFTCollection__factory} from "../typechain-types";

async function deployLSP8Collection() {
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];

  const nftCollection: BasicNFTCollection = await new BasicNFTCollection__factory(deployer).deploy(
    "NFT Collection Name", // collection name
    "NFT", // collection symbol
    deployer.address
  );

}

deployLSP8Collection().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
