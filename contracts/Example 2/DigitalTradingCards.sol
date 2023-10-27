// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// modules
import {
    LSP7Mintable
} from "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/presets/LSP7Mintable.sol";

import {_LSP4_TOKEN_TYPE_DATA_KEY, TokenType} from "../TokenTypes.sol";

contract DigitalTradingCards is
    LSP7Mintable(
        "Digital Trading Card",
        "DTC",
        msg.sender,
        true // cards are non divisible (you cannot tear a card in 2 and give me half)
    )
{
    constructor() {
        // set the token type
        _setData(_LSP4_TOKEN_TYPE_DATA_KEY, abi.encode(TokenType.NFT));
    }
}
