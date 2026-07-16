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

const services = [
  {
    title: "Develop a project",
    desc: "Full lifecycle support for landowners and project developers — from initial screening through certification and beyond.",
    href: "/develop",
    photo: "/Photos/DSCF9818.JPG",
    tag: "For developers",
  },
  {
    title: "Invest in nature",
    desc: "Tailored opportunities connecting institutional capital with verified, high-integrity restoration projects worldwide.",
    href: "/invest",
    photo: "/Photos/DSCF9797.JPG",
    tag: "For investors",
  },
  {
    title: "Secure credits",
    desc: "Three distinct pathways for buyers: development contributions, spot credits, or long-term ERPAs with price certainty.",
    href: "/secure-credits",
    photo: "/Photos/DSCF9873.JPG",
    tag: "For buyers",
  },
];

const projects = [
  {
    name: "Sapucaia Sustainable Forests",
    country: "Brazil",
    ha: "4,800 ha",
    status: "Active",
    photo: "/Photos/DSCF9854.JPG",
    tag: "Large-scale reforestation",
    featured: true,
  },
  {
    name: "Serra do Sudeste",
    country: "Brazil",
    ha: "2,200 ha",
    status: "Certified",
    photo: "/Photos/DSCF9831.JPG",
    tag: "Landscape restoration",
  },
  {
    name: "Trees for Farmers",
    country: "Brazil",
    ha: "8,500 ha",
    status: "Development",
    photo: "/Photos/DSCF9864.JPG",
    tag: "Agroforestry",
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
    ha: "6,100 ha",
    status: "Development",
    photo: "/Photos/DSCF9807.JPG",
    tag: "ARR",
  },
];

const clients = ["Rabobank", "Zoo", "Futuro", "Van Drunen", "Sommalife", "Bio-Brasil", "Hummingbirds", "NRC"];

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
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
          <div className="absolute inset-0 bg-forest-deeper/30" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Operating across Brazil · Tanzania · Ghana
              </div>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
                Invest in nature.<br />
                <span className="text-accent">Restore the planet.</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
                We develop high-integrity forest restoration projects — and built the technology to make every tonne traceable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/secure-credits"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                  Secure credits <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  Explore projects
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
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

        {/* ── Logos + mission statement ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-ink/30 uppercase tracking-widest mb-6">Trusted by</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {clients.map((c) => (
                    <span key={c} className="text-sm font-bold text-ink/25 hover:text-ink/50 transition-colors cursor-default">{c}</span>
                  ))}
                </div>
              </div>
              <div className="lg:pl-12 lg:border-l border-border">
                <p className="text-2xl lg:text-3xl font-bold text-ink leading-tight mb-6">
                  "Bridging the gap between nature restoration and private capital to create measurable impact."
                </p>
                <div className="flex gap-10">
                  {[
                    { v: "10+", l: "certified projects" },
                    { v: "€500M+", l: "capital mobilised" },
                    { v: "40M t", l: "CO₂ by 2030" },
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

        {/* ── Services — 3 photo cards ── */}
        <section className="py-4 px-4 lg:px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
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

                  {/* Top badge */}
                  <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest">
                    {s.tag}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
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

        {/* ── OS TGB feature ── */}
        <section className="py-24 bg-forest-deeper overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-6">
                Built in-house · proprietary
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Powered by <span className="text-accent">OS TGB</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                We didn&apos;t buy a platform. We built one. OS TGB manages every stage of carbon project development — making our work traceable, auditable, and investable.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Structured phase-gated development workflow",
                  "Digital MRV combining satellite + field data",
                  "Live investor dashboard with real-time project data",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/os-tgb"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Explore OS TGB <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: photo + UI overlay */}
            <div className="relative">
              {/* Field photo */}
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
              {/* Dashboard mockup */}
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
                <h2 className="text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
                  Projects across<br />the globe
                </h2>
              </div>
              <Link href="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-light transition-colors">
                All projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Featured large */}
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

              {/* Right column — 2 stacked */}
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

              {/* Bottom row — 3 equal */}
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
                { v: "10+", l: "Certified projects", s: "across multiple continents" },
                { v: "€500M+", l: "Capital mobilised", s: "into nature-based solutions" },
                { v: "40M t", l: "CO₂ by 2030", s: "removal target across portfolio" },
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
                  Our team operates at the intersection of ecology, carbon markets, and finance — spending as much time in the field as in the boardroom.
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
                <h2 className="text-4xl font-extrabold text-ink leading-tight">
                  Three ways to access credits
                </h2>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <p className="text-ink/60 leading-relaxed text-lg">
                  Whether you need credits now, want to lock in future supply, or want to co-fund the next generation of projects — we have a structured pathway for you.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Development Contributions",
                  sub: "Fund early. Secure first-offer rights.",
                  desc: "Co-finance a project during development before credits exist. In return, receive first-offer rights at pre-agreed pricing.",
                  tag: "High impact · Early access",
                },
                {
                  num: "02",
                  title: "Spot Credits",
                  sub: "Verified. Available now.",
                  desc: "Purchase certified nature-based removal credits from operating projects. Immediate delivery, full documentation.",
                  tag: "Immediate delivery",
                },
                {
                  num: "03",
                  title: "ERPAs — Future Offtakes",
                  sub: "Long-term supply. Price certainty.",
                  desc: "Contract future delivery from projects in development. Multi-year price visibility and guaranteed access.",
                  tag: "Long-term supply",
                },
              ].map((p) => (
                <Link key={p.num} href="/secure-credits"
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
              Whether you&apos;re developing a project, sourcing credits, or deploying capital — let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/secure-credits"
                className="px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                Secure credits
              </Link>
              <Link href="/develop"
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
