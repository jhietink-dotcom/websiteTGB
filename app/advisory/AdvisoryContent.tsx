"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, CheckCircle2, Sprout, Wheat } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const audienceIcons = [Building2, Sprout, Wheat];

type Audience = {
  title: string;
  label: string;
  lead: string;
  bullets: string[];
  note?: string;
  cta: string;
};

type CaseItem = { situation: string; did: string; outcome: string };

const LEDGER_COLS = "md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)_minmax(0,1fr)]";

const content = {
  en: {
    hero: {
      eyebrow: "Carbon advisory",
      heading: "The expertise behind our projects — available for yours.",
      lead: "We work with corporates building carbon strategies, landowners and developers structuring projects, financial institutions entering the carbon market, and FLAG companies assessing what their supply base can deliver.",
      cta: "Book a scoping call",
    },
    who: {
      eyebrow: "Who we work with",
      heading: "Advisory shaped to who you are.",
      sub: "Three engagements, one development discipline.",
    },
    audiences: [
      {
        title: "Corporates",
        label: "Procurement & quality advisory",
        lead: "You need a carbon strategy aligns with your sustainability strategy. We help you decide what to buy, at what quality, and on what terms.",
        bullets: [
          "Procurement framework aligned to your SBTi roadmap or net-zero claim",
          "Price benchmarking and a contracting approach, from spot through multi-year offtake",
          "Credit quality assessment and interpretation of the rating agencies",
          "Board-ready documentation of what you chose and why it holds up",
          "Shortlist of verified projects with due-diligence findings on each",
        ],
        note: "We develop projects as well as advise on them, so we disclose our own pipeline and leave it up to you what you choose for your portfolio",
        cta: "Discuss your strategy",
      },
      {
        title: "Project developers & landowners",
        label: "Feasibility & certification advisory",
        lead: "You have land with restoration potential and want to know whether carbon certification makes sense before you spend real money finding out.",
        bullets: [
          "Carbon potential modelled on your actual parcels rather than sector averages",
          "MRV architecture and monitoring plan, built on the same system we run our own projects on",
          "Methodology eligibility screening across Verra VCS and CCB and other standards",
          "Development budget and timeline through to first issuance",
          "Baseline and additionality assessment",
        ],
        cta: "Scope your project",
      },
      {
        title: "FLAG companies",
        label: "Supply-base & insetting advisory",
        lead: "Your emissions sit in land, which means the answer has to be built where you source rather than bought on the market. We assess what land-based mitigation can realistically deliver inside your own supply base.",
        bullets: [
          "Adoption feasibility across your suppliers and sourcing regions, region by region",
          "Insetting programme design, from MRV architecture through to claims that survive scrutiny",
          "Practice selection and agronomic fit across biochar, reforestation, agroforestry and silvopasture",
          "Commercial structure: who funds it, who owns the outcome, and how farmers get paid",
          "Land-based mitigation potential modelled at supply-shed rather than project scale",
        ],
        cta: "Assess your supply base",
      },
    ] satisfies Audience[],
    why: {
      eyebrow: "Why us",
      heading: "Practitioners, not generalists.",
      body: "Most carbon advisors work from frameworks, we work from experience. Every engagement draws on what we have learned building, certifying, and selling our own projects.",
    },
    how: {
      eyebrow: "How it works",
      heading: "Simple to start.",
      steps: [
        { num: "1", title: "Scoping call", desc: "We spend 30 minutes understanding your situation. No obligation, no pitch." },
        { num: "2", title: "Fixed-scope proposal", desc: "You receive a clear proposal: scope, deliverables and timeline." },
        { num: "3", title: "Delivery", desc: "We deliver the agreed work, you receive something usable." },
      ],
    },
    engagements: {
      eyebrow: "Recent engagements",
      heading: "Selected work.",
      note: "Details anonymised where requested.",
      cols: { situation: "Situation", did: "What we did", outcome: "Outcome" },
      cases: [
        {
          situation: "NGO operating in Africa wanting to develop a carbon project with local smallholders.",
          did: "Feasibility assessment (including top-down selection of eligible land), preliminary carbon modelling, support with methodology compliance for ARR certification.",
          outcome: "Project entered the development pipeline with a clear path to VCS certification.",
        },
        {
          situation: "Brazilian company developing a biochar project involving artisanal production from agricultural waste and redistribution to local farmers.",
          did: "Eligibility assessment, methodology fit assessment, preliminary carbon modelling, connection with buyers.",
          outcome: "Project under certification.",
        },
        {
          situation: "Cooperatieve Rabobank U.A. wanted to develop an ARR project with their client network of large farmers in Brazil.",
          did: "Carbon certification support, carbon modeling, certification documentation (PDD, Monitoring Plans, Stakeholder consultation process, etc.)",
          outcome: "Project under validation and starting expansion; TGB became the new Project Proponent.",
        },
        {
          situation: "Company in Africa wanting to develop an ARR project including native restoration and regenerative agriculture with Indigenous communities.",
          did: "Feasibility assessment (including top-down selection of eligible land), preliminary carbon modelling, support with methodology compliance for ARR certification, full FPIC and stakeholder consultation support and review.",
          outcome: "Project under development in the Verra Registry.",
        },
      ] satisfies CaseItem[],
    },
    cta: {
      heading: "Let's find out how we can work together in a call",
      cta: "Book a scoping call",
    },
  },
  pt: {
    hero: {
      eyebrow: "Assessoria de carbono",
      heading: "A expertise por trás dos nossos projetos — disponível para o seu.",
      lead: "Trabalhamos com empresas construindo estratégias de carbono, proprietários de terra e desenvolvedores estruturando projetos, instituições financeiras entrando no mercado de carbono, e empresas FLAG avaliando o que sua base de fornecimento pode entregar.",
      cta: "Agende uma chamada de escopo",
    },
    who: {
      eyebrow: "Com quem trabalhamos",
      heading: "Assessoria moldada para quem você é.",
      sub: "Três tipos de atuação, uma única disciplina de desenvolvimento.",
    },
    audiences: [
      {
        title: "Empresas",
        label: "Assessoria de aquisição e qualidade",
        lead: "Você precisa de uma estratégia de carbono alinhada à sua estratégia de sustentabilidade. Ajudamos você a decidir o que comprar, com qual qualidade e em quais condições.",
        bullets: [
          "Estrutura de aquisição alinhada ao seu roteiro SBTi ou compromisso net-zero",
          "Benchmarking de preços e abordagem de contratação, do spot ao offtake plurianual",
          "Avaliação da qualidade dos créditos e interpretação das agências de rating",
          "Documentação pronta para o conselho sobre o que foi escolhido e por que se sustenta",
          "Lista pré-selecionada de projetos verificados, com conclusões de due diligence para cada um",
        ],
        note: "Nós também desenvolvemos projetos, além de assessorar sobre eles, por isso divulgamos nosso próprio pipeline e deixamos a seu critério o que escolher para o seu portfólio",
        cta: "Discuta sua estratégia",
      },
      {
        title: "Desenvolvedores de projetos e proprietários de terra",
        label: "Assessoria de viabilidade e certificação",
        lead: "Você tem terra com potencial de restauração e quer saber se a certificação de carbono faz sentido antes de gastar dinheiro de verdade para descobrir.",
        bullets: [
          "Potencial de carbono modelado com base nos seus talhões reais, não em médias do setor",
          "Arquitetura de MRV e plano de monitoramento, construídos no mesmo sistema que usamos em nossos próprios projetos",
          "Triagem de elegibilidade de metodologia nos padrões Verra VCS, CCB e outros",
          "Orçamento de desenvolvimento e cronograma até a primeira emissão",
          "Avaliação de linha de base e adicionalidade",
        ],
        cta: "Dimensione seu projeto",
      },
      {
        title: "Empresas FLAG",
        label: "Assessoria de base de fornecimento e insetting",
        lead: "Suas emissões estão na terra, o que significa que a resposta precisa ser construída onde você compra, não adquirida no mercado. Avaliamos o que a mitigação baseada na terra pode realisticamente entregar dentro da sua própria base de fornecimento.",
        bullets: [
          "Viabilidade de adoção entre seus fornecedores e regiões de origem, região por região",
          "Desenho de programa de insetting, da arquitetura de MRV a alegações que resistem a escrutínio",
          "Seleção de práticas e adequação agronômica entre biochar, reflorestamento, agrofloresta e sistemas silvipastoris",
          "Estrutura comercial: quem financia, quem é dono do resultado e como os produtores são remunerados",
          "Potencial de mitigação baseado na terra modelado em escala de bacia de fornecimento, não de projeto",
        ],
        cta: "Avalie sua base de fornecimento",
      },
    ] satisfies Audience[],
    why: {
      eyebrow: "Por que nós",
      heading: "Praticantes, não generalistas.",
      body: "A maioria dos consultores de carbono trabalha a partir de frameworks; nós trabalhamos a partir da experiência. Cada projeto se apoia no que aprendemos construindo, certificando e vendendo nossos próprios projetos.",
    },
    how: {
      eyebrow: "Como funciona",
      heading: "Simples de começar.",
      steps: [
        { num: "1", title: "Chamada de escopo", desc: "Dedicamos 30 minutos para entender sua situação. Sem compromisso, sem pitch." },
        { num: "2", title: "Proposta de escopo fechado", desc: "Você recebe uma proposta clara: escopo, entregáveis e cronograma." },
        { num: "3", title: "Entrega", desc: "Entregamos o trabalho acordado, você recebe algo utilizável." },
      ],
    },
    engagements: {
      eyebrow: "Projetos recentes",
      heading: "Trabalhos selecionados.",
      note: "Detalhes anonimizados quando solicitado.",
      cols: { situation: "Situação", did: "O que fizemos", outcome: "Resultado" },
      cases: [
        {
          situation: "ONG que atua na África e deseja desenvolver um projeto de carbono com pequenos agricultores locais.",
          did: "Avaliação de viabilidade (incluindo seleção top-down de terras elegíveis), modelagem preliminar de carbono, apoio com conformidade de metodologia para certificação ARR.",
          outcome: "O projeto entrou no pipeline de desenvolvimento com um caminho claro para a certificação VCS.",
        },
        {
          situation: "Empresa brasileira desenvolvendo um projeto de biochar com produção artesanal a partir de resíduos agrícolas e redistribuição a agricultores locais.",
          did: "Avaliação de elegibilidade, avaliação de adequação de metodologia, modelagem preliminar de carbono, conexão com compradores.",
          outcome: "Projeto em processo de certificação.",
        },
        {
          situation: "A Cooperatieve Rabobank U.A. desejava desenvolver um projeto ARR com sua rede de clientes de grandes produtores no Brasil.",
          did: "Apoio à certificação de carbono, modelagem de carbono, documentação de certificação (PDD, planos de monitoramento, processo de consulta a partes interessadas, etc.)",
          outcome: "Projeto em validação e iniciando expansão; a TGB tornou-se a nova Proponente do Projeto.",
        },
        {
          situation: "Empresa na África que deseja desenvolver um projeto ARR incluindo restauração nativa e agricultura regenerativa com comunidades indígenas.",
          did: "Avaliação de viabilidade (incluindo seleção top-down de terras elegíveis), modelagem preliminar de carbono, apoio com conformidade de metodologia para certificação ARR, apoio e revisão completos de FPIC e consulta a partes interessadas.",
          outcome: "Projeto em desenvolvimento no Registro Verra.",
        },
      ] satisfies CaseItem[],
    },
    cta: {
      heading: "Vamos descobrir como podemos trabalhar juntos em uma chamada",
      cta: "Agende uma chamada de escopo",
    },
  },
};

export default function AdvisoryContent() {
  const { locale } = useLanguage();
  const t = content[locale];
  const audiences = t.audiences.map((a, i) => ({ ...a, icon: audienceIcons[i] }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero — full-bleed photo */}
        <section className="relative min-h-[82vh] flex items-end overflow-hidden">
          <Image src="/img/DSCF9818.JPG" alt="The Green Branch team in the field" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper via-forest-deeper/75 to-forest-deeper/40" />
          <div className="absolute inset-0 bg-forest-deeper/20" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-5">{t.hero.eyebrow}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.02] tracking-tight">
                {t.hero.heading}
              </h1>
              <div className="h-1 w-20 bg-accent rounded-full mb-6" />
              <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-9">
                {t.hero.lead}
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                {t.hero.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who we work with — indexed ledger rows */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.who.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-2 leading-[1.05] max-w-2xl">
              {t.who.heading}
            </h2>
            <p className="text-base text-ink-soft mb-14 max-w-lg">{t.who.sub}</p>

            {audiences.map((a, i) => (
              <div
                key={a.title}
                className={`grid md:grid-cols-[96px_minmax(0,300px)_minmax(0,1fr)] gap-10 py-10 ${
                  i === 0 ? "border-t-2 border-t-[#206042]" : "border-t border-border"
                } ${i === audiences.length - 1 ? "border-b-2 border-b-[#206042]" : ""}`}
              >
                <div className="text-[44px] font-light text-forest leading-none tracking-tight">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <a.icon className="w-5 h-5 text-[#206042]" />
                    <h3 className="text-[26px] font-bold text-navy leading-tight">{a.title}</h3>
                  </div>
                  <p className="text-[15px] text-ink-soft leading-[1.7] mb-5">{a.lead}</p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest text-white text-sm font-bold hover:bg-forest-dark transition-colors"
                  >
                    {a.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-3.5">{a.label}</div>
                  <div className="grid sm:grid-cols-2 gap-x-10">
                    {a.bullets.map((b, bi) => (
                      <div
                        key={b}
                        className={`text-sm text-ink leading-[1.55] py-3 border-t border-border ${
                          bi >= a.bullets.length - 2 ? "sm:border-b sm:border-b-border" : ""
                        }`}
                      >
                        {b}
                      </div>
                    ))}
                  </div>
                  {a.note && (
                    <p className="mt-4 rounded-lg bg-forest-muted px-4 py-3 text-[13px] leading-relaxed text-[#206042]">
                      {a.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why us — photo-backed pull-quote band */}
        <section className="relative py-28 overflow-hidden bg-forest-deeper">
          <Image src="/img/DSCF9647.JPG" alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-forest-deeper/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">{t.why.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.05]">{t.why.heading}</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />
            <div className="text-lg text-white/70 leading-relaxed max-w-3xl">
              <p>
                {t.why.body}
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.how.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 leading-[1.05]">{t.how.heading}</h2>
            <div className="relative grid md:grid-cols-3 gap-10">
              <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-0.5 bg-forest/15" />
              {t.how.steps.map((s) => (
                <div key={s.num} className="relative">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center text-xl font-extrabold mb-5">{s.num}</div>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent engagements — ruled ledger */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.engagements.eyebrow}</div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-[1.05]">{t.engagements.heading}</h2>
              </div>
              <p className="text-[13px] text-ink/50">{t.engagements.note}</p>
            </div>

            <div className={`mt-10 hidden md:grid ${LEDGER_COLS} gap-10 pb-3 border-b-2 border-b-[#206042]`}>
              <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em]">{t.engagements.cols.situation}</div>
              <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em]">{t.engagements.cols.did}</div>
              <div className="text-[11px] font-bold text-forest uppercase tracking-[0.18em]">{t.engagements.cols.outcome}</div>
            </div>

            {t.engagements.cases.map((c, i) => (
              <div key={i} className={`grid ${LEDGER_COLS} gap-x-10 gap-y-4 py-7 border-b border-border`}>
                <p className="text-base font-semibold text-navy leading-[1.45]">{c.situation}</p>
                <p className="text-sm text-ink-soft leading-[1.7]">{c.did}</p>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-[18px] h-[18px] text-forest shrink-0 mt-0.5" />
                  <p className="text-[15px] font-semibold text-forest-dark leading-[1.55]">{c.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA — full-bleed photo */}
        <section className="relative py-32 overflow-hidden text-center">
          <Image src="/img/DSCF0278.JPG" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-forest-deeper/85" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-9 leading-[1.05]">{t.cta.heading}</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
              {t.cta.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
