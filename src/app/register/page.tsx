import Link from "next/link";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge } from "@/components/ui";
import { registerInterest } from "@/lib/actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Join the outreach programme" };

const tracks = [
  "UTME preparation",
  "Free CBT clinic",
  "Mentorship (as a learner)",
  "Volunteer tutor",
  "School / community partnership",
  "Scholarship & bursary support",
];

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ done?: string; error?: string }>;
}) {
  const { done, error } = await searchParams;

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Badge tone="gold">Outreach &amp; partnerships</Badge>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-navy-deep sm:text-5xl">
              Bring the intervention to your community.
            </h1>
            <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-ink-soft">
              I Ascend runs free CBT clinics, weekend tutorials and admissions clinics for secondary schools,
              community groups and faith organisations. We also welcome volunteer tutors and mentors who have
              already walked this road.
            </p>

            <div className="mt-7 space-y-3">
              {[
                {
                  title: "For schools & organisations",
                  body: "Tell us how many candidates you serve and what they struggle with. We will design a clinic around it.",
                },
                {
                  title: "For volunteer tutors",
                  body: "Give two hours a week. Teach a subject you know, or hold mock-review sessions online.",
                },
                {
                  title: "For parents & guardians",
                  body: "Register a candidate and we will help them choose a course, plan preparation and apply.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-4">
                  <p className="text-sm font-semibold text-navy-deep">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-navy p-5 text-cream">
              <p className="font-display text-lg">Prefer to start studying now?</p>
              <p className="mt-1 text-sm text-cream/70">
                You do not need to wait for an outreach clinic. Create a learner profile and begin today.
              </p>
              <Link
                href="/start"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-navy-deep"
              >
                Begin your ascent
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="card p-5 sm:p-7">
            {done === "1" ? (
              <div className="py-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-soft text-2xl text-emerald">
                  ✓
                </span>
                <h2 className="mt-4 font-display text-2xl text-navy-deep">You are on the list.</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Thank you for reaching out. An I Ascend coordinator will contact you about the next outreach
                  clinic or onboarding session.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <Link
                    href="/start"
                    className="rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream"
                  >
                    Create my learner profile
                  </Link>
                  <Link
                    href="/learn"
                    className="rounded-full border border-line bg-white px-5 py-3 text-xs font-semibold text-navy"
                  >
                    Browse lessons
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl text-navy-deep">Register your interest</h2>
                <p className="mt-1 text-xs text-ink-soft">
                  All fields marked by the browser as required must be completed.
                </p>

                {error === "details" && (
                  <p className="mt-3 rounded-lg bg-[#fdecec] px-3 py-2 text-xs font-medium text-[#a12b2b]">
                    Please provide your name and a valid email address.
                  </p>
                )}

                <form action={registerInterest} className="mt-5 space-y-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                        Full name
                      </span>
                      <input
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                        Email
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                        Phone / WhatsApp
                      </span>
                      <input
                        name="phone"
                        placeholder="080..."
                        className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                        State
                      </span>
                      <input
                        name="state"
                        placeholder="e.g. Kano"
                        className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                        School / organisation
                      </span>
                      <input
                        name="school"
                        className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                        I am interested in
                      </span>
                      <select
                        name="track"
                        defaultValue={tracks[0]}
                        className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
                      >
                        {tracks.map((track) => (
                          <option key={track} value={track}>
                            {track}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                      Tell us about your group or yourself
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="How many candidates do you serve? What support do they need most?"
                      className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm leading-relaxed"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-navy-deep"
                  >
                    Submit my interest
                    <ArrowIcon />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
