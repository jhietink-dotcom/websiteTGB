import { CheckCircle2 } from "lucide-react";

export type CaseItem = {
  partner?: string;
  situation: string;
  did: string;
  outcome: string;
};

/**
 * Reusable case-study card: situation → what we did → outcome.
 * Swap real content into the `cases` array on the page without touching layout.
 */
export function CaseCard({ situation, did, outcome, partner }: CaseItem) {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-border bg-white overflow-hidden transition-all hover:border-forest/30 hover:shadow-lg">
      {/* accent bar */}
      <div className="h-1 bg-forest" />

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {partner && (
          <span className="self-start mb-4 inline-flex items-center rounded-full bg-forest-muted px-3 py-1 text-[11px] font-bold text-forest">
            {partner}
          </span>
        )}

        {/* Situation — the lead */}
        <div className="mb-5">
          <div className="text-[10px] font-bold text-ink/35 uppercase tracking-[0.15em] mb-1.5">Situation</div>
          <p className="text-base font-semibold text-navy leading-snug">{situation}</p>
        </div>

        {/* What we did */}
        <div className="mb-6 flex-1">
          <div className="text-[10px] font-bold text-ink/35 uppercase tracking-[0.15em] mb-1.5">What we did</div>
          <p className="text-sm text-ink-soft leading-relaxed">{did}</p>
        </div>

        {/* Outcome — highlighted */}
        <div className="rounded-xl bg-forest-muted/60 p-4 min-h-[104px]">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
            <span className="text-[10px] font-bold text-forest uppercase tracking-[0.15em]">Outcome</span>
          </div>
          <p className="text-sm font-semibold text-forest-dark leading-relaxed">{outcome}</p>
        </div>
      </div>
    </div>
  );
}
