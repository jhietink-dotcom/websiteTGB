"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage, type Locale } from "@/lib/i18n/LanguageContext";

function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="60" height="36" fill="#00247D" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#fff" strokeWidth="6" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#CF142B" strokeWidth="2.4" />
      <path d="M30 0V36M0 18H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0V36M0 18H60" stroke="#CF142B" strokeWidth="4" />
    </svg>
  );
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="60" height="36" fill="#009B3A" />
      <path d="M30 4L56 18L30 32L4 18Z" fill="#FEDF00" />
      <circle cx="30" cy="18" r="8" fill="#002776" />
    </svg>
  );
}

const flags: Record<Locale, { Flag: typeof UKFlag; label: string }> = {
  en: { Flag: UKFlag, label: "English" },
  pt: { Flag: BrazilFlag, label: "Português (Brasil)" },
};

export function LanguageSwitcher({ dark }: { dark: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const other: Locale = locale === "en" ? "pt" : "en";
  const Current = flags[locale].Flag;
  const Other = flags[other].Flag;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={`Language: ${flags[locale].label}`}
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 px-2 py-1.5 rounded-lg transition-colors hover:bg-white/10",
          dark ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white"
        )}
      >
        <Current className="w-5 h-auto rounded-[2px] shadow-sm ring-1 ring-black/10" />
        <ChevronDown className={cn("w-3 h-3 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-2xl border border-black/5 p-1.5 overflow-hidden z-50">
          <button
            type="button"
            onClick={() => {
              setLocale(other);
              setOpen(false);
            }}
            className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg hover:bg-forest-muted transition-colors text-left"
          >
            <Other className="w-5 h-auto rounded-[2px] shadow-sm ring-1 ring-black/10 shrink-0" />
            <span className="text-sm font-medium text-ink">{flags[other].label}</span>
          </button>
        </div>
      )}
    </div>
  );
}
