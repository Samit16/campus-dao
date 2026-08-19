import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const TREASURY_ADDRESS =
    "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  const [deployer] =
    await ethers.getSigners();

  console.log(
    "Funding Treasury:",
    TREASURY_ADDRESS
  );

  const tx = await deployer.sendTransaction({
    to: TREASURY_ADDRESS,
    value: ethers.parseEther("1"),
  });

  console.log(
    "Transaction:",
    tx.hash
  );

  await tx.wait();

  console.log(
    "Treasury funded with 1 ETH."
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});