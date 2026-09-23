"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SUBMIT_PROJECT_URL = "https://os.thegreenbranch.nl/auth";

const referencesBase = [
  { name: "Sapucaia Sustainable Forests", location: "Bahia", photo: "/img/DSCF9854.JPG" },
  { name: "Trees for Farmers", location: "Mato Grosso", photo: "/img/tff-DSCF8276.JPG" },
  { name: "Suledo Community ARR Project", location: "Kiteto District, Tanzania", photo: "/img/DSCF9797.JPG" },
];

const content = {
  en: {
    hero: {
      eyebrow: "How we develop reforestation projects",
      title: "From degraded pasture to certified forest.",
      lead: "We develop afforestation, reforestation and revegetation (ARR) projects through a structured, stage-gated process. Each stage reduces risk before capital scales.",
      cta1: "Submit a project for screening",
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
      intro: "If your project meets the conditions listed above:",
      items: [
        { num: "01", name: "Screening", desc: "Every incoming project that meets the listed requirements is assessed against our quality framework — eligibility, land tenure, additionality, and a first view of carbon potential. Only projects that clear the bar advance." },
        { num: "02", name: "Feasibility", desc: "We confirm the project stands on solid ground: land tenure and regulatory position, carbon modelling against conservative benchmarks, and financial viability — with an independent pre-issuance rating and field validation on site." },
        { num: "03", name: "Design", desc: "We design the project around buyer, investor and certification requirements: VCS VM0047 and CCB methodology, credible baselines, benefit sharing with local communities, and FPIC done properly. The result is a project built to certify, issue and sell." },
        { num: "04", name: "Development", desc: "Registration, validation, nursery establishment, and planting with our local operational partners. Development capital is deployed against defined milestones." },
        { num: "05", name: "Monitoring & technical support", desc: "Through GreenBranch OS, our proprietary MRV platform, we combine satellite data with field measurement for continuous monitoring and adaptive management — and provide ongoing technical support to the project on the ground, for the full life of the project." },
        { num: "06", name: "Finance & carbon sales", desc: "We structure the finance and commercialise the removals through our buyer network — spot, forward and long-term offtake — turning verified forest growth into issued, sold credits." },
      ],
    },
    lookFor: {
      heading: "What we look for.",
      lead: "We invite organisations developing nature-restoration projects that meet the following requirements:",
      items: [
        "Reforestation projects that include restoration, agroforestry or sustainable timber",
        "Beyond concept stage, with activities already on the ground",
        "A clear pathway to 2,000 hectares or more",
        "Biodiversity and community co-benefits",
        "At least €100k invested or committed",
      ],
      matchHeading: "Does this sound like your project?",
      matchCta: "Sign in and submit a project",
      mismatchHeading: "Is your project not meeting these conditions?",
      mismatchCta: "Explore our advisory services",
    },
    offer: {
      heading: "What we offer.",
      lead: "We offer support to early-stage projects to accelerate them:",
      items: [
        "External cost support, including CAPEX / OPEX",
        "Connecting you to the TGB buyer landscape",
        "Technical assistance, from feasibility to validation",
        "Structuring and fundraising support",
        "Access to our development and MRV platform, GreenBranch OS",
        "Independent quality assessments and ratings",
      ],
      closing: "We aim to partner early and stay involved through scale.",
    },
    references: {
      eyebrow: "Reference projects",
      heading: "Projects developed to the highest standards.",
      items: [
        { detail: "VCS and CCB certified, VM0047, ABACUS validated. Sylvera Estimated Rating BBB–AA. Developed with Futuro Florestal." },
        { detail: "Developed with Rabobank, implemented by Implantar. Selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake agreement." },
        { detail: "Miombo woodland restoration co-designed with local Maasai communities. Delivered with the Nature Restoration Company (NRC)." },
      ],
    },
  },
  pt: {
    hero: {
      eyebrow: "Como desenvolvemos projetos de reflorestamento",
      title: "De pastagem degradada a floresta certificada.",
      lead: "Desenvolvemos projetos de florestamento, reflorestamento e revegetação (ARR) por meio de um processo estruturado, com estágios (stage-gate). Cada etapa reduz o risco antes de o capital ser ampliado.",
      cta1: "Envie um projeto para triagem",
      cta2: "Conheça as remoções do nosso portfólio de ARR",
    },
    why: {
      eyebrow: "Por que nossa abordagem funciona",
      heading: "Eliminamos os modos de falha previsíveis antes do início da implementação.",
      body: "Projetos de ARR de alta qualidade falham por razões previsíveis: posse fundiária pouco clara, modelos de carbono frágeis, estágios iniciais subfinanciados e comunidades engajadas tarde demais. Nosso processo foi criado para eliminar esses modos de falha antes do início da implementação.",
    },
    phases: {
      eyebrow: "Nosso processo",
      heading: "Seis etapas, um processo disciplinado.",
      intro: "Se o seu projeto atende às condições listadas acima:",
      items: [
        { num: "01", name: "Triagem", desc: "Cada projeto recebido que atenda aos requisitos listados é avaliado segundo nosso framework de qualidade — elegibilidade, posse fundiária, adicionalidade e uma primeira leitura do potencial de carbono. Somente os projetos que atingem o padrão avançam." },
        { num: "02", name: "Viabilidade", desc: "Confirmamos que o projeto está em bases sólidas: posse fundiária e situação regulatória, modelagem de carbono frente a parâmetros conservadores e viabilidade financeira — com uma classificação independente pré-emissão e validação de campo no local." },
        { num: "03", name: "Desenho", desc: "Desenhamos o projeto em torno das exigências de compradores, investidores e certificação: metodologia VCS VM0047 e CCB, linhas de base confiáveis, repartição de benefícios com as comunidades locais e um processo de CLPI (FPIC) conduzido corretamente. O resultado é um projeto construído para certificar, emitir e vender." },
        { num: "04", name: "Desenvolvimento", desc: "Registro, validação, implantação de viveiros e plantio com nossos parceiros operacionais locais. O capital de desenvolvimento é alocado contra marcos definidos." },
        { num: "05", name: "Monitoramento e suporte técnico", desc: "Por meio da GreenBranch OS, nossa plataforma proprietária de MRV, combinamos dados de satélite com medições de campo para monitoramento contínuo e gestão adaptativa — e fornecemos suporte técnico contínuo ao projeto no terreno, durante toda a sua vida útil." },
        { num: "06", name: "Financiamento e venda de carbono", desc: "Estruturamos o financiamento e comercializamos as remoções por meio da nossa rede de compradores — spot, forward e offtake de longo prazo — transformando o crescimento florestal verificado em créditos emitidos e vendidos." },
      ],
    },
    lookFor: {
      heading: "O que buscamos.",
      lead: "Convidamos organizações que desenvolvem projetos de restauração da natureza que atendam aos seguintes requisitos:",
      items: [
        "Projetos de reflorestamento que incluam restauração, agrofloresta ou manejo florestal sustentável",
        "Além do estágio conceitual, com atividades já em curso no terreno",
        "Um caminho claro para 2.000 hectares ou mais",
        "Cobenefícios de biodiversidade e comunidade",
        "Pelo menos €100 mil investidos ou comprometidos",
      ],
      matchHeading: "Isso soa como o seu projeto?",
      matchCta: "Entre e envie um projeto",
      mismatchHeading: "Seu projeto não atende a essas condições?",
      mismatchCta: "Conheça nossos serviços de assessoria",
    },
    offer: {
      heading: "O que oferecemos.",
      lead: "Oferecemos apoio a projetos em estágio inicial para acelerá-los:",
      items: [
        "Suporte a custos externos, incluindo CAPEX / OPEX",
        "Conexão com a rede de compradores da TGB",
        "Assistência técnica, da viabilidade à validação",
        "Apoio em estruturação e captação de recursos",
        "Acesso à nossa plataforma de desenvolvimento e MRV, a GreenBranch OS",
        "Avaliações de qualidade e classificações independentes",
      ],
      closing: "Buscamos formar parcerias desde o início e permanecer envolvidos até a escala.",
    },
    references: {
      eyebrow: "Projetos de referência",
      heading: "Projetos desenvolvidos com os mais altos padrões.",
      items: [
        { detail: "Certificado pelos padrões VCS e CCB, VM0047, validado pelo ABACUS. Classificação Estimada Sylvera BBB–AA. Desenvolvido com a Futuro Florestal." },
        { detail: "Desenvolvido com o Rabobank, implementado pela Implantar. Selecionado pelo RfP do Amazon Green Pledge para um acordo de offtake de 10.000 hectares." },
        { detail: "Restauração de mata Miombo co-desenhada com comunidades Maasai locais. Realizada com a Nature Restoration Company (NRC)." },
      ],
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
          <Image src="/img/DSCF9818.JPG" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-forest-deeper/60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">{t.hero.eyebrow}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{t.hero.title}</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t.hero.lead}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
                  {t.hero.cta1} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/buy-removals" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/15">
                  {t.hero.cta2}
                </Link>
              </div>
            </div>
          </div>
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

        {/* What we look for — photo + text */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-[440px] rounded-3xl overflow-hidden lg:order-first order-last">
              <Image src="/img/DSCF9647.JPG" alt="Field monitoring on a restoration project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-[1.05]">{t.lookFor.heading}</h2>
              <p className="text-ink-soft leading-relaxed mb-6">{t.lookFor.lead}</p>
              <ul className="space-y-3">
                {t.lookFor.items.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-14 pt-10 border-t border-border grid sm:grid-cols-2 gap-10">
            <div>
              <p className="text-lg font-semibold text-navy mb-4">{t.lookFor.matchHeading}</p>
              <Link
                href={SUBMIT_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors"
              >
                {t.lookFor.matchCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <p className="text-lg font-semibold text-navy mb-4">{t.lookFor.mismatchHeading}</p>
              <Link
                href="/advisory"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-forest text-sm font-bold rounded-xl border border-forest/30 hover:bg-forest-muted transition-colors"
              >
                {t.lookFor.mismatchCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Phases — vertical timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.phases.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-[1.05] max-w-2xl">{t.phases.heading}</h2>
            <p className="font-bold text-ink leading-relaxed mb-14">{t.phases.intro}</p>

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

        {/* What we offer — text + photo */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-[1.05]">{t.offer.heading}</h2>
              <p className="text-ink-soft leading-relaxed mb-6">{t.offer.lead}</p>
              <ul className="space-y-3 mb-6">
                {t.offer.items.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    {o}
                  </li>
                ))}
              </ul>
              <p className="text-ink font-semibold">{t.offer.closing}</p>
            </div>
            <div className="relative h-[440px] rounded-3xl overflow-hidden">
              <Image src="/img/DSCF9873.JPG" alt="Early-stage reforestation project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Reference projects — final section */}
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
      </main>
      <Footer />
    </>
  );
}
