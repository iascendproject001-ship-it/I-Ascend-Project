import Link from "next/link";
import { getCurrentLearner } from "@/lib/session";
import { getResources } from "@/lib/data";
import { ArrowIcon, Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Textbook & resource library" };

export default async function ResourcesPage() {
  const [learner, resources] = await Promise.all([getCurrentLearner(), getResources()]);

  const free = resources.filter((resource) => resource.isFree === 1);
  const textbooks = resources.filter((resource) => resource.isFree !== 1);
  const subjectNames = [
    ...new Set(resources.map((resource) => resource.subjectName).filter(Boolean) as string[]),
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-line bg-white p-6">
        <Badge tone="gold">High-yield library</Badge>
        <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
          The right book, in the right order.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          A curated route through the textbooks that actually move UTME scores, plus free I Ascend guides and
          official documents. We do not host copyrighted books — we tell you exactly what to look for and
          connect you to a copy through the programme.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] text-ink-soft">
          <span className="rounded-full border border-line bg-cream px-2.5 py-1">
            {resources.length} curated entries
          </span>
          <span className="rounded-full border border-emerald/20 bg-emerald-soft px-2.5 py-1 text-emerald">
            {free.length} free resources
          </span>
          <span className="rounded-full border border-line bg-cream px-2.5 py-1">
            {subjectNames.length} subjects mapped
          </span>
        </div>
      </header>

      <section>
        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-xl text-navy-deep">Free guides &amp; official documents</h2>
          <span className="text-xs text-ink-soft">Start here — no cost</span>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {free.map((resource) => (
            <article key={resource.id} className="rounded-2xl border border-emerald/20 bg-emerald-soft/40 p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald">
                  {resource.type}
                </p>
                {resource.icon && <span className="text-lg">{resource.icon}</span>}
              </div>
              <h3 className="mt-1.5 font-display text-lg leading-snug text-navy-deep">{resource.title}</h3>
              <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-wide text-ink-soft">
                {resource.provider}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{resource.description}</p>
              <div className="mt-3">
                {resource.url ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald hover:underline"
                  >
                    Open official source
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={learner ? "/mentor/new" : "/start"}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald hover:underline"
                  >
                    Request a copy via a mentor
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-xl text-navy-deep">Recommended textbooks by subject</h2>
          <span className="text-xs text-ink-soft">Print or PDF — check editions</span>
        </div>
        <div className="mt-3 overflow-hidden rounded-2xl border border-line bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-parchment/70 text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft">
              <tr>
                <th className="px-4 py-3 font-bold">Subject</th>
                <th className="px-4 py-3 font-bold">Title</th>
                <th className="hidden px-4 py-3 font-bold sm:table-cell">Why it works</th>
                <th className="px-4 py-3 font-bold">Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {textbooks.map((resource) => (
                <tr key={resource.id} className="align-top">
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                      {resource.icon} {resource.subjectName ?? "General"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold leading-snug text-navy-deep">{resource.title}</p>
                    <p className="mt-0.5 text-[0.68rem] text-ink-soft">{resource.provider}</p>
                  </td>
                  <td className="hidden max-w-xs px-4 py-3 text-xs leading-relaxed text-ink-soft sm:table-cell">
                    {resource.description}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={learner ? "/mentor/new" : "/start"}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-navy hover:underline"
                    >
                      Request
                      <ArrowIcon className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-line bg-navy p-6 text-cream">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
              A note on textbooks
            </p>
            <h2 className="mt-2 font-display text-2xl leading-snug">
              You do not need ten books. You need three, finished properly.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Choose one core text per subject, one past-question compilation, and the official syllabus. Work
              every exercise under timed conditions. If you cannot afford a copy, tell a mentor — the
              programme maintains a small lending pool and a library of free PDFs where permitted.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/learn"
              className="rounded-full bg-gold px-5 py-3 text-center text-xs font-semibold text-navy-deep"
            >
              Study the matching lessons
            </Link>
            <Link
              href={learner ? "/mentor/new" : "/start"}
              className="rounded-full border border-white/25 px-5 py-3 text-center text-xs font-semibold text-cream"
            >
              {learner ? "Request a textbook" : "Create a profile to request"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
