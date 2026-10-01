"use client";

import type { Address } from "viem";
import { useAccount, useBlockNumber, useChainId, useReadContract } from "wagmi";
import {
  campusGovernorAbi,
  campusTokenAbi,
  campusTreasuryAbi,
  getContractAddresses,
} from "@/lib/contracts";

export function useCampusTokenBalance(account?: Address) {
  const chainId = useChainId();
  const { campusToken } = getContractAddresses(chainId);

  return useReadContract({
    address: campusToken,
    abi: campusTokenAbi,
    functionName: "balanceOf",
    args: account ? [account] : undefined,
    query: { enabled: Boolean(campusToken && account) },
  });
}

export function useCampusTokenVotes(account?: Address) {
  const chainId = useChainId();
  const { campusToken } = getContractAddresses(chainId);

  return useReadContract({
    address: campusToken,
    abi: campusTokenAbi,
    functionName: "getVotes",
    args: account ? [account] : undefined,
    query: { enabled: Boolean(campusToken && account) },
  });
}

export function useCampusTokenDelegate(account?: Address) {
  const chainId = useChainId();
  const { campusToken } = getContractAddresses(chainId);

  return useReadContract({
    address: campusToken,
    abi: campusTokenAbi,
    functionName: "delegates",
    args: account ? [account] : undefined,
    query: { enabled: Boolean(campusToken && account) },
  });
}

export function useCampusGovernorVotingDelay() {
  return useGovernorRead("votingDelay");
}

export function useCampusGovernorVotingPeriod() {
  return useGovernorRead("votingPeriod");
}

export function useCampusGovernorProposalThreshold() {
  return useGovernorRead("proposalThreshold");
}

export function useCampusGovernorQuorum() {
  const chainId = useChainId();
  const { campusGovernor } = getContractAddresses(chainId);
  const { data: blockNumber } = useBlockNumber();

  return useReadContract({
    address: campusGovernor,
    abi: campusGovernorAbi,
    functionName: "quorum",
    args: blockNumber !== undefined ? [blockNumber] : undefined,
    query: { enabled: Boolean(campusGovernor && blockNumber !== undefined) },
  });
}

export function useCampusGovernorState(proposalId?: bigint) {
  const chainId = useChainId();
  const { campusGovernor } = getContractAddresses(chainId);

  return useReadContract({
    address: campusGovernor,
    abi: campusGovernorAbi,
    functionName: "state",
    args: proposalId !== undefined ? [proposalId] : undefined,
    query: { enabled: Boolean(campusGovernor && proposalId !== undefined) },
  });
}

export function useCampusTreasuryBalance() {
  const chainId = useChainId();
  const { campusTreasury } = getContractAddresses(chainId);

  return useReadContract({
    address: campusTreasury,
    abi: campusTreasuryAbi,
    functionName: "balance",
    query: { enabled: Boolean(campusTreasury) },
  });
}

function useGovernorRead(functionName: "votingDelay" | "votingPeriod" | "proposalThreshold") {
  const chainId = useChainId();
  const { campusGovernor } = getContractAddresses(chainId);

  return useReadContract({
    address: campusGovernor,
    abi: campusGovernorAbi,
    functionName,
    query: { enabled: Boolean(campusGovernor) },
  });
}

export function useConnectedAddress() {
  return useAccount().address;
}
