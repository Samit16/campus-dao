import { Icon } from "@/components/ui/Icon";
import { WalletDisplay } from "@/components/wallet/WalletDisplay";

type HeaderProps = {
  variant?: "dashboard" | "default" | "governance";
  search?: boolean;
};

export function Header({ variant = "default", search = false }: HeaderProps) {
  const isDashboard = variant === "dashboard";
  const isGovernance = variant === "governance";

  return (
    <header className={`sticky top-0 z-30 flex h-16 items-center border-b px-6 ${
      isDashboard ? "justify-end border-[#444748] bg-[#08090A]" : "justify-between border-[#272829] bg-[#121315]"
    }`}>
      {search && (
        <div className="flex max-w-md flex-1 items-center">
          <div className="flex h-10 w-full items-center overflow-hidden rounded border border-[#272829] bg-[#101112] focus-within:border-white">
            <div className="grid h-full w-10 place-items-center text-[#C4C7C8]"><Icon className="text-[18px]">search</Icon></div>
            <input id="search" type="text" placeholder="Search proposals, delegates..." className="h-full w-full bg-transparent pr-2 text-sm text-white outline-none placeholder:text-[#C4C7C8]" />
          </div>
        </div>
      )}

      <div className={`flex items-center ${isDashboard ? "gap-6" : "gap-4"} ${search ? "ml-6" : ""}`}>
        {isDashboard && <div className="flex items-center gap-2 text-xs text-[#C4C7C8]"><div className="h-2 w-2 animate-pulse rounded-full bg-white" />Mainnet</div>}
        <button type="button" aria-label="Notifications" className={`${isGovernance ? "flex h-10 w-10 items-center justify-center rounded-full" : ""} text-[#C4C7C8] hover:bg-[#343536] hover:text-white`}><Icon className={isGovernance ? "text-[20px]" : ""}>notifications</Icon></button>
        {isGovernance && <div className="border-l border-[#272829] pl-2"><WalletDisplay /></div>}
        {!isGovernance && <WalletDisplay variant={isDashboard ? "dashboard" : "default"} />}
      </div>
    </header>
  );
}