/**
 * Baseline diagnostic scoring: bands, pathway derivation, targets and actions.
 * Pure functions shared by the submission route (which stores the IADP)
 * and any page that needs to interpret baseline results.
 */

export type SubjectScore = { correct: number; total: number; percent: number; band: string };
export type IadpTarget = { area: string; current: string; target: string; byWhen: string };

export function bandFor(percent: number): { band: string; label: string } {
  if (percent >= 75) return { band: "Advanced", label: "Advanced — stretch and accuracy work" };
  if (percent >= 60) return { band: "Proficient", label: "Proficient — technique and speed" };
  if (percent >= 40) return { band: "Developing", label: "Developing — guided remediation" };
  return { band: "Foundational", label: "Foundational — rebuild prerequisites first" };
}

export function pathwayFromBaseline(
  overall: number,
  opts: { access: boolean; repeat: boolean },
): { pathway: string; reason: string } {
  if (opts.access) {
    return {
      pathway: "E",
      reason:
        "Access needs were declared, so the baseline confirms adapted delivery (formats, timing, devices) at the same academic standard.",
    };
  }
  if (opts.repeat) {
    return {
      pathway: "R",
      reason: `Repeat candidate — the baseline (overall ${overall}%) pinpoints what the previous attempt left unresolved.`,
    };
  }
  if (overall < 40) {
    return {
      pathway: "C",
      reason: `Baseline overall ${overall}% shows foundational gaps that must be closed before extension topics.`,
    };
  }
  if (overall < 60) {
    return {
      pathway: "B",
      reason: `Baseline overall ${overall}% — targeted small-group remediation runs alongside core teaching.`,
    };
  }
  if (overall < 75) {
    return {
      pathway: "A",
      reason: `Baseline overall ${overall}% — a solid base; teaching focuses on timing, elimination and error analysis.`,
    };
  }
  return {
    pathway: "A+",
    reason: `Baseline overall ${overall}% — stretch preparation at competitive standard with accuracy under pressure.`,
  };
}

export function buildTargets(
  scores: Record<string, SubjectScore>,
  overall: number,
): IadpTarget[] {
  const targets: IadpTarget[] = [];
  for (const [subject, score] of Object.entries(scores)) {
    if (score.percent < 75) {
      targets.push({
        area: subject,
        current: `${score.percent}% at baseline`,
        target: `Gain 15 points (reach ${Math.min(100, score.percent + 15)}%+)`,
        byWhen: "Next full mock (4 weeks)",
      });
    } else {
      targets.push({
        area: subject,
        current: `${score.percent}% at baseline`,
        target: "Hold 75%+ under timed pressure",
        byWhen: "Every mock",
      });
    }
  }
  targets.push({
    area: "Examination technique",
    current: `${overall}% overall, baseline conditions`,
    target: "Attempt 100% of items; flag hard ones and return",
    byWhen: "Every CBT",
  });
  return targets;
}

export function buildActions(weakSubjects: string[], overall: number): string[] {
  const actions = [
    "Keep an error log: write the reason for every miss, not just the correct answer.",
    "Review every CBT within 24 hours using the worked explanations.",
  ];
  for (const subject of weakSubjects.slice(0, 3)) {
    actions.push(`Remediation block in ${subject}: revisit the missed topics below, then 20 timed questions weekly.`);
  }
  if (overall >= 75) {
    actions.push("Sit a full four-subject mock fortnightly under strict exam conditions.");
  } else if (weakSubjects.length === 0) {
    actions.push("Protect the strong subjects with weekly mixed retrieval while pushing technique.");
  }
  return actions.slice(0, 6);
}
