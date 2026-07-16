import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, Timer } from "lucide-react";

export const metadata: Metadata = {
  title: "Biochar",
  description:
    "Durable carbon removal with permanence measured in centuries. We apply the same disciplined development process that underpins our forestry portfolio.",
};

const phases = [
  {
    num: "01",
    name: "Feasibility",
    desc: "We confirm the fundamentals before capital is committed: feedstock availability and sustainability, facility economics, carbon modelling under the applicable methodology, and offtake demand. The same quality scoring that governs our forestry portfolio applies here, adapted to engineered removals.",
  },
  {
    num: "02",
    name: "Design",
    desc: "Facility, supply chain, and certification pathway are designed around buyer and investor requirements: proven technology, credible production monitoring, chain-of-custody from feedstock to application, and a commercial structure with offtake secured early.",
  },
  {
    num: "03",
    name: "Deliver",
    desc: "Construction or retrofit, registration and validation, commissioning, and first production — with removals commercialised through spot, forward and offtake agreements.",
  },
  {
    num: "04",
    name: "Monitor",
    desc: "Continuous production monitoring and chain-of-custody tracking, through verification and issuance. Durable removals demand durable evidence.",
  },
];

export default function BiocharPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative bg-forest-deeper py-28 overflow-hidden">
          <Image src="/Photos/DSCF0278.JPG" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-forest-deeper/60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">How we develop biochar projects</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Durable carbon removal, measured in centuries.</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Biochar locks biomass carbon into a stable form with permanence of hundreds to thousands of years. We apply the same disciplined development process that underpins our forestry portfolio.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  Explore the Biochar Fund <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  Secure biochar removals
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why biochar */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Why biochar</div>
            <h2 className="text-3xl font-bold text-navy mb-6">A complement to reforestation in a removals portfolio.</h2>
            <p className="text-ink-soft leading-relaxed">
              Biochar complements reforestation in a removals portfolio: industrial in character, rapid to first credit issuance, and highly durable. Produced from sustainable biomass residues, it also improves soil health and supports agricultural productivity where applied.
            </p>
          </div>
        </section>

        {/* Four phases */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">The four phases</div>
            <h2 className="text-3xl font-bold text-navy mb-12">The same discipline, adapted to engineered removals.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {phases.map((p) => (
                <div key={p.num} className="p-7 rounded-2xl border border-border bg-white hover:border-forest/30 transition-all">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-2xl font-extrabold text-forest/25">{p.num}</span>
                    <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current activity */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-widest mb-3">
              <Timer className="w-4 h-4" /> Current activity
            </div>
            <h2 className="text-3xl font-bold text-navy mb-6">Industrial Biochar, Brazil — developed with Rabobank.</h2>
            <p className="text-ink-soft leading-relaxed mb-6">
              Our Industrial Biochar project in Brazil is being developed with Rabobank.
            </p>
            <p className="text-sm text-ink-soft leading-relaxed">
              <Tbc>add methodology / registry (e.g. Puro.earth or Verra VM0044), production capacity, and expected first issuance once confirmed</Tbc>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Durable removals, scarce supply.</h2>
            <p className="text-white/80 mb-8">Secure biochar removals or invest in industrial production capacity in Brazil.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Secure biochar removals <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                Explore the Biochar Fund
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
