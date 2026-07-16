"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Lock } from "lucide-react";

const STORAGE_KEY = "tgb-investor-ack";

/**
 * Soft, client-side qualified-investor gate. NOT access control — it gates the
 * detailed fund terms behind a self-declaration and records acknowledgement for
 * the browser session. Final gating/verification is handled at the documentation
 * request stage (and must be reviewed by legal counsel before launch).
 */
export function InvestorGate({ children }: { children: React.ReactNode }) {
  const [acknowledged, setAcknowledged] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setAcknowledged(true);
    } catch {
      /* sessionStorage unavailable — remain gated */
    }
  }, []);

  function confirm() {
    if (!checked) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setAcknowledged(true);
  }

  if (acknowledged) return <>{children}</>;

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-2xl mx-auto px-6">
        <div className="rounded-2xl border border-border bg-white p-8 sm:p-10 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-forest-muted flex items-center justify-center mb-6">
            <Lock className="w-5 h-5 text-forest" />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-3">For qualified investors only</h2>
          <p className="text-ink-soft leading-relaxed mb-6">
            This page describes opportunities available to qualified and professional investors only. Detailed terms are provided after registration and verification. Please confirm your status to continue.
          </p>

          <label className="flex items-start gap-3 rounded-xl border border-border bg-muted/60 p-4 cursor-pointer mb-6">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-[#00965D] shrink-0"
            />
            <span className="text-sm text-ink-soft leading-relaxed">
              I confirm that I am a qualified or professional investor, and I understand that the information on the following page does not constitute an offer of securities or investment advice.
            </span>
          </label>

          <button
            type="button"
            onClick={confirm}
            disabled={!checked}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShieldCheck className="w-4 h-4" /> Confirm and continue
          </button>
        </div>
      </div>
    </section>
  );
}
