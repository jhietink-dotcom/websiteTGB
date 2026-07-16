import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tbc } from "@/components/Tbc";

export const metadata = {
  title: "About",
  description:
    "The Green Branch is a social impact (B Corp) company and an impact-first carbon asset developer and manager, building high-quality nature-based projects, primarily in Brazil.",
};

const team = [
  { name: "Jacob Hietink", role: "Co-Founder" },
  { name: "Kasper Kupperman", role: "Co-Founder" },
  { name: "Miriam Bellink", role: "Co-Founder" },
  { name: "Rafael Frade", credential: "CFA", role: "Head of Finance" },
  { name: "Stijn Ticheloven", role: "Origination Lead" },
  { name: "Alex Sousa", credential: "PhD", role: "GIS Manager" },
  { name: "Tom Nijman", credential: "PhD", role: "Operations Manager" },
  { name: "João Diniz", role: "Operations Manager" },
  { name: "Cristina Marini", role: "NBS Analyst" },
  { name: "Bruna Franchi", role: "GIS Analyst" },
  { name: "Alexandre Kampel", role: "Investment Analyst" },
];

const partners = [
  "Futuro Florestal",
  "Rabobank",
  "Florestas Engenharia",
  "Implantar",
];

const timeline = [
  {
    year: "2019",
    event: (
      <>Founded to close the financing gap for nature-based climate solutions.</>
    ),
  },
  {
    year: "2023",
    event: (
      <>Built TerraHub, our proprietary development and MRV platform.</>
    ),
  },
  {
    year: "2024",
    event: (
      <>
        Sapucaia certified to VCS and CCB, with a Sylvera rating.{" "}
        <Tbc>confirm certification year (2024 or 2025)</Tbc>
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Trees for Farmers developed in partnership with Rabobank.{" "}
        <Tbc>confirm year</Tbc>
      </>
    ),
  },
];

const values = [
  {
    title: "Quality and credibility",
    desc: "We develop to the highest standards, including VCS and CCB. Technical rigour is our competitive advantage.",
  },
  {
    title: "Long-term value",
    desc: "We think in decades, not quarters, and build relationships and infrastructure to match that horizon.",
  },
  {
    title: "Transparency",
    desc: "We communicate openly about risks and trade-offs. No greenwashing, no empty promises.",
  },
  {
    title: "Partnership",
    desc: "Local operational partners, investors, and buyers are true collaborators, not counterparties.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
          <Image
            src="/Photos/DSCF0278.JPG"
            alt="The Green Branch team"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deeper/50 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-5">About us</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
              Impact-first.<br />
              <span className="text-accent">Built to last.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              The Green Branch is a social impact (B Corp) company and an impact-first carbon asset developer and manager, building high-quality nature-based projects, primarily in Brazil.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: "2019", label: "Founded" },
                { value: "B Corp", label: "Social impact company" },
                { value: "4M ha", label: "Conservation goal by 2040" },
                { value: "Brazil", label: "Primary focus" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">Who we are</div>
              <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
                Founded to close the financing gap for nature-based climate solutions.
              </h2>
              <div className="space-y-4 text-ink-soft leading-relaxed">
                <p>
                  The Green Branch was founded in 2019 to close the financing gap for nature-based climate solutions. Restoration and conservation projects too often fail to reach maturity because they remain underfunded and lack technical capacity. We exist to change that.
                </p>
                <p>
                  Today, The Green Branch is a social impact (B Corp) company and an impact-first carbon asset developer and manager. We operate at the intersection of technical development, financial structuring, and commercial strategy, working with local operational partners to originate and scale high-quality projects, primarily in Brazil.
                </p>
                <p>
                  Our vision is to increase biodiverse forest cover worldwide, conserving 4 million hectares of forest before 2040.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/Photos/DSCF9864.JPG"
                alt="Field monitoring in project area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs text-white/60 italic">Field monitoring — Sapucaia, Brazil</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────────── */}
        <section className="py-24 bg-forest-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">What we stand for</div>
            <h2 className="text-3xl font-extrabold text-navy mb-12 max-w-xl">
              Values that guide every project we develop.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-border">
                  <div className="text-3xl font-extrabold text-forest/15 mb-3 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-bold text-ink mb-2">{v.title}</div>
                  <div className="text-sm text-ink-soft leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPROACH ──────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo first on mobile, second on desktop */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden lg:order-first order-last">
              <Image
                src="/Photos/DSCF9807.JPG"
                alt="Team walking through restoration site at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/40 to-transparent" />
            </div>
            <div>
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">Our approach</div>
              <h2 className="text-3xl font-extrabold text-navy mb-8 leading-tight">
                How we work, from origination to scale.
              </h2>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Originate", desc: "With local operational partners, we identify restoration and conservation projects with strong ecological and social foundations, primarily in Brazil." },
                  { num: "02", title: "Develop", desc: "We provide the technical development and financial structuring needed to bring projects to certification readiness under standards such as VCS and CCB." },
                  { num: "03", title: "Manage", desc: "We manage each project as a long-term asset — MRV, compliance, and reporting — across its full lifetime." },
                  { num: "04", title: "Scale", desc: "We replicate proven models to grow biodiverse forest cover, working towards our goal of conserving 4 million hectares before 2040." },
                ].map((s) => (
                  <div key={s.num} className="flex gap-5 items-start">
                    <div className="text-2xl font-extrabold text-forest/20 shrink-0 w-8 leading-none">{s.num}</div>
                    <div>
                      <div className="text-sm font-bold text-ink mb-1">{s.title}</div>
                      <div className="text-sm text-ink-soft leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS ──────────────────────────────────────── */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Our partners</div>
            <h2 className="text-3xl font-extrabold text-navy mb-4 max-w-xl">
              We build with trusted partners.
            </h2>
            <p className="text-ink-soft mb-12 max-w-2xl leading-relaxed">
              Our local operational partners, investors, and buyers are true collaborators in developing high-quality projects on the ground.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {partners.map((p) => (
                <div
                  key={p}
                  className="rounded-xl border border-border bg-white px-6 py-4 text-sm font-bold text-ink"
                >
                  {p}
                </div>
              ))}
              <Tbc>additional partners to confirm</Tbc>
            </div>
          </div>
        </section>

        {/* ── TEAM ──────────────────────────────────────────── */}
        <section className="py-24 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">The team</div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Practitioners at the intersection of<br className="hidden sm:block" /> science, finance, and fieldwork.
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl">
              A team spanning carbon development, GIS, finance, and field operations, working closely with our local partners in Brazil.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((t) => (
                <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-forest/50 flex items-center justify-center mb-4 text-sm font-extrabold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-bold text-white mb-0.5">
                    {t.name}{t.credential ? `, ${t.credential}` : ""}
                  </div>
                  <div className="text-xs font-semibold text-accent">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ──────────────────────────────────────── */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Our story</div>
            <h2 className="text-3xl font-extrabold text-navy mb-14">Building since 2019.</h2>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-8 items-start group">
                  {/* Year */}
                  <div className="text-right shrink-0 w-14">
                    <span className="text-sm font-bold text-forest">{t.year}</span>
                  </div>
                  {/* Line + dot */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-forest mt-0.5 shrink-0" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-forest/20 mt-1 min-h-[32px]" />}
                  </div>
                  {/* Event */}
                  <div className="pb-8">
                    <p className="text-sm text-ink-soft leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-28">
          <Image
            src="/Photos/DSCF9876.JPG"
            alt="Forest landscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest-deeper/80" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">Work with us</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Whether you are a landowner, an investor, or a company looking to act on climate, we would be glad to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
