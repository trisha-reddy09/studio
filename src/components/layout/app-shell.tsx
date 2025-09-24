import type { ReactNode } from "react";
import { AppHeader } from "./header";
import { BottomNav } from "./bottom-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full max-h-[900px] w-full max-w-md flex-col overflow-hidden rounded-2xl border-4 border-gray-800 bg-card shadow-2xl">
      <AppHeader />
      <main className="flex-1 overflow-y-auto bg-background p-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
