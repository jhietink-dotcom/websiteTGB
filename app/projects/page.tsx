import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Tbc } from "@/components/Tbc";

export const metadata = {
  title: "Projects",
  description:
    "The Green Branch portfolio of high-integrity, nature-based emission removal projects — Brazil-led reforestation and restoration, with selected projects across Africa.",
};

const projects = [
  {
    num: "01",
    name: "Sapucaia Sustainable Forests",
    tagline: "Large-scale reforestation",
    country: "Brazil",
    flag: "🇧🇷",
    region: "Bahia · Brazil",
    type: "Reforestation",
    ha: <Tbc>project area</Tbc>,
    tCO2: <Tbc>removal estimate</Tbc>,
    status: "Certified",
    photo: "/Photos/DSCF9854.JPG",
    description:
      "A large-scale reforestation programme developed with Futuro Florestal, certified to VCS and CCB under methodology VM0047 and ABACUS validated. The project carries a Sylvera Estimated Rating of BBB–AA, restoring degraded land while generating high-integrity emission removals for local communities.",
    partners: ["Futuro Florestal", "Verra (VCS + CCB)"],
    align: "left",
  },
  {
    num: "02",
    name: "Trees for Farmers",
    tagline: "Native reforestation on degraded pasture",
    country: "Brazil",
    flag: "🇧🇷",
    region: "Mato Grosso · Amazon biome",
    type: "Reforestation",
    ha: <Tbc>project area</Tbc>,
    tCO2: <Tbc>removal estimate</Tbc>,
    status: "Development",
    photo: "/Photos/DSCF9807.JPG",
    description:
      "Native reforestation of degraded pasture in the Amazon biome, developed with Rabobank and implemented by Implantar alongside smallholder farmers. The project has been selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake, restoring biodiverse and climate-resilient ecosystems.",
    partners: ["Rabobank", "Implantar", "Amazon Green Pledge"],
    align: "right",
  },
  {
    num: "03",
    name: "Samauma",
    tagline: "Amazon restoration at concept stage",
    country: "Brazil",
    flag: "🇧🇷",
    region: "Pará · Amazon biome",
    type: "Restoration",
    ha: "5,000+ ha",
    tCO2: <Tbc>removal estimate</Tbc>,
    status: "Concept",
    photo: "/Photos/DSCF9805.JPG",
    description:
      "An early-stage restoration concept covering a minimum of 5,000 hectares in the Amazon biome. Conservative modelling indicates issuance of over 255 emission removal units per hectare across the project lifetime, providing a durable foundation for high-integrity supply.",
    partners: [],
    align: "left",
  },
  {
    num: "04",
    name: "Serra do Sudeste Landscape Restoration",
    tagline: "Riparian & Atlantic Forest recovery",
    country: "Brazil",
    flag: "🇧🇷",
    region: "Rio Grande do Sul · Atlantic Forest / Pampa",
    type: "Riparian Restoration",
    ha: <Tbc>project area</Tbc>,
    tCO2: <Tbc>removal estimate</Tbc>,
    status: "Development",
    photo: "/Photos/DSCF9831.JPG",
    description:
      "Restoration of riparian forests and erosion-prone areas in the transition zone between the Atlantic Forest and Pampa biome, respecting natural grasslands while delivering measurable emission removals.",
    partners: ["Local landowners", "Municipal partners"],
    align: "right",
  },
  {
    num: "05",
    name: "Great Agroforestry Initiative",
    tagline: "Community-driven savannah restoration",
    country: "Ghana",
    flag: "🇬🇭",
    region: "Northern Ghana · Savannah",
    type: "Community Agroforestry",
    ha: <Tbc>project area</Tbc>,
    tCO2: <Tbc>removal estimate</Tbc>,
    status: "Active",
    photo: "/Photos/DSCF0493.JPG",
    description:
      "A large-scale community agroforestry programme restoring degraded savannah with more than 35,000 smallholder farmers across Northern Ghana, delivering emission removals alongside food security and rural livelihoods.",
    partners: ["Local farming cooperatives"],
    align: "left",
  },
  {
    num: "06",
    name: "Suledo Forest ARR",
    tagline: "Miombo woodland restoration with local communities",
    country: "Tanzania",
    flag: "🇹🇿",
    region: "Simanjiro District · Miombo Forest",
    type: "ARR",
    ha: <Tbc>project area</Tbc>,
    tCO2: <Tbc>removal estimate</Tbc>,
    status: "Development",
    photo: "/Photos/DSCF9797.JPG",
    description:
      "Miombo forest restoration co-designed with local Maasai communities and delivered with the Nature Restoration Company (NRC). Alley cropping supports local income while the project restores woodland and generates durable emission removals.",
    partners: ["Nature Restoration Company (NRC)", "Local communities"],
    align: "right",
  },
];

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Certified: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Development: "bg-amber-400/20 text-amber-300 border-amber-400/30",
  Concept: "bg-white/10 text-white/70 border-white/20",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
          <Image
            src="/Photos/DSCF9818.JPG"
            alt="Field team at a reforestation site"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deeper/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-5">
              Our portfolio
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
              Where nature<br />
              <span className="text-accent">meets capital.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              A Brazil-led portfolio of high-integrity, nature-based emission removal projects, with selected projects across Africa — verified, traceable, and built to last.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: "6", label: "Projects" },
                { value: "3", label: "Countries" },
                { value: <Tbc>total area</Tbc>, label: "Hectares under restoration" },
                { value: <Tbc>removal potential</Tbc>, label: "Emission removals" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div className="w-px h-10 bg-white/40" />
            <span className="text-[9px] text-white/60 uppercase tracking-[0.2em] rotate-90 origin-center translate-y-3">scroll</span>
          </div>
        </section>

        {/* ── PROJECT SECTIONS ────────────────────────────────── */}
        {projects.map((p) => {
          const isLeft = p.align === "left";
          return (
            <section
              key={p.num}
              className="relative h-[70vh] min-h-[520px] overflow-hidden group"
            >
              {/* Photo */}
              <Image
                src={p.photo}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="100vw"
              />

              {/* Gradient: dark on the panel side */}
              <div
                className={`absolute inset-0 ${
                  isLeft
                    ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent"
                    : "bg-gradient-to-l from-black/80 via-black/40 to-transparent"
                }`}
              />

              {/* Project number — big faded design element */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 select-none pointer-events-none font-extrabold text-[160px] leading-none text-white/5 ${
                  isLeft ? "left-4" : "right-4"
                }`}
              >
                {p.num}
              </div>

              {/* Content panel */}
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`w-full max-w-7xl mx-auto px-6 flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="max-w-md w-full">
                    {/* Top meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-white/40">{p.num}</span>
                      <div className="h-px w-8 bg-white/20" />
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${statusStyle[p.status] ?? "bg-white/10 text-white/60 border-white/20"}`}
                      >
                        {p.status}
                      </span>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/60">
                        {p.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2">
                      {p.name}
                    </h2>
                    <p className="text-sm text-accent font-medium mb-4">{p.tagline}</p>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-sm text-white/50 mb-5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {p.flag} {p.region}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {p.description}
                    </p>

                    {/* Key figures */}
                    <div className="flex gap-6 mb-6">
                      <div>
                        <div className="text-xl font-bold text-white">{p.ha}</div>
                        <div className="text-[10px] text-white/40 mt-0.5">Project area</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-accent">{p.tCO2}</div>
                        <div className="text-[10px] text-white/40 mt-0.5">Emission removals</div>
                      </div>
                    </div>

                    {/* Partners */}
                    {p.partners.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {p.partners.map((partner) => (
                          <span
                            key={partner}
                            className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors group/link"
                    >
                      Enquire about this project
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── DEVELOP A PROJECT CTA ───────────────────────────── */}
        <section className="relative overflow-hidden bg-forest-deeper py-28">
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-5">
              Develop with us
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Have land with restoration potential?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              We partner with landowners, communities and organisations to develop the next generation of high-integrity, nature-based emission removal projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/develop/arr"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors"
              >
                Start development <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
