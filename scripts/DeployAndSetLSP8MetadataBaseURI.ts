import { ethers } from "hardhat";

import {BasicNFTCollection, BasicNFTCollection__factory} from "../typechain-types";

const LSP8TokenMetadataBaseURI =
  '0x1a7628600c3bac7101f53697f48df381ddc36b9015e7d7c9c5633d1252aa2843';

async function deployAndSetLSP8MetadataBaseURI() {
    const accounts = await ethers.getSigners();
    const deployer = accounts[0];

    const boredApesCollection: BasicNFTCollection = await new BasicNFTCollection__factory(
        deployer,
      ).deploy('BoredApeYachtClub', 'BAYC', deployer.address);
  
      await boredApesCollection.setData(
        LSP8TokenMetadataBaseURI,
        ethers.concat(
            // `0x6f357c6a` represents the hash function identifier,
            // the first 4 bytes of keccak256('keccak256(utf8)')
            // to be used to ensure that the metadata of the NFT is set in stone and cannot be changed 
            // (for verifiability purpose)
            ["0x6f357c6a", ethers.toUtf8Bytes('ipfs://your-base-uri-on-ipf-goes-here/')]
        )
      );
}

deployAndSetLSP8MetadataBaseURI().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });