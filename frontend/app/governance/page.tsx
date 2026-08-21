import Link from "next/link";

const navigation = [
  ["dashboard", "Dashboard", "/dashboard"],
  ["gavel", "Proposals", "/proposals"],
  ["account_balance_wallet", "Treasury", "/treasury"],
  ["history", "Activity", "/activity"],
  ["person", "My Governance", "/governance"],
  ["settings", "Settings", "/settings"],
] as const;

const votes = [
  ["CDIP-42", "Allocate Q4 Treasury Funds to Developer Guild", "For", "Oct 24, 2023"],
  ["CDIP-41", "Update Delegation Quorum Thresholds", "Against", "Oct 18, 2023"],
  ["CDIP-39", "Partnership Integration with University Hub", "For", "Sep 30, 2023"],
] as const;

function Icon({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}

export default function MyGovernancePage() {
  return (
    <div className="min-h-screen bg-[#121315] text-[#E3E2E3] antialiased">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col border-r border-[#272829] bg-[#121315] p-4 md:flex">
        <div className="mb-16 flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-[#08090A]">C</div>
          <div>
            <h1 className="text-base font-bold text-white">CampusDAO</h1>
            <p className="text-xs text-[#C4C7C8]">Decentralized Governance</p>
          </div>
        </div>

        <Link href="/proposals/create" className="mb-8 w-full rounded bg-white px-4 py-2 text-center text-sm font-semibold text-[#08090A] hover:bg-[#C6C6C7]">
          Create Proposal
        </Link>

        <nav className="flex flex-grow flex-col gap-1">
          {navigation.map(([icon, label, href]) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-4 rounded-lg px-2 py-2 transition-all ${
                label === "My Governance"
                  ? "scale-[0.98] bg-[#454748] font-semibold text-white"
                  : "text-[#C4C7C8] hover:bg-[#343536] hover:text-white"
              }`}
            >
              <Icon className="text-[20px]">{icon}</Icon>
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-[#272829] pt-4">
          <Link href="/docs" className="flex items-center gap-4 px-2 py-2 text-sm text-[#C4C7C8] hover:text-white">
            <Icon className="text-[20px]">help_outline</Icon>
            Governance Guide
          </Link>
        </div>
      </aside>

      <div className="min-w-0 md:ml-[280px]">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#272829] bg-[#121315] px-6">
          <div className="flex max-w-md flex-1 items-center">
            <div className="flex h-10 w-full items-center overflow-hidden rounded border border-[#272829] bg-[#101112] focus-within:border-white">
              <div className="grid h-full w-10 place-items-center text-[#C4C7C8]">
                <Icon className="text-[18px]">search</Icon>
              </div>
              <input
                id="search"
                type="text"
                placeholder="Search proposals, delegates..."
                className="h-full w-full bg-transparent pr-2 text-sm text-white outline-none placeholder:text-[#C4C7C8]"
              />
            </div>
          </div>

          <div className="ml-6 flex items-center gap-4">
            <button type="button" aria-label="Notifications" className="flex h-10 w-10 items-center justify-center rounded-full text-[#C4C7C8] hover:bg-[#343536] hover:text-white">
              <Icon className="text-[20px]">notifications</Icon>
            </button>
            <div className="flex items-center gap-2 border-l border-[#272829] pl-2">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-[#272829] bg-[#343536]">
                <Icon className="text-[#C4C7C8]">person</Icon>
              </div>
              <span className="text-sm font-medium text-white">0x1234...abcd</span>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1200px] p-4 md:p-10">
          <div className="flex flex-col gap-16">
            <section className="flex flex-col justify-between gap-4 border-b border-[#272829] pb-4 md:flex-row md:items-end">
              <div className="flex flex-col gap-1">
                <span className="mb-2 inline-flex w-fit rounded border border-[#272829] bg-[#1C1D1E] px-2 py-0.5 text-[12px] font-semibold uppercase tracking-widest text-[#C4C7C8]">
                  Governance Member
                </span>
                <h1 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">0x1234...abcd</h1>
                <p className="text-base text-[#C4C7C8]">Active participant since Oct 2023</p>
              </div>

              <button type="button" className="rounded border border-[#272829] bg-[#101112] px-4 py-2 text-sm font-medium text-white hover:bg-[#343536]">
                Copy Address
              </button>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["account_balance", "Voting Power", "12.4", "CGT"],
                ["how_to_vote", "Votes Cast", "24", ""],
                ["description", "Proposals Created", "2", ""],
              ].map(([icon, label, value, suffix]) => (
                <div key={label} className="flex flex-col gap-1 rounded-lg border border-[#272829] bg-[#101112] p-4">
                  <span className="flex items-center gap-2 text-sm text-[#C4C7C8]">
                    <Icon className="text-[16px]">{icon}</Icon>{label}
                  </span>
                  <div className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
                    {value} {suffix && <span className="text-base font-normal text-[#C4C7C8]">{suffix}</span>}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-1 rounded-lg border border-[#272829] bg-[#101112] p-4">
                <span className="flex items-center gap-2 text-sm text-[#C4C7C8]">
                  <Icon className="text-[16px]">trending_up</Icon>Participation
                </span>
                <div className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">88%</div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[#1C1D1E]">
                  <div className="h-full w-[88%] rounded-full bg-white" />
                </div>
              </div>
            </section>

            <section className="flex flex-col items-start justify-between gap-4 rounded-lg border border-[#272829] bg-[#101112] p-8 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded border border-[#272829] bg-[#343536]">
                  <Icon className="text-[#C4C7C8]">person</Icon>
                </div>
                <div>
                  <span className="mb-1 block text-[12px] font-semibold uppercase tracking-widest text-[#C4C7C8]">Current Delegate</span>
                  <span className="block text-base font-medium text-white">Self-Delegating</span>
                  <span className="mt-1 block text-xs text-[#C4C7C8]">You hold your own voting power.</span>
                </div>
              </div>
              <button type="button" className="rounded border border-[#272829] bg-[#101112] px-4 py-2 text-sm font-medium text-white hover:bg-[#343536]">
                Change Delegate
              </button>
            </section>

            <section className="flex flex-col gap-4">
              <div className="flex gap-8 border-b border-[#272829]">
                <button type="button" className="border-b-2 border-white pb-1 text-sm font-semibold text-white">My Votes</button>
                <button type="button" className="pb-1 text-sm text-[#C4C7C8] hover:text-white">My Proposals</button>
                <button type="button" className="pb-1 text-sm text-[#C4C7C8] hover:text-white">Activity</button>
              </div>

              <div className="overflow-hidden rounded-lg border border-[#272829] bg-[#101112]">
                <div className="hidden grid-cols-12 gap-4 border-b border-[#272829] bg-[#121315] p-4 text-[12px] font-semibold uppercase tracking-widest text-[#C4C7C8] sm:grid">
                  <div className="col-span-2">Prop ID</div>
                  <div className="col-span-6">Proposal Title</div>
                  <div className="col-span-2 text-right">Choice</div>
                  <div className="col-span-2 text-right">Date</div>
                </div>

                {votes.map(([id, title, choice, date]) => (
                  <Link key={id} href={`/proposals/${id}`} className="group grid grid-cols-1 gap-y-2 border-b border-[#272829] p-4 last:border-0 hover:bg-[#151617] sm:grid-cols-12 sm:gap-4">
                    <div className="flex items-center text-xs text-[#C4C7C8] sm:col-span-2">{id}</div>
                    <div className="flex items-center sm:col-span-6">
                      <span className="text-sm text-white underline-offset-4 group-hover:underline">{title}</span>
                    </div>
                    <div className="flex items-center sm:col-span-2 sm:justify-end">
                      <span className={`inline-flex items-center gap-1 text-sm ${choice === "For" ? "text-white" : "text-[#C4C7C8]"}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${choice === "For" ? "bg-white" : "bg-[#444748]"}`} />
                        {choice}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-[#C4C7C8] sm:col-span-2 sm:justify-end">{date}</div>
                  </Link>
                ))}
              </div>

              <div className="mt-1 flex justify-center">
                <Link href="/governance/votes" className="flex items-center gap-2 text-sm text-[#C4C7C8] hover:text-white">
                  View All Votes <Icon className="text-[16px]">arrow_forward</Icon>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}