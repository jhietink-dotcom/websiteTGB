import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogoBar } from "@/components/LogoBar";
import { MRVMockup } from "@/components/OSTGBMockup";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, CheckCircle2, Zap, Clock, Users, Target, Leaf, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Buy Carbon Credits | Verified Nature-Based Removals | The Green Branch" },
  description:
    "Buy verified nature-based carbon credits from certified reforestation, REDD+, and biochar projects in Brazil. Built for SBTi targets, net zero commitments, and climate programs. VCS + CCB certified.",
};

const partnerLogos = [
  { name: "Rabobank" },
  {},
  {},
  {},
  {},
  {},
];

const useCases = [
  {
    icon: Users,
    title: "Climate programs",
    desc: "Removals per employee, product, or client. Recurring delivery, simple documentation.",
    cta: "Request pricing",
  },
  {
    icon: Target,
    title: "SBTi & 1% commitments",
    desc: "Meet your science-based target with verified, rated credits and audit-ready reporting.",
    cta: "Request pricing",
  },
  {
    icon: Leaf,
    title: "Net zero",
    desc: "Long-term supply across vintages, with full transparency into project performance.",
    cta: "Schedule a call",
  },
];

const steps = [
  { num: "1", title: "Tell us what you need", desc: "Share your volume, timeline, and commitment type." },
  { num: "2", title: "We match you to projects", desc: "You receive available volumes, pricing, and a term sheet within 48 hours." },
  { num: "3", title: "Credits retired to your account", desc: "We handle registry retirement and deliver a full documentation package." },
];

const featured = [
  { project: "Sapucaia Sustainable Forests", desc: "Bahia · developed with Futuro Florestal", type: "ARR", certification: "VCS + CCB · Sylvera BBB–AA (Est.)", stage: "Issuing" },
  { project: "Trees for Farmers", desc: "Mato Grosso · developed with Rabobank · Amazon Green Pledge 10,000-ha offtake", type: "ARR", certification: "VCS + CCB (VM0047)", stage: "In development" },
  { project: "Samauma", desc: "Pará · minimum 5,000 ha", type: "ARR", certification: "VCS + CCB (planned)", stage: "Concept" },
  { project: "Industrial Biochar", desc: "Brazil · developed with Rabobank", type: "Biochar", certification: "TBC", stage: "Origination" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the difference between carbon avoidance and carbon removal?",
    a: "Avoidance credits prevent emissions that would otherwise occur — for example, protecting a standing forest from being cleared (REDD+). Removal credits take carbon dioxide out of the atmosphere and store it — for example, growing new forest (ARR) or producing biochar. Both are valuable, but many corporate frameworks treat them differently, and removals are increasingly required for net-zero claims.",
  },
  {
    q: "Are nature-based credits permanent?",
    a: "Permanence varies by type. Forest carbon (ARR and REDD+) is durable but carries reversal risk from fire, disease, or clearing, which credible projects manage through buffer pools, long project lifetimes, and continuous monitoring. Biochar is highly permanent — the carbon is held in a stable form for hundreds to thousands of years. We develop to standards that require these safeguards.",
  },
  {
    q: "How do I use carbon credits for my SBTi commitment?",
    a: "The Science Based Targets initiative (SBTi) requires you to cut your own emissions first; credits address the residual. SBTi distinguishes between avoidance credits (such as REDD+) and removal credits (such as ARR and biochar), and the requirements differ by target type — reaching net zero, in particular, requires durable removals to neutralise residual emissions. We help you match the right credit type to your specific target.",
  },
  {
    q: "What does VCS + CCB certification mean?",
    a: "VCS (the Verified Carbon Standard) is the world's most widely used carbon crediting programme; it verifies that each tonne is real, additional, and independently audited. CCB (the Climate, Community & Biodiversity Standards) certifies that a project also delivers measurable social and biodiversity benefits. A project carrying both has cleared a high bar on carbon integrity and on real-world impact.",
  },
  {
    q: "What is a Sylvera rating and why does it matter?",
    a: "Sylvera is an independent carbon-credit ratings agency that scores projects on quality, much as a credit rating scores a bond. A strong rating gives buyers third-party assurance — beyond certification — that a project will deliver what it claims. Our Sapucaia project holds an estimated Sylvera rating in the BBB–AA range.",
  },
  {
    q: "What is the difference between ARR, REDD+, and biochar?",
    a: "ARR (afforestation, reforestation and revegetation) grows new forest on degraded land, removing carbon from the atmosphere. REDD+ protects existing forest from deforestation, avoiding emissions that would otherwise be released. Biochar converts biomass into a stable carbon stored for centuries — a durable removal. We develop across all three, so buyers can choose a single methodology or a blended portfolio.",
  },
  {
    q: "What happens after I place an order?",
    a: "We agree volume, vintage, and price, then execute the contract. For spot purchases we retire the credits in your name in the relevant registry and deliver a full documentation package — project documents, verification, and retirement records. For future supply, credits are delivered and retired on the agreed schedule as the project issues them. You retain access to project data throughout via TerraHub.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const platformCallouts = [
  "Track your projects — every credit by project, volume and status",
  "Certificates & audit exports — retirement records ready to hand over",
  "Impact over time — cumulative CO₂, tracked across vintages",
];

type PlatformRow = {
  num: string;
  kicker: string;
  title: string;
  desc: string;
  bullets: string[];
  image?: string;
  w?: number;
  h?: number;
  Mockup?: ComponentType;
};

const platformRows: PlatformRow[] = [
  {
    num: "01",
    kicker: "Portfolio",
    title: "Every credit you hold, in one place",
    desc: "See your whole position on one screen — grouped by project, volume, and status. No spreadsheets to reconcile, no email threads to search.",
    bullets: [
      "Every credit you hold, by project, volume and status",
      "Cumulative CO₂ financed and retired, tracked over time",
      "One login for procurement, finance and sustainability",
    ],
    image: "/img/terrahub-portfolio.png",
    w: 1600,
    h: 592,
  },
  {
    num: "02",
    kicker: "Proof",
    title: "All your certificates in one place",
    desc: "Proof that each credit was retired in your name, on the registry, where it cannot be double-counted or resold — ready before an auditor asks.",
    bullets: [
      "Registry retirement records in your company's name",
      "Full documentation for every project behind your credits",
      "The quality framework and certification behind each one",
    ],
    image: "/img/terrahub-certificates.png",
    w: 1532,
    h: 763,
  },
  {
    num: "03",
    kicker: "Reporting",
    title: "Impact reporting that builds over time",
    desc: "Turn verified impact into stakeholder-ready materials, and watch your cumulative impact grow across vintages.",
    bullets: [
      "One-click, audit-ready data exports",
      "Approved claim language that avoids overstatement",
      "Off-the-shelf reporting and communication templates",
    ],
    Mockup: MRVMockup,
  },
];

export default function BuyCarbonCreditsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="flex-1">

        {/* Hero — full-bleed photo with dark-green overlay */}
        <section className="relative min-h-[88vh] flex items-end overflow-hidden">
          <Image src="/img/DSCF9797.JPG" alt="Restored forest landscape in Brazil" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper via-forest-deeper/75 to-forest-deeper/40" />
          <div className="absolute inset-0 bg-forest-deeper/20" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-5">For buyers</div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-5">
                Buy Carbon<br />Credits
              </h1>
              <div className="h-1 w-20 bg-accent rounded-full mb-6" />
              <p className="text-2xl font-semibold text-accent mb-5">Removals you can stand behind.</p>
              <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
                Whether you&apos;re running a climate program, meeting a science-based target, or going fully net zero — we have verified carbon credits built for your commitment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                  Request pricing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/25">
                  Schedule a call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Logo bar */}
        <LogoBar label="Buyers & partners include" logos={partnerLogos} />

        {/* Use cases — borderless, airy */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Built for your commitment</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 max-w-2xl leading-[1.05]">Whatever you are working towards.</h2>
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
              {useCases.map((u) => (
                <div key={u.title}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                    <u.icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2.5">{u.title}</h3>
                  <p className="text-ink-soft leading-relaxed mb-5">{u.desc}</p>
                  <Link href="/contact" className="group inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-forest-dark transition-colors">
                    {u.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we supply — two products with characteristics */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">How we supply</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-12 leading-[1.05]">Two ways to buy.</h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* Spot */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">Spot</h3>
                </div>
                <p className="text-ink-soft leading-relaxed mb-6">
                  Issued credits you can buy and retire today. The simplest way to meet a near-term claim.
                </p>
                <ul className="space-y-3">
                  {[
                    "Delivered and retired in your name, typically within days",
                    "Certified to VCS + CCB and independently rated",
                    "Full documentation package — project docs, verification, retirement records",
                    "Best for current-year targets and near-term claims",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Supply */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">Future Supply</h3>
                </div>
                <p className="text-ink-soft leading-relaxed mb-6">
                  Forward delivery at a price locked in today, secured against projects already in development.
                </p>
                <ul className="space-y-3">
                  {[
                    "Price fixed now for future vintages — budget certainty",
                    "Volume secured against a named project",
                    "Verified milestone updates as the project progresses, via TerraHub",
                    "Can be structured as a multi-year offtake agreement (ERPA — an Emission Removal Purchase Agreement, a long-term contract to buy future credits)",
                    "Best for multi-year removal portfolios",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-14 text-sm text-ink-soft leading-relaxed max-w-4xl">
              All credits are certified to VCS (the Verified Carbon Standard, the world&apos;s most widely used carbon crediting programme) and CCB (the Climate, Community &amp; Biodiversity Standards, which certify social and biodiversity co-benefits), and independently rated by Sylvera (a carbon-credit ratings agency).
            </p>
          </div>
        </section>

        {/* Methodologies — photo-led */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Three methodologies</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4 leading-[1.05] max-w-2xl">One methodology, or a blend across all three.</h2>
            <p className="text-ink-soft leading-relaxed mb-12 max-w-2xl">
              Buyers can access a single methodology or draw across our full portfolio.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tag: "Removal", title: "ARR", sub: "Afforestation, reforestation & revegetation", desc: "Growing new, biodiverse forest on degraded land — taking carbon out of the atmosphere.", photo: "/img/DSCF9864.JPG" },
                { tag: "Avoidance", title: "REDD+", sub: "Avoided deforestation", desc: "Protecting standing forests from being cleared — keeping stored carbon in the ground.", photo: "/img/DSCF0095.JPG" },
                { tag: "Removal", title: "Biochar", sub: "Durable carbon", desc: "Biomass converted into a stable carbon that stays locked away for centuries.", photo: "/img/biochar.jpg" },
              ].map((m) => (
                <div key={m.title} className="group relative h-96 rounded-3xl overflow-hidden">
                  <Image src={m.photo} alt={m.sub} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/95 via-forest-deeper/35 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{m.tag}</div>
                    <h3 className="text-2xl font-extrabold text-white mb-1">{m.title}</h3>
                    <div className="text-sm font-semibold text-white/80 mb-2">{m.sub}</div>
                    <p className="text-sm text-white/65 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works — dark atmospheric stepper */}
        <section className="relative py-24 overflow-hidden bg-forest-deeper">
          <Image src="/img/DSCF9647.JPG" alt="" fill sizes="100vw" className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-forest-deeper/70" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">How it works</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 leading-[1.05]">From enquiry to retired credits.</h2>
            <div className="relative grid md:grid-cols-3 gap-10">
              <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-0.5 bg-white/15" />
              {steps.map((s) => (
                <div key={s.num} className="relative">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-accent text-forest-deeper flex items-center justify-center text-xl font-extrabold mb-5">{s.num}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured projects table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Featured projects</div>
            <h2 className="text-3xl font-bold text-navy mb-8">Credits sourced from projects we know intimately.</h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-border text-left bg-muted/50">
                    <th className="px-5 py-4 font-semibold text-ink">Project</th>
                    <th className="px-5 py-4 font-semibold text-ink">Type</th>
                    <th className="px-5 py-4 font-semibold text-ink">Certification status</th>
                    <th className="px-5 py-4 font-semibold text-ink">Development stage</th>
                  </tr>
                </thead>
                <tbody>
                  {featured.map((r) => (
                    <tr key={r.project} className="border-b border-border last:border-0">
                      <td className="px-5 py-4">
                        <div className="font-medium text-ink">{r.project}</div>
                        <div className="text-xs text-ink/50 mt-0.5">{r.desc}</div>
                      </td>
                      <td className="px-5 py-4 text-ink-soft">{r.type}</td>
                      <td className="px-5 py-4 text-ink-soft">
                        {r.certification === "TBC" ? <Tbc>methodology / registry</Tbc> : r.certification}
                      </td>
                      <td className="px-5 py-4 text-ink-soft">{r.stage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Platform showcase — TerraHub (audit/proof framing) */}
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Enabled by TerraHub</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-[1.05]">Your audit trail, ready before anyone asks.</h2>
              <p className="text-lg text-white/65 leading-relaxed">
                Every credit you buy lands in one account — what you funded, which projects, how much CO₂, and the retirement records that prove it. When finance, an auditor, or the board asks, the evidence is already there.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {platformCallouts.map((c) => (
                <div key={c} className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 text-sm text-white/75 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature rows */}
        {platformRows.map((r, idx) => (
          <section key={r.num} className={idx % 2 === 1 ? "py-20 bg-cream" : "py-20 bg-white"}>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-extrabold text-forest/25">{r.num}</span>
                  <span className="text-xs font-semibold text-forest uppercase tracking-[0.2em]">{r.kicker}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">{r.title}</h3>
                <p className="text-ink-soft leading-relaxed mb-6">{r.desc}</p>
                <ul className="space-y-3">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                {r.image ? (
                  <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                    <Image src={r.image} alt={r.title} width={r.w} height={r.h} className="w-full h-auto" />
                  </div>
                ) : r.Mockup ? (
                  <r.Mockup />
                ) : null}
              </div>
            </div>
          </section>
        ))}

        {/* Platform CTA link */}
        <section className="py-12 bg-cream border-t border-border/60">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ink-soft">Every purchase comes with TerraHub access, included.</p>
            <Link href="/terrahub" className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-forest-dark transition-colors">
              Learn more about TerraHub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Frequently asked</div>
            <h2 className="text-3xl font-bold text-navy mb-10">Carbon credits, explained.</h2>
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

        {/* CTA — full-bleed photo */}
        <section className="relative py-32 overflow-hidden text-center">
          <Image src="/img/DSCF9818.JPG" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-forest-deeper/85" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-[1.05]">Ready to buy carbon credits?</h2>
            <p className="text-white/70 text-lg mb-9 leading-relaxed">Tell us your volume, timeline, and commitment type, and we will come back with available supply and pricing.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">Request pricing</Link>
              <Link href="/contact" className="px-7 py-4 border border-white/30 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors">Schedule a call</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
