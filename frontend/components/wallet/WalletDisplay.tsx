"use client";

import { Icon } from "@/components/ui/Icon";
import { targetChain } from "@/lib/wagmi";
import { useAccount, useConnect, useSwitchChain } from "wagmi";

function formatAddress(address?: string) {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
}

export function WalletConnectButton({ variant = "default" }: { variant?: "default" | "modal" }) {
  const { address, chain, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const connector = connectors[0];
  const isWrongNetwork = isConnected && chain?.id !== targetChain.id;

  if (isWrongNetwork) {
    return (
      <button
        type="button"
        onClick={() => switchChain({ chainId: targetChain.id })}
        disabled={isSwitching}
        className={`${variant === "modal" ? "group flex w-full items-center justify-between rounded-lg border border-[#444748] bg-[#1B1C1D] p-4" : "rounded bg-white px-4 py-2 text-sm font-semibold text-[#08090A]"} transition-all hover:border-[#8E9192] hover:bg-[#343536] disabled:cursor-wait disabled:opacity-60`}
      >
        <span className="text-base font-semibold text-white">
          {isSwitching ? "Switching Network..." : `Switch to ${targetChain.name}`}
        </span>
        <Icon className="text-[#C4C7C8]">sync</Icon>
      </button>
    );
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-[#272829] bg-[#101112] px-3 py-1 text-xs text-white">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#343536] text-[10px]">C</div>
        {formatAddress(address)}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => connector && connect({ connector })}
      disabled={!connector || isPending}
      className={variant === "modal"
        ? "group flex w-full items-center justify-between rounded-lg border border-[#444748] bg-[#1B1C1D] p-4 transition-all hover:border-[#8E9192] hover:bg-[#343536] disabled:cursor-wait disabled:opacity-60"
        : "rounded bg-white px-4 py-2 text-sm font-semibold text-[#08090A] transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"}
    >
      {variant === "modal" ? (
        <>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[10px] font-black text-[#08090A]">M</div>
            </div>
            <span className="text-base font-semibold text-white">{isPending ? "Connecting..." : "MetaMask"}</span>
          </div>
          <Icon className="text-[#C4C7C8] transition-colors group-hover:text-white">chevron_right</Icon>
        </>
      ) : (isPending ? "Connecting..." : "Connect Wallet")}
    </button>
  );
}

export function WalletDisplay({ variant = "default" }: { variant?: "default" | "dashboard" }) {
  const { address, chain, isConnected } = useAccount();
  const isWrongNetwork = isConnected && chain?.id !== targetChain.id;

  if (!isConnected) return <WalletConnectButton />;

  if (variant === "dashboard") {
    return (
      <div className="flex items-center gap-2 rounded-full border border-[#272829] bg-[#101112] px-3 py-1 text-xs text-white">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#343536] text-[10px]">C</div>
        {isWrongNetwork ? "Wrong Network" : formatAddress(address)}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${isWrongNetwork ? "text-[#C4C7C8]" : ""}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded border border-[#444748] bg-[#343536]">
        <Icon className="text-[18px] text-[#C4C7C8]">person</Icon>
      </div>
      <span className="font-mono text-sm text-[#C4C7C8]">
        {isWrongNetwork ? "Wrong Network" : formatAddress(address)}
      </span>
    </div>
  );
}