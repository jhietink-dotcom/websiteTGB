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
        { label: "Technology", desc: "Proven pyrolysis, specified and built for your feedstock." },
        { label: "Certification", desc: "Methodology, registry, validation and verification." },
        { label: "MRV", desc: "Continuous production and chain of custody monitoring via GreenBranch OS." },
        { label: "Capital", desc: "Access to our buyers and investors network." },
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
    certLabel: "Certificado pelo padrão",
    hero: {
      eyebrow: "Codesenvolvimento de biochar industrial",
      h1: "Transforme sua biomassa em remoção de carbono duradoura.",
      lead: "O biochar armazena o carbono da biomassa em forma estável, por séculos. Codesenvolvemos projetos industriais de biochar com empresas do agronegócio e parceiros industriais que já têm grandes volumes de resíduos de biomassa — você entra com a matéria-prima; nós, com o desenvolvimento, o financiamento, a certificação e os compradores.",
      ctaPartner: "Seja nosso parceiro",
      ctaBuy: "Compre créditos de biochar",
      ctaInvest: "Conheça o Biochar Fund",
    },
    challenges: {
      eyebrow: "Por que biochar",
      heading: "Desenvolvemos biochar para enfrentar três desafios urgentes",
      cards: [
        {
          title: "Combate às mudanças climáticas",
          items: [
            "Remoção de carbono de alta permanência, mensurável e certificada",
            "Redução de emissões de gases de efeito estufa como benefício adicional",
          ],
        },
        {
          title: "Apoio à agricultura sustentável",
          items: [
            "Aumento significativo da produtividade agrícola",
            "Menor uso de fertilizantes",
            "Destinação sustentável de resíduos agrícolas",
          ],
        },
        {
          title: "Fomento ao desenvolvimento rural",
          items: [
            "Mais renda para os agricultores",
            "Criação de empregos industriais bem remunerados",
            "Cogeração de energia renovável",
          ],
        },
      ],
    },
    residueValue: {
      eyebrow: "Por que biochar",
      heading: "O resíduo vale mais do que o custo de descartá-lo.",
      cards: [
        {
          title: "O custo vira receita",
          desc: "O resíduo que hoje custa dinheiro para descartar passa a gerar créditos de remoção de carbono com valor de mercado.",
        },
        {
          title: "Coinvestimento opcional",
          desc: "A Green Branch financia a usina; parceiros que coinvestem recebem uma parte maior dos retornos.",
        },
        {
          title: "O biochar volta para você",
          desc: "Pode ser usado na sua propriedade ou vendido, melhorando a saúde do solo e a retenção de água.",
        },
      ],
    },
    process: {
      eyebrow: "Nosso processo",
      heading: "Da matéria-prima aos créditos emitidos — com o mesmo rigor do nosso portfólio florestal.",
      stepPrefix: "ETAPA 0",
      steps: [
        { name: "Viabilidade", desc: "Antes de investir, confirmamos o fornecimento de matéria-prima, a viabilidade econômica da usina, a modelagem de carbono e a demanda de compradores (offtake)." },
        { name: "Projeto", desc: "Projetamos a usina, a cadeia de fornecimento e o caminho até a certificação de acordo com as exigências de compradores, investidores e da due diligence." },
        { name: "Entrega", desc: "Financiamos, construímos ou adaptamos a usina, fazemos o registro e a validação, colocamos tudo em operação até a primeira produção — e depois vendemos os créditos de remoção." },
        { name: "Monitoramento", desc: "Monitoramento contínuo da produção e da cadeia de custódia pelo GreenBranch OS, até a verificação e emissão." },
      ],
    },
    bring: {
      eyebrow: "Com quem codesenvolvemos",
      heading: "Somos parceiros de empresas que já têm a biomassa.",
      lead: "Empresas do agronegócio, processadoras, usinas e indústrias que geram resíduos de forma constante. Transformamos esse custo em um ativo duradouro de remoção de carbono.",
      tgbTitle: "O que a Green Branch oferece",
      tgbItems: [
        { label: "Tecnologia", desc: "Tecnologia de pirólise comprovada, dimensionada e construída para a sua matéria-prima." },
        { label: "Certificação", desc: "Metodologia, registro, validação e verificação." },
        { label: "MRV", desc: "Monitoramento contínuo da produção e da cadeia de custódia pelo GreenBranch OS." },
        { label: "Capital", desc: "Acesso à nossa rede de compradores e investidores." },
      ],
      partnerTitle: "O que você oferece",
      partnerItems: [
        { label: "Resíduo de biomassa", desc: "Um volume grande e constante, que hoje é queimado, enviado para aterro ou deixado para se decompor." },
        { label: "Um local", desc: "Espaço físico e uma operação que gera resíduos o ano todo." },
        { label: "Uma visão de longo prazo", desc: "Remoções de carbono duradouras se constroem ao longo de toda a vida do projeto." },
        { label: "Ganho agronômico", desc: "Saúde do solo e retenção de água onde o biochar é aplicado." },
      ],
      franchiseTitle: "Um modelo de codesenvolvimento, não uma franquia.",
      franchiseBody: "Não vendemos um equipamento e vamos embora. Investimos, estruturamos, certificamos e comercializamos cada projeto como uma parceria sob medida. Nós só ganhamos quando o seu projeto dá certo.",
    },
    cta: {
      heading: "Tem biomassa em grande volume? Vamos transformá-la em valor.",
      lead: "Se a sua operação gera resíduos de biomassa em grande escala, queremos conversar sobre o codesenvolvimento de um projeto de biochar com você.",
      ctaPartner: "Seja nosso parceiro",
      ctaBuy: "Compre créditos de biochar",
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
          <Image src="/img/biochar-hero.jpg" alt="" fill priority className="object-cover opacity-55" />
          <div className="absolute inset-0 bg-forest-deeper/40" />
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
