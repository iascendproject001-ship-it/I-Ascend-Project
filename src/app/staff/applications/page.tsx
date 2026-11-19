import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { learnerProfiles, learners } from "@/db/schema";
import { requireStaff } from "@/lib/staff-auth";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Applications register" };

export default async function ApplicationsPage() {
  await requireStaff();
  const rows = await db
    .select({
      id: learners.id,
      name: learners.name,
      email: learners.email,
      targetCourse: learners.targetCourse,
      targetInstitution: learners.targetInstitution,
      targetScore: learners.targetScore,
      createdAt: learners.createdAt,
      pathway: learnerProfiles.pathway,
      completeness: learnerProfiles.completeness,
      utmeStatus: learnerProfiles.utmeStatus,
      riskFlagCount: learnerProfiles.riskFlags,
    })
    .from(learners)
    .leftJoin(learnerProfiles, eq(learnerProfiles.learnerId, learners.id))
    .orderBy(desc(learners.id))
    .limit(200);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge tone="gold">Applications register</Badge>
          <h1 className="mt-2 font-display text-3xl text-navy-deep">Every applicant, one table.</h1>
          <p className="mt-1 text-sm text-ink-soft">
            {rows.length} record(s). Open any row for the full profile, support flags and mentor brief.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-parchment/70 text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft">
              <tr>
                <th className="px-4 py-3 font-bold">Applicant</th>
                <th className="px-4 py-3 font-bold">Target</th>
                <th className="px-4 py-3 font-bold">UTME status</th>
                <th className="px-4 py-3 font-bold">Pathway</th>
                <th className="px-4 py-3 font-bold">Profile</th>
                <th className="px-4 py-3 font-bold">Flags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((row) => (
                <tr key={row.id} className="align-top transition hover:bg-cream/60">
                  <td className="px-4 py-3">
                    <Link href={`/staff/applications/${row.id}`} className="font-semibold text-navy hover:underline">
                      {row.name}
                    </Link>
                    <p className="text-[0.7rem] text-ink-soft">{row.email}</p>
                  </td>
                  <td className="px-4 py-3 text-xs leading-relaxed text-ink-soft">
                    {row.targetCourse || "—"}
                    {row.targetInstitution ? <span className="block">· {row.targetInstitution}</span> : null}
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-soft">{row.utmeStatus ?? "—"}</td>
                  <td className="px-4 py-3">
                    {row.pathway ? (
                      <span className="rounded-full bg-navy/8 px-2 py-0.5 text-[0.7rem] font-bold text-navy">
                        {row.pathway}
                      </span>
                    ) : (
                      <span className="text-xs text-ink-soft">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-soft">
                    {row.completeness !== null && row.completeness !== undefined ? `${row.completeness}%` : "Not started"}
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-soft">
                    {Array.isArray(row.riskFlagCount) && row.riskFlagCount.length > 0 ? (
                      <span className="rounded-full bg-gold-soft px-2 py-0.5 font-semibold text-gold-deep">
                        {row.riskFlagCount.length}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-ink-soft">
                    No applications yet. Share the /apply link with your first partner school.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
