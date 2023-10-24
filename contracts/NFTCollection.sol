// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { LSP8Mintable } from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol";

import { _LSP8_TOKENID_TYPE_NUMBER } from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

contract MyNFTCollection is LSP8Mintable {
    // Use deployment values in your JS / TS scripts
    constructor(
        string memory nftName,
        string memory nftSymbol,
        address contractOwner
    ) LSP8Mintable(
        nftName,
        nftSymbol,
        contractOwner,
        _LSP8_TOKENID_TYPE_NUMBER
    ) {

    }
}