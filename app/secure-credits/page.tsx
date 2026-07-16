import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InvestorDashboardMockup } from "@/components/OSTGBMockup";
import { ArrowRight, CheckCircle2, Clock, Zap, Lock, FileText, Users, TrendingUp } from "lucide-react";

const pathways = [
  {
    id: "contributions",
    number: "01",
    title: "Development Contributions",
    subtitle: "Fund early. Secure first access.",
    badge: "Best for: Early movers & impact-first buyers",
    color: "border-forest bg-forest-muted/50",
    headerColor: "bg-forest text-white",
    icon: Users,
    pitch: "A Development Contribution means you co-finance a project during its development phase — before a single carbon credit has been issued. In return, you get first-offer rights on future credits at pre-agreed pricing, locking in supply and price before the open market.",
    howItWorks: [
      "You contribute capital during the project development phase (feasibility through certification)",
      "TGB manages the entire development process via OS TGB, with full transparency",
      "You receive quarterly updates with verified milestones via the Investor Dashboard",
      "Once credits are issued, you hold first-offer rights at the contracted price",
      "Surplus credits are offered on the market — you always have priority",
    ],
    benefits: [
      { icon: Lock, label: "Price certainty", desc: "Pre-agreed $/tCO₂ before market pricing is set" },
      { icon: TrendingUp, label: "First-offer rights", desc: "Priority access to all issued credits" },
      { icon: Users, label: "Named contributor", desc: "Recognised as a founding project partner" },
      { icon: FileText, label: "Full transparency", desc: "Access to OS TGB Investor Dashboard throughout" },
    ],
    cta: "Apply for a contribution",
    ctaHref: "/contact",
  },
  {
    id: "spot",
    number: "02",
    title: "Spot Credits",
    subtitle: "Verified. Available now.",
    badge: "Best for: Immediate retirement & compliance",
    color: "border-border bg-white",
    headerColor: "bg-ink text-white",
    icon: Zap,
    pitch: "Spot credits are verified, available nature-based removal credits from TGB's operating portfolio. Fully certified under internationally recognised standards, these credits are available for immediate purchase and retirement — the most direct path to premium carbon removal.",
    howItWorks: [
      "Browse available credit volumes from our live project portfolio",
      "Select project, vintage, and volume that suits your procurement needs",
      "Complete purchase and receive full documentation package",
      "Credits are retired in your name in the relevant registry",
      "Access project performance data via the Investor Dashboard",
    ],
    benefits: [
      { icon: Zap, label: "Immediate delivery", desc: "Credits delivered and retired same week" },
      { icon: CheckCircle2, label: "Fully certified", desc: "Verra, Gold Standard, or equivalent" },
      { icon: FileText, label: "Complete documentation", desc: "PDD, MRV reports, audit records" },
      { icon: TrendingUp, label: "Project traceability", desc: "Link each tonne to a specific field location" },
    ],
    cta: "Enquire about spot availability",
    ctaHref: "/contact",
  },
  {
    id: "erpa",
    number: "03",
    title: "ERPAs — Future Offtakes",
    subtitle: "Long-term supply. Price certainty.",
    badge: "Best for: Corporate net-zero strategies",
    color: "border-forest/30 bg-forest-deeper/5",
    headerColor: "bg-forest-dark text-white",
    icon: Clock,
    pitch: "An Emission Removal Purchase Agreement (ERPA) is a contract to purchase carbon credits from a project that is still in development, for delivery in future years. ERPAs give you multi-year price visibility, guaranteed supply, and a direct link to a named project — essential for long-term net-zero procurement.",
    howItWorks: [
      "TGB presents a pipeline of projects entering development with confirmed credit volumes",
      "You agree on a delivery schedule, price per tonne, and contract terms",
      "The ERPA is executed and linked to your OS TGB buyer account",
      "As the project develops, you receive verified milestone updates",
      "Credits are delivered and retired per the agreed schedule upon issuance",
    ],
    benefits: [
      { icon: Clock, label: "Multi-year contracts", desc: "2–10 year delivery schedules available" },
      { icon: Lock, label: "Fixed pricing", desc: "Long-term price certainty for budget planning" },
      { icon: CheckCircle2, label: "Guaranteed supply", desc: "Contractually secured credit volumes" },
      { icon: FileText, label: "Full traceability", desc: "Named project, GPS boundaries, field data" },
    ],
    cta: "Discuss an ERPA",
    ctaHref: "/contact",
  },
];

export default function SecureCreditsPage() {
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
                Lift up your climate strategy with high-quality removal credits.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                The Green Branch develops forest restoration projects from feasibility through verification, remaining involved for over 40 years. We offer three distinct pathways for buyers — each designed for a different procurement strategy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contributions" className="px-5 py-2.5 bg-forest text-white text-sm font-semibold rounded-lg hover:bg-forest-light transition-colors">Development Contributions</a>
                <a href="#spot" className="px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10">Spot Credits</a>
                <a href="#erpa" className="px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10">ERPAs</a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison overview */}
        <section className="py-16 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Development Contributions", when: "Project in development", delivery: "Future (first-offer rights)", pricing: "Pre-agreed / fixed", risk: "Higher impact, early-mover advantage" },
                { label: "Spot Credits", when: "Project operating", delivery: "Immediate", pricing: "Market price", risk: "Low — verified & available now" },
                { label: "ERPAs", when: "Project in development", delivery: "Future (contracted)", pricing: "Fixed multi-year", risk: "Guaranteed future supply" },
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
          <section key={p.id} id={p.id} className="py-20 border-b border-border last:border-0">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl font-extrabold text-forest/20">{p.number}</div>
                  <div className="w-px h-8 bg-border" />
                  <span className="text-xs font-semibold text-forest uppercase tracking-widest">{p.badge}</span>
                </div>
                <h2 className="text-3xl font-bold text-ink mb-1">{p.title}</h2>
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

        {/* Buyer dashboard section */}
        <section className="py-24 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Enabled by technology</div>
              <h2 className="text-3xl font-bold text-white mb-4">Your credits. Full transparency.</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Every purchase is managed through OS TGB — our proprietary operating system. Buyers get access to a dedicated dashboard showing their portfolio, delivery schedules, project performance data, and all supporting documentation.
              </p>
              <ul className="space-y-2 mb-8">
                {["Real-time project health data", "Full documentation library (PDD, MRV, audits)", "Delivery schedule & credit retirement records", "Direct communication with the TGB team"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/os-tgb" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
                Learn about OS TGB <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-3xl font-bold text-ink mb-4">Ready to secure your credits?</h2>
            <p className="text-ink-soft mb-8">Get in touch with our team to discuss which pathway fits your procurement strategy.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">Get in touch</Link>
              <Link href="/contact" className="px-6 py-3.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Schedule a call</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
