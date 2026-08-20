import Link from "next/link";

const stats = [
  { label: "Voting Power", value: "12.4 CGT", progress: true },
  { label: "Active Proposals", value: "3" },
  { label: "Votes Cast", value: "24" },
  { label: "Participation", value: "88%", pattern: true },
];

const navigation = [
  ["dashboard", "Dashboard", "/dashboard"],
  ["gavel", "Proposals", "/proposals"],
  ["account_balance_wallet", "Treasury", "/treasury"],
  ["history", "Activity", "/activity"],
  ["person", "My Governance", "/governance"],
  ["settings", "Settings", "/settings"],
] as const;

const activity = [
  ["Voted FOR on #023", "2 hours ago", true],
  ["Proposal #023 Executed", "1 day ago", false],
  ["Delegated 50 CGT to 0x1A...3F", "3 days ago", false],
] as const;

function Icon({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08090A] text-[#E3E2E3]">
      <nav className="fixed inset-y-0 left-0 z-40 hidden w-70 flex-col border-r border-[#444748] bg-[#121315] p-4 md:flex">
        <div className="mb-16 flex flex-col gap-2 px-2">
          <span className="text-base font-bold text-white">CampusDAO</span>
          <span className="text-xs text-[#C4C7C8]">Decentralized Governance</span>
        </div>

        <Link
          href="/proposals/create"
          className="mb-8 flex w-full items-center justify-center gap-2 rounded bg-white px-4 py-2 text-sm font-semibold text-[#08090A] hover:bg-[#C6C6C7]"
        >
          <Icon>add</Icon>
          Create Proposal
        </Link>

        <div className="flex grow flex-col gap-2">
          {navigation.map(([icon, label, href]) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-4 rounded-lg p-2 transition-all ${
                label === "Dashboard"
                  ? "bg-[#454748] font-semibold text-white"
                  : "text-[#C4C7C8] hover:bg-[#343536] hover:text-white"
              }`}
            >
              <Icon>{icon}</Icon>
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/docs"
          className="flex items-center gap-4 rounded-lg p-2 text-sm text-[#C4C7C8] hover:bg-[#343536] hover:text-white"
        >
          <Icon>help_outline</Icon>
          Governance Guide
        </Link>
      </nav>

      <main className="min-h-screen md:ml-[280px]">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-end border-b border-[#444748] bg-[#08090A] px-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-[#C4C7C8]">
              <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Mainnet
            </div>
            <button aria-label="Notifications" className="text-[#C4C7C8] hover:text-white">
              <Icon>notifications</Icon>
            </button>
            <div className="flex items-center gap-2 rounded-full border border-[#272829] bg-[#101112] px-3 py-1 text-xs text-white">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#343536] text-[10px]">
                C
              </div>
              0x7A...91C
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 py-8 md:px-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Dashboard</h1>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex flex-col gap-2 overflow-hidden rounded border border-[#272829] bg-[#101112] p-8"
              >
                {stat.pattern && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}
                <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
                  {stat.label}
                </span>
                <div className="relative z-10 text-[32px] font-semibold text-white">{stat.value}</div>
                {stat.progress && (
                  <div className="mt-auto h-1 w-full overflow-hidden rounded-full bg-[#1C1D1E]">
                    <div className="h-full w-full bg-white" />
                  </div>
                )}
              </div>
            ))}
          </section>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <section className="flex flex-col gap-4 lg:col-span-2">
              <h2 className="border-b border-[#444748] pb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
                Active Governance
              </h2>

              <Link
                href="/proposals/024"
                className="group rounded border border-[#272829] bg-[#101112] p-8 hover:bg-[#151617]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white group-hover:underline">
                      #024 Campus Sustainability Fund
                    </h3>
                    <span className="text-xs text-[#C4C7C8]">Core Protocol</span>
                  </div>
                  <div className="rounded border border-[#272829] bg-[#1C1D1E] px-2 py-1 text-[10px] tracking-wider text-white">
                    ACTIVE
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#C4C7C8]">For</span>
                    <span className="text-white">74%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-[#1C1D1E]">
                    <div className="h-full bg-white" style={{ width: "74%" }} />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#C4C7C8]">Against</span>
                    <span className="text-white">26%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-[#1C1D1E]">
                    <div className="h-full bg-[#454748]" style={{ width: "26%" }} />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#272829] pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#C4C7C8]">
                    <Icon className="text-[16px]">schedule</Icon>
                    2d 14h remaining
                  </div>
                  <span className="rounded border border-[#272829] px-4 py-2 text-xs text-white group-hover:bg-white group-hover:text-[#08090A]">
                    Vote Now
                  </span>
                </div>
              </Link>
            </section>

            <aside className="flex flex-col gap-16">
              <section className="flex flex-col gap-4">
                <h2 className="border-b border-[#444748] pb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
                  Treasury Summary
                </h2>
                <div className="rounded border border-[#272829] bg-[#101112] p-4">
                  {[
                    ["USDC", "$1.2M"],
                    ["ETH", "450.5"],
                    ["CGT", "2.5M"],
                  ].map(([asset, value]) => (
                    <div key={asset} className="flex justify-between border-b border-[#272829] py-2 last:border-0">
                      <span className="text-sm">{asset}</span>
                      <span className="text-sm font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="border-b border-[#444748] pb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
                  Recent Activity
                </h2>
                <div className="relative ml-2 flex flex-col gap-4 border-l border-[#272829] pl-4">
                  {activity.map(([title, time, active]) => (
                    <div key={title} className="relative">
                      <div
                        className={`absolute -left-[21px] top-1 h-2 w-2 rounded-full ring-4 ring-[#101112] ${
                          active ? "bg-white" : "bg-[#454748]"
                        }`}
                      />
                      <p className={`text-sm ${active ? "text-white" : "text-[#E3E2E3]"}`}>{title}</p>
                      <span className="text-xs text-[#C4C7C8]">{time}</span>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>

        <footer className="border-t border-[#444748] bg-[#08090A] px-4 py-8 md:px-10">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[#C4C7C8]">
              © 2024 CampusDAO. Institutional Student Governance.
            </p>
            <div className="flex gap-6 text-xs">
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