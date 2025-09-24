import { AppShell } from "@/components/layout/app-shell";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-background p-2 sm:p-4">
      <AppShell>
        {children}
      </AppShell>
    </main>
  );
}
