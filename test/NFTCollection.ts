import { time, loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';

import { BasicNFTCollection, BasicNFTCollection__factory } from '../typechain-types';

const LSP8MetadataTokenURI = '0x1339e76a390b7b9ec9010000';
const LSP8ReferenceContract = '0x708e7b881795f2e6b6c2752108c177ec89248458de3bf69d0d43480b3e5034e6';
const LSP8TokenMetadataBaseURI =
  '0x1a7628600c3bac7101f53697f48df381ddc36b9015e7d7c9c5633d1252aa2843';

describe('BoredApes Collection', () => {
  it('test', async () => {
    const accounts = await ethers.getSigners();
    const deployer = accounts[0];

    const boredApesCollection: BasicNFTCollection = await new BasicNFTCollection__factory(
      deployer,
    ).deploy('BoredApeYachtClub', 'BAYC', deployer.address);

    await boredApesCollection.setData(
      LSP8TokenMetadataBaseURI,
      ethers.toUtf8Bytes('ipfs://your-base-uri-on-ipf-goes-here/'),
    );

    expect(await boredApesCollection.getData(LSP8TokenMetadataBaseURI)).to.equal(
      ethers.toUtf8Bytes('ipfs://your-base-uri-on-ipf-goes-here/'),
    );
  });
});
