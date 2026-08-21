import Link from "next/link";

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
export default function ConnectWalletPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121315] font-sans text-[#E3E2E3]">
      {/* Background application — intentionally dimmed/blurred behind modal */}
      <div className="pointer-events-none absolute inset-0 opacity-30 blur-md">
        <aside className="fixed inset-y-0 left-0 flex w-[280px] flex-col border-r border-[#444748] bg-[#121315] p-4">
          <div className="mb-16 px-2">
            <span className="text-base font-bold text-white">CampusDAO</span>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <div className="h-10 rounded-lg bg-[#343536]" />
            <div className="h-10 rounded-lg bg-[#343536]" />
            <div className="h-10 rounded-lg bg-[#343536]" />
            <div className="h-10 rounded-lg bg-[#343536]" />
          </div>

          <div className="mt-auto h-10 rounded-lg bg-[#343536]" />
        </aside>

        <div className="ml-[280px] flex min-h-screen flex-col">
          <header className="flex h-16 items-center justify-end border-b border-[#444748] bg-[#121315] px-6">
            <div className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#08090A]">
              Connect Wallet
            </div>
          </header>

          <section className="mx-auto w-full max-w-[1200px] flex-1 p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="h-32 rounded-lg border border-[#444748] bg-[#121315]" />
              <div className="h-32 rounded-lg border border-[#444748] bg-[#121315]" />
              <div className="h-32 rounded-lg border border-[#444748] bg-[#121315]" />
            </div>
          </section>
        </div>
      </div>

      {/* Modal overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="connect-wallet-title"
          className="relative w-full max-w-md rounded-xl border border-[#444748] bg-[#121315] p-8 shadow-2xl"
        >
          {/* Close */}
          <Link
            href="/"
            aria-label="Close wallet connection dialog"
            className="absolute right-4 top-4 text-[#C4C7C8] transition-colors hover:text-white"
          >
            <Icon>close</Icon>
          </Link>

          {/* Header */}
          <div className="mb-8 text-center">
            <h1
              id="connect-wallet-title"
              className="mb-2 text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
            >
              Connect Wallet
            </h1>

            <p className="text-sm leading-5 text-[#C4C7C8]">
              Connect your wallet to participate in CampusDAO governance.
            </p>
          </div>

          {/* Wallet options */}
          <div className="space-y-4">
            <button
              type="button"
              className="group flex w-full items-center justify-between rounded-lg border border-[#444748] bg-[#1B1C1D] p-4 transition-all hover:border-[#8E9192] hover:bg-[#343536]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[10px] font-black text-[#08090A]">
                    M
                  </div>
                </div>

                <span className="text-base font-semibold text-white">
                  MetaMask
                </span>
              </div>

              <Icon className="text-[#C4C7C8] transition-colors group-hover:text-white">
                chevron_right
              </Icon>
            </button>

            <button
              type="button"
              className="group flex w-full items-center justify-between rounded-lg border border-[#444748] bg-[#1B1C1D] p-4 transition-all hover:border-[#8E9192] hover:bg-[#343536]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
                  <Icon className="text-white">qr_code_scanner</Icon>
                </div>

                <span className="text-base font-semibold text-white">
                  WalletConnect
                </span>
              </div>

              <Icon className="text-[#C4C7C8] transition-colors group-hover:text-white">
                chevron_right
              </Icon>
            </button>
          </div>

          {/* Terms */}
          <div className="mt-8 text-center">
            <p className="text-xs leading-4 text-[#C4C7C8]">
              By connecting, you agree to our{" "}
              <Link href="/terms" className="text-white hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-white hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}