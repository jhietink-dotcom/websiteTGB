import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, LineChart, BadgeCheck, FileSignature, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Carbon Advisory",
  description:
    "We advise corporates, financial institutions and project developers on high-integrity carbon strategy, drawing on our experience developing certified removal projects end to end.",
};

const services = [
  {
    icon: LineChart,
    title: "Feasibility and carbon modelling",
    desc: "Eligibility assessment, biomass and carbon modelling against conservative benchmarks, financial modelling, and independent risk framing for proposed projects.",
  },
  {
    icon: BadgeCheck,
    title: "Certification and MRV design",
    desc: "Methodology selection (VCS, CCB, VM0047 and beyond), MRV plan design, and audit-ready data architecture — built on lessons from our own TerraHub platform.",
  },
  {
    icon: FileSignature,
    title: "Transaction structuring",
    desc: "ERPAs, forward and offtake agreements, SPV and blended-finance structures, and benefit sharing design.",
  },
  {
    icon: Briefcase,
    title: "Portfolio and procurement strategy",
    desc: "Removal portfolio design for corporate buyers: quality criteria, rating frameworks, pricing benchmarks, and contracting strategy.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative bg-forest-deeper py-28 overflow-hidden">
          <Image src="/img/DSCF9797.JPG" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-forest-deeper/60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Carbon advisory</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">The expertise behind our projects — available for yours.</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We advise corporates, financial institutions and project developers on high-integrity carbon strategy, drawing on our experience developing certified removal projects end to end.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Discuss an engagement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Services</div>
            <h2 className="text-3xl font-bold text-navy mb-12">Four areas of engagement.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="p-7 rounded-2xl border border-border bg-white hover:border-forest/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-forest" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20 bg-muted">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">How we work</div>
            <h2 className="text-3xl font-bold text-navy mb-6">Defined-scope engagements, clear deliverables.</h2>
            <p className="text-ink-soft leading-relaxed">
              Defined-scope engagements with clear deliverables. Where an advisory engagement concerns a project in which The Green Branch holds or may hold a commercial interest, we disclose this at the outset.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Bring us your carbon strategy question.</h2>
            <p className="text-white/80 mb-8">Tell us about your project or portfolio and we will scope an engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
              Discuss an engagement <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
