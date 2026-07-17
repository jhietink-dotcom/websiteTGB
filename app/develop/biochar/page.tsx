import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, Timer, Handshake, Factory, Recycle, Sprout, Droplets, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Biochar",
  description:
    "We co-develop industrial biochar projects with agribusinesses and industrial partners who hold substantial biomass residues — turning that residue into durable carbon removal.",
};

const bring = {
  partner: [
    "A substantial, consistent stream of biomass residue — the material currently burned, landfilled, or left to decay",
    "A site, or an operation that generates residue year-round",
    "A long-term view: durable removals are built over the life of the project",
  ],
  tgb: [
    "Development capital and proven pyrolysis technology, deployed against milestones",
    "Certification: methodology selection, registry, validation and verification",
    "Continuous production monitoring and chain-of-custody via TerraHub",
    "Commercialisation to our buyer network — spot, forward and long-term offtake",
    "Agronomic co-benefits where biochar is applied: soil health and water retention",
  ],
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

const feedstocks = [
  { name: "Sugarcane bagasse", threshold: "moisture below 20%" },
  { name: "Rice husk", threshold: "moisture below 15%" },
  { name: "Sawdust & wood residue", threshold: "moisture below 20%" },
  { name: "Nut shells & husks", threshold: "moisture below 15%" },
];

export default function BiocharPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative bg-forest-deeper py-28 overflow-hidden">
          <Image src="/img/DSCF0278.JPG" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-forest-deeper/60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Co-developing industrial biochar</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Turn your biomass into durable carbon removal.</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We co-develop industrial biochar projects in Brazil with agribusinesses and industrial partners who already hold substantial biomass residues. You bring the feedstock; we bring the development, financing, certification, and buyers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  Partner with us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  Secure biochar removals
                </Link>
                <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  Explore the Biochar Fund
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why biochar */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Why biochar</div>
            <h2 className="text-3xl font-bold text-navy mb-6">Durable removal, measured in centuries.</h2>
            <p className="text-ink-soft leading-relaxed">
              Biochar locks biomass carbon into a stable form with permanence of hundreds to thousands of years. It complements reforestation in a removals portfolio: industrial in character, rapid to first issuance, and highly durable. Produced from sustainable biomass residues, it also improves soil health and supports agricultural productivity where applied.
            </p>
          </div>
        </section>

        {/* Who we co-develop with */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-widest mb-3">
              <Handshake className="w-4 h-4" /> Who we co-develop with
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4 max-w-3xl">We partner with the businesses that already hold the biomass.</h2>
            <p className="text-ink-soft leading-relaxed mb-12 max-w-3xl">
              We are looking for agribusinesses, processors, mills, and industrial operators in Brazil with substantial, consistent streams of biomass residue. Together we turn material that is currently a cost or a waste into a durable carbon-removal asset — and, where applied, a soil amendment that lifts yields.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-border p-7">
                <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                  <Recycle className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-4">What you bring</h3>
                <ul className="space-y-3">
                  {bring.partner.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-border p-7">
                <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-4">What we bring</h3>
                <ul className="space-y-3">
                  {bring.tgb.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Co-developer, not a franchise */}
            <div className="mt-6 rounded-2xl bg-forest-deeper p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Sprout className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">A co-development model, not a franchise.</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    We do not sell you a unit and walk away. We invest in, structure, certify, and commercialise each project as a bespoke partnership — sharing both the work and the upside. Our incentives are aligned with yours: we succeed when your project succeeds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedstock specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-widest mb-3">
              <Droplets className="w-4 h-4" /> Feedstock specifications
            </div>
            <h2 className="text-3xl font-bold text-navy mb-6">What makes a good feedstock partner.</h2>
            <div className="rounded-2xl border border-border bg-muted/40 p-7">
              <p className="text-ink-soft leading-relaxed mb-5">
                Minimum volume: <strong className="text-ink"><Tbc>confirm minimum, e.g. 1,000</Tbc> tonnes per year</strong>. Moisture thresholds vary by feedstock:
              </p>
              <ul className="space-y-3 mb-5">
                {feedstocks.map((f) => (
                  <li key={f.name} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                    <span className="text-ink-soft">
                      <strong className="text-ink">{f.name}</strong> — {f.threshold}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ink-soft leading-relaxed">
                If your material runs wetter than this, we can usually accommodate it with a short pre-drying step — talk to us.
              </p>
              <p className="mt-4 text-xs text-ink/50">
                <Tbc>confirm accepted feedstock list and exact moisture thresholds for Brazil operations</Tbc>
              </p>
            </div>
          </div>
        </section>

        {/* Four phases */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">How we develop</div>
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
              Our first industrial biochar project in Brazil is being developed with Rabobank as partner.
            </p>
            <p className="text-sm text-ink-soft leading-relaxed">
              <Tbc>add methodology / registry (e.g. Puro.earth or Verra VM0044), production capacity, and expected first issuance once confirmed</Tbc>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Hold substantial biomass? Let us build on it.</h2>
            <p className="text-white/80 mb-8">If your operation generates biomass residue at scale, we would like to explore co-developing a biochar project with you.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Partner with us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                Secure biochar removals
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
