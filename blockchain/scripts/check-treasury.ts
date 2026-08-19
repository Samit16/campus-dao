import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const TREASURY_ADDRESS =
    "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  const balance =
    await ethers.provider.getBalance(
      TREASURY_ADDRESS
    );

  console.log(
    "Treasury:",
    TREASURY_ADDRESS
  );

  console.log(
    "Balance:",
    ethers.formatEther(balance),
    "ETH"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});