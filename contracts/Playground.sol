// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// modules
import {
    LSP8Mintable
} from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol";

// constants
import {
    _LSP8_TOKENID_TYPE_STRING
} from "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

// put the address to specify the owner of the LSP8 collection and use a different deployer address
address constant _LSP8_COLLECTION_OWNER = 0xCAfEcAfeCAfECaFeCaFecaFecaFECafECafeCaFe;

contract DigitalArtCollection is
    LSP8Mintable(
        "3D Artistic Cubes", // collection name
        "3DCuB", // symbol
        _LSP8_COLLECTION_OWNER, // contract owner
        _LSP8_TOKENID_TYPE_STRING
    )
{
    function createNewCube(
        string memory cubeName,
        address recipient
    ) public onlyOwner {
        bytes32 tokenId = bytes32(bytes(cubeName));
        _mint({to: recipient, tokenId: tokenId, force: true, data: ""});
    }
}
