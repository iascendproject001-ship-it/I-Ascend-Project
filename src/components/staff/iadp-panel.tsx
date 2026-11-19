import { getLatestIadp } from "@/lib/data";
import { addIadpReview } from "@/lib/staff-actions";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(date),
  );
}

export async function IadpPanel({ learnerId }: { learnerId: number }) {
  const iadp = await getLatestIadp(learnerId);

  if (!iadp) {
    return (
      <section className="card p-5">
        <h2 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
          Individual Academic Development Plan
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          No baseline diagnostic yet — no plan on record. Ask the learner to sit the baseline at /baseline.
        </p>
      </section>
    );
  }

  return (
    <section className="card space-y-4 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
          Individual Academic Development Plan
        </h2>
        <span className="text-[0.7rem] text-ink-soft">
          Baseline {iadp.overallPercent}% · Pathway {iadp.pathway} · {formatDate(iadp.createdAt)}
        </span>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {Object.entries(iadp.scores).map(([name, score]) => (
          <div key={name} className="rounded-lg border border-line bg-cream/60 px-3 py-2 text-xs">
            <span className="font-semibold text-navy-deep">{name}</span>
            <span className="float-right text-ink-soft">
              {score.correct}/{score.total} · {score.percent}% · {score.band}
            </span>
          </div>
        ))}
      </div>

      {iadp.gaps.length > 0 && (
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Priority gaps
          </p>
          <ul className="mt-1.5 space-y-1 text-xs text-ink-soft">
            {iadp.gaps.slice(0, 6).map((gap, index) => (
              <li key={index}>
                • {gap.subject} — {gap.topic} (missed {gap.missed}/{gap.asked})
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Targets</p>
        <ul className="mt-1.5 space-y-1 text-xs text-ink-soft">
          {iadp.targets.map((target) => (
            <li key={target.area}>
              • <strong className="text-navy-deep">{target.area}:</strong> {target.target} — {target.byWhen}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
          Review notes ({iadp.reviews.length})
        </p>
        {iadp.reviews.length === 0 ? (
          <p className="mt-1 text-xs text-ink-soft">No reviews yet.</p>
        ) : (
          <ul className="mt-1.5 space-y-1.5">
            {iadp.reviews.map((review, index) => (
              <li key={index} className="rounded-lg bg-cream/60 p-2 text-xs leading-relaxed text-ink">
                <strong>{review.author}</strong> · {review.date}
                <span className="block text-ink-soft">{review.note}</span>
              </li>
            ))}
          </ul>
        )}
        <form action={addIadpReview} className="mt-2 flex gap-2">
          <input type="hidden" name="iadpId" value={iadp.id} />
          <input type="hidden" name="learnerId" value={learnerId} />
          <input
            name="note"
            required
            placeholder="Add a review note — progress, plan change, next check…"
            className="min-w-0 flex-1 rounded-lg border border-line bg-cream px-3 py-2 text-xs placeholder:text-ink-soft/50"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-cream"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
