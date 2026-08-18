import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const TOKEN_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const token = await ethers.getContractAt(
    "CampusToken",
    TOKEN_ADDRESS
  );

  const [deployer] = await ethers.getSigners();

  console.log("Deployer:", deployer.address);

  console.log("Name:", await token.name());
  console.log("Symbol:", await token.symbol());

  const balance = await token.balanceOf(deployer.address);
  console.log("Balance:", ethers.formatEther(balance), "CGT");

  const votes = await token.getVotes(deployer.address);
  console.log("Voting Power:", ethers.formatEther(votes), "CGT");

  console.log(
    "Delegate:",
    await token.delegates(deployer.address)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});