"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const GRIEVANCE_FORM_EN = "https://docs.google.com/forms/d/e/1FAIpQLSdOdt6Q0ViYGFxbkMEX6hHJ_cuQZjJZ-tp-Co6t3CG1Q-wuKg/viewform?usp=header";
const GRIEVANCE_FORM_PT = "https://docs.google.com/forms/d/e/1FAIpQLSeoU7McT4NmgKI-3K71B6S_nj6ZhBbdApQO-w7VzBlqBuPePA/viewform?usp=header";

// These two labels name the FORM's language, not the site's current UI language,
// so they stay fixed in both scripts regardless of the locale toggle.
const FORM_LABEL_EN = "File a grievance (ENG)";
const FORM_LABEL_PT = "Registrar uma reclamação (PT)";

const content = {
  en: {
    eyebrow: "Accountability",
    heading: "Grievance Mechanism",
    body: "We are committed to developing projects that respect the rights and interests of local communities. Our grievance mechanism provides a transparent, accessible channel for any stakeholder to raise concerns about our projects, and sets out how those concerns are received, investigated, and resolved.",
  },
  pt: {
    eyebrow: "Prestação de contas",
    heading: "Mecanismo de Reclamação",
    body: "Estamos comprometidos em desenvolver projetos que respeitem os direitos e interesses das comunidades locais. Nosso mecanismo de reclamação oferece um canal transparente e acessível para que qualquer parte interessada levante preocupações sobre nossos projetos, e estabelece como essas preocupações são recebidas, investigadas e resolvidas.",
  },
};

export default function GrievanceContent() {
  const { locale } = useLanguage();
  const t = content[locale];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.eyebrow}</div>
            <h1 className="text-4xl font-bold text-navy mb-6">{t.heading}</h1>
            <p className="text-ink-soft leading-relaxed mb-8">
              {t.body}
            </p>
            <div className="flex flex-col gap-3 mb-8 items-start">
              <a
                href={GRIEVANCE_FORM_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors"
              >
                {FORM_LABEL_EN} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={GRIEVANCE_FORM_PT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors"
              >
                {FORM_LABEL_PT} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
