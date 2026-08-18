import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const GOVERNOR_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const governor = await ethers.getContractAt(
    "CampusGovernor",
    GOVERNOR_ADDRESS
  );

  const targets: string[] = [
    ethers.ZeroAddress,
  ];

  const values = [0];

  const calldatas: string[] = [
    "0x",
  ];

  const description =
    "Proposal #1: Approve the Annual Campus Hackathon Initiative";

  console.log("Creating proposal...");

  const tx = await governor.propose(
    targets,
    values,
    calldatas,
    description
  );

  console.log("Transaction:", tx.hash);

  await tx.wait();

  const proposalId = await governor.hashProposal(
    targets,
    values,
    calldatas,
    ethers.keccak256(
      ethers.toUtf8Bytes(description)
    )
  );

  console.log("Proposal ID:", proposalId.toString());

  console.log("Proposal created successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});