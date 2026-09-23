"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Tbc } from "@/components/Tbc";
import ProjectMap from "@/components/ProjectMap";
import { useLanguage, type Locale } from "@/lib/i18n/LanguageContext";
import { projectsStatic, PROJECT_COUNT, type StatusKey } from "@/lib/projects";

const statusStyle: Record<StatusKey, string> = {
  Active: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Certified: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Development: "bg-amber-400/20 text-amber-300 border-amber-400/30",
  Concept: "bg-white/10 text-white/70 border-white/20",
};

type ProjectText = {
  name: string;
  tagline: string;
  region: string;
  type: string;
  areaLabel?: string;
  ha: string | null;
  haLabel: string;
  tCO2: string | null;
  tCO2Label: string;
  certification: string | null;
  status: string;
  description: string;
  partners: string[];
};

// Derives the portfolio-wide hectare/removal totals straight from each
// project's own displayed ha/tCO2 figures, so the hero stats stay correct
// automatically whenever a per-project value is edited — no separate total
// to remember to update.
function parseLocaleNumber(raw: string, locale: Locale): number {
  const cleaned = locale === "en" ? raw.replace(/,/g, "") : raw.replace(/\./g, "").replace(",", ".");
  return parseFloat(cleaned);
}

function sumHectares(items: { ha: string | null; kind: "biochar" | "arr" }[], locale: Locale) {
  let total = 0;
  let approximate = false;
  for (const p of items) {
    if (p.kind === "biochar") continue; // measured in kilns, not hectares
    const m = p.ha?.match(/^([\d.,]+)/);
    if (!m) {
      approximate = true;
      continue;
    }
    total += parseLocaleNumber(m[1], locale);
    if (p.ha?.includes("+")) approximate = true;
  }
  return { total, approximate };
}

function sumTco2(items: { tCO2: string | null }[], locale: Locale) {
  let total = 0;
  let approximate = false;
  for (const p of items) {
    const m = p.tCO2?.match(/^([\d.,]+)\s*M/i);
    if (!m) {
      approximate = true;
      continue;
    }
    total += parseLocaleNumber(m[1], locale) * 1_000_000;
    if (p.tCO2?.includes("+")) approximate = true;
  }
  return { total, approximate };
}

function formatHectaresTotal(total: number, approximate: boolean, locale: Locale) {
  const formatted = total.toLocaleString(locale === "en" ? "en-US" : "pt-BR");
  return `${formatted}${approximate ? "+" : ""} ha`;
}

function formatTco2Total(total: number, approximate: boolean, locale: Locale) {
  let str = (total / 1_000_000).toFixed(2).replace(/\.?0+$/, "");
  if (locale === "pt") str = str.replace(".", ",");
  return `${str}M${approximate ? "+" : ""} tCO2e`;
}

const content = {
  en: {
    hero: {
      eyebrow: "Our portfolio",
      titleLine1: "Where nature",
      titleLine2: "meets capital.",
      lead: "A portfolio of high-integrity, nature-based emission removal projects across multiple regions — verified, traceable, and built to last.",
      stats: [
        { value: "6" as string | null, label: "Projects" },
        { value: "2" as string | null, label: "Countries" },
        { value: null as string | null, label: "Hectares under restoration" },
        { value: null as string | null, label: "Emission removals" },
      ],
      scroll: "scroll",
    },
    map: {
      eyebrow: "Where we work",
      heading: "Our portfolio, on the ground.",
      resetLabel: "Show all projects",
      legendBiochar: "Biochar",
      legendArr: "ARR",
    },
    projectAreaLabel: "Project area",
    emissionRemovalsLabel: "Emission removals",
    certificationLabel: "Certification standard",
    enquireCta: "Enquire about this project",
    projects: [
      {
        name: "Sapucaia Sustainable Forests",
        tagline: "Large-scale reforestation",
        region: "Bahia · Brazil",
        type: "Reforestation",
        ha: "10,000 ha",
        haLabel: "project area",
        tCO2: "3.1M tCO2e",
        tCO2Label: "removal estimate",
        certification: "Verra VCS&CCB",
        status: "Certified",
        description:
          "A large-scale reforestation programme developed with Futuro Florestal, certified to VCS and CCB under methodology VM0047 and ABACUS validated. The project carries a Sylvera Estimated Rating of BBB–AA, restoring degraded land while generating high-integrity emission removals for local communities.",
        partners: ["Futuro Florestal", "Verra (VCS + CCB)"],
      },
      {
        name: "Trees for Farmers",
        tagline: "Native reforestation on degraded pasture",
        region: "Mato Grosso · Amazon biome",
        type: "Reforestation",
        ha: "10,000 ha",
        haLabel: "project area",
        tCO2: null,
        tCO2Label: "removal estimate",
        certification: "Verra VCS&CCB",
        status: "Development",
        description:
          "Native reforestation of degraded pasture in the Amazon biome, developed with Rabobank and implemented by Implantar alongside smallholder farmers. The project has been selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake, restoring biodiverse and climate-resilient ecosystems.",
        partners: ["Rabobank", "Implantar", "Amazon Green Pledge"],
      },
      {
        name: "Samauma",
        tagline: "Amazon restoration at concept stage",
        region: "Pará · Amazon biome",
        type: "Restoration",
        ha: "5,000+ ha",
        haLabel: "project area",
        tCO2: "2M+ tCO2e",
        tCO2Label: "removal estimate",
        certification: "ISOMETRIC",
        status: "Concept",
        description:
          "An early-stage restoration concept covering a minimum of 5,000 hectares in the Amazon biome. Conservative modelling indicates issuance of over 255 emission removal units per hectare across the project lifetime, providing a durable foundation for high-integrity supply.",
        partners: [],
      },
      {
        name: "Serra do Sudeste Landscape Restoration",
        tagline: "Riparian & Atlantic Forest recovery",
        region: "Rio Grande do Sul · Atlantic Forest / Pampa",
        type: "Riparian Restoration",
        ha: null,
        haLabel: "project area",
        tCO2: null,
        tCO2Label: "removal estimate",
        certification: null,
        status: "Development",
        description:
          "Restoration of riparian forests and erosion-prone areas in the transition zone between the Atlantic Forest and Pampa biome, respecting natural grasslands while delivering measurable emission removals.",
        partners: ["Local landowners", "Municipal partners"],
      },
      {
        name: "Abaetetuba Distributed Biochar",
        tagline: "Distributed biochar production with local farmers",
        region: "Abaetetuba · Pará",
        type: "Biochar",
        areaLabel: "Scale",
        ha: "200 kilns",
        haLabel: "scale",
        tCO2: null,
        tCO2Label: "removal estimate",
        certification: "ISOMETRIC",
        status: "Development",
        description:
          "A distributed biochar programme in Abaetetuba, converting local biomass residue into durable carbon removals across a network of small-scale kilns run with local farmers.",
        partners: [],
      },
      {
        name: "Suledo Community ARR Project",
        tagline: "Miombo woodland restoration with local communities",
        region: "Kiteto District · Miombo Forest",
        type: "ARR",
        ha: "10,000 ha",
        haLabel: "project area",
        tCO2: "2.45M tCO2e",
        tCO2Label: "removal estimate",
        certification: "Verra VCS&CCB",
        status: "Development",
        description:
          "Miombo forest restoration co-designed with local Maasai communities and delivered with the Nature Restoration Company (NRC). Alley cropping supports local income while the project restores woodland and generates durable emission removals.",
        partners: ["Nature Restoration Company (NRC)", "Local communities"],
      },
    ] satisfies ProjectText[],
    develop: {
      eyebrow: "Develop with us",
      heading: "Have land or feedstock and an ARR or biochar project idea?",
      lead: "We partner with landowners, communities and organisations to develop the next generation of high-integrity, nature-based emission removal projects.",
      start: "Explore our Advisory services",
      talk: "Contact us",
    },
  },
  pt: {
    hero: {
      eyebrow: "Nosso portfólio",
      titleLine1: "Onde a natureza",
      titleLine2: "encontra o capital.",
      lead: "Um portfólio de projetos de remoção de emissões de base natural e alta integridade em múltiplas regiões — verificados, rastreáveis e construídos para durar.",
      stats: [
        { value: "6" as string | null, label: "Projetos" },
        { value: "2" as string | null, label: "Países" },
        { value: null as string | null, label: "Hectares em restauração" },
        { value: null as string | null, label: "Remoções de emissão" },
      ],
      scroll: "rolar",
    },
    map: {
      eyebrow: "Onde atuamos",
      heading: "Nosso portfólio, no terreno.",
      resetLabel: "Ver todos os projetos",
      legendBiochar: "Biochar",
      legendArr: "ARR",
    },
    projectAreaLabel: "Área do projeto",
    emissionRemovalsLabel: "Remoções de emissão",
    certificationLabel: "Padrão de certificação",
    enquireCta: "Saiba mais sobre este projeto",
    projects: [
      {
        name: "Sapucaia Sustainable Forests",
        tagline: "Reflorestamento em grande escala",
        region: "Bahia · Brasil",
        type: "Reflorestamento",
        ha: "10.000 ha",
        haLabel: "área do projeto",
        tCO2: "3,1M tCO2e",
        tCO2Label: "estimativa de remoção",
        certification: "Verra VCS&CCB",
        status: "Certificado",
        description:
          "Um programa de reflorestamento em grande escala desenvolvido com a Futuro Florestal, certificado pelos padrões VCS e CCB sob a metodologia VM0047 e validado pela ABACUS. O projeto tem uma Classificação Estimada Sylvera de BBB–AA, restaurando terras degradadas e gerando remoções de emissão de alta integridade para as comunidades locais.",
        partners: ["Futuro Florestal", "Verra (VCS + CCB)"],
      },
      {
        name: "Trees for Farmers",
        tagline: "Reflorestamento nativo em pastagem degradada",
        region: "Mato Grosso · Bioma Amazônia",
        type: "Reflorestamento",
        ha: "10.000 ha",
        haLabel: "área do projeto",
        tCO2: null,
        tCO2Label: "estimativa de remoção",
        certification: "Verra VCS&CCB",
        status: "Em desenvolvimento",
        description:
          "Reflorestamento nativo de pastagem degradada no bioma Amazônia, desenvolvido com o Rabobank e implementado pela Implantar junto a pequenos agricultores. O projeto foi selecionado pelo RfP do Amazon Green Pledge para um offtake de 10.000 hectares, restaurando ecossistemas biodiversos e resilientes ao clima.",
        partners: ["Rabobank", "Implantar", "Amazon Green Pledge"],
      },
      {
        name: "Samauma",
        tagline: "Restauração na Amazônia em estágio de concepção",
        region: "Pará · Bioma Amazônia",
        type: "Restauração",
        ha: "5.000+ ha",
        haLabel: "área do projeto",
        tCO2: "2M+ tCO2e",
        tCO2Label: "estimativa de remoção",
        certification: "ISOMETRIC",
        status: "Concepção",
        description:
          "Um conceito de restauração em estágio inicial cobrindo no mínimo 5.000 hectares no bioma Amazônia. Modelagem conservadora indica emissão de mais de 255 unidades de remoção de emissão por hectare ao longo do ciclo de vida do projeto, oferecendo uma base durável para fornecimento de alta integridade.",
        partners: [],
      },
      {
        name: "Serra do Sudeste Landscape Restoration",
        tagline: "Recuperação de matas ciliares e Mata Atlântica",
        region: "Rio Grande do Sul · Mata Atlântica / Pampa",
        type: "Restauração Ciliar",
        ha: null,
        haLabel: "área do projeto",
        tCO2: null,
        tCO2Label: "estimativa de remoção",
        certification: null,
        status: "Em desenvolvimento",
        description:
          "Restauração de matas ciliares e áreas suscetíveis à erosão na zona de transição entre a Mata Atlântica e o bioma Pampa, respeitando os campos nativos e gerando remoções de emissão mensuráveis.",
        partners: ["Proprietários de terra locais", "Parceiros municipais"],
      },
      {
        name: "Abaetetuba Distributed Biochar",
        tagline: "Produção distribuída de biochar com agricultores locais",
        region: "Abaetetuba · Pará",
        type: "Biochar",
        areaLabel: "Escala",
        ha: "200 fornos",
        haLabel: "escala",
        tCO2: null,
        tCO2Label: "estimativa de remoção",
        certification: "ISOMETRIC",
        status: "Em desenvolvimento",
        description:
          "Um programa distribuído de biochar em Abaetetuba, convertendo resíduos de biomassa local em remoções de carbono duráveis por meio de uma rede de fornos de pequena escala operados com agricultores locais.",
        partners: [],
      },
      {
        name: "Suledo Community ARR Project",
        tagline: "Restauração de mata Miombo com comunidades locais",
        region: "Distrito de Kiteto · Floresta Miombo",
        type: "ARR",
        ha: "10.000 ha",
        haLabel: "área do projeto",
        tCO2: "2,45M tCO2e",
        tCO2Label: "estimativa de remoção",
        certification: "Verra VCS&CCB",
        status: "Em desenvolvimento",
        description:
          "Restauração de floresta Miombo co-desenhada com comunidades Maasai locais e realizada com a Nature Restoration Company (NRC). O cultivo em aleias apoia a renda local enquanto o projeto restaura a mata e gera remoções de emissão duráveis.",
        partners: ["Nature Restoration Company (NRC)", "Comunidades locais"],
      },
    ] satisfies ProjectText[],
    develop: {
      eyebrow: "Desenvolva conosco",
      heading: "Tem terra ou biomassa e uma ideia de projeto de ARR ou biochar?",
      lead: "Trabalhamos com proprietários de terra, comunidades e organizações para desenvolver a próxima geração de projetos de remoção de emissão de base natural e alta integridade.",
      start: "Conheça nossos serviços de assessoria",
      talk: "Fale conosco",
    },
  },
};

export default function ProjectsContent() {
  const { locale } = useLanguage();
  const t = content[locale];
  const projects = projectsStatic.map((s, i) => ({ ...s, ...t.projects[i] }));
  const haTotals = sumHectares(projects, locale);
  const tco2Totals = sumTco2(projects, locale);
  const heroStatValues = [
    String(PROJECT_COUNT),
    t.hero.stats[1].value,
    formatHectaresTotal(haTotals.total, haTotals.approximate, locale),
    formatTco2Total(tco2Totals.total, tco2Totals.approximate, locale),
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
          <Image
            src="/img/DSCF9818.JPG"
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
              {t.hero.eyebrow}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
              {t.hero.titleLine1}<br />
              <span className="text-accent">{t.hero.titleLine2}</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              {t.hero.lead}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {t.hero.stats.map((s, i) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">
                    {heroStatValues[i]}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div className="w-px h-10 bg-white/40" />
            <span className="text-[9px] text-white/60 uppercase tracking-[0.2em] rotate-90 origin-center translate-y-3">{t.hero.scroll}</span>
          </div>
        </section>

        {/* ── PORTFOLIO MAP ──────────────────────────────────── */}
        <section className="relative overflow-hidden bg-forest-deeper py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{t.map.eyebrow}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t.map.heading}</h2>
            </div>
            <ProjectMap
              markers={projects.map((p) => ({ name: p.name, place: p.region, lat: p.lat, lon: p.lon, kind: p.kind }))}
              resetLabel={t.map.resetLabel}
              legend={{ biochar: t.map.legendBiochar, arr: t.map.legendArr }}
            />
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

              {/* Gradient: dark on the panel side. Text always sits on the
                  left on mobile, so the scrim always darkens the left there
                  too; it only moves to the right (for "right" projects) from
                  sm and up, matching the alternating layout at that size. */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent ${
                  isLeft ? "" : "sm:bg-gradient-to-l"
                }`}
              />

              {/* Project number — big faded design element */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 select-none pointer-events-none font-extrabold text-[160px] leading-none text-white/5 right-4 ${
                  isLeft ? "sm:left-4 sm:right-auto" : ""
                }`}
              >
                {p.num}
              </div>

              {/* Content panel — always left-aligned on mobile; alternates
                  left/right from sm and up. */}
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`w-full max-w-7xl mx-auto px-6 flex justify-start ${
                    isLeft ? "" : "sm:justify-end"
                  }`}
                >
                  <div className="max-w-md w-full">
                    {/* Top meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-white/40">{p.num}</span>
                      <div className="h-px w-8 bg-white/20" />
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${statusStyle[p.statusKey] ?? "bg-white/10 text-white/60 border-white/20"}`}
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
                        <div className="text-xl font-bold text-white">
                          {p.ha ?? <Tbc>{p.haLabel}</Tbc>}
                        </div>
                        <div className="text-[10px] text-white/40 mt-0.5">{p.areaLabel ?? t.projectAreaLabel}</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-accent">
                          {p.tCO2 ?? <Tbc>{p.tCO2Label}</Tbc>}
                        </div>
                        <div className="text-[10px] text-white/40 mt-0.5">{t.emissionRemovalsLabel}</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">
                          {p.certification ?? <Tbc>{t.certificationLabel}</Tbc>}
                        </div>
                        <div className="text-[10px] text-white/40 mt-0.5">{t.certificationLabel}</div>
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
                      {t.enquireCta}
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
              {t.develop.eyebrow}
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              {t.develop.heading}
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.develop.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/advisory"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors"
              >
                {t.develop.start} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
              >
                {t.develop.talk}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
