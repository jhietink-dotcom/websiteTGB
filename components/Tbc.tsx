"use client";

import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const strings = {
  en: { prefix: "TBC:", title: "Placeholder — confirm before launch", blockHeading: "To be confirmed before launch" },
  pt: { prefix: "A confirmar:", title: "Provisório — confirmar antes do lançamento", blockHeading: "A confirmar antes do lançamento" },
};

/**
 * Visible placeholder marker for content awaiting confirmed data before launch.
 * Renders an obvious amber "TBC" chip so unfinished copy is never mistaken for final.
 * Search the codebase for <Tbc to find everything outstanding before go-live.
 */
export function Tbc({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const t = strings[locale];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-md bg-accent-light px-2 py-0.5 text-xs font-semibold text-accent-dark ring-1 ring-accent/40 align-middle"
      title={t.title}
    >
      <AlertCircle className="h-3 w-3 shrink-0" />
      {t.prefix} {children}
    </span>
  );
}

/** Block-level variant for a whole section that depends on unconfirmed data. */
export function TbcBlock({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const t = strings[locale];
  return (
    <div className="rounded-xl border border-dashed border-accent/50 bg-accent-light/60 p-4 text-sm text-accent-dark">
      <div className="mb-1 flex items-center gap-1.5 font-semibold">
        <AlertCircle className="h-4 w-4 shrink-0" />
        {t.blockHeading}
      </div>
      <div className="text-ink-soft">{children}</div>
    </div>
  );
}
