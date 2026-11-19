import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { learnerProfiles, learners, mentorThreads, practiceSessions } from "@/db/schema";
import { requireStaff } from "@/lib/staff-auth";
import { Badge } from "@/components/ui";
import { IadpPanel } from "@/components/staff/iadp-panel";

export const dynamic = "force-dynamic";
export const metadata = { title: "Applicant detail" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card p-5">
      <h2 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-line/70 py-2 text-sm last:border-0 sm:flex-row sm:justify-between sm:gap-4">
      <dt className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-wide text-ink-soft">{label}</dt>
      <dd className="text-ink sm:max-w-[65%] sm:text-right">{value || "—"}</dd>
    </div>
  );
}

export default async function ApplicantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireStaff();
  const { id: raw } = await params;
  const id = Number(raw);
  if (!Number.isFinite(id)) notFound();

  const [learner] = await db.select().from(learners).where(eq(learners.id, id)).limit(1);
  if (!learner) notFound();
  const [profile] = await db
    .select()
    .from(learnerProfiles)
    .where(eq(learnerProfiles.learnerId, id))
    .limit(1);
  const sessions = await db
    .select()
    .from(practiceSessions)
    .where(eq(practiceSessions.learnerId, id))
    .orderBy(desc(practiceSessions.startedAt))
    .limit(6);
  const threads = await db
    .select()
    .from(mentorThreads)
    .where(eq(mentorThreads.learnerId, id))
    .orderBy(asc(mentorThreads.createdAt));

  return (
    <div className="space-y-5">
      <div>
        <Link href="/staff/applications" className="text-xs font-semibold text-navy hover:underline">
          ← Back to register
        </Link>
        <Link
          href={`/staff/applications/${id}/edit`}
          className="ml-3 text-xs font-semibold text-navy hover:underline"
        >
          Edit record →
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <h1 className="font-display text-3xl text-navy-deep">{learner.name}</h1>
          {profile && <Badge tone="navy">Pathway {profile.pathway}</Badge>}
          {profile && <Badge tone="gold">{profile.completeness}% complete</Badge>}
        </div>
        <p className="mt-1 text-sm text-ink-soft">
          {learner.email} · Target {learner.targetScore} · UTME {learner.examYear}
        </p>
      </div>

      {profile && (
        <section className="rounded-2xl bg-navy p-5 text-cream">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold">Mentor brief (on record)</p>
          <p className="mt-2 text-sm leading-relaxed text-cream/85">{profile.mentorBrief}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">Mentor focus</p>
              <ul className="mt-1.5 space-y-1 text-[0.7rem] leading-snug text-cream/80">
                {profile.mentorFocus.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">
                Support flags ({profile.riskFlags.length})
              </p>
              <ul className="mt-1.5 space-y-1 text-[0.7rem] leading-snug text-cream/80">
                {profile.riskFlags.length === 0 && <li>• None recorded.</li>}
                {profile.riskFlags.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <IadpPanel learnerId={id} />

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="Identity & contact">
          <dl>
            <Row label="Phone / WhatsApp" value={profile?.phone} />
            <Row label="Alternative contact" value={profile?.altContact} />
            <Row label="Age" value={profile && profile.age > 0 ? `${profile.age} years` : "—"} />
            <Row label="Gender" value={profile?.gender} />
            <Row label="Location" value={profile ? `${profile.location}${profile.state ? `, ${profile.state}` : ""}` : "—"} />
            <Row label="Heard via" value={profile?.referralSource} />
            <Row label="First generation" value={profile?.firstGeneration} />
            <Row label="Guardian" value={profile?.guardianName ? `${profile.guardianName} (${profile.guardianRelation}, ${profile.guardianPhone})` : "—"} />
            <Row label="Guardian consent" value={profile ? (profile.guardianConsent ? "Recorded" : "Not recorded") : "—"} />
          </dl>
        </Section>

        <Section title="Education & UTME">
          <dl>
            <Row label="School" value={profile ? `${profile.schoolName} (${profile.schoolType}, ${profile.graduationYear})` : "—"} />
            <Row label="O'level status" value={profile?.olevelStatus} />
            <Row label="Sittings" value={profile?.olevelSitting} />
            <Row
              label="O'level grades"
              value={
                profile && profile.olevelResults.length > 0
                  ? profile.olevelResults.map((r) => `${r.subject}: ${r.grade}`).join(" · ")
                  : "—"
              }
            />
            <Row label="UTME status" value={profile?.utmeStatus} />
            <Row
              label="Previous attempts"
              value={
                profile && profile.attempts.length > 0
                  ? profile.attempts.map((a) => `${a.year || "?"}: ${a.score || "?"} (${a.outcome || "?"})`).join(" · ")
                  : "—"
              }
            />
            <Row label="Subjects" value={profile?.subjects.join(", ")} />
            <Row
              label="Confidence"
              value={
                profile
                  ? Object.entries(profile.confidence)
                      .map(([s, v]) => `${s} ${v}/5`)
                      .join(" · ")
                  : "—"
              }
            />
          </dl>
        </Section>

        <Section title="Goal">
          <dl>
            <Row label="Course" value={profile?.targetCourse || learner.targetCourse} />
            <Row label="Institution" value={profile?.targetInstitution || learner.targetInstitution} />
            <Row label="Alternative" value={profile ? `${profile.altCourse || "—"} · ${profile.altInstitution || "—"}` : "—"} />
          </dl>
        </Section>

        <Section title="Study conditions & support">
          <dl>
            <Row label="Study time" value={profile ? `${profile.studyHours} · ${profile.studyWindow} · ${profile.studyConsistency}` : "—"} />
            <Row label="Device" value={profile?.deviceAccess} />
            <Row label="Internet" value={profile?.internetAccess} />
            <Row label="Power" value={profile?.powerAccess} />
            <Row label="Quiet space" value={profile?.quietSpace} />
            <Row label="Barriers" value={profile?.studyChallenges.join("; ")} />
            <Row label="Support needs" value={profile?.learningSupport.join("; ")} />
            <Row label="Accommodations" value={profile?.accommodations} />
            <Row label="Language" value={profile?.preferredLanguage} />
            <Row label="Mentor preference" value={profile ? `${profile.mentorPreference} · ${profile.meetingMode}` : "—"} />
          </dl>
        </Section>
      </div>

      {profile && (profile.motivation || profile.biggestFear || profile.mentorshipGoals) && (
        <Section title="In their own words">
          {profile.motivation && (
            <p className="text-sm leading-relaxed text-ink"><strong>Motivation:</strong> {profile.motivation}</p>
          )}
          {profile.biggestFear && (
            <p className="mt-2 text-sm leading-relaxed text-ink"><strong>Worry:</strong> {profile.biggestFear}</p>
          )}
          {profile.mentorshipGoals && (
            <p className="mt-2 text-sm leading-relaxed text-ink"><strong>Mentoring goal:</strong> {profile.mentorshipGoals}</p>
          )}
        </Section>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title={`CBT history (${sessions.length})`}>
          {sessions.length === 0 && <p className="text-sm text-ink-soft">No CBT attempts yet.</p>}
          <ul className="space-y-2">
            {sessions.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-2 text-sm">
                <Link href={`/cbt/${s.id}/${s.status === "completed" ? "result" : ""}`} className="font-medium text-navy hover:underline">
                  {s.label}
                </Link>
                <span className="text-xs text-ink-soft">
                  {s.status === "completed" ? `${s.scorePercent}%` : s.status}
                </span>
              </li>
            ))}
          </ul>
        </Section>
        <Section title={`Mentor threads (${threads.length})`}>
          {threads.length === 0 && <p className="text-sm text-ink-soft">No mentor conversations yet.</p>}
          <ul className="space-y-2">
            {threads.map((t) => (
              <li key={t.id} className="text-sm">
                <Link href={`/mentor/${t.id}`} className="font-medium text-navy hover:underline">
                  {t.title}
                </Link>
                <p className="text-xs text-ink-soft">{t.category} · {t.status}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {!profile && (
        <p className="rounded-xl border border-gold/40 bg-gold-soft/60 p-4 text-sm text-[#6b4a0d]">
          This learner has not completed the participant profile yet. Ask them to visit /onboarding after
          signing in.
        </p>
      )}
    </div>
  );
}
