export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black font-bold">
              C
            </div>

            <span className="text-xl font-semibold tracking-tight">
              CampusDAO
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#governance" className="transition hover:text-white">
              Governance
            </a>

            <a href="#treasury" className="transition hover:text-white">
              Treasury
            </a>
          </div>

          <button className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
            Decentralized Student Governance
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Your campus.
            <br />
            Your voice.
            <br />
            <span className="text-white/40">Your governance.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            CampusDAO gives students a transparent, community-driven way to
            propose ideas, vote on decisions, and manage campus resources
            through blockchain-based governance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">
              Explore Proposals
            </button>

            <button className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10">
              View Treasury
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Stat label="Members" value="—" />
          <Stat label="Proposals" value="—" />
          <Stat label="Treasury" value="— ETH" />
          <Stat label="Voting Power" value="— CGT" />
        </div>
      </section>

      {/* Governance */}
      <section
        id="governance"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/40">
            Governance
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Decisions belong to the community.
          </h2>

          <p className="mt-4 max-w-2xl text-white/50">
            Students can propose changes, participate in discussions, and use
            their voting power to shape the direction of the campus community.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            number="01"
            title="Propose"
            description="Turn campus ideas into transparent, on-chain proposals."
          />

          <Feature
            number="02"
            title="Vote"
            description="Use your governance power to support or reject proposals."
          />

          <Feature
            number="03"
            title="Execute"
            description="Successful proposals can trigger real actions through the DAO treasury."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-2xl border border-white/10 bg-white/3 p-10 md:p-16">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              CampusDAO
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight">
              Build the campus you want to see.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              Connect your wallet and participate in the next decision.
            </p>

            <button className="mt-8 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">
              Connect Wallet
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-r border-white/10 px-6 py-8 last:border-r-0">
      <p className="text-sm text-white/40">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}

function Feature({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/3 p-6 transition hover:border-white/20">
      <span className="text-sm text-white/30">{number}</span>

      <h3 className="mt-8 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-white/45">
        {description}
      </p>
    </div>
  );
}