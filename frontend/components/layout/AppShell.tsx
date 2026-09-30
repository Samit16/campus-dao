import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

type AppShellProps = {
  children: ReactNode;
  activeLabel: "Dashboard" | "Proposals" | "Treasury" | "Activity" | "My Governance" | "Settings";
  variant?: "dashboard" | "default" | "governance";
  search?: boolean;
  footer?: boolean;
};

export function AppShell({ children, activeLabel, variant = "default", search = false, footer = false }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#121315] text-[#E3E2E3] antialiased">
      <Sidebar activeLabel={activeLabel} variant={variant} />
      <div className={`min-w-0 ${variant === "dashboard" ? "md:ml-[280px]" : "md:ml-[280px]"}`}>
        <Header variant={variant} search={search} />
        {children}
        {footer && <Footer variant={variant === "dashboard" ? "dashboard" : "default"} />}
      </div>
    </div>
  );
}