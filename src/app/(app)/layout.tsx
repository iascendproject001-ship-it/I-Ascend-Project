import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { getCurrentLearner } from "@/lib/session";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const learner = await getCurrentLearner();
  return <AppShell learner={learner}>{children}</AppShell>;
}
