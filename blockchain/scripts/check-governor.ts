import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const GOVERNOR_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const governor = await ethers.getContractAt(
    "CampusGovernor",
    GOVERNOR_ADDRESS
  );

  console.log("Governor:", GOVERNOR_ADDRESS);
  console.log("Name:", await governor.name());

  console.log(
    "Voting Delay:",
    (await governor.votingDelay()).toString()
  );

  console.log(
    "Voting Period:",
    (await governor.votingPeriod()).toString()
  );

  console.log(
    "Proposal Threshold:",
    ethers.formatEther(
      await governor.proposalThreshold()
    ),
    "CGT"
  );

  console.log(
    "Quorum:",
    ethers.formatEther(
      await governor.quorum(0)
    ),
    "CGT"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});