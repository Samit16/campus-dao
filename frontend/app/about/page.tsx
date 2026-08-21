import Link from "next/link";

const mechanics = [
  {
    icon: "account_balance_wallet",
    title: "1. Identity Verification",
    description:
      "Students link their university credentials to a secure, non-transferable decentralized identity (DID). This ensures one-student, one-vote integrity.",
  },
  {
    icon: "gavel",
    title: "2. Proposal Drafting",
    description:
      "Any verified student can draft proposals for initiatives, budget allocations, or systemic changes. Proposals enter a transparent debate phase.",
  },
  {
    icon: "how_to_vote",
    title: "3. On-Chain Execution",
    description:
      "Upon passing, smart contracts automatically execute the terms of the proposal, releasing funds or updating registry variables without manual intervention.",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#08090A] text-[#E3E2E3] antialiased">
      {/* Public navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#444748] bg-[#121315]">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-base font-bold text-white"
            >
              CampusDAO
            </Link>

            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="/about"
                className="border-b-2 border-white pb-1 text-base text-white"
              >
                About
              </Link>

              <Link
                href="/governance"
                className="text-base text-[#C4C7C8] transition-colors hover:text-white"
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
          </div>

          <Link
            href="/connect-wallet"
            className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#08090A] transition-opacity hover:opacity-90"
          >
            Connect Wallet
          </Link>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-[1440px] flex-grow flex-col items-center gap-16 px-4 py-16 md:px-10">
        {/* Hero */}
        <header className="flex w-full max-w-[1200px] flex-col items-center gap-8 py-16 text-center">
          <h1 className="max-w-4xl text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[72px]">
            Institutional Student Governance.
          </h1>

          <p className="max-w-2xl text-base leading-6 tracking-[-0.01em] text-[#C4C7C8]">
            CampusDAO aims to modernize university student unions by bringing
            transparency, verifiable voting, and decentralized treasury
            management to campus life.
          </p>
        </header>

        {/* What is CampusDAO */}
        <section className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 border-t border-[#444748] py-16 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
              What is CampusDAO?
            </span>

            <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
              A transparent layer for campus democracy.
            </h2>

            <p className="text-base leading-6 tracking-[-0.01em] text-[#C4C7C8]">
              Student unions manage significant funds, yet their operations are
              often opaque and suffer from low voter turnout. CampusDAO
              provides a clear, immutable record of proposals, debates, and
              treasury expenditures. We believe that by aligning incentives
              and lowering the barrier to participation, we can build more
              responsive student governments.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#444748] bg-[#121315]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#343536_0,_#121315_42%,_#08090A_75%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#444748_1px,transparent_1px),linear-gradient(90deg,#444748_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute left-[20%] top-[28%] h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.7)]" />
            <div className="absolute right-[25%] top-[42%] h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.7)]" />
            <div className="absolute bottom-[25%] left-[40%] h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.7)]" />
            <div className="absolute left-[21%] top-[29%] h-px w-[31%] rotate-[12deg] bg-white/50" />
            <div className="absolute right-[28%] top-[45%] h-px w-[24%] rotate-[135deg] bg-white/50" />
          </div>
        </section>

        {/* Why Blockchain */}
        <section className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 border-t border-[#444748] py-16 md:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#444748] bg-[#121315] md:order-1">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#343536,#121315_45%,#08090A)]" />
            <div className="absolute inset-8 rounded border border-[#8E9192]/30" />
            <div className="absolute inset-14 rounded border border-[#8E9192]/20" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/50" />
            <div className="absolute inset-x-16 top-1/2 h-px bg-white/30" />
            <div className="absolute inset-y-16 left-1/2 w-px bg-white/30" />
          </div>

          <div className="order-1 flex flex-col gap-4 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
              Why Blockchain?
            </span>

            <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
              Immutable records. Provable outcomes.
            </h2>

            <p className="text-base leading-6 tracking-[-0.01em] text-[#C4C7C8]">
              We utilize decentralized ledger technology not for speculative
              tokens, but for its core utility: verifiable consensus. Every
              vote cast, every treasury allocation, and every governance
              parameter change is recorded permanently. This eliminates
              ambiguity and establishes unquestionable trust in the electoral
              process.
            </p>
          </div>
        </section>

        {/* Mechanics */}
        <section className="flex w-full max-w-[1200px] flex-col gap-8 border-t border-[#444748] py-16">
          <div className="flex flex-col items-center gap-2 pb-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#C4C7C8]">
              The Mechanics
            </span>
            <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
              How CampusDAO Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {mechanics.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-lg border border-[#444748] bg-[#121315] p-8 transition-colors hover:bg-[#151617]"
              >
                <Icon className="text-3xl text-white">{item.icon}</Icon>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-5 text-[#C4C7C8]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex w-full max-w-[1200px] flex-col items-center gap-8 border-t border-[#444748] py-16 text-center">
          <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            Ready to participate?
          </h2>

          <p className="max-w-xl text-base leading-6 text-[#C4C7C8]">
            Connect your wallet to verify your student status and begin
            engaging in decentralized governance today.
          </p>

          <Link
            href="/connect-wallet"
            className="mt-2 rounded bg-white px-8 py-3 text-base font-semibold text-[#08090A] transition-opacity hover:opacity-90"
          >
            Connect Wallet
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#444748] bg-[#121315]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-10">
          <p className="text-xs text-[#C4C7C8]">
            © 2024 CampusDAO. Institutional Student Governance.
          </p>

          <div className="flex gap-6 text-xs">
            <Link href="/terms" className="text-[#C4C7C8] hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-[#C4C7C8] hover:text-white">
              Privacy
            </Link>
            <a href="#" className="text-[#C4C7C8] hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-[#C4C7C8] hover:text-white">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}