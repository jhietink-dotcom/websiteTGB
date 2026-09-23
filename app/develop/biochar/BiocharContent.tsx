"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificationBar from "@/components/CertificationBar";
import { ArrowRight, Handshake, Factory, Recycle, Sprout, Search, PencilRuler, Gauge, CheckCircle2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [Search, PencilRuler, Factory, Gauge];
const residueValueIcons = [TrendingUp, Handshake, Recycle];

const content = {
  en: {
    certLabel: "Certified under",
    hero: {
      eyebrow: "Co-developing industrial biochar",
      h1: "Turn your biomass into durable carbon removal.",
      lead: "Biochar locks biomass carbon into a stable form with permanence measured in centuries. We co-develop industrial biochar projects with agribusinesses and industrial partners who already hold substantial biomass residues — you bring the feedstock; we bring the development, financing, certification, and buyers.",
      ctaPartner: "Partner with us",
      ctaBuy: "Secure biochar removals",
      ctaInvest: "Explore the Biochar Fund",
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
    cta: {
      heading: "Hold substantial biomass? Let us build on it.",
      lead: "If your operation generates biomass residue at scale, we would like to explore co-developing a biochar project with you.",
      ctaPartner: "Partner with us",
      ctaBuy: "Secure biochar removals",
    },
  },
  pt: {
    certLabel: "Certificado sob",
    hero: {
      eyebrow: "Co-desenvolvendo biochar industrial",
      h1: "Transforme sua biomassa em remoção de carbono durável.",
      lead: "O biochar retém o carbono da biomassa em uma forma estável, com permanência medida em séculos. Co-desenvolvemos projetos industriais de biochar com agronegócios e parceiros industriais que já possuem resíduos de biomassa substanciais — você traz a matéria-prima; nós trazemos o desenvolvimento, o financiamento, a certificação e os compradores.",
      ctaPartner: "Seja nosso parceiro",
      ctaBuy: "Garanta remoções de biochar",
      ctaInvest: "Conheça o Biochar Fund",
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
          </div>
        </section>

        {/* Certifications */}
        <section className="py-10 bg-white border-b border-border">
          <CertificationBar label={t.certLabel} />
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
