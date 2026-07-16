import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardMockup } from "@/components/OSTGBMockup";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const photoStrip = [
  "/Photos/DSCF0095.JPG",
  "/Photos/DSCF9818.JPG",
  "/Photos/DSCF9797.JPG",
  "/Photos/DSCF9873.JPG",
  "/Photos/DSCF0278.JPG",
  "/Photos/DSCF9647.JPG",
  "/Photos/DSCF0493.JPG",
  "/Photos/DSCF9742.JPG",
  "/Photos/DSCF0095.JPG",
  "/Photos/DSCF9818.JPG",
  "/Photos/DSCF9797.JPG",
  "/Photos/DSCF9873.JPG",
  "/Photos/DSCF0278.JPG",
  "/Photos/DSCF9647.JPG",
  "/Photos/DSCF0493.JPG",
  "/Photos/DSCF9742.JPG",
];

// "What we do" — three lines of activity, one development capability
const services = [
  {
    title: "Develop",
    desc: "We originate and develop reforestation and biochar projects through a disciplined stage-gate process, certified to the highest carbon and forestry standards.",
    href: "/develop/arr",
    photo: "/Photos/DSCF9818.JPG",
    tag: "Reforestation & biochar",
  },
  {
    title: "Transact",
    desc: "We supply emission removals to corporate buyers — spot, forward, and long-term offtake — from our own portfolio and selected third-party projects in our origination pipeline.",
    href: "/buy-removals",
    photo: "/Photos/DSCF9797.JPG",
    tag: "For buyers",
  },
  {
    title: "Invest",
    desc: "We structure investment opportunities in land acquisition for reforestation and in industrial biochar, bridging the early-stage financing gap that holds high-quality projects back.",
    href: "/invest",
    photo: "/Photos/DSCF9873.JPG",
    tag: "For investors",
  },
];

const projects = [
  {
    name: "Sapucaia Sustainable Forests",
    country: "Brazil · Bahia",
    ha: "VCS + CCB · Sylvera BBB–AA",
    status: "Certified",
    photo: "/Photos/DSCF9854.JPG",
    tag: "Large-scale reforestation",
    featured: true,
  },
  {
    name: "Trees for Farmers",
    country: "Brazil · Mato Grosso",
    ha: "10,000 ha offtake",
    status: "Development",
    photo: "/Photos/DSCF9864.JPG",
    tag: "With Rabobank",
  },
  {
    name: "Samauma",
    country: "Brazil · Pará",
    ha: "5,000+ ha",
    status: "Concept",
    photo: "/Photos/DSCF9831.JPG",
    tag: "ARR",
  },
  {
    name: "Great Agroforestry Initiative",
    country: "Ghana",
    ha: "35,000+ farmers",
    status: "Active",
    photo: "/Photos/DSCF0493.JPG",
    tag: "Community",
  },
  {
    name: "Suledo Forest ARR",
    country: "Tanzania",
    ha: "Miombo restoration",
    status: "Development",
    photo: "/Photos/DSCF9807.JPG",
    tag: "ARR",
  },
];

const partners = ["Rabobank", "Futuro Florestal", "Florestas Engenharia", "Implantar", "Sylvera", "Verra", "NRC"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
          <Image
            src="/Photos/DSCF0095.JPG"
            alt="Forest interior — The Green Branch"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
          <div className="absolute inset-0 bg-forest-deeper/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Nature-based removal developer · Brazil, and beyond
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[0.98] tracking-tight mb-6">
                Activating nature<br />
                for a <span className="text-accent">liveable future.</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                The Green Branch develops certified nature-based removal projects in Brazil. We restore forests, produce durable removals, and structure the capital that makes both possible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                  Explore our projects <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2 text-white/40 text-xs font-medium">
            <div className="w-px h-8 bg-white/20" />
            <span className="rotate-90 origin-center">scroll</span>
          </div>
        </section>

        {/* ── Photo strip marquee ── */}
        <section className="overflow-hidden bg-forest-deeper py-3 border-y border-white/5">
          <div className="flex gap-3" style={{ animation: "marquee 35s linear infinite" }}>
            {photoStrip.map((src, i) => (
              <div key={i} className="relative h-24 w-36 shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" sizes="144px" />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* ── Partners + proof points ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-ink/30 uppercase tracking-widest mb-6">Working with</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {partners.map((c) => (
                    <span key={c} className="text-sm font-bold text-ink/25 hover:text-ink/50 transition-colors cursor-default">{c}</span>
                  ))}
                </div>
                <p className="mt-6 text-xs text-ink/40">VCS &amp; CCB certified · VM0047 · ABACUS validated · independently rated by Sylvera · B Corp certified</p>
              </div>
              <div className="lg:pl-12 lg:border-l border-border">
                <p className="text-2xl lg:text-3xl font-bold text-navy leading-tight mb-6">
                  Bridging the gap between nature restoration and the private capital that makes it real.
                </p>
                <div className="flex gap-10">
                  {[
                    { v: "4", l: "projects developed" },
                    { v: "~15", l: "in origination pipeline" },
                    { v: ">40M t", l: "CO₂ removals targeted" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-2xl font-extrabold text-forest">{s.v}</div>
                      <div className="text-xs text-ink/50 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we do — 3 photo cards ── */}
        <section className="pt-6 pb-4 px-4 lg:px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 px-1">
              <p className="text-xs font-bold text-forest uppercase tracking-widest mb-2">What we do</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight">Three lines of activity, one development capability.</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <Link key={s.title} href={s.href} className="group relative h-[540px] rounded-2xl overflow-hidden block">
                  <Image
                    src={s.photo}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest">
                    {s.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                      {s.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-accent text-sm font-semibold">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TerraHub feature ── */}
        <section className="py-24 bg-forest-deeper overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-6">
                Built in-house · proprietary
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Powered by <span className="text-accent">TerraHub</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                One platform from origination to issuance. TerraHub unifies project development, MRV, and commercialisation in a single environment — how we develop faster, monitor deeper, and give buyers and investors direct sight of the work.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Structured stage-gate development with 14-criteria quality scoring",
                  "Digital MRV combining satellite and field data",
                  "Live investor and buyer dashboard — a standing data room",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/terrahub"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Explore TerraHub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/Photos/DSCF9647.JPG"
                  alt="Team reviewing biodiversity monitoring data"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white/70 text-xs font-medium">
                  Biodiversity monitoring — Sapucaia, Brazil
                </div>
              </div>
              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* ── Projects editorial grid ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold text-forest uppercase tracking-widest mb-2">Our portfolio</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                  Brazil-led,<br />globally connected
                </h2>
              </div>
              <Link href="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-light transition-colors">
                All projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/projects" className="group col-span-2 relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src={projects[0].photo}
                  alt={projects[0].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-forest text-white text-[10px] font-bold uppercase tracking-wider">{projects[0].tag}</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold">{projects[0].status}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">{projects[0].country}</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{projects[0].name}</h3>
                  <p className="text-white/60 text-sm">{projects[0].ha}</p>
                </div>
              </Link>

              <div className="flex flex-col gap-4">
                {projects.slice(1, 3).map((p) => (
                  <Link key={p.name} href="/projects" className="group relative rounded-2xl overflow-hidden" style={{ height: "232px" }}>
                    <Image src={p.photo} alt={p.name} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-[9px] font-semibold">{p.status}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{p.country}</p>
                      <h3 className="text-sm font-bold text-white">{p.name}</h3>
                      <p className="text-white/50 text-xs">{p.ha}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {projects.slice(2, 5).map((p) => (
                <Link key={`bottom-${p.name}`} href="/projects" className="group relative h-56 rounded-2xl overflow-hidden">
                  <Image src={p.photo} alt={p.name} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{p.country}</p>
                    <h3 className="text-sm font-bold text-white">{p.name}</h3>
                    <p className="text-white/50 text-xs">{p.ha}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="sm:hidden mt-6 text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
                All projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Impact stats — full photo bg ── */}
        <section className="relative py-32 overflow-hidden">
          <Image
            src="/Photos/DSCF9797.JPG"
            alt="Restored landscape"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest-deeper/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Impact</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-16 leading-tight">
              Driven by impact.<br />Supported by return.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[
                { v: "4M ha", l: "Forest conservation goal", s: "our vision, before 2040" },
                { v: ">40M t", l: "CO₂ removals targeted", s: "across the portfolio" },
                { v: "~15", l: "Projects in pipeline", s: "each screened and de-risked" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-6xl lg:text-7xl font-extrabold text-white mb-2 tracking-tight">{s.v}</div>
                  <div className="text-base font-bold text-accent mb-1">{s.l}</div>
                  <div className="text-sm text-white/40">{s.s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Field team photo ── */}
        <section className="relative h-[500px] overflow-hidden">
          <Image
            src="/Photos/DSCF9818.JPG"
            alt="The Green Branch team in the field"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deeper/80 via-forest-deeper/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-lg">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">On the ground</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                  Science, finance,<br />and fieldwork.
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  We operate at the intersection of technical development, financial structuring, and commercial strategy — working with local operational partners to originate and scale high-quality projects.
                </p>
                <Link href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors">
                  Meet the team <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Buyer pathways ── */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-5 mb-12">
              <div className="lg:col-span-1">
                <p className="text-xs font-bold text-forest uppercase tracking-widest mb-3">For buyers</p>
                <h2 className="text-4xl font-extrabold text-navy leading-tight">
                  Three ways to buy removals
                </h2>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <p className="text-ink/60 leading-relaxed text-lg">
                  Every tonne is traceable to a specific project, methodology, and verification. Buy what is issued today, contract future vintages, or take a long-term stake in supply.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Spot",
                  sub: "Issued removals, available now.",
                  desc: "Issued removals available for immediate retirement or transfer. Suited to buyers meeting near-term claims.",
                  tag: "Immediate delivery",
                },
                {
                  num: "02",
                  title: "Forward",
                  sub: "Future vintages, price certainty.",
                  desc: "Contracted future vintages at agreed pricing, secured against projects already in development. For buyers building multi-year removal portfolios.",
                  tag: "Price certainty",
                },
                {
                  num: "03",
                  title: "Offtake",
                  sub: "Long-term supply, priority access.",
                  desc: "Long-term ERPAs across one or more projects, optionally combined with equity participation. For buyers who want scale and a direct stake in supply.",
                  tag: "Scale & priority",
                },
              ].map((p) => (
                <Link key={p.num} href="/buy-removals"
                  className="group flex items-center gap-6 p-6 bg-white rounded-2xl border border-border hover:border-forest/30 hover:shadow-md transition-all">
                  <div className="text-3xl font-extrabold text-forest/15 w-12 shrink-0">{p.num}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-ink text-lg">{p.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest/10 text-forest">{p.tag}</span>
                    </div>
                    <p className="text-sm font-medium text-forest mb-1">{p.sub}</p>
                    <p className="text-sm text-ink/50 hidden sm:block">{p.desc}</p>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-forest-muted flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 text-forest group-hover:text-white transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 bg-forest-deeper relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Ready to act<br />on climate?
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Whether you are developing a project, sourcing removals, or deploying capital — let us talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/buy-removals"
                className="px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                Buy removals
              </Link>
              <Link href="/develop/arr"
                className="px-7 py-4 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-all border border-white/15">
                Develop a project
              </Link>
              <Link href="/contact"
                className="px-7 py-4 text-white/50 text-sm font-semibold hover:text-white transition-colors">
                Schedule a call →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
