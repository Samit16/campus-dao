import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const GOVERNOR_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const TREASURY_ADDRESS = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  const [proposer] = await ethers.getSigners();

  const recipient = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
  const amount = ethers.parseEther("0.1");

  const treasury = await ethers.getContractAt(
    "CampusTreasury",
    TREASURY_ADDRESS
  );

  const calldata = treasury.interface.encodeFunctionData(
    "releaseFunds",
    [recipient, amount]
  );

  const targets = [TREASURY_ADDRESS];
  const values = [0];
  const calldatas = [calldata];

  const description =
    "Proposal #2: Send 0.1 ETH from the CampusDAO Treasury to the Hackathon Committee.";

  console.log("Proposer:", proposer.address);
  console.log("Recipient:", recipient);
  console.log("Amount:", ethers.formatEther(amount), "ETH");

  console.log("Creating treasury proposal...");

  const tx = await (
    await ethers.getContractAt(
      "CampusGovernor",
      GOVERNOR_ADDRESS
    )
  ).propose(
    targets,
    values,
    calldatas,
    description
  );

  console.log("Transaction:", tx.hash);

  await tx.wait();

  const descriptionHash = ethers.keccak256(
    ethers.toUtf8Bytes(description)
  );

  const proposalId = await (
    await ethers.getContractAt(
      "CampusGovernor",
      GOVERNOR_ADDRESS
    )
  ).hashProposal(
    targets,
    values,
    calldatas,
    descriptionHash
  );

  console.log("Proposal ID:", proposalId.toString());
  console.log("Treasury proposal created.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});