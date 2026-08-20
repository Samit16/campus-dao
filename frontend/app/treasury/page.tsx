import Link from "next/link";

const navItems = [
  ["dashboard", "Dashboard", "/dashboard"],
  ["gavel", "Proposals", "/proposals"],
  ["account_balance_wallet", "Treasury", "/treasury"],
  ["history", "Activity", "/activity"],
  ["person", "My Governance", "/governance"],
  ["settings", "Settings", "/settings"],
] as const;

const assets = [
  { symbol: "CAMP", name: "Governance Token", amount: "150,000", value: "$15,000.00", icon: "token" },
  { symbol: "ETH", name: "Ethereum", amount: "2.5", value: "$6,500.00", icon: "currency_exchange" },
  { symbol: "USDC", name: "USD Coin", amount: "3,320.42", value: "$3,320.42", icon: "attach_money" },
];

const transactions = [
  ["Incoming", "arrow_downward", "+5,000", "USDC", "-", "Oct 24, 2024 14:30"],
  ["Outgoing", "arrow_upward", "-1.5", "ETH", "PROP-042", "Oct 22, 2024 09:15"],
  ["Outgoing", "arrow_upward", "-50,000", "CAMP", "PROP-041", "Oct 18, 2024 16:45"],
] as const;

function Icon({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}

export default function TreasuryPage() {
  return (
    <div className="min-h-screen bg-[#08090A] text-[#E3E2E3] antialiased">
      <nav className="fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col border-r border-[#444748] bg-[#121315] p-4 md:flex">
        <div className="mb-8">
          <h1 className="text-base font-bold text-white">CampusDAO</h1>
          <p className="text-xs text-[#C4C7C8]">Decentralized Governance</p>
        </div>

        <ul className="flex flex-grow flex-col gap-2">
          {navItems.map(([icon, label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all ${
                  label === "Treasury"
                    ? "scale-[0.98] bg-[#454748] font-semibold text-white"
                    : "text-[#C4C7C8] hover:bg-[#343536] hover:text-white"
                }`}
              >
                <Icon>{icon}</Icon>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/proposals/create" className="mt-auto w-full rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-[#08090A] hover:opacity-90">
          Create Proposal
        </Link>

        <div className="mt-4 border-t border-[#444748] pt-4">
          <Link href="/docs" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-[#C4C7C8] hover:bg-[#343536] hover:text-white">
            <Icon>help_outline</Icon>
            Governance Guide
          </Link>
        </div>
      </nav>

      <main className="min-h-screen md:ml-[280px]">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-end border-b border-[#444748] bg-[#08090A] px-6">
          <div className="flex items-center gap-4">
            <button aria-label="Notifications" className="text-[#C4C7C8] hover:text-white">
              <Icon>notifications</Icon>
            </button>
            <div className="rounded-full border border-[#444748] bg-[#121315] px-3 py-1 text-sm text-[#C4C7C8]">0x1234...abcd</div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#444748] bg-[#343536]">
              <Icon className="text-sm text-[#C4C7C8]">person</Icon>
            </div>
          </div>
        </header>

        <div className="overflow-y-auto px-4 py-10 md:px-10">
          <div className="mx-auto max-w-[1200px] space-y-16">
            <section className="flex flex-col gap-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">DAO Treasury</h2>
              <div className="text-5xl font-semibold tracking-tight text-white md:text-[72px] md:leading-[1.1]">$24,820.42</div>
              <p className="text-sm text-[#C4C7C8]">Total Value Locked (TVL) across all DAO controlled addresses.</p>
            </section>

            <section className="space-y-4">
              <h3 className="border-b border-[#444748] pb-2 text-base font-semibold text-white">Asset Breakdown</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {assets.map((asset) => (
                  <div key={asset.symbol} className="rounded-xl border border-[#272829] bg-[#101112] p-8 hover:bg-[#151617]">
                    <div className="mb-4 flex items-start">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#444748] bg-[#1C1D1E]">
                          <Icon className="text-white">{asset.icon}</Icon>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{asset.symbol}</div>
                          <div className="text-xs text-[#C4C7C8]">{asset.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-4xl font-semibold tracking-tight text-white">{asset.amount}</div>
                    <div className="mt-1 text-sm text-[#C4C7C8]">{asset.value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-end justify-between border-b border-[#444748] pb-2">
                <h3 className="text-base font-semibold text-white">Recent Transactions</h3>
                <Link href="/activity" className="flex items-center gap-1 text-xs text-[#C4C7C8] hover:text-white">
                  View All <Icon className="text-[14px]">arrow_forward</Icon>
                </Link>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#272829] bg-[#101112]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[850px] text-left text-sm">
                    <thead className="border-b border-[#444748] bg-[#121315] text-xs uppercase tracking-wider text-[#C4C7C8]">
                      <tr>
                        {["Type", "Amount", "Asset", "Proposal", "Timestamp", "Status", "Explorer"].map((heading) => (
                          <th key={heading} className="px-6 py-4 font-normal last:text-right">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map(([type, icon, amount, asset, proposal, timestamp]) => (
                        <tr key={`${asset}-${timestamp}`} className="border-b border-[#444748] last:border-0 hover:bg-[#151617]">
                          <td className="px-6 py-4"><div className="flex items-center gap-2"><Icon className="text-[16px]">{icon}</Icon>{type}</div></td>
                          <td className="px-6 py-4 font-medium text-white">{amount}</td>
                          <td className="px-6 py-4 text-[#C4C7C8]">{asset}</td>
                          <td className="px-6 py-4 text-[#C4C7C8]">
                            {proposal === "-" ? proposal : <Link href={`/proposals/${proposal}`} className="hover:text-white">{proposal}</Link>}
                          </td>
                          <td className="px-6 py-4 text-xs text-[#C4C7C8]">{timestamp}</td>
                          <td className="px-6 py-4"><span className="rounded-sm border border-[#444748] bg-[#1C1D1E] px-2 py-1 text-[10px] uppercase tracking-wider">Confirmed</span></td>
                          <td className="px-6 py-4 text-right"><a href="#" aria-label="Open transaction in explorer" className="text-[#C4C7C8] hover:text-white"><Icon className="text-[18px]">open_in_new</Icon></a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="border-t border-[#444748] bg-[#08090A]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-10">
            <p className="text-xs text-[#C4C7C8]">© 2024 CampusDAO. Institutional Student Governance.</p>
            <div className="flex gap-4 text-xs">
              <Link href="/terms" className="text-[#C4C7C8] hover:text-white">Terms</Link>
              <Link href="/privacy" className="text-[#C4C7C8] hover:text-white">Privacy</Link>
              <a href="#" className="text-[#C4C7C8] hover:text-white">Twitter</a>
              <a href="#" className="text-[#C4C7C8] hover:text-white">Discord</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}