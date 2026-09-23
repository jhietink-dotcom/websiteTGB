"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardMockup } from "@/components/OSTGBMockup";
import { CheckCircle2, Shield, Globe, BarChart3, Database, Layers, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const overviewIcons = [Layers, Database, Globe, Lock];
const whyIcons = [Shield, BarChart3, Globe, Lock];

const moduleMeta = [
  { id: "development", number: "01", image: "/img/os-development.png", w: 752, h: 321 },
  { id: "dashboard", number: "02", image: "/img/os-dashboard-hd.png", w: 1885, h: 892 },
];

const content = {
  en: {
    hero: {
      eyebrow: "Our Tech",
      heading: "One platform from origination to issuance.",
      lead: "GreenBranch OS is our proprietary platform, unifying project development and commercialisation in a single environment — so we move faster and give buyers and investors direct visibility into the work.",
      ctaSecondary: "Access as a buyer",
    },
    overview: [
      { label: "2 integrated modules", desc: "Development and Investor & buyer dashboard" },
      { label: "Single source of truth", desc: "All project data in one environment" },
      { label: "Origination to issuance", desc: "One workflow across the full lifecycle" },
      { label: "Role-based access", desc: "Teams, partners, and buyers" },
    ],
    moduleLabel: "GreenBranch OS Module",
    modules: [
      {
        title: "Development",
        tagline: "From first screening to bankable project.",
        description:
          "Project opportunities go through GreenBranch OS from first screening onward and are assessed through a structured checklist, scored across 14 quality criteria, and developed through our stage-gate process with standardised templates. One environment, full audit trail, no information lost between phases.",
        features: [
          "Structured screening questionnaire for every incoming opportunity",
          "Quality score assessed across 14 criteria",
          "Standardised stage-gate process from screening to MRV",
          "Carbon certification compliant templates for each phase and deliverable",
          "Full audit trail with no information lost between phases",
        ],
      },
      {
        title: "Investor & buyer dashboard",
        tagline: "A live data room for every buyer.",
        description:
          "An interactive dashboard functions as a real-time data room: structured access to documentation, performance metrics, and monitoring data for each project, with the ability to request further information within the platform. Transparency is not a report we send once a year — it is standing access.",
        features: [
          "Real-time data room for each project",
          "Structured access to project documentation",
          "Performance metrics and monitoring data",
          "Requests for further information handled within the platform",
          "Standing access rather than a once-a-year report",
          "A single environment for buyers and investors",
        ],
      },
    ],
    why: {
      eyebrow: "Why we built it",
      heading: "Integrity at every layer",
      p1: "The credibility problem in the carbon market stems from opacity. Projects make claims; verification is expensive and infrequent; buyers cannot see what they are buying. GreenBranch OS is our answer to that.",
      p2: "By managing the entire development lifecycle — and giving partners, buyers, and investors standing access to the data — we create a level of traceability that doesn't exist elsewhere. Every project in our portfolio is logged, timestamped, and open to audit, end to end.",
      features: [
        { label: "Auditable by design", desc: "Every action logged and timestamped" },
        { label: "Data-driven decisions", desc: "Stage gates backed by verified data" },
        { label: "Scalable infrastructure", desc: "Built to manage a growing portfolio" },
        { label: "Investor grade", desc: "Documentation ready for institutional buyers" },
      ],
    },
    cta: {
      heading: "See GreenBranch OS in action",
      lead: "We are happy to walk you through the platform.",
      secondary: "Access as a buyer",
    },
  },
  pt: {
    hero: {
      eyebrow: "Nossa Tecnologia",
      heading: "Uma única plataforma da originação à emissão.",
      lead: "A GreenBranch OS é nossa plataforma proprietária, que unifica o desenvolvimento de projetos e a comercialização em um único ambiente — para avançarmos mais rápido e dar a compradores e investidores visibilidade direta do trabalho.",
      ctaSecondary: "Acessar como comprador",
    },
    overview: [
      { label: "2 módulos integrados", desc: "Desenvolvimento e Painel de investidores e compradores" },
      { label: "Fonte única de verdade", desc: "Todos os dados do projeto em um único ambiente" },
      { label: "Da originação à emissão", desc: "Um único fluxo de trabalho em todo o ciclo de vida" },
      { label: "Acesso baseado em função", desc: "Equipes, parceiros e compradores" },
    ],
    moduleLabel: "Módulo da GreenBranch OS",
    modules: [
      {
        title: "Desenvolvimento",
        tagline: "Da triagem inicial ao projeto bancável.",
        description:
          "As oportunidades de projeto passam pela GreenBranch OS desde a triagem inicial e são avaliadas por meio de um checklist estruturado, pontuadas em 14 critérios de qualidade e desenvolvidas pelo nosso processo stage-gate com modelos padronizados. Um único ambiente, trilha de auditoria completa, nenhuma informação perdida entre as fases.",
        features: [
          "Questionário estruturado de triagem para cada nova oportunidade",
          "Pontuação de qualidade avaliada em 14 critérios",
          "Processo stage-gate padronizado, da triagem ao MRV",
          "Modelos em conformidade com certificação de carbono para cada fase e entregável",
          "Trilha de auditoria completa, sem perda de informação entre as fases",
        ],
      },
      {
        title: "Painel de investidores e compradores",
        tagline: "Uma sala de dados viva para cada comprador.",
        description:
          "Um painel interativo funciona como uma sala de dados em tempo real: acesso estruturado à documentação, métricas de desempenho e dados de monitoramento de cada projeto, com a possibilidade de solicitar mais informações dentro da própria plataforma. Transparência não é um relatório que enviamos uma vez por ano — é acesso permanente.",
        features: [
          "Sala de dados em tempo real para cada projeto",
          "Acesso estruturado à documentação do projeto",
          "Métricas de desempenho e dados de monitoramento",
          "Solicitações de informações adicionais tratadas dentro da plataforma",
          "Acesso permanente em vez de um relatório anual",
          "Um único ambiente para compradores e investidores",
        ],
      },
    ],
    why: {
      eyebrow: "Por que a construímos",
      heading: "Integridade em cada camada",
      p1: "O problema de credibilidade no mercado de carbono vem da opacidade. Projetos fazem alegações; a verificação é cara e pouco frequente; os compradores não conseguem ver o que estão comprando. A GreenBranch OS é nossa resposta a isso.",
      p2: "Ao gerir todo o ciclo de vida do desenvolvimento — e dar a parceiros, compradores e investidores acesso permanente aos dados — criamos um nível de rastreabilidade que não existe em outro lugar. Cada projeto do nosso portfólio é registrado, com data e hora, e aberto à auditoria, do início ao fim.",
      features: [
        { label: "Auditável por padrão", desc: "Cada ação registrada com data e hora" },
        { label: "Decisões orientadas por dados", desc: "Etapas de decisão (stage gates) apoiadas por dados verificados" },
        { label: "Infraestrutura escalável", desc: "Construída para gerir um portfólio em crescimento" },
        { label: "Padrão institucional", desc: "Documentação pronta para compradores institucionais" },
      ],
    },
    cta: {
      heading: "Veja a GreenBranch OS em ação",
      lead: "Teremos prazer em apresentar a plataforma a você.",
      secondary: "Acessar como comprador",
    },
  },
};

export default function GreenBranchOSContent() {
  const { locale } = useLanguage();
  const t = content[locale];
  const modules = moduleMeta.map((m, i) => ({ ...m, ...t.modules[i] }));

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">{t.hero.eyebrow}</div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                {t.hero.heading}
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                {t.hero.lead}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform overview */}
        <section className="py-16 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.overview.map((f, i) => {
                const Icon = overviewIcons[i];
                return (
                  <div key={f.label} className="bg-white rounded-xl border border-border p-5 text-center">
                    <div className="w-10 h-10 bg-forest-muted rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <div className="text-sm font-bold text-ink mb-1">{f.label}</div>
                    <div className="text-xs text-ink-soft">{f.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Module deep-dives */}
        {modules.map((m, idx) => (
          <section key={m.id} id={m.id} className={`py-24 ${idx % 2 === 1 ? "bg-muted" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              {/* Content left on even, right on odd */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl font-extrabold text-forest/20">{m.number}</div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-xs font-semibold text-forest uppercase tracking-widest">{t.moduleLabel}</div>
                </div>
                <h2 className="text-3xl font-bold text-ink mb-1">{m.title}</h2>
                <p className="text-base font-semibold text-forest mb-5">{m.tagline}</p>
                <p className="text-ink-soft leading-relaxed mb-8">{m.description}</p>
                <ul className="space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                  {m.id === "development" ? (
                    <div className="p-4">
                      <DashboardMockup />
                    </div>
                  ) : (
                    <Image src={m.image} alt={`GreenBranch OS — ${m.title}`} width={m.w} height={m.h} className="w-full h-auto" sizes="(max-width: 1024px) 100vw, 50vw" />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why we built it */}
        <section className="py-20 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">{t.why.eyebrow}</div>
              <h2 className="text-3xl font-bold text-white mb-4">{t.why.heading}</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                {t.why.p1}
              </p>
              <p className="text-white/60 leading-relaxed">
                {t.why.p2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.why.features.map((f, i) => {
                const Icon = whyIcons[i];
                return (
                  <div key={f.label} className="p-4 rounded-xl bg-white/5">
                    <Icon className="w-5 h-5 text-accent mb-2" />
                    <div className="text-sm font-bold text-white mb-1">{f.label}</div>
                    <div className="text-xs text-white/50">{f.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-ink mb-4">{t.cta.heading}</h2>
            <p className="text-ink-soft mb-8">{t.cta.lead}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/buy-removals" className="px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">{t.cta.secondary}</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
