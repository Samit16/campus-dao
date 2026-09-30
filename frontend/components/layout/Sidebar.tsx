import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const navigation = [
  ["dashboard", "Dashboard", "/dashboard"],
  ["gavel", "Proposals", "/proposals"],
  ["account_balance_wallet", "Treasury", "/treasury"],
  ["history", "Activity", "/activity"],
  ["person", "My Governance", "/governance"],
  ["settings", "Settings", "/settings"],
] as const;

type SidebarProps = {
  activeLabel: (typeof navigation)[number][1];
  variant?: "dashboard" | "default" | "governance";
};

export function Sidebar({ activeLabel, variant = "default" }: SidebarProps) {
  const isDashboard = variant === "dashboard";
  const isGovernance = variant === "governance";

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r bg-[#121315] p-4 md:flex ${
      isDashboard ? "w-70 border-[#444748]" : "w-[280px] border-[#272829]"
    }`}>
      <div className={`${isDashboard ? "mb-16 flex flex-col gap-2" : "mb-16 flex items-center gap-2"} px-2`}>
        {!isDashboard && !isGovernance && (
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-[#08090A]">
            <Icon className="text-[20px]">account_balance</Icon>
          </div>
        )}
        {isGovernance && <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-[#08090A]">C</div>}
        <div>
          <span className="text-base font-bold text-white">CampusDAO</span>
          <p className="text-xs text-[#C4C7C8]">Decentralized Governance</p>
        </div>
      </div>

      <Link
        href="/proposals/create"
        className={`${isDashboard ? "mb-8 flex w-full items-center justify-center gap-2 rounded bg-white px-4 py-2" : "mb-8 w-full rounded bg-white px-4 py-2 text-center"} text-sm font-semibold text-[#08090A] hover:bg-[#C6C6C7]`}
      >
        {isDashboard && <Icon>add</Icon>}
        Create Proposal
      </Link>

      <nav className={`flex flex-grow flex-col ${isDashboard ? "gap-2" : "gap-1"}`}>
        {navigation.map(([icon, label, href]) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center ${isDashboard ? "gap-4 rounded-lg p-2" : "gap-4 rounded-lg px-2 py-2"} transition-all ${
              label === activeLabel
                ? `${isGovernance ? "scale-[0.98] " : ""}bg-[#454748] font-semibold text-white`
                : "text-[#C4C7C8] hover:bg-[#343536] hover:text-white"
            }`}
          >
            <Icon className={!isDashboard ? "text-[20px]" : ""}>{icon}</Icon>
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </nav>

      <div className={`${isDashboard ? "" : "mt-auto border-t border-[#272829] pt-4"}`}>
        <Link href="/docs" className="flex items-center gap-4 rounded-lg p-2 text-sm text-[#C4C7C8] hover:bg-[#343536] hover:text-white">
          <Icon className={!isDashboard ? "text-[20px]" : ""}>help_outline</Icon>
          Governance Guide
        </Link>
      </div>
    </aside>
  );
}