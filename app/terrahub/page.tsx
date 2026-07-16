import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardMockup, MRVMockup, InvestorDashboardMockup } from "@/components/OSTGBMockup";
import { ArrowRight, CheckCircle2, Shield, Globe, BarChart3, Database, Layers, Lock } from "lucide-react";

const modules = [
  {
    id: "development",
    number: "01",
    title: "Development Platform",
    tagline: "From idea to bankability.",
    description: "A structured, phase-gated workflow that takes a project from initial screening through pre-feasibility, feasibility, development and into the MRV phase. Every deliverable, decision, and document is tracked and stored in one place — accessible to TGB teams and project partners at all times.",
    features: [
      "Structured 5-phase project lifecycle (Screening → MRV)",
      "Partner & TGB deliverable tracking with revision guidance",
      "Carbon methodology, additionality & baseline documentation",
      "Automated decision gate system with approval workflows",
      "Template library for all certification documents",
      "Investor-ready document publishing with visibility controls",
    ],
    MockupComponent: DashboardMockup,
    accent: "border-forest/20",
  },
  {
    id: "mrv",
    number: "02",
    title: "Digital MRV",
    tagline: "Continuous monitoring. Verifiable results.",
    description: "Our Digital Monitoring, Reporting and Verification module combines satellite remote sensing, GIS analysis, and structured field data collection to produce a continuous, auditable record of project performance. Every tree, every hectare, every season — tracked.",
    features: [
      "Satellite + ground-truth biomass measurement",
      "Project instance management by planting season & area",
      "Field data submission (biomass plots, survival counts)",
      "Project health dashboard with RAG status indicators",
      "Audit package builder for certification submission",
      "AI-assisted analysis for anomaly detection",
    ],
    MockupComponent: MRVMockup,
    accent: "border-forest/20",
  },
  {
    id: "dashboard",
    number: "03",
    title: "Investor Dashboard",
    tagline: "A live data room for every buyer.",
    description: "Every credit buyer gets access to a personalised Investor Dashboard — a real-time window into their portfolio. View delivery schedules, project performance metrics, documentation, and credit retirement records. No PDFs on request; everything live, always.",
    features: [
      "Portfolio overview with purchase history & delivery schedule",
      "Per-project performance data and field monitoring reports",
      "Document library (PDD, audit reports, registry records)",
      "Credit retirement certificates and registry links",
      "Direct messaging with TGB project team",
      "Multiple purchase types: Dev. Contributions, Spot, ERPA",
    ],
    MockupComponent: InvestorDashboardMockup,
    accent: "border-forest/20",
  },
];

export default function OSTGBPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Technology</div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                OS TGB — our operating system for nature.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                We didn&apos;t buy a platform. We built one. OS TGB is The Green Branch&apos;s proprietary operating system — a fully integrated suite of tools that manages every stage of carbon project development, from first screening to final credit delivery.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Most carbon project developers use a patchwork of spreadsheets, shared drives, and third-party tools. We built OS TGB because we needed something better: a single system of record that makes our projects traceable, auditable, and investable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  Request a demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/secure-credits" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/10">
                  Access as a buyer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform overview */}
        <section className="py-16 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Layers, label: "3 integrated modules", desc: "Development, MRV, Investor Dashboard" },
                { icon: Database, label: "Single source of truth", desc: "All project data in one system" },
                { icon: Globe, label: "Multi-project", desc: "Manage entire portfolio simultaneously" },
                { icon: Lock, label: "Role-based access", desc: "Admins, partners, and buyers" },
              ].map((f) => (
                <div key={f.label} className="bg-white rounded-xl border border-border p-5 text-center">
                  <div className="w-10 h-10 bg-forest-muted rounded-xl flex items-center justify-center mx-auto mb-3">
                    <f.icon className="w-5 h-5 text-forest" />
                  </div>
                  <div className="text-sm font-bold text-ink mb-1">{f.label}</div>
                  <div className="text-xs text-ink-soft">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Module deep-dives */}
        {modules.map((m, idx) => (
          <section key={m.id} id={m.id} className={`py-24 ${idx % 2 === 1 ? "bg-muted" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              {/* Content left on even, right on odd */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl font-extrabold text-forest/20">{m.number}</div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-xs font-semibold text-forest uppercase tracking-widest">OS TGB Module</div>
                </div>
                <h2 className="text-3xl font-bold text-ink mb-1">{m.title}</h2>
                <p className="text-base font-semibold text-forest mb-5">{m.tagline}</p>
                <p className="text-ink-soft leading-relaxed mb-8">{m.description}</p>
                <ul className="space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <m.MockupComponent />
              </div>
            </div>
          </section>
        ))}

        {/* Why we built it */}
        <section className="py-20 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Why we built it</div>
              <h2 className="text-3xl font-bold text-white mb-4">Integrity at every layer</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                The carbon market&apos;s credibility problem stems from opacity. Projects make claims; verification is expensive and infrequent; buyers can&apos;t see what they&apos;re buying. OS TGB is our answer to that.
              </p>
              <p className="text-white/60 leading-relaxed">
                By managing the entire development lifecycle — and giving partners and buyers real-time access to the data — we create a level of traceability that simply doesn&apos;t exist elsewhere.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Auditable by design", desc: "Every action logged and timestamped" },
                { icon: BarChart3, label: "Data-driven decisions", desc: "Phase gates backed by verified data" },
                { icon: Globe, label: "Scalable infrastructure", desc: "Built to manage dozens of projects" },
                { icon: Lock, label: "Investor grade", desc: "Documentation ready for institutional buyers" },
              ].map((f) => (
                <div key={f.label} className="p-4 rounded-xl bg-white/5">
                  <f.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="text-sm font-bold text-white mb-1">{f.label}</div>
                  <div className="text-xs text-white/50">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-ink mb-4">See OS TGB in action</h2>
            <p className="text-ink-soft mb-8">We&apos;re happy to walk you through the platform — whether you&apos;re a project developer, investor, or credit buyer.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">Request a demo</Link>
              <Link href="/secure-credits" className="px-6 py-3.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Access as a buyer</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
