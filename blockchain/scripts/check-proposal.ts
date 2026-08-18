import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const GOVERNOR_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const PROPOSAL_ID =
    "79504133065202794915788153488546719207916828495736524134633014275385080567341";

  const governor = await ethers.getContractAt(
    "CampusGovernor",
    GOVERNOR_ADDRESS
  );

  const state = await governor.state(PROPOSAL_ID);

  const states = [
    "Pending",
    "Active",
    "Canceled",
    "Defeated",
    "Succeeded",
    "Queued",
    "Expired",
    "Executed",
  ];

  console.log(
    "Proposal State:",
    states[Number(state)]
  );

  console.log(
    "State Number:",
    state.toString()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});