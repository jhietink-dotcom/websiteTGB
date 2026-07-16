import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InvestorDashboardMockup } from "@/components/OSTGBMockup";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, CheckCircle2, Clock, Zap, Lock, FileText, Users, TrendingUp, BadgeCheck, ShieldCheck, Eye, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Buy Removals",
  description:
    "Certified emission removals from projects we develop and manage ourselves, and from selected projects in our origination pipeline. Every tonne is traceable.",
};

const pathways = [
  {
    id: "spot",
    number: "01",
    title: "Spot",
    subtitle: "Issued removals, available now.",
    badge: "Best for: near-term claims",
    icon: Zap,
    pitch: "Issued removals, available for immediate retirement or transfer. Suited to buyers meeting near-term claims with certified, traceable supply from our operating portfolio.",
    howItWorks: [
      "Review available volumes and vintages from our issued portfolio",
      "Select project, vintage, and volume to suit your procurement needs",
      "Complete the purchase and receive the full documentation package",
      "Removals are retired in your name in the relevant registry",
      "Access project performance data via TerraHub",
    ],
    benefits: [
      { icon: Zap, label: "Immediate delivery", desc: "Issued removals ready to retire or transfer" },
      { icon: BadgeCheck, label: "Certified", desc: "VCS + CCB, VM0047 for ARR" },
      { icon: FileText, label: "Full documentation", desc: "PDD, MRV reports, audit records" },
      { icon: TrendingUp, label: "Traceable", desc: "Each tonne linked to a specific project" },
    ],
    cta: "Enquire about spot availability",
    ctaHref: "/contact",
  },
  {
    id: "forward",
    number: "02",
    title: "Forward",
    subtitle: "Future vintages, price certainty.",
    badge: "Best for: multi-year portfolios",
    icon: Clock,
    pitch: "Contracted future vintages at agreed pricing, secured against projects already in development. Suited to buyers building multi-year removal portfolios with price certainty.",
    howItWorks: [
      "We present projects already in development with modelled future volumes",
      "You agree a delivery schedule and price per tonne for future vintages",
      "The forward contract is secured against a named project in development",
      "You receive verified milestone updates as the project progresses",
      "Vintages are delivered and retired on the agreed schedule upon issuance",
    ],
    benefits: [
      { icon: Lock, label: "Price certainty", desc: "Agreed pricing for future vintages" },
      { icon: Clock, label: "Multi-year", desc: "Build a portfolio across vintages" },
      { icon: CheckCircle2, label: "Secured supply", desc: "Contracted against projects in development" },
      { icon: FileText, label: "Full traceability", desc: "Named project, boundaries, field data" },
    ],
    cta: "Discuss a forward contract",
    ctaHref: "/contact",
  },
  {
    id: "offtake",
    number: "03",
    title: "Offtake",
    subtitle: "Long-term supply, priority access.",
    badge: "Best for: scale & a stake in supply",
    icon: Users,
    pitch: "Long-term Emission Removal Purchase Agreements (ERPAs) across one or more projects, optionally combined with equity participation. Suited to buyers who want scale, priority access, and a direct stake in supply.",
    howItWorks: [
      "We present a pipeline of projects entering development with confirmed volumes",
      "You agree a long-term delivery schedule, pricing, and contract terms",
      "The ERPA is executed — optionally with equity participation",
      "As projects develop, you receive verified milestone updates via TerraHub",
      "Removals are delivered and retired per the agreed schedule upon issuance",
    ],
    benefits: [
      { icon: TrendingUp, label: "Scale", desc: "Volume across one or more projects" },
      { icon: Lock, label: "Fixed pricing", desc: "Long-term certainty for budget planning" },
      { icon: Users, label: "Priority access", desc: "First claim on contracted supply" },
      { icon: ShieldCheck, label: "Direct stake", desc: "Optional equity participation" },
    ],
    cta: "Discuss an offtake",
    ctaHref: "/contact",
  },
];

const buying = [
  { icon: BadgeCheck, label: "Certification", desc: "Verified Carbon Standard (VCS) and Climate, Community and Biodiversity (CCB) Standards of Verra; VM0047 for ARR." },
  { icon: ShieldCheck, label: "Integrity", desc: "Alignment with the Core Carbon Principles; independent ratings from Sylvera." },
  { icon: Eye, label: "Transparency", desc: "Project-level access to monitoring data via TerraHub." },
  { icon: Leaf, label: "Impact", desc: "Biodiverse forests with more than 40 native tree species, structured benefit sharing with local communities." },
];

const featured = [
  { project: "Sapucaia Sustainable Forests", location: "Bahia", standard: "VCS + CCB, VM0047", status: "Certified; Sylvera BBB–AA (Estimated)" },
  { project: "Trees for Farmers", location: "Mato Grosso", standard: "VCS + CCB, VM0047", status: "In development with Rabobank" },
  { project: "Samauma", location: "Pará", standard: "VCS + CCB (planned)", status: "Concept stage" },
  { project: "Industrial Biochar", location: "Brazil", standard: "methodology TBC", status: "Origination" },
];

export default function BuyRemovalsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">For buyers</div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Removals you can stand behind.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                We supply certified emission removals from projects we develop and manage ourselves, and from selected projects in our origination pipeline. Every tonne is traceable to a specific project, methodology, and verification.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#spot" className="px-5 py-2.5 bg-forest text-white text-sm font-semibold rounded-lg hover:bg-forest-light transition-colors">Spot</a>
                <a href="#forward" className="px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10">Forward</a>
                <a href="#offtake" className="px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10">Offtake</a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison overview */}
        <section className="py-16 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Spot", when: "Project operating", delivery: "Immediate", pricing: "Market price", risk: "Certified & available now" },
                { label: "Forward", when: "Project in development", delivery: "Future (contracted)", pricing: "Agreed, per vintage", risk: "Price certainty for portfolios" },
                { label: "Offtake", when: "One or more projects", delivery: "Future (long-term)", pricing: "Fixed, multi-year", risk: "Scale, priority & optional equity" },
              ].map((row) => (
                <div key={row.label} className="bg-white rounded-xl border border-border p-5">
                  <div className="font-bold text-ink mb-3">{row.label}</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between gap-2"><span className="text-ink-soft">When to buy</span><span className="text-ink font-medium text-right">{row.when}</span></div>
                    <div className="flex justify-between gap-2"><span className="text-ink-soft">Delivery</span><span className="text-ink font-medium text-right">{row.delivery}</span></div>
                    <div className="flex justify-between gap-2"><span className="text-ink-soft">Pricing</span><span className="text-ink font-medium text-right">{row.pricing}</span></div>
                    <div className="flex justify-between gap-2"><span className="text-ink-soft">Key benefit</span><span className="text-forest font-medium text-right">{row.risk}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathway deep-dives */}
        {pathways.map((p) => (
          <section key={p.id} id={p.id} className="py-20 border-b border-border last:border-0 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl font-extrabold text-forest/20">{p.number}</div>
                  <div className="w-px h-8 bg-border" />
                  <span className="text-xs font-semibold text-forest uppercase tracking-widest">{p.badge}</span>
                </div>
                <h2 className="text-3xl font-bold text-navy mb-1">{p.title}</h2>
                <p className="text-base font-semibold text-forest mb-5">{p.subtitle}</p>
                <p className="text-ink-soft leading-relaxed mb-8">{p.pitch}</p>

                <div className="mb-8">
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-4">How it works</div>
                  <ol className="space-y-3">
                    {p.howItWorks.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-ink-soft">
                        <span className="w-5 h-5 rounded-full bg-forest-muted text-forest text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <Link href={p.ctaHref} className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-2">Key benefits</div>
                <div className="grid grid-cols-2 gap-3">
                  {p.benefits.map((b) => (
                    <div key={b.label} className="p-4 rounded-xl border border-border bg-white">
                      <div className="w-8 h-8 bg-forest-muted rounded-lg flex items-center justify-center mb-3">
                        <b.icon className="w-4 h-4 text-forest" />
                      </div>
                      <div className="text-sm font-bold text-ink mb-1">{b.label}</div>
                      <div className="text-xs text-ink-soft">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* What you are buying */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">What you are buying</div>
            <h2 className="text-3xl font-bold text-navy mb-12">Certified, high-integrity, and transparent.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {buying.map((b) => (
                <div key={b.label} className="p-6 rounded-2xl border border-border bg-white">
                  <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                    <b.icon className="w-5 h-5 text-forest" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{b.label}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Own portfolio and pipeline access */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Own portfolio and pipeline access</div>
            <h2 className="text-3xl font-bold text-navy mb-6">The developer and quality gatekeeper — not a marketplace.</h2>
            <p className="text-ink-soft leading-relaxed">
              Beyond our own projects, buyers can access removals from third-party projects advancing through our origination pipeline — each screened, scored, and developed under the same quality framework. We are the developer and quality gatekeeper, not a marketplace.
            </p>
          </div>
        </section>

        {/* Featured projects table */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Featured projects</div>
            <h2 className="text-3xl font-bold text-navy mb-8">Removals sourced from projects we know intimately.</h2>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-5 py-4 font-semibold text-ink">Project</th>
                    <th className="px-5 py-4 font-semibold text-ink">Location</th>
                    <th className="px-5 py-4 font-semibold text-ink">Standard</th>
                    <th className="px-5 py-4 font-semibold text-ink">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {featured.map((r) => (
                    <tr key={r.project} className="border-b border-border last:border-0">
                      <td className="px-5 py-4 font-medium text-ink">{r.project}</td>
                      <td className="px-5 py-4 text-ink-soft">{r.location}</td>
                      <td className="px-5 py-4 text-ink-soft">
                        {r.standard === "methodology TBC" ? <Tbc>biochar methodology</Tbc> : r.standard}
                      </td>
                      <td className="px-5 py-4 text-ink-soft">{r.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Buyer dashboard section */}
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

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-4">Request available volumes and pricing.</h2>
            <p className="text-ink-soft mb-8">Tell us about your removal needs and we will match you to the right supply and pathway.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">Request volumes &amp; pricing</Link>
              <Link href="/contact" className="px-6 py-3.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Schedule a call</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
