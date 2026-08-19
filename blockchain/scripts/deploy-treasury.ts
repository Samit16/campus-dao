import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const GOVERNOR_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  console.log(
    "Using Governor:",
    GOVERNOR_ADDRESS
  );

  const CampusTreasury =
    await ethers.getContractFactory(
      "CampusTreasury"
    );

  const treasury =
    await CampusTreasury.deploy(
      GOVERNOR_ADDRESS
    );

  await treasury.waitForDeployment();

  console.log(
    "CampusTreasury deployed to:",
    await treasury.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});