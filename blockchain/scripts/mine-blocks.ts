import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const blocks = 30;

  for (let i = 0; i < blocks; i++) {
    await ethers.provider.send("evm_mine", []);
  }

  console.log(`Mined ${blocks} blocks.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});