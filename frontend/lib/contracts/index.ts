import type { Address } from "viem";
import { isAddress } from "viem";

export const campusTokenAbi = [
	{
		inputs: [{ name: "account", type: "address" }],
		name: "balanceOf",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ name: "account", type: "address" }],
		name: "getVotes",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ name: "account", type: "address" }],
		name: "delegates",
		outputs: [{ name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
] as const;

export const campusGovernorAbi = [
	{
		inputs: [],
		name: "votingDelay",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "votingPeriod",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "proposalThreshold",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ name: "timepoint", type: "uint256" }],
		name: "quorum",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ name: "proposalId", type: "uint256" }],
		name: "state",
		outputs: [{ name: "", type: "uint8" }],
		stateMutability: "view",
		type: "function",
	},
] as const;

export const campusTreasuryAbi = [
	{
		inputs: [],
		name: "balance",
		outputs: [{ name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
] as const;

export type ContractAddresses = {
	campusToken?: Address;
	campusGovernor?: Address;
	campusTreasury?: Address;
};

function addressFromEnv(name: string): Address | undefined {
	const value = process.env[name];
	return value && isAddress(value) ? value : undefined;
}

const sepoliaAddresses: ContractAddresses = {
	campusToken: addressFromEnv("NEXT_PUBLIC_CAMPUS_TOKEN_ADDRESS"),
	campusGovernor: addressFromEnv("NEXT_PUBLIC_CAMPUS_GOVERNOR_ADDRESS"),
	campusTreasury: addressFromEnv("NEXT_PUBLIC_CAMPUS_TREASURY_ADDRESS"),
};

export const contractAddresses: Record<number, ContractAddresses> = {
	31337: {
		campusToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
		campusGovernor: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
		campusTreasury: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
	},
	11155111: sepoliaAddresses,
};

export const missingSepoliaContracts = Object.entries(sepoliaAddresses)
	.filter(([, address]) => !address)
	.map(([contract]) => contract);

export function getContractAddresses(chainId?: number): ContractAddresses {
	return chainId ? contractAddresses[chainId] ?? {} : {};
}