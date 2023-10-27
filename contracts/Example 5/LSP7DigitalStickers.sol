// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {
    LSP7DigitalAsset
} from "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";
import {
    LSP7Burnable
} from "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/extensions/LSP7Burnable.sol";

import {_LSP4_TOKEN_TYPE_DATA_KEY, TokenType} from "../TokenTypes.sol";

contract LSP7DigitalStickers is LSP7DigitalAsset, LSP7Burnable {
    constructor(
        string memory stickerName,
        string memory stickerSymbol,
        address contractOwner,
        uint256 totalNumberOfStickersInCirculation
    ) LSP7DigitalAsset(stickerName, stickerSymbol, contractOwner, true) {
        // Set the type of the token
        _setData(_LSP4_TOKEN_TYPE_DATA_KEY, abi.encode(TokenType.NFT));

        // mint the total number of stickers that the LSP8 Collection owns
        _mint({
            to: msg.sender,
            amount: totalNumberOfStickersInCirculation,
            force: true,
            data: abi.encodePacked(
                "creating ",
                totalNumberOfStickersInCirculation,
                " new stickers for this collection!"
            )
        });
    }
}
