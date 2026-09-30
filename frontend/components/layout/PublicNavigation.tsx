import Link from "next/link";

export function PublicNavigation({ active }: { active: "about" | "governance" }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#444748] bg-[#121315]">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-8"><Link href="/" className="text-base font-bold text-white">CampusDAO</Link><div className="hidden items-center gap-4 md:flex"><Link href="/about" className={active === "about" ? "border-b-2 border-white pb-1 text-base text-white" : "text-base text-[#C4C7C8] transition-colors hover:text-white"}>About</Link><Link href="/governance" className={active === "governance" ? "border-b-2 border-white pb-1 text-base text-white" : "text-base text-[#C4C7C8] transition-colors hover:text-white"}>Governance</Link><Link href="/treasury" className="text-base text-[#C4C7C8] transition-colors hover:text-white">Treasury</Link></div></div>
        <Link href="/connect-wallet" className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#08090A] transition-opacity hover:opacity-90">Connect Wallet</Link>
      </div>
    </nav>
  );
}