import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { DashboardMockup, MRVMockup, InvestorDashboardMockup } from "@/components/OSTGBMockup";
import { ArrowRight, CheckCircle2, Shield, Globe, BarChart3, Database, Layers, Lock } from "lucide-react";

export const metadata = {
  title: "Our Tech",
  description:
    "TerraHub is The Green Branch's proprietary platform, unifying project development, MRV, and commercialisation from origination to issuance in a single environment.",
};

const modules = [
  {
    id: "development",
    number: "01",
    title: "Development",
    tagline: "From first screening to bankable project.",
    description:
      "Every project moves through TerraHub from first screening onward. Developers submit projects through a structured questionnaire, receive a quality score across 14 criteria, and — once accepted — are guided through our stage-gate process with standardised templates and legally reviewed contract frameworks. One environment, full audit trail, no information lost between phases.",
    features: [
      "Structured submission questionnaire for every incoming project",
      "Quality score assessed across 14 criteria",
      "Guided stage-gate process from screening to MRV",
      "Standardised templates for each phase and deliverable",
      "Legally reviewed contract frameworks",
      "Full audit trail with no information lost between phases",
    ],
    MockupComponent: DashboardMockup,
    accent: "border-forest/20",
  },
  {
    id: "mrv",
    number: "02",
    title: "MRV",
    tagline: "Continuous monitoring. Verifiable results.",
    description:
      "We apply GIS, remote sensing, field measurements, and AI-supported analysis to track key project indicators — combining satellite data with on-the-ground assessments for continuous monitoring, reliable verification, and transparent reporting. This is what converts forest growth into issued removals that stand up to audit.",
    features: [
      "GIS and remote sensing across the project area",
      "Field measurements combined with satellite data",
      "AI-supported analysis of key project indicators",
      "Continuous monitoring throughout the project lifecycle",
      "Reliable verification and transparent reporting",
      "Forest growth converted into issued emission removals",
    ],
    MockupComponent: MRVMockup,
    accent: "border-forest/20",
  },
  {
    id: "dashboard",
    number: "03",
    title: "Investor & buyer dashboard",
    tagline: "A live data room for every buyer.",
    description:
      "An interactive dashboard functions as a real-time data room: structured access to documentation, performance metrics, and monitoring data for each project, with the ability to request further information within the platform. Transparency is not a report we send once a year — it is standing access.",
    features: [
      "Real-time data room for each project",
      "Structured access to project documentation",
      "Performance metrics and monitoring data",
      "Requests for further information handled within the platform",
      "Standing access rather than a once-a-year report",
      "A single environment for buyers and investors",
    ],
    MockupComponent: InvestorDashboardMockup,
    accent: "border-forest/20",
  },
];

export default function TerraHubPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Our Tech</div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                One platform from origination to issuance.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                TerraHub is our proprietary platform unifying project development, MRV, and commercialisation in a single environment. It is how we develop faster, monitor deeper, and give buyers and investors direct sight of the work.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Most carbon project developers rely on a patchwork of spreadsheets, shared drives, and third-party tools. We built TerraHub because we needed a single system of record that makes our projects traceable, auditable, and investable from first screening to final delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  Request platform access <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/10">
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
                { icon: Layers, label: "3 integrated modules", desc: "Development, MRV, and Investor & buyer dashboard" },
                { icon: Database, label: "Single source of truth", desc: "All project data in one environment" },
                { icon: Globe, label: "Origination to issuance", desc: "One workflow across the full lifecycle" },
                { icon: Lock, label: "Role-based access", desc: "Teams, partners, and buyers" },
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
                  <div className="text-xs font-semibold text-forest uppercase tracking-widest">TerraHub Module</div>
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
                The credibility problem in the carbon market stems from opacity. Projects make claims; verification is expensive and infrequent; buyers cannot see what they are buying. TerraHub is our answer to that.
              </p>
              <p className="text-white/60 leading-relaxed">
                By managing the entire development lifecycle — and giving partners, buyers, and investors standing access to the data — we create a level of traceability that does not exist elsewhere. Across a portfolio of <Tbc>number of active projects</Tbc> projects, every action is logged, timestamped, and open to audit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Auditable by design", desc: "Every action logged and timestamped" },
                { icon: BarChart3, label: "Data-driven decisions", desc: "Stage gates backed by verified data" },
                { icon: Globe, label: "Scalable infrastructure", desc: "Built to manage a growing portfolio" },
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
            <h2 className="text-3xl font-bold text-ink mb-4">See TerraHub in action</h2>
            <p className="text-ink-soft mb-8">We would be glad to walk you through the platform — whether you are a project developer, an investor, or a buyer of emission removals.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">Request platform access</Link>
              <Link href="/buy-removals" className="px-6 py-3.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Access as a buyer</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
