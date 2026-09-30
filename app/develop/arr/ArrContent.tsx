"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificationBar from "@/components/CertificationBar";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const referencesBase = [
  { name: "Sapucaia Sustainable Forests", location: "Bahia", photo: "/img/sapucaia-drone.jpg" },
  { name: "Trees for Farmers", location: "Mato Grosso", photo: "/img/tff-DSCF8276.JPG" },
  { name: "Suledo Community ARR Project", location: "Kiteto District, Tanzania", photo: "/img/suledo-community.jpg" },
];

const content = {
  en: {
    certLabel: "Certified under",
    hero: {
      eyebrow: "How we develop reforestation projects",
      title: "From degraded pasture to certified forest.",
      lead: "We develop afforestation, reforestation and revegetation (ARR) projects through a structured, stage-gated process. Each stage reduces risk before capital scales.",
      cta1: "Get advisory services for your project",
      cta2: "Explore removals from our ARR portfolio",
    },
    why: {
      eyebrow: "Why our approach works",
      heading: "We eliminate the predictable failure modes before implementation begins.",
      body: "High-quality ARR projects fail for predictable reasons: unclear land tenure, weak carbon models, underfunded early stages, and communities engaged too late. Our process is built to eliminate these failure modes before implementation begins.",
    },
    phases: {
      eyebrow: "Our process",
      heading: "Six stages, one disciplined process.",
      intro: "We approach project opportunities through a structured, stage-gated process, from first screening to certification and MRV, to develop viable and high-quality projects.",
      items: [
        { num: "01", name: "Screening", desc: "Every project opportunity is assessed against our quality framework — eligibility, land tenure, additionality, and a first view of carbon potential. Only opportunities that clear the bar advance." },
        { num: "02", name: "Feasibility", desc: "We confirm the project stands on solid ground: land tenure and regulatory position, carbon modelling against conservative benchmarks, and financial viability — with an independent pre-issuance rating and field validation on site." },
        { num: "03", name: "Design", desc: "We design the project around buyer, investor and certification requirements: CCP-approved methodologies, credible baselines, benefit sharing co-designed with local communities, and stakeholder consultations and Free, Prior, and Informed Consent done properly. The result is a project built to certify, issue and sell." },
        { num: "04", name: "Development", desc: "Registration, validation, nursery establishment, and planting with our local operational partners. Development capital is deployed against defined milestones." },
        { num: "05", name: "Monitoring & technical support", desc: "Through GreenBranch OS, our proprietary platform, we combine satellite data with field measurement for continuous monitoring and adaptive management — and provide ongoing technical support to the project on the ground, for the whole project lifetime." },
        { num: "06", name: "Finance & carbon sales", desc: "We structure the finance and commercialise the removals through our buyer network — spot, forward and long-term offtake — turning verified forest growth into issued, sold credits." },
      ],
    },
    references: {
      eyebrow: "Reference projects",
      heading: "Projects developed to the highest standards.",
      items: [
        { detail: "VCS and CCB certified, VM0047, ABACUS validated. Developed with Futuro Florestal." },
        { detail: "Developed with Rabobank, implemented by Implantar. Selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake agreement." },
        { detail: "Miombo woodland restoration co-designed with local Maasai communities. Developed with the Nature Restoration Company (NRC)." },
      ],
    },
    supportCta: {
      heading: "Do you need support to get your project through development and certification?",
      button: "Explore our advisory services",
      contactButton: "Contact us to co-develop a project",
    },
  },
  pt: {
    certLabel: "Certificado pelo padrão",
    hero: {
      eyebrow: "Como desenvolvemos projetos de reflorestamento",
      title: "De pastagem degradada a floresta certificada.",
      lead: "Desenvolvemos projetos de florestamento, reflorestamento e revegetação (ARR) com um processo estruturado em etapas (stage-gate). Cada etapa reduz o risco antes de investirmos mais capital.",
      cta1: "Contrate assessoria para o seu projeto",
      cta2: "Conheça os créditos de remoção do nosso portfólio de ARR",
    },
    why: {
      eyebrow: "Por que nossa abordagem funciona",
      heading: "Eliminamos os riscos previsíveis antes de o projeto começar.",
      body: "Projetos de ARR de alta qualidade costumam fracassar pelos mesmos motivos: situação fundiária indefinida, modelos de carbono frágeis, falta de recursos nas fases iniciais e comunidades envolvidas tarde demais. Nosso processo foi criado para eliminar esses riscos antes de o projeto começar.",
    },
    phases: {
      eyebrow: "Nosso processo",
      heading: "Seis etapas, um processo rigoroso.",
      intro: "Analisamos cada oportunidade com um processo estruturado em etapas (stage-gate), da triagem inicial até a certificação e o MRV, para desenvolver projetos viáveis e de alta qualidade.",
      items: [
        { num: "01", name: "Triagem", desc: "Cada oportunidade é avaliada segundo os nossos critérios de qualidade — elegibilidade, situação fundiária, adicionalidade e uma primeira estimativa do potencial de carbono. Só avançam as oportunidades que atendem ao padrão." },
        { num: "02", name: "Viabilidade", desc: "Confirmamos que o projeto tem bases sólidas: situação fundiária e regulatória, modelagem de carbono com parâmetros conservadores e viabilidade financeira — com um rating independente antes da emissão e validação em campo." },
        { num: "03", name: "Desenho", desc: "Desenhamos o projeto de acordo com as exigências de compradores, investidores e certificadoras: metodologias aprovadas pelo CCP, linhas de base confiáveis, repartição de benefícios definida em conjunto com as comunidades locais, e consultas às partes interessadas e Consentimento Livre, Prévio e Informado (CLPI) feitos da forma correta. O resultado é um projeto pronto para ser certificado, emitir créditos e vendê-los." },
        { num: "04", name: "Desenvolvimento", desc: "Registro, validação, implantação de viveiros e plantio com nossos parceiros locais. O capital de desenvolvimento é liberado conforme o projeto cumpre metas definidas." },
        { num: "05", name: "Monitoramento e suporte técnico", desc: "Com a GreenBranch OS, nossa plataforma própria, combinamos dados de satélite e medições de campo para monitorar o projeto continuamente e ajustar a gestão quando necessário — e oferecemos suporte técnico em campo durante toda a vida do projeto." },
        { num: "06", name: "Financiamento e venda de carbono", desc: "Estruturamos o financiamento e vendemos os créditos de remoção à nossa rede de compradores — spot, forward e offtake de longo prazo —, transformando o crescimento verificado da floresta em créditos emitidos e vendidos." },
      ],
    },
    references: {
      eyebrow: "Projetos de referência",
      heading: "Projetos desenvolvidos com os mais altos padrões.",
      items: [
        { detail: "Certificado pelos padrões VCS e CCB (metodologia VM0047) e validado pela ABACUS. Desenvolvido com a Futuro Florestal." },
        { detail: "Desenvolvido com o Rabobank e implementado pela Implantar. Selecionado na chamada (RfP) do Amazon Green Pledge para um contrato de offtake de 10.000 hectares." },
        { detail: "Restauração da floresta de miombo, planejada em conjunto com comunidades maasai locais. Desenvolvido com a Nature Restoration Company (NRC)." },
      ],
    },
    supportCta: {
      heading: "Precisa de apoio no desenvolvimento e na certificação do seu projeto?",
      button: "Conheça nossos serviços de assessoria",
      contactButton: "Fale conosco para codesenvolver um projeto",
    },
  },
};

export default function ArrContent() {
  const { locale } = useLanguage();
  const t = content[locale];
  const phases = t.phases.items;
  const references = referencesBase.map((r, i) => ({ ...r, detail: t.references.items[i].detail }));

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative bg-forest-deeper py-28 overflow-hidden">
          <Image src="/img/arr-hero.jpg" alt="" fill priority className="object-cover opacity-55" />
          <div className="absolute inset-0 bg-forest-deeper/40" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">{t.hero.eyebrow}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{t.hero.title}</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t.hero.lead}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/advisory" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  {t.hero.cta1} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  {t.hero.cta2}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-10 bg-white border-b border-border">
          <CertificationBar label={t.certLabel} />
        </section>

        {/* Why our approach works */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.why.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-[1.1]">{t.why.heading}</h2>
            <p className="text-ink-soft leading-relaxed">
              {t.why.body}
            </p>
          </div>
        </section>

        {/* Phases — vertical timeline */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.phases.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-[1.05] max-w-2xl">{t.phases.heading}</h2>
            <p className="text-ink-soft leading-relaxed mb-14 max-w-2xl">{t.phases.intro}</p>

            <div className="max-w-3xl">
              {phases.map((p, i) => (
                <div key={p.num} className="relative flex gap-6 sm:gap-8">
                  {/* Node + connector */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-forest text-white flex items-center justify-center text-lg font-extrabold shrink-0 shadow-sm">
                      {p.num}
                    </div>
                    {i < phases.length - 1 && <div className="w-0.5 flex-1 bg-forest/20 my-2" />}
                  </div>
                  {/* Content */}
                  <div className={i < phases.length - 1 ? "pb-10 pt-2" : "pt-2"}>
                    <h3 className="text-xl font-bold text-ink mb-2">{p.name}</h3>
                    <p className="text-ink-soft leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Reference projects */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.references.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 leading-[1.05]">{t.references.heading}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {references.map((r) => (
                <div key={r.name} className="group rounded-3xl overflow-hidden border border-border bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={r.photo} alt={r.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-1">{r.location}</div>
                    <h3 className="text-lg font-bold text-ink mb-2">{r.name}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8">{t.supportCta.heading}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/advisory" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                {t.supportCta.button} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                {t.supportCta.contactButton} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
