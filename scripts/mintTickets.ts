import { ethers } from "hardhat";

import {
    EventTicketsNFT,
    EventTicketsNFT__factory
} from "../typechain-types";

async function deployAndCreateTickets() {
    const accounts = await ethers.getSigners();
    const deployer = accounts[0];

    const luksoMeetupTickets: EventTicketsNFT = await new EventTicketsNFT__factory(
        deployer
    ).deploy(
        "LUKSO Meetup #2",
        "MUP2",
        deployer.address,
    )

    // create 100 entry tickets.
    // Give them to the deployer initially, who will distribute them afterwards.
    await luksoMeetupTickets.mint(
        deployer.address, // recipient
        100, // amount
        true, // force sending to an EOA
        "minting 100 tickets" // data
    );
}

deployAndCreateTickets().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });