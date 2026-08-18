import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const TOKEN_ADDRESS =
    "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  console.log("Using CampusToken:", TOKEN_ADDRESS);

  const CampusGovernor = await ethers.getContractFactory(
    "CampusGovernor"
  );

  const governor = await CampusGovernor.deploy(TOKEN_ADDRESS);

  await governor.waitForDeployment();

  console.log(
    "CampusGovernor deployed to:",
    await governor.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});