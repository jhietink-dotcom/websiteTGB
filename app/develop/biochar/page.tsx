import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, Timer, Handshake, Factory, Recycle, Sprout, Search, PencilRuler, Gauge, ChevronDown, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Biochar",
  description:
    "We co-develop industrial biochar projects with agribusinesses and industrial partners who hold substantial biomass residues — turning that residue into durable carbon removal.",
};

const steps = [
  {
    icon: Search,
    name: "Feasibility",
    desc: "We confirm feedstock supply, facility economics, carbon modelling, and offtake demand before capital is committed.",
  },
  {
    icon: PencilRuler,
    name: "Design",
    desc: "We design the facility, supply chain, and certification pathway around buyer, investor, and diligence requirements.",
  },
  {
    icon: Factory,
    name: "Deliver",
    desc: "We finance, build or retrofit, register, validate, commission, and reach first production — then commercialise the removals.",
  },
  {
    icon: Gauge,
    name: "Monitor",
    desc: "Continuous production and chain-of-custody monitoring via TerraHub, through verification and issuance.",
  },
];

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

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What are your feedstock specifications and moisture requirements?",
    a: (
      <>
        <p className="mb-3">
          Minimum volume: <strong className="text-ink"><Tbc>confirm minimum, e.g. 1,000</Tbc> tonnes per year</strong>. Moisture thresholds vary by feedstock:
        </p>
        <ul className="space-y-2 mb-3">
          {[
            ["Palm kernel shells", "moisture below 15%"],
            ["Cashew nut shells", "moisture below 15%"],
            ["Sawdust", "moisture below 20%"],
          ].map(([name, t]) => (
            <li key={name} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
              <span><strong className="text-ink">{name}</strong> — {t}</span>
            </li>
          ))}
        </ul>
        <p>If your material runs wetter than this, we can usually accommodate it with a short pre-drying step — talk to us.</p>
        <p className="mt-3 text-xs text-ink/50"><Tbc>confirm accepted feedstock list &amp; thresholds for Brazil operations</Tbc></p>
      </>
    ),
  },
  {
    q: "How does the co-development partnership work?",
    a: (
      <>
        <p className="mb-2">
          We co-develop the project with you. You provide the biomass residue and a site; we bring development capital, proven technology, certification, MRV via TerraHub, and commercialisation to our buyer network. We invest alongside you and share the upside — a partnership, not a franchise.
        </p>
        <p className="text-xs text-ink/50"><Tbc>commercial terms and revenue share are structured per project — confirm the model to describe here</Tbc></p>
      </>
    ),
  },
  {
    q: "Do you partner with every applicant?",
    a: <p>No. We partner selectively, based on feedstock type, annual volume, and carbon economics — the same way an investor backs a project. Feasibility comes first, and projects advance only when the case is proven.</p>,
  },
  {
    q: "What technology do you use?",
    a: <p>Continuous-feed industrial pyrolysers operating at 450–600°C in a low-oxygen environment — no open flame and no smoke. The process converts biomass residue into a stable carbon that remains locked away for centuries.</p>,
  },
  {
    q: "What space and utilities do you need on site?",
    a: (
      <>
        <p className="mb-2">Approximately 10m × 10m of covered space near your processing line, plus access to three-phase power (roughly 5–7 kW).</p>
        <p className="text-xs text-ink/50"><Tbc>confirm footprint &amp; utility requirements for TGB equipment</Tbc></p>
      </>
    ),
  },
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
                Biochar locks biomass carbon into a stable form with permanence measured in centuries. We co-develop industrial biochar projects in Brazil with agribusinesses and industrial partners who already hold substantial biomass residues — you bring the feedstock; we bring the development, financing, certification, and buyers.
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

        {/* Process — visual stepper */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Our process</div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">From feedstock to issued removals — the same discipline as our forestry portfolio.</h2>
            </div>

            <div className="relative grid gap-10 md:grid-cols-4">
              {/* connecting line (desktop) */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-forest/20 via-forest/40 to-forest/20" />
              {steps.map((s, i) => (
                <div key={s.name} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-forest text-white flex items-center justify-center shadow-sm">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div className="mt-5 text-xs font-bold text-accent-dark tracking-widest">STEP 0{i + 1}</div>
                  <h3 className="mt-1 text-lg font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you bring / What we bring */}
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

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Frequently asked</div>
            <h2 className="text-3xl font-bold text-navy mb-10">What a feedstock partner needs to know.</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 font-bold text-navy list-none [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span className="faq-chevron inline-flex shrink-0 text-forest">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1 text-sm text-ink-soft leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
          <style>{`.faq-chevron { transition: rotate 300ms; } details[open] .faq-chevron { rotate: 180deg; }`}</style>
        </section>

        {/* Current activity */}
        <section className="py-20 bg-muted">
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
