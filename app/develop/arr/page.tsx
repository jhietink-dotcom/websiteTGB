import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Reforestation (ARR)",
  description:
    "We develop afforestation, reforestation and revegetation projects in Brazil through a structured, stage-gated process — reducing risk before capital scales.",
};

const phases = [
  {
    num: "01",
    name: "Feasibility",
    desc: "Before serious capital is committed, we confirm the project stands on solid ground. Land tenure, regulatory position, carbon modelling against conservative benchmarks, and financial viability — with an independent pre-issuance rating and field validation on site. Projects advance only when the case is proven.",
  },
  {
    num: "02",
    name: "Design",
    desc: "We design projects around buyer, investor and certification requirements from the start: VCS VM0047 and CCB methodology, credible baselines, benefit sharing with local communities, and FPIC done properly. The result is a project built to certify, issue and sell.",
  },
  {
    num: "03",
    name: "Deliver",
    desc: "We take projects end to end: registration, validation, nursery establishment, and planting with our local operational partners. Development capital is deployed against defined milestones, and removals are commercialised through our buyer network — spot, forward and long-term offtake.",
  },
  {
    num: "04",
    name: "Monitor",
    desc: "Forests are managed for decades, not verified once. Through TerraHub, our proprietary MRV platform, we combine satellite data with field measurement for continuous monitoring, adaptive management, and verification that converts growth into issued removals — for the full life of the project, typically 40 years.",
  },
];

const references = [
  {
    name: "Sapucaia Sustainable Forests",
    location: "Bahia",
    detail: "VCS and CCB certified, VM0047, ABACUS validated. Sylvera Estimated Rating BBB–AA. Developed with Futuro Florestal.",
    photo: "/img/DSCF9854.JPG",
  },
  {
    name: "Trees for Farmers",
    location: "Mato Grosso",
    detail: "Developed with Rabobank, implemented by Implantar. Selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake agreement.",
    photo: "/img/DSCF9864.JPG",
  },
  {
    name: "Samauma",
    location: "Pará",
    detail: "Concept stage; minimum 5,000 hectares with a conservative modelled issuance of over 255 VCUs per hectare across the project lifetime.",
    photo: "/img/DSCF9797.JPG",
  },
];

export default function ArrPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative bg-forest-deeper py-28 overflow-hidden">
          <Image src="/img/DSCF9818.JPG" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-forest-deeper/60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">How we develop reforestation projects</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">From degraded pasture to certified forest.</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We develop afforestation, reforestation and revegetation (ARR) projects in Brazil through a structured, stage-gated process. Each phase reduces risk before capital scales.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  Submit a project for screening <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  Explore removals from our ARR portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why our approach works */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Why our approach works</div>
            <h2 className="text-3xl font-bold text-navy mb-6">We eliminate the predictable failure modes before implementation begins.</h2>
            <p className="text-ink-soft leading-relaxed">
              High-quality ARR projects fail for predictable reasons: unclear land tenure, weak carbon models, underfunded early stages, and communities engaged too late. Our process is built to eliminate these failure modes before implementation begins. The governance framework is inspired by recognised project-finance practice, including the IFC Operating Principles for Impact Management.
            </p>
          </div>
        </section>

        {/* Four phases */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">The four phases</div>
            <h2 className="text-3xl font-bold text-navy mb-12">Feasibility. Design. Deliver. Monitor.</h2>
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
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-forest-muted/60 border border-forest/10 p-5">
              <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <p className="text-sm text-ink-soft leading-relaxed">
                Behind these four phases sits a formal stage-gate process with independent quality scoring across 14 criteria, inspired by the IFC Operating Principles for Impact Management.{" "}
                <Link href="/terrahub" className="font-semibold text-forest hover:text-forest-dark">Our origination process →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Reference projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Reference projects</div>
            <h2 className="text-3xl font-bold text-navy mb-12">Projects developed to the highest standards.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {references.map((r) => (
                <div key={r.name} className="rounded-2xl overflow-hidden border border-border bg-white">
                  <div className="relative h-44">
                    <Image src={r.photo} alt={r.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-1">{r.location}</div>
                    <h3 className="text-lg font-bold text-ink mb-2">{r.name}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Figures such as the Sapucaia rating range and Samauma issuance modelling are indicative. <Tbc>confirm final project metrics before launch</Tbc>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Have land with restoration potential?</h2>
            <p className="text-white/80 mb-8">Submit your project through TerraHub for structured screening against our 14-criteria quality framework.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Submit a project for screening <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/develop/biochar" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                Explore biochar
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
