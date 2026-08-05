import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Reforestation (ARR)",
  description:
    "We develop afforestation, reforestation and revegetation projects in Latin America through a structured, stage-gated process — reducing risk before capital scales.",
};

const phases = [
  {
    num: "01",
    name: "Screening",
    desc: "Every incoming project is assessed against our quality framework — eligibility, land tenure, additionality, and a first view of carbon potential. Only projects that clear the bar advance.",
  },
  {
    num: "02",
    name: "Feasibility",
    desc: "We confirm the project stands on solid ground: land tenure and regulatory position, carbon modelling against conservative benchmarks, and financial viability — with an independent pre-issuance rating and field validation on site.",
  },
  {
    num: "03",
    name: "Design",
    desc: "We design the project around buyer, investor and certification requirements: VCS VM0047 and CCB methodology, credible baselines, benefit sharing with local communities, and FPIC done properly. The result is a project built to certify, issue and sell.",
  },
  {
    num: "04",
    name: "Development",
    desc: "Registration, validation, nursery establishment, and planting with our local operational partners. Development capital is deployed against defined milestones.",
  },
  {
    num: "05",
    name: "Monitoring & technical support",
    desc: "Through TerraHub, our proprietary MRV platform, we combine satellite data with field measurement for continuous monitoring and adaptive management — and provide ongoing technical support to the project on the ground, for the full life of the project.",
  },
  {
    num: "06",
    name: "Finance & carbon sales",
    desc: "We structure the finance and commercialise the removals through our buyer network — spot, forward and long-term offtake — turning verified forest growth into issued, sold credits.",
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

const offer = [
  "External cost support, including CAPEX / OPEX",
  "Connecting you to the TGB buyer landscape",
  "Technical assistance, from feasibility to validation",
  "Structuring and fundraising support",
  "Access to our development and MRV platform, TerraHub",
  "Independent quality assessments and ratings",
];

const lookFor = [
  "Reforestation projects that include restoration, agroforestry or sustainable timber",
  "Beyond concept stage, with activities already on the ground",
  "A clear pathway to 2,000 hectares or more",
  "Biodiversity and community co-benefits",
  "At least €100k invested or committed",
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
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">How we develop reforestation projects</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">From degraded pasture to certified forest.</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We develop afforestation, reforestation and revegetation (ARR) projects in Latin America through a structured, stage-gated process. Each stage reduces risk before capital scales.
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
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Why our approach works</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-[1.1]">We eliminate the predictable failure modes before implementation begins.</h2>
            <p className="text-ink-soft leading-relaxed">
              High-quality ARR projects fail for predictable reasons: unclear land tenure, weak carbon models, underfunded early stages, and communities engaged too late. Our process is built to eliminate these failure modes before implementation begins. The governance framework is inspired by recognised project-finance practice, including the IFC Operating Principles for Impact Management.
            </p>
          </div>
        </section>

        {/* Phases — vertical timeline */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Our process</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-14 leading-[1.05] max-w-2xl">Six stages, one disciplined process.</h2>

            <div className="max-w-3xl">
              {phases.map((p, i) => (
                <div key={p.num} className="relative flex gap-6 sm:gap-8">
                  {/* Node + connector */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-forest text-white flex items-center justify-center text-lg font-extrabold shrink-0 shadow-sm">
                      {p.num}
                    </div>
                    {i < phases.length - 1 && <div className="w-0.5 flex-1 bg-forest/20 my-2" />}
                  </div>
                  {/* Content */}
                  <div className={i < phases.length - 1 ? "pb-10 pt-2" : "pt-2"}>
                    <h3 className="text-xl font-bold text-ink mb-2">{p.name}</h3>
                    <p className="text-ink-soft leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-2xl bg-white border border-forest/10 p-5 max-w-3xl">
              <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <p className="text-sm text-ink-soft leading-relaxed">
                Behind these stages sits a formal stage-gate process with independent quality scoring across 14 criteria, inspired by the IFC Operating Principles for Impact Management.{" "}
                <Link href="/terrahub" className="font-semibold text-forest hover:text-forest-dark">Our origination process →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Reference projects */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Reference projects</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 leading-[1.05]">Projects developed to the highest standards.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {references.map((r) => (
                <div key={r.name} className="group rounded-3xl overflow-hidden border border-border bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={r.photo} alt={r.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
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

        {/* What we offer — text + photo */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-[1.05]">What we offer.</h2>
              <p className="text-ink-soft leading-relaxed mb-6">We offer support to early-stage projects to accelerate them:</p>
              <ul className="space-y-3 mb-6">
                {offer.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    {o}
                  </li>
                ))}
              </ul>
              <p className="text-ink font-semibold">We aim to partner early and stay involved through scale.</p>
            </div>
            <div className="relative h-[440px] rounded-3xl overflow-hidden">
              <Image src="/img/DSCF9873.JPG" alt="Early-stage reforestation project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* What we look for — photo + text */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-[440px] rounded-3xl overflow-hidden lg:order-first order-last">
              <Image src="/img/DSCF9647.JPG" alt="Field monitoring on a restoration project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-[1.05]">What we look for.</h2>
              <p className="text-ink-soft leading-relaxed mb-6">We invite organisations developing nature-restoration projects in Latin America that meet the following:</p>
              <ul className="space-y-3">
                {lookFor.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Have a project with restoration potential?</h2>
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
