import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseCard, type CaseItem } from "@/components/CaseCard";
import { ArrowRight, LineChart, BadgeCheck, FileSignature, Briefcase, Boxes, Building2, Sprout, Landmark, Wheat } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Carbon Advisory Services | Strategy, Certification & Procurement | The Green Branch" },
  description:
    "Carbon advisory for corporates, project developers, and financial institutions. Supply chain feasibility, certification design, procurement strategy — from a team that has built and certified its own projects.",
};

const audiences = [
  {
    icon: Building2,
    title: "Corporates",
    desc: "You need a credible carbon strategy for your board, your SBTi commitment, or your supply chain. We help you design a procurement approach, select the right credit quality, and build a portfolio you can stand behind.",
    cta: "Discuss your strategy",
  },
  {
    icon: Sprout,
    title: "Project developers & landowners",
    desc: "You have land with restoration potential and want to understand whether carbon certification makes sense. We model carbon potential, assess methodology eligibility, and design the MRV architecture to get you to market.",
    cta: "Scope your project",
  },
  {
    icon: Landmark,
    title: "Financial institutions",
    desc: "You are allocating to carbon removal for the first time or structuring a carbon-linked product. We help you understand the market, evaluate project quality, and structure agreements that hold up to scrutiny.",
    cta: "Talk to our team",
  },
  {
    icon: Wheat,
    title: "Agribusiness & agricultural banks",
    desc: "Your clients or suppliers work on land, and your Scope 3 emissions reflect it. We assess whether carbon removal practices — biochar, reforestation, agroforestry — can realistically be deployed within your portfolio or supply chain.",
    cta: "Assess your supply chain",
  },
];

const services = [
  {
    icon: LineChart,
    title: "Feasibility & carbon modelling",
    desc: "Understand whether your land or project qualifies before committing to certification. We model carbon potential, assess methodology eligibility, and give you a realistic picture of what the process involves — built on the same approach we use for our own pipeline.",
  },
  {
    icon: BadgeCheck,
    title: "Certification & MRV design",
    desc: "Navigate VCS, CCB, and VM0047 with a team that has been through the process. We design your monitoring, reporting, and verification plan and build the data architecture around it — informed directly by our TerraHub platform.",
  },
  {
    icon: FileSignature,
    title: "Transaction structuring",
    desc: "Structure agreements that protect your interests and hold up to scrutiny. We draft ERPAs, offtake agreements, and SPV frameworks, and design benefit-sharing arrangements that work for all parties.",
  },
  {
    icon: Briefcase,
    title: "Portfolio & procurement strategy",
    desc: "Build a removal portfolio that meets your quality bar and your budget. We assess credit quality, interpret rating systems, analyse pricing, and design a contracting approach aligned to your climate commitments.",
  },
  {
    icon: Boxes,
    title: "Supply chain carbon feasibility",
    desc: "For banks, agribusiness, and food companies with land-use exposure in their portfolio or supply chain, we assess where carbon removal practices can realistically be deployed at scale. We model adoption feasibility, carbon potential, certification pathways, and commercial structures — a decision-ready picture of what is possible within your client or supplier base.",
  },
];

const steps = [
  { num: "1", title: "Scoping call", desc: "We spend 30 minutes understanding your situation. No obligation, no pitch." },
  { num: "2", title: "Fixed-scope proposal", desc: "You receive a clear proposal: scope, deliverables, timeline, and fee. Most engagements run four to eight weeks." },
  { num: "3", title: "Delivery", desc: "We deliver the agreed work. You leave with something usable — a model, a strategy, a certified framework, or a signed agreement." },
];

const cases: CaseItem[] = [
  {
    situation: "European consumer brand, first carbon procurement.",
    did: "Designed a procurement framework and shortlisted three verified removal projects aligned to their SBTi roadmap.",
    outcome: "Board-approved carbon strategy delivered in six weeks.",
  },
  {
    situation: "Brazilian landowner, 4,000 hectares of degraded pasture.",
    did: "Feasibility assessment, carbon modelling, and methodology recommendation for ARR certification.",
    outcome: "Project entered the development pipeline with a clear path to VCS certification.",
  },
  {
    situation: "European asset manager, first carbon removal allocation.",
    did: "Market assessment, project due-diligence support, and ERPA review across three candidate projects.",
    outcome: "First allocation completed with a full documentation package.",
  },
  {
    partner: "Rabobank",
    situation: "Agricultural bank, farming client base in Brazil.",
    did: "Assessed biochar adoption feasibility across the client portfolio — modelling carbon potential, agronomic fit, certification pathway, and commercial structure for a farmer-facing programme.",
    outcome: "Feasibility confirmed across two regions; project development initiated.",
  },
  {
    situation: "Conservation NGO, existing forest project seeking carbon revenue.",
    did: "REDD+ feasibility review and MRV design scoped for CCB co-certification.",
    outcome: "Certification pathway confirmed; monitoring plan drafted.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero — full-bleed photo */}
        <section className="relative min-h-[82vh] flex items-end overflow-hidden">
          <Image src="/img/DSCF9818.JPG" alt="The Green Branch team in the field" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper via-forest-deeper/75 to-forest-deeper/40" />
          <div className="absolute inset-0 bg-forest-deeper/20" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-5">Carbon advisory</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.02] tracking-tight">
                The expertise behind our projects — available for yours.
              </h1>
              <div className="h-1 w-20 bg-accent rounded-full mb-6" />
              <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-9">
                We work with corporates building carbon strategies, landowners and developers structuring projects, financial institutions entering the carbon market, and agribusinesses assessing what their supply chains can do.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                Book a scoping call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Who we work with</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 leading-[1.05] max-w-2xl">Advisory shaped to who you are.</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {audiences.map((a) => (
                <div key={a.title}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                    <a.icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2.5">{a.title}</h3>
                  <p className="text-ink-soft leading-relaxed mb-5">{a.desc}</p>
                  <Link href="/contact" className="group inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-forest-dark transition-colors">
                    {a.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Five service areas</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 leading-[1.05]">How we help.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="group rounded-2xl border border-border bg-white p-7 transition-all hover:border-forest/40 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us — photo-backed pull-quote band */}
        <section className="relative py-28 overflow-hidden bg-forest-deeper">
          <Image src="/img/DSCF9647.JPG" alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-forest-deeper/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Why us</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.05]">Practitioners, not generalists.</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                Most carbon advisors work from frameworks. We work from experience. Every engagement draws on what we have learned building, certifying, and selling our own projects — from the forests of Bahia to buyer negotiations in Amsterdam.
              </p>
              <p>
                When we advise on feasibility, we draw on real MRV data. When we advise on procurement, we draw on live market transactions. When we assess whether biochar can work across an agricultural supply chain, we draw on active project development with farming communities in Brazil.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">How it works</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 leading-[1.05]">Simple to start.</h2>
            <div className="relative grid md:grid-cols-3 gap-10">
              <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-0.5 bg-forest/15" />
              {steps.map((s) => (
                <div key={s.num} className="relative">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center text-xl font-extrabold mb-5">{s.num}</div>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent engagements */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Recent engagements</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-2 leading-[1.05]">Selected work.</h2>
            <p className="text-sm text-ink/50 mb-12">Details anonymised where requested.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <CaseCard key={i} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA — full-bleed photo */}
        <section className="relative py-32 overflow-hidden text-center">
          <Image src="/img/DSCF0278.JPG" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-forest-deeper/85" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-[1.05]">Not sure if we&apos;re the right fit?</h2>
            <p className="text-white/75 text-lg mb-9 leading-relaxed">Start with a 30-minute scoping call. We will tell you honestly whether we can help and what that would look like.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
              Book a scoping call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
