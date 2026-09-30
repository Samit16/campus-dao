import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Icon } from "@/components/ui/Icon";

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

export default function TreasuryPage() {
  return (
    <AppShell activeLabel="Treasury">
      <main className="min-h-screen bg-[#08090A]">
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

      </main>
    </AppShell>
  );
}