"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { PROJECT_COUNT } from "@/lib/projects";

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
const activitiesBase = [
  {
    href: "/advisory",
    img: "/img/DSCF9818.JPG",
    alt: "Carbon advisory for buyers, developers and investors",
  },
  {
    href: "/buy-removals",
    img: "/img/DSCF9797.JPG",
    alt: "Emission removals for corporate buyers",
  },
  {
    href: "/invest",
    img: "/img/DSCF9873.JPG",
    alt: "Investment in land and industrial biochar",
  },
];

const projectsBase = [
  {
    name: "Sapucaia Sustainable Forests",
    photo: "/img/DSCF9854.JPG",
    featured: true,
  },
  {
    name: "Trees for Farmers",
    photo: "/img/tff-DSCF8276.JPG",
  },
  {
    name: "Suledo Community ARR Project",
    photo: "/img/DSCF9807.JPG",
  },
  {
    name: "Abaetetuba Distributed Biochar",
    photo: "/img/biochar.jpg",
  },
  {
    name: "Samauma",
    photo: "/img/DSCF9805.JPG",
  },
];

const statsBase = [{ value: String(PROJECT_COUNT) }, { value: "~15" }, { value: ">40M t" }];

const certifications = [
  { name: "Verra", logo: "/img/logos/verra.png", width: 540, height: 198 },
  { name: "Isometric", logo: "/img/logos/isometric.png", width: 528, height: 95 },
  { name: "Climate, Community & Biodiversity Standards", logo: "/img/logos/ccb.png", width: 295, height: 82 },
  { name: "Puro.earth", logo: "/img/logos/puro-earth.png", width: 295, height: 160 },
];

const partners = [
  { name: "Rabobank", logo: "/img/logos/rabobank.png", width: 1063, height: 192 },
  { name: "Implantar", logo: "/img/logos/implantar.png", width: 1969, height: 794 },
  { name: "Futuro Florestal", logo: "/img/logos/futuro-florestal.png", width: 335, height: 278 },
  { name: "NRC", logo: "/img/logos/nrc.png", width: 931, height: 391 },
];

const sylveraLogo = { logo: "/img/logos/sylvera.png", width: 1564, height: 402 };

const content = {
  en: {
    hero: {
      badge: "Nature-based removal developer",
      line1: "Activating nature",
      line2Prefix: "for a",
      line2Accent: "liveable future.",
      lead: "The Green Branch develops certified nature-based removal projects in the global south.",
      ctaExplore: "Explore our projects",
      ctaTalk: "Talk to our team",
      scroll: "scroll",
    },
    credibility: {
      eyebrow: "Credibility",
      heading: "Bridging the gap between nature restoration and the private capital that makes it real.",
      body: "Every project is certified to the highest carbon and forestry standards, independently rated, and developed alongside partners who operate on the ground.",
      statsLabels: ["Projects developed", "Projects in origination pipeline", "CO₂ removals targeted"],
      certifiedToLabel: "Certified under",
      ratedByLabel: "Independently rated by",
      partnersLabel: "Development partners",
    },
    whatWeDo: {
      eyebrow: "What we do",
      heading: "Three lines of activity, one development capability.",
      learnMore: "Learn more",
      items: [
        {
          tag: "Carbon advisory",
          title: "Advisory",
          body: "We advise corporates on carbon strategy, procurement and SBTi/FLAG targets, and support landowners and developers through project development and certification — the same expertise behind our own portfolio, available for yours.",
        },
        {
          tag: "For buyers",
          title: "Buy",
          body: "We supply emission removals to corporate buyers — spot, forward, and long-term offtake — from our own portfolio and selected third-party projects in our origination pipeline.",
        },
        {
          tag: "For investors",
          title: "Invest",
          body: "We structure investment opportunities in land acquisition for reforestation and in industrial biochar, bridging the early-stage financing gap that holds high-quality projects back.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Our portfolio",
      headingLine1: "Locally rooted,",
      headingLine2: "globally connected",
      allProjects: "All projects",
      items: [
        { country: "Brazil · Bahia", ha: "VCS + CCB", status: "Certified", tag: "Large-scale reforestation" },
        { country: "Brazil · Mato Grosso", ha: "10,000 ha offtake", status: "Development", tag: "With Rabobank" },
        { country: "Tanzania", ha: "Miombo restoration", status: "Development", tag: "ARR" },
        { country: "Brazil", ha: "200 kilns", status: "Development", tag: "Biochar" },
        { country: "Brazil · Pará", ha: "5,000+ ha", status: "Concept", tag: "ARR" },
      ],
    },
    impact: {
      eyebrow: "Impact",
      headingLine1: "Driven by impact.",
      headingLine2: "Supported by return.",
      stats: [
        { v: "4M ha", l: "Forest conservation goal", s: "our vision, before 2040" },
        { v: ">40M t", l: "CO₂ removals targeted", s: "across the portfolio" },
        { v: "~15", l: "Projects in pipeline", s: "each screened and de-risked" },
      ],
    },
    fieldTeam: {
      eyebrow: "On the ground",
      headingLine1: "Science, finance,",
      headingLine2: "and fieldwork.",
      body: "We operate at the intersection of technical development, financial structuring, and commercial strategy — working with local operational partners to originate and scale high-quality projects.",
      cta: "Meet the team",
    },
    finalCta: {
      headingLine1: "Ready to act",
      headingLine2: "on climate?",
      lead: "Whether you are developing a project, sourcing removals, or deploying capital — let us talk.",
      buyRemovals: "Buy carbon credits",
      developProject: "Develop a project",
      scheduleCall: "Schedule a call →",
    },
  },
  pt: {
    hero: {
      badge: "Desenvolvedora de remoções baseadas na natureza",
      line1: "Ativando a natureza",
      line2Prefix: "para um",
      line2Accent: "futuro habitável.",
      lead: "A Green Branch desenvolve projetos certificados de remoção baseados na natureza no sul global.",
      ctaExplore: "Explorar nossos projetos",
      ctaTalk: "Fale com nossa equipe",
      scroll: "role",
    },
    credibility: {
      eyebrow: "Credibilidade",
      heading: "Conectando a restauração da natureza ao capital privado que a torna realidade.",
      body: "Cada projeto é certificado pelos mais altos padrões de carbono e florestais, avaliado de forma independente e desenvolvido ao lado de parceiros que atuam no terreno.",
      statsLabels: ["Projetos desenvolvidos", "Projetos em pipeline de originação", "Remoções de CO₂ almejadas"],
      certifiedToLabel: "Certificada pelos padrões",
      ratedByLabel: "Avaliação independente por",
      partnersLabel: "Parceiros de desenvolvimento",
    },
    whatWeDo: {
      eyebrow: "O que fazemos",
      heading: "Três linhas de atuação, uma capacidade de desenvolvimento.",
      learnMore: "Saiba mais",
      items: [
        {
          tag: "Assessoria de carbono",
          title: "Assessoria",
          body: "Assessoramos empresas em estratégia de carbono, aquisição e metas SBTi/FLAG, e apoiamos proprietários de terra e desenvolvedores no desenvolvimento e na certificação de projetos — a mesma expertise por trás do nosso próprio portfólio, disponível para o seu.",
        },
        {
          tag: "Para compradores",
          title: "Comprar",
          body: "Fornecemos remoções de emissões para compradores corporativos — spot, forward e offtake de longo prazo — de nosso próprio portfólio e de projetos selecionados de terceiros em nosso pipeline de originação.",
        },
        {
          tag: "Para investidores",
          title: "Investir",
          body: "Estruturamos oportunidades de investimento em aquisição de terras para reflorestamento e em biochar industrial, suprindo a lacuna de financiamento em estágio inicial que trava projetos de alta qualidade.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Nosso portfólio",
      headingLine1: "Com raízes locais,",
      headingLine2: "conectados globalmente",
      allProjects: "Todos os projetos",
      items: [
        { country: "Brasil · Bahia", ha: "VCS + CCB", status: "Certificado", tag: "Reflorestamento em larga escala" },
        { country: "Brasil · Mato Grosso", ha: "Offtake de 10.000 ha", status: "Em desenvolvimento", tag: "Com o Rabobank" },
        { country: "Tanzânia", ha: "Restauração de miombo", status: "Em desenvolvimento", tag: "ARR" },
        { country: "Brasil", ha: "200 fornos", status: "Em desenvolvimento", tag: "Biochar" },
        { country: "Brasil · Pará", ha: "5.000+ ha", status: "Conceito", tag: "ARR" },
      ],
    },
    impact: {
      eyebrow: "Impacto",
      headingLine1: "Impulsionados pelo impacto.",
      headingLine2: "Sustentados pelo retorno.",
      stats: [
        { v: "4M ha", l: "Meta de conservação florestal", s: "nossa visão, até 2040" },
        { v: ">40M t", l: "Remoções de CO₂ almejadas", s: "em todo o portfólio" },
        { v: "~15", l: "Projetos em pipeline", s: "cada um triado e com risco mitigado" },
      ],
    },
    fieldTeam: {
      eyebrow: "No terreno",
      headingLine1: "Ciência, finanças",
      headingLine2: "e trabalho de campo.",
      body: "Atuamos na interseção entre desenvolvimento técnico, estruturação financeira e estratégia comercial — trabalhando com parceiros operacionais locais para originar e escalar projetos de alta qualidade.",
      cta: "Conheça a equipe",
    },
    finalCta: {
      headingLine1: "Pronto para agir",
      headingLine2: "pelo clima?",
      lead: "Seja você alguém desenvolvendo um projeto, buscando remoções, ou alocando capital — vamos conversar.",
      buyRemovals: "Comprar créditos de carbono",
      developProject: "Desenvolver um projeto",
      scheduleCall: "Agendar uma chamada →",
    },
  },
};

export default function HomeContent() {
  const { locale } = useLanguage();
  const t = content[locale];

  const stats = statsBase.map((s, i) => ({ ...s, label: t.credibility.statsLabels[i] }));
  const activities = activitiesBase.map((a, i) => ({ ...a, ...t.whatWeDo.items[i] }));
  const projects = projectsBase.map((p, i) => ({ ...p, ...t.projectsSection.items[i] }));

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
                {t.hero.badge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                {t.hero.line1}<br />
                {t.hero.line2Prefix} <span className="text-accent">{t.hero.line2Accent}</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
                {t.hero.lead}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                  {t.hero.ctaExplore} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  {t.hero.ctaTalk}
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2 text-white/40 text-xs font-medium">
            <div className="w-px h-8 bg-white/20" />
            <span className="rotate-90 origin-center">{t.hero.scroll}</span>
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
                <p className="text-xs font-bold text-forest uppercase tracking-[0.15em] mb-3">{t.credibility.eyebrow}</p>
                <p className="text-2xl md:text-[32px] font-bold text-navy leading-[1.25] tracking-tight mb-5 text-pretty">
                  {t.credibility.heading}
                </p>
                <p className="text-[15px] text-ink-soft leading-[1.7]">
                  {t.credibility.body}
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
                <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">{t.credibility.certifiedToLabel}</div>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                  {certifications.map((c) => (
                    <Image
                      key={c.name}
                      src={c.logo}
                      alt={c.name}
                      width={c.width}
                      height={c.height}
                      className="h-10 w-auto object-contain"
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">
                  {t.credibility.ratedByLabel}
                </div>
                <div className="flex items-center gap-2.5 py-1.5">
                  <Image
                    src={sylveraLogo.logo}
                    alt="Sylvera"
                    width={sylveraLogo.width}
                    height={sylveraLogo.height}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">
                  {t.credibility.partnersLabel}
                </div>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                  {partners.map((p) => (
                    <Image
                      key={p.name}
                      src={p.logo}
                      alt={p.name}
                      width={p.width}
                      height={p.height}
                      className="h-9 w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we do — always-visible cards ── */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs font-bold text-forest uppercase tracking-[0.15em] mb-2">{t.whatWeDo.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight max-w-3xl">
                {t.whatWeDo.heading}
              </h2>
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
                      {t.whatWeDo.learnMore}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects editorial grid ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold text-forest uppercase tracking-widest mb-2">{t.projectsSection.eyebrow}</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                  {t.projectsSection.headingLine1}<br />{t.projectsSection.headingLine2}
                </h2>
              </div>
              <Link href="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-light transition-colors">
                {t.projectsSection.allProjects} <ArrowRight className="w-4 h-4" />
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

              {projects.slice(3, 6).map((p, i, bottom) => (
                <Link key={`bottom-${p.name}`} href="/projects" className={`group relative h-56 rounded-2xl overflow-hidden ${bottom.length === 2 && i === 1 ? "col-span-2" : ""}`}>
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
                {t.projectsSection.allProjects} <ArrowRight className="w-4 h-4" />
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
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{t.impact.eyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-16 leading-tight">
              {t.impact.headingLine1}<br />{t.impact.headingLine2}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {t.impact.stats.map((s) => (
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
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{t.fieldTeam.eyebrow}</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                  {t.fieldTeam.headingLine1}<br />{t.fieldTeam.headingLine2}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {t.fieldTeam.body}
                </p>
                <Link href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors">
                  {t.fieldTeam.cta} <ArrowUpRight className="w-4 h-4" />
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
              {t.finalCta.headingLine1}<br />{t.finalCta.headingLine2}
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              {t.finalCta.lead}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/buy-removals"
                className="px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                {t.finalCta.buyRemovals}
              </Link>
              <Link href="/develop/arr"
                className="px-7 py-4 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-all border border-white/15">
                {t.finalCta.developProject}
              </Link>
              <Link href="/contact"
                className="px-7 py-4 text-white/50 text-sm font-semibold hover:text-white transition-colors">
                {t.finalCta.scheduleCall}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
