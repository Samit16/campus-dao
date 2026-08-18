import { network } from "hardhat";

async function main() {
const { ethers } = await network.connect();

  const [deployer] = await ethers.getSigners();

  console.log("Deploying CampusToken with:", deployer.address);

  const campusToken = await ethers.deployContract("CampusToken", [
    deployer.address,
  ]);

  await campusToken.waitForDeployment();

  console.log("CampusToken deployed to:", await campusToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});