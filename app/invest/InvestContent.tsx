"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { InvestorGate } from "@/components/InvestorGate";
import { ArrowRight, CheckCircle2, TreePine, Factory, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { PROJECT_COUNT } from "@/lib/projects";

// Spelled-out project count, derived from the shared project list so this
// page stays in sync with the Projects and Home pages.
const countWord = {
  en: ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"][PROJECT_COUNT] ?? String(PROJECT_COUNT),
  pt: ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"][PROJECT_COUNT] ?? String(PROJECT_COUNT),
};

const content = {
  en: {
    hero: {
      eyebrow: "Invest",
      h1: "Invest where removals begin.",
      lead: "The Green Branch structures investment products at the foundation of the removals market: the land that grows the forests, and the facilities that produce durable carbon. Two products, one development discipline.",
    },
    landFund: {
      eyebrow: "Product 1 — Land Fund",
      heading: "Own the land. Grow the forest. Share in the removals.",
      lead: "Invest from €100,000 in land acquisition for large-scale reforestation in Brazil — a real asset with an emission removal stream on top.",
      points: [
        { label: "Underlying asset", value: "Rural land in established restoration regions of Brazil." },
        { label: "Return drivers", value: "Land appreciation and long-term emission removal revenues under offtake agreements." },
        { label: "Risk management", value: "Staged capital deployment through our stage-gate process; conservative carbon modelling with explicit risk discounts; certified methodologies and independent ratings." },
      ],
      structureLabel: "Structure",
      structureValue: "€100,000 minimum ticket; participation via a dedicated project vehicle (SPV) with defined governance and benefit sharing.",
      whyNowEyebrow: "Why now",
      whyNowP1: "Brazil's carbon market is institutionalising: the national emissions trading system (SBCE, Law 15,042/2024) is being implemented, and COP30 in Belém has placed Brazilian restoration at the centre of the global removals conversation.",
      whyNowP2: "Land in eligible regions is appreciating as industrial actors compete for restoration-grade hectares.",
      cta: "Request Land Fund documentation",
    },
    biocharFund: {
      eyebrow: "Product 2 — Biochar Fund",
      heading: "Invest in durable carbon removal.",
      lead: "Exposure to industrial biochar production in Brazil — engineered removals with permanence measured in centuries.",
      strategyLabel: "Strategy",
      strategyValue: "Development and expansion capital for industrial biochar facilities in Brazil.",
      revenueLabel: "Revenue model",
      revenueValue: "Sale of certified biochar removals via spot, forward and offtake agreements; secondary revenue from biochar product sales.",
      termsLabel: "Terms",
      termsValue: "Target size, minimum commitment and structure.",
      note: "Our first industrial biochar project is being developed with Rabobank as partner.",
      cta: "Request Biochar Fund documentation",
    },
    whyInvest: {
      eyebrow: "Why invest through The Green Branch",
      heading: "A track record, and a de-risked pipeline.",
      p1: `${countWord.en} projects developed, including Sapucaia (certified, independently rated by Sylvera) and Trees for Farmers (developed with Rabobank, selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake).`,
      p2: "A pipeline of approximately 15 projects targeting more than 40 million tonnes of removals — every one screened, scored, and de-risked through the same stage-gate process.",
    },
    disclaimer: {
      text: "Nothing on this website constitutes an offer of securities, a solicitation, or investment advice. These opportunities are available only to qualified and professional investors, with full terms provided in the documentation issued after registration and verification.",
    },
  },
  pt: {
    hero: {
      eyebrow: "Investir",
      h1: "Invista onde as remoções começam.",
      lead: "A Green Branch estrutura produtos de investimento na base do mercado de remoções: a terra que faz crescer as florestas, e as instalações que produzem carbono durável. Dois produtos, uma mesma disciplina de desenvolvimento.",
    },
    landFund: {
      eyebrow: "Produto 1 — Land Fund",
      heading: "Seja dono da terra. Cultive a floresta. Participe das remoções.",
      lead: "Invista a partir de €100.000 na aquisição de terras para reflorestamento em larga escala no Brasil — um ativo real com um fluxo de remoções de emissão associado.",
      points: [
        { label: "Ativo subjacente", value: "Terras rurais em regiões consolidadas de restauração no Brasil." },
        { label: "Fatores de retorno", value: "Valorização da terra e receitas de longo prazo com remoções de emissão sob contratos de offtake." },
        { label: "Gestão de risco", value: "Alocação de capital em etapas por meio do nosso processo stage-gate; modelagem de carbono conservadora com descontos de risco explícitos; metodologias certificadas e classificações independentes." },
      ],
      structureLabel: "Estrutura",
      structureValue: "Ticket mínimo de €100.000; participação por meio de um veículo de projeto dedicado (SPV) com governança definida e repartição de benefícios.",
      whyNowEyebrow: "Por que agora",
      whyNowP1: "O mercado de carbono brasileiro está se institucionalizando: o sistema nacional de comércio de emissões (SBCE, Lei 15.042/2024) está sendo implementado, e a COP30 em Belém colocou a restauração brasileira no centro do debate global sobre remoções.",
      whyNowP2: "As terras em regiões elegíveis estão se valorizando à medida que atores industriais competem por hectares aptos à restauração.",
      cta: "Solicitar documentação do Land Fund",
    },
    biocharFund: {
      eyebrow: "Produto 2 — Biochar Fund",
      heading: "Invista em remoção de carbono durável.",
      lead: "Exposição à produção industrial de biochar no Brasil — remoções projetadas com permanência medida em séculos.",
      strategyLabel: "Estratégia",
      strategyValue: "Capital de desenvolvimento e expansão para instalações industriais de biochar no Brasil.",
      revenueLabel: "Modelo de receita",
      revenueValue: "Venda de remoções certificadas de biochar via contratos spot, forward e offtake; receita secundária com a venda de produtos de biochar.",
      termsLabel: "Termos",
      termsValue: "Tamanho-alvo, compromisso mínimo e estrutura.",
      note: "Nosso primeiro projeto industrial de biochar está sendo desenvolvido com o Rabobank como parceiro.",
      cta: "Solicitar documentação do Biochar Fund",
    },
    whyInvest: {
      eyebrow: "Por que investir com a Green Branch",
      heading: "Um histórico comprovado e um pipeline com risco reduzido.",
      p1: `${countWord.pt} projetos desenvolvidos, incluindo Sapucaia (certificado, com classificação independente da Sylvera) e Trees for Farmers (desenvolvido com o Rabobank, selecionado pelo RfP do Amazon Green Pledge para um offtake de 10.000 hectares).`,
      p2: "Um pipeline de aproximadamente 15 projetos visando mais de 40 milhões de toneladas de remoções — todos triados, avaliados e com risco reduzido pelo mesmo processo stage-gate.",
    },
    disclaimer: {
      text: "Nada neste site constitui uma oferta de valores mobiliários, uma solicitação ou aconselhamento de investimento. Essas oportunidades estão disponíveis apenas para investidores qualificados e profissionais, com os termos completos fornecidos na documentação emitida após cadastro e verificação.",
    },
  },
};

export default function InvestContent() {
  const { locale } = useLanguage();
  const t = content[locale];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero (ungated) */}
        <section className="bg-forest-deeper py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">{t.hero.eyebrow}</div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">{t.hero.h1}</h1>
            <p className="text-lg text-white/60 leading-relaxed">
              {t.hero.lead}
            </p>
          </div>
        </section>

        {/* Gated content */}
        <InvestorGate>
          {/* Product 1 — Land Fund */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-muted flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-forest" />
                </div>
                <span className="text-xs font-semibold text-forest uppercase tracking-widest">{t.landFund.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">{t.landFund.heading}</h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-3xl">
                {t.landFund.lead}
              </p>
              <div className="grid lg:grid-cols-2 gap-10">
                <ul className="space-y-4">
                  {t.landFund.points.map((p) => (
                    <li key={p.label} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-ink">{p.label}</div>
                        <div className="text-sm text-ink-soft leading-relaxed">{p.value}</div>
                      </div>
                    </li>
                  ))}
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">{t.landFund.structureLabel}</div>
                      <div className="text-sm text-ink-soft leading-relaxed">
                        {t.landFund.structureValue}
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="rounded-2xl bg-forest-muted/50 border border-forest/10 p-7">
                  <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.landFund.whyNowEyebrow}</div>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4">
                    {t.landFund.whyNowP1}
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    {t.landFund.whyNowP2}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors">
                    {t.landFund.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Product 2 — Biochar Fund */}
          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-muted flex items-center justify-center">
                  <Factory className="w-5 h-5 text-forest" />
                </div>
                <span className="text-xs font-semibold text-forest uppercase tracking-widest">{t.biocharFund.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">{t.biocharFund.heading}</h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-3xl">
                {t.biocharFund.lead}
              </p>
              <div className="grid lg:grid-cols-2 gap-10">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">{t.biocharFund.strategyLabel}</div>
                      <div className="text-sm text-ink-soft leading-relaxed">{t.biocharFund.strategyValue}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">{t.biocharFund.revenueLabel}</div>
                      <div className="text-sm text-ink-soft leading-relaxed">
                        {t.biocharFund.revenueValue}
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">{t.biocharFund.termsLabel}</div>
                      <div className="text-sm text-ink-soft leading-relaxed">
                        {t.biocharFund.termsValue}
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="rounded-2xl bg-white border border-border p-7">
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    {t.biocharFund.note}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors">
                    {t.biocharFund.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why invest through TGB */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-widest mb-3">
                <TrendingUp className="w-4 h-4" /> {t.whyInvest.eyebrow}
              </div>
              <h2 className="text-3xl font-bold text-navy mb-6">{t.whyInvest.heading}</h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                {t.whyInvest.p1}
              </p>
              <p className="text-ink-soft leading-relaxed">
                {t.whyInvest.p2}
              </p>
            </div>
          </section>
        </InvestorGate>

        {/* Legal disclaimer (always shown) */}
        <section className="py-10 bg-forest-deeper">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs text-white/50 leading-relaxed">
              {t.disclaimer.text}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
