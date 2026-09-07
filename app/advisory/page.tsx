import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseCard, type CaseItem } from "@/components/CaseCard";
import { ArrowRight, Building2, Sprout, Landmark, Wheat } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Carbon Advisory Services | For Corporates, Developers, Finance & FLAG Companies | The Green Branch" },
  description:
    "Carbon advisory for corporates, project developers and landowners, financial institutions, and FLAG companies — from a team that has built, certified, and sold its own nature-based removal projects.",
};

const audiences = [
  {
    icon: Building2,
    title: "Corporates",
    lead: "You need a carbon strategy that survives your board, your SBTi commitment, and the scrutiny that follows. We help you decide what to buy, at what quality, and on what terms.",
    bullets: [
      "Procurement framework aligned to your SBTi roadmap or net-zero claim",
      "Credit quality assessment and interpretation of the rating agencies",
      "Shortlist of verified projects with due-diligence findings on each",
      "Price benchmarking and a contracting approach, from spot through multi-year offtake",
      "Board-ready documentation of what you chose and why it holds up",
    ],
    note: "We develop projects as well as advise on them, so we disclose our own pipeline and leave it out of any shortlist we build for you.",
    cta: "Discuss your strategy",
  },
  {
    icon: Sprout,
    title: "Project developers & landowners",
    lead: "You have land with restoration potential and want to know whether carbon certification makes sense before you spend real money finding out.",
    bullets: [
      "Carbon potential modelled on your actual parcels rather than sector averages",
      "Methodology eligibility screening across VCS, VM0047 and CCB",
      "Baseline and additionality assessment",
      "MRV architecture and monitoring plan, built on the same system we run our own projects on",
      "Development budget and timeline through to first issuance",
    ],
    cta: "Scope your project",
  },
  {
    icon: Landmark,
    title: "Financial institutions",
    lead: "You are allocating to carbon removal for the first time, or structuring a carbon-linked product, and you need to know what stands up to scrutiny.",
    bullets: [
      "Market and pricing orientation written for an investment committee",
      "Project and developer due diligence",
      "Commercial review of ERPAs, offtake agreements and SPV structures, alongside your counsel",
      "Risk assessment across delivery, reversal, methodology change and country exposure",
      "Feasibility of a carbon programme across an agricultural lending portfolio",
    ],
    cta: "Talk to our team",
  },
  {
    icon: Wheat,
    title: "FLAG companies",
    lead: "Your emissions sit in land, which means the answer has to be built where you source rather than bought on the market. We assess what land-based mitigation can realistically deliver inside your own supply base.",
    bullets: [
      "Adoption feasibility across your suppliers and sourcing regions, region by region",
      "Practice selection and agronomic fit across biochar, reforestation, agroforestry and silvopasture",
      "Land-based mitigation potential modelled at supply-shed rather than project scale",
      "Insetting programme design, from MRV architecture through to claims that survive scrutiny",
      "Commercial structure: who funds it, who owns the outcome, and how farmers get paid",
    ],
    cta: "Assess your supply base",
  },
];

const steps = [
  { num: "1", title: "Scoping call", desc: "We spend 30 minutes understanding your situation. No obligation, no pitch." },
  { num: "2", title: "Fixed-scope proposal", desc: "You receive a clear proposal: scope, deliverables and timeline." },
  { num: "3", title: "Delivery", desc: "We deliver the agreed work, you receive something usable." },
];

const cases: CaseItem[] = [
  {
    situation: "NGO operating in Africa wanting to develop a carbon project with local smallholders.",
    did: "Feasibility assessment (including top-down selection of eligible land), preliminary carbon modelling, support with methodology compliance for ARR certification.",
    outcome: "Project entered the development pipeline with a clear path to VCS certification.",
  },
  {
    situation: "Brazilian company developing a biochar project involving artisanal production from agricultural waste and redistribution to local farmers.",
    did: "Eligibility assessment, methodology fit assessment, preliminary carbon modelling, connection with buyers.",
    outcome: "Project under certification.",
  },
  {
    situation: "Cooperatieve Rabobank U.A. wanted to develop an ARR project with their client network of large farmers in Brazil.",
    did: "Carbon certification support, carbon modeling, certification documentation (PDD, Monitoring Plans, Stakeholder consultation process, etc.)",
    outcome: "Project under validation and starting expansion; TGB became the new Project Proponent.",
  },
  {
    situation: "Company in Africa wanting to develop an ARR project including native restoration and regenerative agriculture with Indigenous communities.",
    did: "Feasibility assessment (including top-down selection of eligible land), preliminary carbon modelling, support with methodology compliance for ARR certification, full FPIC and stakeholder consultation support and review.",
    outcome: "Project under development in the Verra Registry.",
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
                We work with corporates building carbon strategies, landowners and developers structuring projects, financial institutions entering the carbon market, and FLAG companies assessing what their supply base can deliver.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                Book a scoping call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">Who we work with</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 leading-[1.05] max-w-2xl">Advisory shaped to who you are.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {audiences.map((a) => (
                <div key={a.title} className="flex flex-col h-full rounded-2xl border border-border bg-white p-7 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <a.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3">{a.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-5">{a.lead}</p>
                  <ul className="space-y-2.5 mb-5">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest shrink-0 mt-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {a.note && (
                    <p className="text-xs text-ink/50 leading-relaxed border-l-2 border-border pl-3 mb-5">{a.note}</p>
                  )}
                  <Link href="/contact" className="group mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-forest-dark transition-colors">
                    {a.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
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
            <div className="text-lg text-white/70 leading-relaxed max-w-3xl">
              <p>
                Most carbon advisors work from frameworks, we work from experience. Every engagement draws on what we have learned building, certifying, and selling our own projects.
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
            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-9 leading-[1.05]">Let&apos;s find out how we can work together in a call</h2>
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
