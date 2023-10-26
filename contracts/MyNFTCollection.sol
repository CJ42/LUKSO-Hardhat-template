// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {
    LSP8IdentifiableDigitalAsset
} from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAsset.sol";

import {
    _LSP8_TOKENID_TYPE_NUMBER
} from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

contract MyNFTCollection is LSP8IdentifiableDigitalAsset(
    "3D Cubes",
    "3DC",
    msg.sender,
    _LSP8_TOKENID_TYPE_NUMBER
) {
     // functionalities will go here...
}