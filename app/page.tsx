import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardMockup } from "@/components/OSTGBMockup";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const photoStripBase = [
  "/img/DSCF0095.JPG",
  "/img/tff-DSCF8194_1.JPG",
  "/img/DSCF9797.JPG",
  "/img/tff-DSCF8276.JPG",
  "/img/DSCF0278.JPG",
  "/img/tff-DSCF6771.JPG",
  "/img/DSCF0493.JPG",
  "/img/DSCF9873.JPG",
  "/img/tff-DSCF6366.JPG",
  "/img/DSCF9647.JPG",
  "/img/DSCF9742.JPG",
];
const photoStrip = [...photoStripBase, ...photoStripBase];

// "What we do" — three lines of activity, one development capability
const activities = [
  {
    tag: "Reforestation & biochar",
    title: "Develop",
    href: "/develop",
    img: "/img/DSCF9818.JPG",
    alt: "Reforestation and biochar development",
    body: "We originate and develop reforestation and biochar projects through a disciplined stage-gate process, certified to the highest carbon and forestry standards.",
  },
  {
    tag: "For buyers",
    title: "Transact",
    href: "/buy-removals",
    img: "/img/DSCF9797.JPG",
    alt: "Emission removals for corporate buyers",
    body: "We supply emission removals to corporate buyers — spot, forward, and long-term offtake — from our own portfolio and selected third-party projects in our origination pipeline.",
  },
  {
    tag: "For investors",
    title: "Invest",
    href: "/invest",
    img: "/img/DSCF9873.JPG",
    alt: "Investment in land and industrial biochar",
    body: "We structure investment opportunities in land acquisition for reforestation and in industrial biochar, bridging the early-stage financing gap that holds high-quality projects back.",
  },
];

const projects = [
  {
    name: "Sapucaia Sustainable Forests",
    country: "Brazil · Bahia",
    ha: "VCS + CCB · Sylvera BBB–AA",
    status: "Certified",
    photo: "/img/DSCF9854.JPG",
    tag: "Large-scale reforestation",
    featured: true,
  },
  {
    name: "Trees for Farmers",
    country: "Brazil · Mato Grosso",
    ha: "10,000 ha offtake",
    status: "Development",
    photo: "/img/tff-DSCF8276.JPG",
    tag: "With Rabobank",
  },
  {
    name: "Samauma",
    country: "Brazil · Pará",
    ha: "5,000+ ha",
    status: "Concept",
    photo: "/img/DSCF9831.JPG",
    tag: "ARR",
  },
  {
    name: "Great Agroforestry Initiative",
    country: "Ghana",
    ha: "35,000+ farmers",
    status: "Active",
    photo: "/img/DSCF0493.JPG",
    tag: "Community",
  },
  {
    name: "Suledo Forest ARR",
    country: "Tanzania",
    ha: "Miombo restoration",
    status: "Development",
    photo: "/img/DSCF9807.JPG",
    tag: "ARR",
  },
];

const stats = [
  { value: "4", label: "Projects developed" },
  { value: "~15", label: "In origination pipeline" },
  { value: ">40M t", label: "CO₂ removals targeted" },
];

const certifications = ["Verra", "Isometric"];

const partners = ["Rabobank", "Implantar", "Futuro Florestal", "NRC", "Florestas Engenharia"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
          <Image
            src="/img/DSCF0095.JPG"
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
                Nature-based removal developer
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[0.98] tracking-tight mb-6">
                Activating nature<br />
                for a <span className="text-accent">liveable future.</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                The Green Branch develops certified nature-based removal projects in the global south.
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

        {/* ── Credibility / proof band ── */}
        <section className="py-22 bg-cream">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <p className="text-xs font-bold text-forest uppercase tracking-[0.15em] mb-3">Credibility</p>
                <p className="text-2xl md:text-[32px] font-bold text-navy leading-[1.25] tracking-tight mb-5 text-pretty">
                  Bridging the gap between nature restoration and the private capital that makes it real.
                </p>
                <p className="text-[15px] text-ink-soft leading-[1.7]">
                  Every project is certified to the highest carbon and forestry standards, independently rated, and
                  developed alongside partners who operate on the ground.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-[#206042] p-6 min-w-0">
                    <div className="text-[34px] font-bold text-white leading-none tracking-tight">{s.value}</div>
                    <div className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#48FFBB]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 pt-7 border-t-2 border-t-[#206042] grid md:grid-cols-3 gap-10">
              <div>
                <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">Certified to</div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center shrink-0 whitespace-nowrap rounded-full border border-border bg-white px-3.5 py-[7px] text-[13px] font-semibold text-navy"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">
                  Independently rated by
                </div>
                <div className="text-[15px] font-semibold text-navy py-1.5">
                  Sylvera <span className="font-normal text-ink-soft">— BBB to AA</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">
                  Development partners
                </div>
                <div className="grid grid-cols-2 gap-x-6">
                  {partners.map((p) => (
                    <div key={p} className="text-[15px] font-semibold text-navy py-1.5">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we do — always-visible cards ── */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-bold text-forest uppercase tracking-[0.15em] mb-2">What we do</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight max-w-3xl">
                  Three lines of activity, one development capability.
                </h2>
              </div>
              <p className="text-sm text-ink/50 max-w-[280px]">
                Each line runs on the same stage-gate process and the same MRV system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {activities.map((a) => (
                <Link
                  key={a.title}
                  href={a.href}
                  className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative h-[220px] shrink-0">
                    <Image src={a.img} alt={a.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                    <div className="absolute inset-0 bg-[#206042]/[0.28]" />
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-[#206042] px-3.5 py-1.5 text-[11px] font-semibold text-white">
                      {a.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="text-[26px] font-bold text-navy mb-3">{a.title}</h3>
                    <p className="text-[15px] text-ink-soft leading-[1.7] mb-6">{a.body}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-forest">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── GreenBranch OS feature ── */}
        <section className="py-24 bg-forest-deeper overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-6">
                Built in-house · proprietary
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Powered by <span className="text-accent">GreenBranch OS</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                One platform from origination to issuance. GreenBranch OS unifies project development, MRV, and commercialisation in a single environment. This is how we develop faster, monitor deeper, and give buyers and investors direct sight of the work.
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
              <Link href="/greenbranch-os"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                Explore GreenBranch OS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
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
                  Locally rooted,<br />globally connected
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
            src="/img/DSCF9797.JPG"
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
            src="/img/tff-DSCF6366.JPG"
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
