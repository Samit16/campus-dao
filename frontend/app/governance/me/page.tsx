import Link from "next/link";

const lifecycle = [
  {
    icon: "edit",
    backgroundIcon: "edit_document",
    title: "1. Propose",
    description:
      "Any member with sufficient voting power can draft and submit a formal proposal detailing requested changes or funding allocations.",
  },
  {
    icon: "chat",
    backgroundIcon: "forum",
    title: "2. Discuss",
    description:
      "The proposal enters a mandated discussion period on the forums. Community feedback is gathered and revisions are often made.",
  },
  {
    icon: "how_to_vote",
    backgroundIcon: "how_to_vote",
    title: "3. Vote",
    description:
      "Token holders cast their votes on-chain. Voting power is proportional to delegated tokens. A quorum must be reached for validity.",
  },
  {
    icon: "done_all",
    backgroundIcon: "task_alt",
    title: "4. Execute",
    description:
      "If passed, the proposal enters a time-lock before automated execution via smart contracts, ensuring trustless implementation.",
  },
] as const;

const activeGovernance = [
  {
    id: "CDP-42",
    status: "Voting",
    statusIcon: true,
    time: "Ends in 2 days",
    title: "Increase Library Resource Funding Allocation",
    description:
      "This proposal seeks to reallocate 5% of the general treasury towards extending digital library subscriptions for the upcoming academic year.",
    votes: "2.4M",
    progress: 75,
  },
  {
    id: "CDP-43",
    status: "Discussion",
    statusIcon: false,
    time: "Active Discussion",
    title: "Establish Student Tech Grant Program",
    description:
      "Establishing a formalized micro-grant system to fund student-led technology initiatives and open-source contributions on campus.",
    replies: "48 Replies",
    views: "1.2k Views",
  },
] as const;

function Icon({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

export default function GovernanceOverviewPage() {
  return (
    <div className="min-h-screen bg-[#121315] text-[#E3E2E3] antialiased">
      {/* Public navigation */}
      <nav className="mx-auto flex w-full max-w-[1440px] flex-col border-b border-[#444748] bg-[#121315] px-4 md:h-16 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center justify-between py-4 md:py-0">
          <Link
            href="/"
            className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white md:text-base md:font-bold"
          >
            CampusDAO
          </Link>
        </div>

        <div className="flex w-full flex-col items-center gap-6 pb-4 md:w-auto md:flex-row md:pb-0">
          <Link
            href="/about"
            className="text-base text-[#C4C7C8] transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/governance-overview"
            className="border-b-2 border-white pb-1 text-base text-white"
          >
            Governance
          </Link>
          <Link
            href="/treasury"
            className="text-base text-[#C4C7C8] transition-colors hover:text-white"
          >
            Treasury
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/connect-wallet"
            className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#08090A] transition-opacity hover:opacity-90"
          >
            Connect Wallet
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto flex w-full max-w-[1440px] flex-grow flex-col items-center gap-16 px-4 py-16 md:px-10">
        {/* Hero */}
        <section className="flex w-full max-w-[1200px] flex-col items-center gap-4 text-center">
          <h1 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[72px]">
            Participate in Governance
          </h1>
          <p className="max-w-2xl text-base leading-6 tracking-[-0.01em] text-[#C4C7C8]">
            CampusDAO empowers students to shape the future of their
            institution. Understand the lifecycle of a proposal and learn how
            your voice translates into actionable change.
          </p>
        </section>

        {/* Lifecycle */}
        <section className="flex w-full max-w-[1200px] flex-col gap-8">
          <h2 className="border-b border-[#444748] pb-2 text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            The Lifecycle
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((stage) => (
              <article
                key={stage.title}
                className="group relative flex min-h-[330px] flex-col gap-4 overflow-hidden rounded-lg border border-[#444748] bg-[#121315] p-8 transition-colors hover:border-white"
              >
                <div className="absolute -right-4 -top-4 text-[#343536] opacity-20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-[120px]">{stage.backgroundIcon}</Icon>
                </div>

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded border border-[#444748] bg-[#1F2021] text-white">
                  <Icon>{stage.icon}</Icon>
                </div>

                <div className="z-10">
                  <h3 className="text-base font-bold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-[#C4C7C8]">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Active governance */}
        <section className="flex w-full max-w-[1200px] flex-col gap-8 pt-4">
          <div className="flex items-end justify-between border-b border-[#444748] pb-2">
            <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
              Active Governance
            </h2>

            <Link
              href="/proposals"
              className="flex items-center gap-1 text-sm text-[#C4C7C8] transition-colors hover:text-white"
            >
              View All
              <Icon className="text-[16px]">arrow_forward</Icon>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {activeGovernance.map((proposal) => (
              <Link
                key={proposal.id}
                href={`/proposals/${proposal.id}`}
                className="group flex cursor-pointer flex-col gap-4 rounded-lg border border-[#444748] bg-[#121315] p-8 transition-colors hover:bg-[#343536]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-[#444748] bg-[#1F2021] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E3E2E3]">
                      {proposal.id}
                    </span>

                    <span className="flex items-center gap-1 rounded border border-[#444748] bg-[#1F2021] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          proposal.statusIcon ? "bg-white" : "bg-[#8E9192]"
                        }`}
                      />
                      {proposal.status}
                    </span>
                  </div>

                  <span className="text-xs text-[#C4C7C8]">
                    {proposal.time}
                  </span>
                </div>

                <div>
                  <h4 className="mb-1 text-base font-bold text-white">
                    {proposal.title}
                  </h4>
                  <p className="line-clamp-2 text-sm leading-5 text-[#C4C7C8]">
                    {proposal.description}
                  </p>
                </div>

                {"progress" in proposal ? (
                  <div className="mt-auto flex flex-col gap-2 border-t border-[#444748] pt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#C4C7C8]">For</span>
                      <span className="font-bold text-white">
                        {proposal.votes}
                      </span>
                    </div>

                    <div className="h-1 w-full overflow-hidden rounded-full bg-[#1F2021]">
                      <div
                        className="h-full bg-white"
                        style={{ width: `${proposal.progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-auto flex items-center gap-4 border-t border-[#444748] pt-4">
                    <div className="flex items-center gap-1 text-xs text-[#C4C7C8]">
                      <Icon className="text-[16px]">forum</Icon>
                      {proposal.replies}
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#C4C7C8]">
                      <Icon className="text-[16px]">visibility</Icon>
                      {proposal.views}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-auto flex w-full max-w-[1440px] flex-col items-center justify-between border-t border-[#444748] bg-[#121315] px-4 py-8 md:flex-row md:px-10">
        <p className="mb-4 text-xs text-[#C4C7C8] md:mb-0">
          © 2024 CampusDAO. Institutional Student Governance.
        </p>

        <div className="flex gap-6">
          <Link href="/terms" className="text-xs text-[#C4C7C8] hover:text-white">
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-[#C4C7C8] hover:text-white"
          >
            Privacy
          </Link>
          <a href="#" className="text-xs text-[#C4C7C8] hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-xs text-[#C4C7C8] hover:text-white">
            Discord
          </a>
        </div>
      </footer>
    </div>
  );
}