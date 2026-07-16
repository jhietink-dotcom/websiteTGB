import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  { name: "Jacob Hietink", role: "Co-founder", bio: "Carbon finance, project structuring, and institutional investor relations." },
  { name: "Kasper Kupperman", role: "Co-founder", bio: "Operations, project development, and on-the-ground delivery across project geographies." },
  { name: "Miriam Bellink", role: "Head of Carbon Development", bio: "Carbon methodology, certification standards, and technical project development." },
  { name: "Rafael Frade", role: "Investor Relations Officer", bio: "Capital markets, buyer engagement, and portfolio management." },
];

const timeline = [
  { year: "2019", event: "Founded with a focus on Nature-Based Solutions" },
  { year: "2020", event: "Launched first project — Serra do Sudeste, Brazil" },
  { year: "2021", event: "Expanded into carbon advisory; first ERPA transactions" },
  { year: "2022", event: "Partnered with NRC and FW Forestry for East African projects" },
  { year: "2023", event: "Developed and launched OS TGB — proprietary monitoring platform" },
  { year: "2024", event: "Recognised as a leading carbon asset development firm in NBS" },
  { year: "2025", event: "€500M+ capital mobilised; 10+ certified projects across 3 continents" },
];

const values = [
  { title: "Integrity first", desc: "We only work with projects that meet the highest ecological and social standards — no shortcuts on science or safeguards." },
  { title: "Long-term thinking", desc: "Carbon projects last 30–40 years. We build relationships and infrastructure to match that horizon." },
  { title: "Local partnerships", desc: "Every project is grounded in genuine community partnerships and benefits — not just on paper." },
  { title: "Radical transparency", desc: "OS TGB gives buyers and partners live visibility into every project. We have nothing to hide." },
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
              The Green Branch is an impact-first carbon asset developer and manager. We find, develop, and operate the highest-quality nature-based removal projects worldwide.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: "2019", label: "Founded" },
                { value: "10+", label: "Certified projects" },
                { value: "3", label: "Continents" },
                { value: "40+", label: "Years per project" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION SPLIT ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">Our mission</div>
              <h2 className="text-4xl font-extrabold text-ink mb-6 leading-tight">
                Support, scale, and operate nature restoration at the pace the planet needs.
              </h2>
              <div className="space-y-4 text-ink-soft leading-relaxed">
                <p>
                  We were founded to address a stubborn problem: hundreds of ecologically credible restoration projects never reach scale because they can&apos;t access early-stage finance and technical support.
                </p>
                <p>
                  The Green Branch identifies these projects, prepares them for carbon market readiness, and manages them as long-term assets — providing early-stage funding, technical assistance, and the infrastructure to make the work transparent and investable.
                </p>
                <p>
                  Forests are not just carbon sinks. They&apos;re living systems worthy of protection, investment, and care. That belief shapes everything we do.
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
            <h2 className="text-3xl font-extrabold text-ink mb-12 max-w-xl">
              Principles that guide every project we develop.
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
              <h2 className="text-3xl font-extrabold text-ink mb-8 leading-tight">
                From degraded land to verified carbon asset.
              </h2>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Identify", desc: "Ecologically sound projects with credible local partners in regions with high climate and biodiversity potential." },
                  { num: "02", title: "Develop", desc: "Prepare projects for carbon market readiness through early-stage funding, technical assistance, and certification support." },
                  { num: "03", title: "Manage", desc: "Long-term asset management — MRV, compliance, revenue optimisation — for the full project lifetime." },
                  { num: "04", title: "Scale", desc: "Replicate successful models across geographies using standardised contracts and modular certification systems." },
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

        {/* ── TEAM ──────────────────────────────────────────── */}
        <section className="py-24 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">The team</div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Practitioners at the intersection of<br className="hidden sm:block" /> science, finance, and fieldwork.
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl">
              A small, focused team with deep expertise across carbon markets, ecology, and international finance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((t) => (
                <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-forest/50 flex items-center justify-center mb-4 text-sm font-extrabold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-bold text-white mb-0.5">{t.name}</div>
                  <div className="text-xs font-semibold text-accent mb-3">{t.role}</div>
                  <div className="text-sm text-white/50 leading-relaxed">{t.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ──────────────────────────────────────── */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Our story</div>
            <h2 className="text-3xl font-extrabold text-ink mb-14">Six years of building.</h2>
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
              Whether you&apos;re a landowner, investor, or company looking to act on climate — we&apos;d love to hear from you.
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
