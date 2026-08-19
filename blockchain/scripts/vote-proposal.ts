import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const GOVERNOR_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const PROPOSAL_ID = "18897277054192357397693151697851104797324500702758117525696230222206710480319";

  const governor = await ethers.getContractAt(
    "CampusGovernor",
    GOVERNOR_ADDRESS
  );

  const [voter] = await ethers.getSigners();

  console.log("Voter:", voter.address);
  console.log("Casting FOR vote...");

  const tx = await governor.castVote(
    PROPOSAL_ID,
    1
  );

  console.log("Transaction:", tx.hash);

  await tx.wait();

  console.log("Vote successfully recorded.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});