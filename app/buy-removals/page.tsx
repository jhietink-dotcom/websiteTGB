import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogoBar } from "@/components/LogoBar";
import { InvestorDashboardMockup } from "@/components/OSTGBMockup";
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

export default function BuyCarbonCreditsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">For buyers</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">Buy Carbon Credits</h1>
              <p className="text-xl font-semibold text-accent mb-6">Removals you can stand behind.</p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Whether you&apos;re running a climate program, meeting a science-based target, or going fully net zero — we have verified carbon credits built for your commitment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  Request pricing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  Schedule a call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Logo bar */}
        <LogoBar label="Buyers & partners include" logos={partnerLogos} />

        {/* Use cases */}
        <section className="py-20 bg-muted">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Built for your commitment</div>
            <h2 className="text-3xl font-bold text-navy mb-12">Whatever you are working towards.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {useCases.map((u) => (
                <div key={u.title} className="flex flex-col rounded-2xl border border-border bg-white p-7">
                  <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                    <u.icon className="w-5 h-5 text-forest" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {u.title === "SBTi & 1% commitments" ? (
                      <>SBTi &amp; 1% commitments</>
                    ) : (
                      u.title
                    )}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-6 flex-1">{u.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-dark transition-colors">
                    {u.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we supply */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">How we supply</div>
            <h2 className="text-3xl font-bold text-navy mb-10">Two ways to buy.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-white p-7">
                <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Spot</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Issued credits, available for immediate retirement. Full documentation package included.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-7">
                <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Future Supply</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Forward delivery at a locked price. For larger volumes, this can be structured as a multi-year offtake agreement (ERPA — an Emission Removal Purchase Agreement, a long-term contract to buy future credits).
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-ink-soft leading-relaxed">
              All credits are certified to VCS (the Verified Carbon Standard, the world&apos;s most widely used carbon crediting programme) and CCB (the Climate, Community &amp; Biodiversity Standards, which certify social and biodiversity co-benefits), and independently rated by Sylvera (a carbon-credit ratings agency).
            </p>

            <div className="mt-6 rounded-2xl bg-forest-muted/50 border border-forest/10 p-6">
              <p className="text-sm text-ink-soft leading-relaxed">
                Our projects span three methodologies: <strong className="text-ink">ARR</strong> (afforestation, reforestation and revegetation), <strong className="text-ink">REDD+</strong> (protection of standing forests from deforestation), and <strong className="text-ink">biochar</strong> (durable carbon stored in stable organic material). Buyers can access a single methodology or draw across all three.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-muted">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">How it works</div>
            <h2 className="text-3xl font-bold text-navy mb-12">From enquiry to retired credits.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.num} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold mb-4">{s.num}</div>
                  <h3 className="text-base font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
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

        {/* Buyer dashboard section — TerraHub (unchanged) */}
        <section className="py-24 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Enabled by technology</div>
              <h2 className="text-3xl font-bold text-white mb-4">Your removals. Standing access.</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Every purchase is managed through TerraHub — our proprietary platform. Buyers get a dedicated dashboard showing their portfolio, delivery schedules, project performance data, and all supporting documentation. Transparency is not a report we send once a year; it is standing access.
              </p>
              <ul className="space-y-2 mb-8">
                {["Real-time project health data", "Full documentation library (PDD, MRV, audits)", "Delivery schedule and retirement records", "Direct communication with the TGB team"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/terrahub" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
                Learn about TerraHub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <InvestorDashboardMockup />
            </div>
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

        {/* CTA */}
        <section className="py-20 bg-muted text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-4">Ready to buy carbon credits?</h2>
            <p className="text-ink-soft mb-8">Tell us your volume, timeline, and commitment type, and we will come back with available supply and pricing.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">Request pricing</Link>
              <Link href="/contact" className="px-6 py-3.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Schedule a call</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
