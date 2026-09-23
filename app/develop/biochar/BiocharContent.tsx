"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, Handshake, Factory, Recycle, Sprout, Search, PencilRuler, Gauge, ChevronDown, CheckCircle2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [Search, PencilRuler, Factory, Gauge];
const residueValueIcons = [TrendingUp, Handshake, Recycle];

// Relative positions (0–100) within the simplified Brazil silhouette below,
// approximated from each location's real latitude/longitude.
const mapMarkers = [
  { x: 64.4, y: 17.9 }, // Abaetetuba, Pará
  { x: 77.1, y: 64.6 }, // Minas Gerais
  { x: 70.2, y: 73.9 }, // São Paulo state
];

// Simplified low-poly outline of Brazil, normalised to a 0–100 viewBox.
const brazilOutline =
  "57.7,2 65.4,16.1 76.2,19.9 91,23 100,31.5 91,46.8 79,72.5 65.4,84 52.8,99.9 49.7,78.9 42.1,62.2 25.9,36.1 35.9,21.2 17.9,8.4 35.9,3.3";

const content = {
  en: {
    hero: {
      eyebrow: "Co-developing industrial biochar",
      h1: "Turn your biomass into durable carbon removal.",
      lead: "Biochar locks biomass carbon into a stable form with permanence measured in centuries. We co-develop industrial biochar projects with agribusinesses and industrial partners who already hold substantial biomass residues — you bring the feedstock; we bring the development, financing, certification, and buyers.",
      ctaPartner: "Partner with us",
      ctaBuy: "Secure biochar removals",
      ctaInvest: "Explore the Biochar Fund",
      mapHeading: "TGB's biochar projects",
      mapCta: "Explore our projects",
      mapLocations: [
        { name: "Abaetetuba distributed biochar", place: "Abaetetuba, Brazil" },
        { name: "Industrial coffee biochar", place: "Minas Gerais, Brazil" },
        { name: "Industrial eucalyptus residue project", place: "São Paulo state, Brazil" },
      ],
    },
    challenges: {
      eyebrow: "Why biochar",
      heading: "We develop biochar to tackle 3 pressing challenges",
      cards: [
        {
          title: "Fighting climate change",
          items: [
            "High-permanence, measurable, and certified carbon removal",
            "Avoided greenhouse gas emissions as co-benefits",
          ],
        },
        {
          title: "Enabling sustainable agriculture",
          items: [
            "Significant increase in crop yield",
            "Lower use of fertilisers",
            "Sustainable disposal of crop residues",
          ],
        },
        {
          title: "Fostering rural development",
          items: [
            "Increased income for farmers",
            "Creation of well-paid, industrial jobs",
            "Co-generation of renewable energy",
          ],
        },
      ],
    },
    residueValue: {
      eyebrow: "Why biochar",
      heading: "Residue is worth more than disposal.",
      cards: [
        {
          title: "A cost becomes revenue",
          desc: "Residue that carries a disposal cost becomes a carbon removal asset with a market price.",
        },
        {
          title: "Co-investment optional",
          desc: "The Green Branch finances the facility; co-investing partners earn a larger share of returns.",
        },
        {
          title: "Biochar comes back",
          desc: "Returned for on farm use or commercial sale, improving soil health and water retention.",
        },
      ],
    },
    process: {
      eyebrow: "Our process",
      heading: "From feedstock to issued removals — the same discipline as our forestry portfolio.",
      stepPrefix: "STEP 0",
      steps: [
        { name: "Feasibility", desc: "We confirm feedstock supply, facility economics, carbon modelling, and offtake demand before capital is committed." },
        { name: "Design", desc: "We design the facility, supply chain, and certification pathway around buyer, investor, and diligence requirements." },
        { name: "Deliver", desc: "We finance, build or retrofit, register, validate, commission, and reach first production — then commercialise the removals." },
        { name: "Monitor", desc: "Continuous production and chain-of-custody monitoring via GreenBranch OS, through verification and issuance." },
      ],
    },
    bring: {
      eyebrow: "Who we co-develop with",
      heading: "We partner with the businesses that already hold the biomass.",
      lead: "Agribusinesses, processors, mills and industrial operators with a steady stream of residue. We turn a cost into a durable carbon removal asset.",
      tgbTitle: "What we bring",
      tgbItems: [
        { label: "Capital", desc: "Development funding deployed against milestones." },
        { label: "Technology", desc: "Proven pyrolysis, specified and built for your feedstock." },
        { label: "Certification", desc: "Methodology, registry, validation and verification." },
        { label: "MRV", desc: "Continuous production and chain of custody monitoring via GreenBranch OS." },
        { label: "Buyers", desc: "Spot, forward and long term offtake through our buyer network." },
      ],
      partnerTitle: "What you bring",
      partnerItems: [
        { label: "Biomass residue", desc: "A substantial, consistent stream, currently burned, landfilled or left to decay." },
        { label: "A site", desc: "Space and an operation that generates residue year round." },
        { label: "A long term view", desc: "Durable removals are built over the life of the project." },
        { label: "Agronomic upside", desc: "Soil health and water retention where the biochar is applied." },
      ],
      franchiseTitle: "A co-development model, not a franchise.",
      franchiseBody: "We do not sell you a unit and walk away. We invest, structure, certify and commercialise each project as a bespoke partnership. We succeed when your project succeeds.",
    },
    faq: {
      eyebrow: "Frequently asked",
      heading: "What a feedstock partner needs to know.",
      minVolumePrefix: "Minimum volume:",
      moistureIntro: "Moisture thresholds vary by feedstock:",
      items: [
        {
          q: "What are your feedstock specifications and moisture requirements?",
          minVolumeLabel: "confirm minimum, e.g. 1,000",
          volumeSuffix: "tonnes per year",
          feedstock: [
            ["Palm kernel shells", "moisture below 15%"],
            ["Cashew nut shells", "moisture below 15%"],
            ["Sawdust", "moisture below 20%"],
          ] as [string, string][],
          closing: "If your material runs wetter than this, we can usually accommodate it with a short pre-drying step — talk to us.",
          tbc: "confirm accepted feedstock list & thresholds for Brazil operations",
        },
        {
          q: "How does the co-development partnership work?",
          body: "We co-develop the project with you. You provide the biomass residue and a site; we bring development capital, proven technology, certification, MRV via GreenBranch OS, and commercialisation to our buyer network. We invest alongside you and share the upside — a partnership, not a franchise.",
          tbc: "commercial terms and revenue share are structured per project — confirm the model to describe here",
        },
        {
          q: "Do you partner with every applicant?",
          body: "No. We partner selectively, based on feedstock type, annual volume, and carbon economics — the same way an investor backs a project. Feasibility comes first, and projects advance only when the case is proven.",
        },
        {
          q: "What technology do you use?",
          body: "Continuous-feed industrial pyrolysers operating at 450–600°C in a low-oxygen environment — no open flame and no smoke. The process converts biomass residue into a stable carbon that remains locked away for centuries.",
        },
        {
          q: "What space and utilities do you need on site?",
          body: "Approximately 10m × 10m of covered space near your processing line, plus access to three-phase power (roughly 5–7 kW).",
          tbc: "confirm footprint & utility requirements for TGB equipment",
        },
      ],
    },
    cta: {
      heading: "Hold substantial biomass? Let us build on it.",
      lead: "If your operation generates biomass residue at scale, we would like to explore co-developing a biochar project with you.",
      ctaPartner: "Partner with us",
      ctaBuy: "Secure biochar removals",
    },
  },
  pt: {
    hero: {
      eyebrow: "Co-desenvolvendo biochar industrial",
      h1: "Transforme sua biomassa em remoção de carbono durável.",
      lead: "O biochar retém o carbono da biomassa em uma forma estável, com permanência medida em séculos. Co-desenvolvemos projetos industriais de biochar com agronegócios e parceiros industriais que já possuem resíduos de biomassa substanciais — você traz a matéria-prima; nós trazemos o desenvolvimento, o financiamento, a certificação e os compradores.",
      ctaPartner: "Seja nosso parceiro",
      ctaBuy: "Garanta remoções de biochar",
      ctaInvest: "Conheça o Biochar Fund",
      mapHeading: "Projetos de biochar da TGB",
      mapCta: "Explore nossos projetos",
      mapLocations: [
        { name: "Biochar distribuído de Abaetetuba", place: "Abaetetuba, Brasil" },
        { name: "Biochar industrial de café", place: "Minas Gerais, Brasil" },
        { name: "Projeto industrial de resíduos de eucalipto", place: "Estado de São Paulo, Brasil" },
      ],
    },
    challenges: {
      eyebrow: "Por que biochar",
      heading: "Desenvolvemos biochar para enfrentar 3 desafios urgentes",
      cards: [
        {
          title: "Combate às mudanças climáticas",
          items: [
            "Remoção de carbono de alta permanência, mensurável e certificada",
            "Emissões de gases de efeito estufa evitadas como cobenefício",
          ],
        },
        {
          title: "Viabilização da agricultura sustentável",
          items: [
            "Aumento significativo da produtividade agrícola",
            "Menor uso de fertilizantes",
            "Descarte sustentável de resíduos agrícolas",
          ],
        },
        {
          title: "Fomento ao desenvolvimento rural",
          items: [
            "Aumento de renda para agricultores",
            "Criação de empregos industriais bem remunerados",
            "Cogeração de energia renovável",
          ],
        },
      ],
    },
    residueValue: {
      eyebrow: "Por que biochar",
      heading: "O resíduo vale mais do que o descarte.",
      cards: [
        {
          title: "Um custo vira receita",
          desc: "O resíduo que hoje gera custo de descarte se torna um ativo de remoção de carbono com preço de mercado.",
        },
        {
          title: "Coinvestimento opcional",
          desc: "A Green Branch financia a planta; parceiros que coinvestem ganham uma parcela maior dos retornos.",
        },
        {
          title: "O biochar retorna",
          desc: "Devolvido para uso na propriedade ou venda comercial, melhorando a saúde do solo e a retenção de água.",
        },
      ],
    },
    process: {
      eyebrow: "Nosso processo",
      heading: "Da matéria-prima às remoções emitidas — a mesma disciplina do nosso portfólio florestal.",
      stepPrefix: "ETAPA 0",
      steps: [
        { name: "Viabilidade", desc: "Confirmamos o fornecimento de matéria-prima, a economia da planta, a modelagem de carbono e a demanda de offtake antes de comprometer capital." },
        { name: "Projeto", desc: "Projetamos a planta, a cadeia de suprimentos e o caminho de certificação de acordo com os requisitos de compradores, investidores e due diligence." },
        { name: "Entrega", desc: "Financiamos, construímos ou reformamos, registramos, validamos, colocamos em operação e alcançamos a primeira produção — depois comercializamos as remoções." },
        { name: "Monitoramento", desc: "Monitoramento contínuo da produção e da cadeia de custódia via GreenBranch OS, até a verificação e emissão." },
      ],
    },
    bring: {
      eyebrow: "Com quem co-desenvolvemos",
      heading: "Fazemos parceria com empresas que já possuem a biomassa.",
      lead: "Agronegócios, processadoras, usinas e operadores industriais com um fluxo constante de resíduo. Transformamos um custo em um ativo durável de remoção de carbono.",
      tgbTitle: "O que nós trazemos",
      tgbItems: [
        { label: "Capital", desc: "Financiamento de desenvolvimento alocado por marcos." },
        { label: "Tecnologia", desc: "Pirólise comprovada, especificada e construída para sua matéria-prima." },
        { label: "Certificação", desc: "Metodologia, registro, validação e verificação." },
        { label: "MRV", desc: "Monitoramento contínuo da produção e da cadeia de custódia via GreenBranch OS." },
        { label: "Compradores", desc: "Spot, forward e offtake de longo prazo através da nossa rede de compradores." },
      ],
      partnerTitle: "O que você traz",
      partnerItems: [
        { label: "Resíduo de biomassa", desc: "Um fluxo substancial e constante, atualmente queimado, aterrado ou deixado para decompor." },
        { label: "Um local", desc: "Espaço e uma operação que gera resíduo o ano todo." },
        { label: "Uma visão de longo prazo", desc: "Remoções duráveis são construídas ao longo da vida do projeto." },
        { label: "Ganho agronômico", desc: "Saúde do solo e retenção de água onde o biochar é aplicado." },
      ],
      franchiseTitle: "Um modelo de co-desenvolvimento, não uma franquia.",
      franchiseBody: "Não vendemos uma unidade e vamos embora. Investimos, estruturamos, certificamos e comercializamos cada projeto como uma parceria sob medida. Vencemos quando seu projeto vence.",
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      heading: "O que um parceiro fornecedor de matéria-prima precisa saber.",
      minVolumePrefix: "Volume mínimo:",
      moistureIntro: "Os limites de umidade variam por matéria-prima:",
      items: [
        {
          q: "Quais são as especificações de matéria-prima e os requisitos de umidade?",
          minVolumeLabel: "confirmar mínimo, ex.: 1.000",
          volumeSuffix: "toneladas por ano",
          feedstock: [
            ["Cascas de palmiste", "umidade abaixo de 15%"],
            ["Cascas de castanha de caju", "umidade abaixo de 15%"],
            ["Serragem", "umidade abaixo de 20%"],
          ] as [string, string][],
          closing: "Se seu material apresentar umidade acima disso, geralmente conseguimos adequá-lo com uma etapa curta de pré-secagem — fale conosco.",
          tbc: "confirmar lista de matérias-primas aceitas e limites para operações no Brasil",
        },
        {
          q: "Como funciona a parceria de co-desenvolvimento?",
          body: "Co-desenvolvemos o projeto com você. Você fornece o resíduo de biomassa e o local; nós trazemos capital de desenvolvimento, tecnologia comprovada, certificação, MRV via GreenBranch OS e comercialização para nossa rede de compradores. Investimos ao seu lado e compartilhamos os ganhos — uma parceria, não uma franquia.",
          tbc: "termos comerciais e divisão de receita são estruturados por projeto — confirmar o modelo a descrever aqui",
        },
        {
          q: "Vocês fazem parceria com todos os candidatos?",
          body: "Não. Fazemos parcerias de forma seletiva, com base no tipo de matéria-prima, volume anual e economia de carbono — da mesma forma que um investidor apoia um projeto. A viabilidade vem primeiro, e os projetos avançam apenas quando o caso está comprovado.",
        },
        {
          q: "Que tecnologia vocês utilizam?",
          body: "Pirolisadores industriais de alimentação contínua operando a 450–600°C em ambiente com baixo teor de oxigênio — sem chama aberta e sem fumaça. O processo converte o resíduo de biomassa em um carbono estável que permanece retido por séculos.",
        },
        {
          q: "Que espaço e utilidades vocês precisam no local?",
          body: "Aproximadamente 10m × 10m de espaço coberto próximo à sua linha de processamento, além de acesso a energia trifásica (aproximadamente 5–7 kW).",
          tbc: "confirmar espaço e requisitos de utilidades para o equipamento da TGB",
        },
      ],
    },
    cta: {
      heading: "Tem biomassa em volume relevante? Vamos construir algo com ela.",
      lead: "Se sua operação gera resíduo de biomassa em escala, gostaríamos de explorar o co-desenvolvimento de um projeto de biochar com você.",
      ctaPartner: "Seja nosso parceiro",
      ctaBuy: "Garanta remoções de biochar",
    },
  },
};

export default function BiocharContent() {
  const { locale } = useLanguage();
  const t = content[locale];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative bg-forest-deeper py-28 overflow-hidden">
          <Image src="/img/DSCF0278.JPG" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-forest-deeper/60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">{t.hero.eyebrow}</div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{t.hero.h1}</h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {t.hero.lead}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                    {t.hero.ctaPartner} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                    {t.hero.ctaBuy}
                  </Link>
                  <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                    {t.hero.ctaInvest}
                  </Link>
                </div>
              </div>

              {/* Project map */}
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6">
                <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">{t.hero.mapHeading}</div>
                <div className="relative aspect-square w-full">
                  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                    <polygon
                      points={brazilOutline}
                      className="fill-white/10 stroke-white/25"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                    {mapMarkers.map((m, i) => (
                      <g key={i}>
                        <circle cx={m.x} cy={m.y} r="4.5" className="fill-accent/20" />
                        <circle cx={m.x} cy={m.y} r="1.8" className="fill-accent" />
                      </g>
                    ))}
                  </svg>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {t.hero.mapLocations.map((loc) => (
                    <li key={loc.name} className="flex items-start gap-2.5 text-xs text-white/60 leading-relaxed">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span><span className="text-white font-medium">{loc.name}</span> — {loc.place}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/projects" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
                  {t.hero.mapCta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why biochar — 3 pressing challenges */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.challenges.eyebrow}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">{t.challenges.heading}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.challenges.cards.map((c, i) => (
                <div key={c.title} className="rounded-2xl bg-white border border-border shadow-sm p-7">
                  <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center text-lg font-extrabold mb-5">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-4">{c.title}</h3>
                  <ul className="space-y-3">
                    {c.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why biochar — residue value */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.residueValue.eyebrow}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">{t.residueValue.heading}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.residueValue.cards.map((c, i) => {
                const Icon = residueValueIcons[i];
                return (
                  <div key={c.title} className="rounded-2xl bg-white border border-border p-7">
                    <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{c.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What we bring / What you bring */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-widest mb-3">
              <Handshake className="w-4 h-4" /> {t.bring.eyebrow}
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4 max-w-3xl">{t.bring.heading}</h2>
            <p className="text-ink-soft leading-relaxed mb-12 max-w-3xl">
              {t.bring.lead}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-border p-7">
                <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-4">{t.bring.tgbTitle}</h3>
                <ul className="space-y-3">
                  {t.bring.tgbItems.map((b) => (
                    <li key={b.label} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span><strong className="text-ink">{b.label}.</strong> {b.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-border p-7">
                <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center mb-4">
                  <Recycle className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-4">{t.bring.partnerTitle}</h3>
                <ul className="space-y-3">
                  {t.bring.partnerItems.map((b) => (
                    <li key={b.label} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span><strong className="text-ink">{b.label}.</strong> {b.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Co-developer, not a franchise */}
            <div className="mt-6 rounded-2xl bg-forest-deeper p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Sprout className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{t.bring.franchiseTitle}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {t.bring.franchiseBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process — visual stepper */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.process.eyebrow}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">{t.process.heading}</h2>
            </div>

            <div className="relative grid gap-10 md:grid-cols-4">
              {/* connecting line (desktop) */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-forest/20 via-forest/40 to-forest/20" />
              {t.process.steps.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <div key={s.name} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-forest text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="mt-5 text-xs font-bold text-accent-dark tracking-widest">{t.process.stepPrefix}{i + 1}</div>
                    <h3 className="mt-1 text-lg font-bold text-ink">{s.name}</h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.faq.eyebrow}</div>
            <h2 className="text-3xl font-bold text-navy mb-10">{t.faq.heading}</h2>
            <div className="space-y-3">
              {t.faq.items.map((f, i) => (
                // Key on index, not the translated question text — keying on f.q remounted
                // (and silently collapsed) every open <details> when switching locale.
                <details key={i} className="group rounded-2xl border border-border bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 font-bold text-navy list-none [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span className="faq-chevron inline-flex shrink-0 text-forest">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1 text-sm text-ink-soft leading-relaxed">
                    {i === 0 ? (
                      <>
                        <p className="mb-3">
                          {"minVolumeLabel" in f && (
                            <>
                              {t.faq.minVolumePrefix} <strong className="text-ink"><Tbc>{f.minVolumeLabel}</Tbc> {f.volumeSuffix}</strong>.
                            </>
                          )}
                          {" "}{t.faq.moistureIntro}
                        </p>
                        <ul className="space-y-2 mb-3">
                          {"feedstock" in f && f.feedstock?.map(([name, thr]) => (
                            <li key={name} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                              <span><strong className="text-ink">{name}</strong> — {thr}</span>
                            </li>
                          ))}
                        </ul>
                        <p>{"closing" in f ? f.closing : null}</p>
                        {"tbc" in f && f.tbc && <p className="mt-3 text-xs text-ink/50"><Tbc>{f.tbc}</Tbc></p>}
                      </>
                    ) : (
                      <>
                        <p className={"tbc" in f && f.tbc ? "mb-2" : undefined}>{"body" in f ? f.body : null}</p>
                        {"tbc" in f && f.tbc && <p className="text-xs text-ink/50"><Tbc>{f.tbc}</Tbc></p>}
                      </>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
          <style>{`.faq-chevron { transition: rotate 300ms; } details[open] .faq-chevron { rotate: 180deg; }`}</style>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">{t.cta.heading}</h2>
            <p className="text-white/80 mb-8">{t.cta.lead}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                {t.cta.ctaPartner} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                {t.cta.ctaBuy}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
