import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Icon } from "@/components/ui/Icon";

const votes = [
  ["CDIP-42", "Allocate Q4 Treasury Funds to Developer Guild", "For", "Oct 24, 2023"],
  ["CDIP-41", "Update Delegation Quorum Thresholds", "Against", "Oct 18, 2023"],
  ["CDIP-39", "Partnership Integration with University Hub", "For", "Sep 30, 2023"],
] as const;

export default function MyGovernancePage() {
  return (
    <AppShell activeLabel="My Governance" variant="governance" search>
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
    </AppShell>
  );
}