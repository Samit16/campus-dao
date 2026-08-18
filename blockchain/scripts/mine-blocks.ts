import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  await ethers.provider.send("evm_mine", []);

  console.log("Mined 1 block.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});