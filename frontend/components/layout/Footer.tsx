import Link from "next/link";

export function Footer({ variant = "default" }: { variant?: "default" | "dashboard" }) {
  const dashboard = variant === "dashboard";
  return (
    <footer className={`border-t ${dashboard ? "border-[#444748] bg-[#08090A]" : "border-[#444748] bg-[#08090A]"} px-4 py-8 md:px-10`}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-xs text-[#C4C7C8]">© 2024 CampusDAO. Institutional Student Governance.</p>
        <div className="flex gap-6 text-xs"><Link href="/terms" className="text-[#C4C7C8] hover:text-white">Terms</Link><Link href="/privacy" className="text-[#C4C7C8] hover:text-white">Privacy</Link><a href="#" className="text-[#C4C7C8] hover:text-white">Twitter</a><a href="#" className="text-[#C4C7C8] hover:text-white">Discord</a></div>
      </div>
    </footer>
  );
}