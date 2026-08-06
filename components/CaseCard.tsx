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
    <div className="flex flex-col rounded-2xl border border-border bg-white p-6 h-full transition-shadow hover:shadow-md">
      {partner && (
        <div className="text-[10px] font-bold text-forest uppercase tracking-widest mb-3">{partner}</div>
      )}
      <div className="space-y-4 flex-1">
        <div>
          <div className="text-xs font-semibold text-ink/40 uppercase tracking-wider mb-1">Situation</div>
          <p className="text-sm text-ink-soft leading-relaxed">{situation}</p>
        </div>
        <div>
          <div className="text-xs font-semibold text-ink/40 uppercase tracking-wider mb-1">What we did</div>
          <p className="text-sm text-ink-soft leading-relaxed">{did}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">Outcome</div>
        <p className="text-sm font-medium text-ink leading-relaxed">{outcome}</p>
      </div>
    </div>
  );
}
