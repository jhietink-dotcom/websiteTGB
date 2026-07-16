import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const phases = [
  { num: "01", name: "Screening", desc: "Initial eligibility assessment — ecology, additionality, and market viability." },
  { num: "02", name: "Pre-Feasibility", desc: "Desktop study of carbon potential, land tenure, and financial modelling." },
  { num: "03", name: "Feasibility", desc: "Full technical and financial feasibility — methodology selection, baseline, boundary design." },
  { num: "04", name: "Development", desc: "PDD development, stakeholder consultation, validation, and certification submission." },
  { num: "05", name: "Scale & Operate", desc: "MRV implementation, credit issuance, revenue management, and portfolio expansion." },
];

export default function DevelopPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6 max-w-3xl">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Develop a project</div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Scale your reforestation project with end-to-end support.</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">From initial feasibility through to verification and long-term monitoring — we help project developers, landowners, and local organisations reach the carbon market and maximise impact.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Our process</div>
            <h2 className="text-3xl font-bold text-ink mb-12">Five phases from idea to revenue.</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {phases.map((p) => (
                <div key={p.num} className="p-5 rounded-xl border border-border bg-white hover:border-forest/30 hover:bg-forest-muted/30 transition-all">
                  <div className="text-2xl font-extrabold text-forest/20 mb-2">{p.num}</div>
                  <div className="text-sm font-bold text-ink mb-2">{p.name}</div>
                  <div className="text-xs text-ink-soft leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">What we provide</div>
              <h2 className="text-3xl font-bold text-ink mb-6">Everything needed to bring a project to market.</h2>
              <ul className="space-y-3">
                {["Technical feasibility assessments & eligibility evaluations", "Carbon methodology selection & PDD development", "Certification & compliance guidance (Verra, Gold Standard)", "Early-stage funding and financial modelling", "Fundraising support and investor introductions", "Long-term MRV and asset management via OS TGB"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">Who we work with</div>
              <h2 className="text-3xl font-bold text-ink mb-6">Project developers & landowners.</h2>
              <p className="text-ink-soft leading-relaxed mb-4">We work with a wide range of partners — community land trusts, private landowners, NGOs, agricultural cooperatives, and governments — across tropical and subtropical geographies.</p>
              <p className="text-ink-soft leading-relaxed">If you have land with restoration potential, local community engagement, and a long-term perspective, we want to hear from you.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to develop your project?</h2>
            <p className="text-white/70 mb-8">Share your project idea with our team. We&apos;ll assess eligibility and come back within 5 business days.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
              Submit your project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
