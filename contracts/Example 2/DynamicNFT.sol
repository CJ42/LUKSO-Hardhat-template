// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// modules
import {ERC725Y} from "@erc725/smart-contracts/contracts/ERC725Y.sol";
import {
    LSP8Mintable
} from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol";

// constants
import {
    _LSP8_TOKENID_TYPE_ADDRESS
} from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

import {_LSP4_TOKEN_TYPE_DATA_KEY, TokenType} from "../TokenTypes.sol";

contract DynamicNFT is ERC725Y {
    constructor(address nftOwner) ERC725Y(nftOwner) {}
}

contract DynamicNFTCollection is LSP8Mintable {
    constructor(
        string memory dynamicNFTCollectionName,
        string memory dynamicNFTCollectionSymbol,
        address contractOwner
    )
        LSP8Mintable(
            dynamicNFTCollectionName,
            dynamicNFTCollectionSymbol,
            contractOwner,
            _LSP8_TOKENID_TYPE_ADDRESS
        )
    {
        // Set the type of the token
        _setData(_LSP4_TOKEN_TYPE_DATA_KEY, abi.encode(TokenType.COLLECTION));
    }
}
