"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight, CheckCircle2, Zap, Clock, Users, Target, Leaf, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const useCaseIcons = [Users, Target, Leaf];
const methodologyPhotos = ["/img/arr-aerial.jpg", "/img/biochar.jpg", "/img/redd-forest.jpg"];

const platformMeta: { image?: string; w?: number; h?: number }[] = [
  { image: "/img/terrahub-portfolio.png", w: 1600, h: 592 },
  { image: "/img/terrahub-certificates.png", w: 1532, h: 763 },
];

const content = {
  en: {
    hero: {
      eyebrow: "For buyers",
      titleLine1: "Buy carbon credits",
      titleLine2: "straight from the source",
      sub: "High-quality credits you can stand behind",
      lead: "Whether you're running a climate programme, meeting a science-based target, or going fully net zero, we supply verified removals from our partners or projects we develop ourselves.",
      cta1: "Request pricing",
      cta2: "Schedule a call",
    },
    useCases: {
      eyebrow: "Built for your commitment",
      heading: "Whatever you are working towards.",
      items: [
        { title: "Climate programs", desc: "Removals per employee, product, or client. Recurring delivery, simple documentation.", cta: "Request pricing" },
        { title: "SBTi & 1% commitments", desc: "Meet your science-based target with verified, rated credits and audit-ready reporting.", cta: "Request pricing" },
        { title: "Net zero", desc: "Long-term supply across vintages, with full transparency into project performance.", cta: "Schedule a call" },
      ],
    },
    supply: {
      eyebrow: "How we supply",
      heading: "Two ways to buy.",
      spot: {
        title: "Spot",
        desc: "Issued credits you can buy and retire today. The simplest way to meet a near-term claim.",
        bullets: [
          "Delivered and retired in your name, typically within days",
          "Certified to VCS + CCB and independently rated",
          "Full documentation package — project docs, verification, retirement records",
          "Best for current-year targets and near-term claims",
        ],
      },
      future: {
        title: "Future supply",
        desc: "Forward delivery at a price locked in today, secured against projects already in development.",
        bullets: [
          "Price fixed now for future vintages — budget certainty",
          "Volume secured against a named project",
          "Verified milestone updates as the project progresses, via GreenBranch OS",
          "Can be structured as a multi-year offtake agreement (ERPA — an Emission Removal Purchase Agreement, a long-term contract to buy future credits)",
          "Best for multi-year removal portfolios",
        ],
      },
      note: "All credits are certified to VCS (the Verified Carbon Standard, the world's most widely used carbon crediting programme) and CCB (the Climate, Community & Biodiversity Standards, which certify social and biodiversity co-benefits), and independently rated by Sylvera (a carbon-credit ratings agency).",
    },
    methodologies: {
      eyebrow: "Three methodologies",
      heading: "Buy credits from a specific project type, or a blend across all three.",
      lead: "Buyers can access a single project type or draw across our full portfolio.",
      partnerNote: "The Green Branch acts as your partner to select projects. TGB offers a portfolio of projects that are developed by TGB itself or selected by the technical team. If you have specific requirements, geography, volume, or timeline, we can source and select additional projects based on a specified inquiry. Every project, whether in the portfolio or sourced on request, has passed the same due diligence. What differs is our role in it.",
      items: [
        { tag: "Removal", title: "ARR", sub: "Afforestation, reforestation & revegetation", desc: "Growing new, biodiverse forest on degraded land — taking carbon out of the atmosphere." },
        { tag: "Removal", title: "Biochar", sub: "Durable carbon", desc: "Biomass converted into a stable carbon that stays locked away for centuries." },
        { tag: "Avoidance", title: "REDD+", sub: "Reducing emissions from deforestation and forest degradation", desc: "Preserving existing carbon stocks by focusing on conservation of existing forests and biodiversity." },
      ],
      sourcing: {
        heading: "Where our projects come from:",
        items: [
          {
            eyebrow: "In-house origination",
            title: "Developed by The Green Branch",
            desc: "Projects our technical team originates and develops in-house, from feasibility through implementation and issuance, overseeing every stage against rigorous certification requirements.",
            bullets: [
              "Direct relationship with land and communities",
              "Influence on project design and co-benefits",
              "Long-term volume security and site visits",
              "Exclusive access, not available elsewhere",
            ],
          },
          {
            eyebrow: "Partner projects",
            title: "Selected by The Green Branch",
            desc: "Third-party projects our technical team reviews and selects against our quality and integrity criteria and certification requirements.",
            bullets: [
              "Broader choice of geographies and project types",
              "Faster availability, often already issued",
              "Same due diligence standard as our own projects",
              "Independently rated and registry-verified",
            ],
          },
        ],
      },
    },
    steps: {
      eyebrow: "How it works",
      heading: "From enquiry to retired credits.",
      items: [
        { num: "1", title: "Tell us what you need", desc: "Share your volume, timeline, and commitment type." },
        { num: "2", title: "We match you to projects", desc: "You receive available volumes, pricing, and a term sheet within 48 hours." },
        { num: "3", title: "Credits retired to your account", desc: "We handle registry retirement and deliver a full documentation package." },
      ],
    },
    platform: {
      eyebrow: "TGB Dashboard",
      dashboardUrl: "https://dashboard.thegreenbranch.nl/",
      heading: "Everything in one dashboard.",
      lead: "Browse our project catalog of due-diligenced projects, track your portfolio, and keep proof of every deal in one place.",
      callouts: [
        "Browse our project catalog of due-diligenced projects",
        "Track your portfolio",
        "Proof — keep all your deals in one place",
      ],
      rows: [
        {
          num: "01",
          kicker: "Portfolio",
          title: "Every credit you hold, in one place",
          desc: "See your whole position on one screen — grouped by project, volume, and status. No spreadsheets to reconcile, no email threads to search.",
          bullets: [
            "Every credit you hold, by project, volume and status",
            "Cumulative CO₂ financed and retired, tracked over time",
            "One login for procurement, finance and sustainability",
          ],
        },
        {
          num: "02",
          kicker: "Proof",
          title: "All your certificates in one place",
          desc: "Proof that each credit was retired in your name, on the registry, where it cannot be double-counted or resold — ready before an auditor asks.",
          bullets: [
            "Registry retirement records in your company's name",
            "Full documentation for every project behind your credits",
            "The quality framework and certification behind each one",
          ],
        },
      ],
      ctaLine: "Every purchase comes with GreenBranch Dashboard access, included.",
    },
    faq: {
      eyebrow: "Frequently asked",
      heading: "Carbon credits, explained.",
      items: [
        {
          q: "What is the difference between carbon avoidance and carbon removal?",
          a: "Avoidance credits prevent emissions that would otherwise occur. Removal credits take carbon dioxide out of the atmosphere and store it — for example, growing new forest (ARR) or producing biochar. Both are valuable, but many corporate frameworks treat them differently, and removals are increasingly required for net-zero claims.",
        },
        {
          q: "Are nature-based credits permanent?",
          a: "Permanence varies by type. Forest carbon (ARR) is durable but carries reversal risk from fire, disease, or clearing, which credible projects manage through buffer pools, long project lifetimes, and continuous monitoring. Biochar is highly permanent — the carbon is held in a stable form for hundreds to thousands of years. We develop to standards that require these safeguards.",
        },
        {
          q: "How do I use carbon credits for my SBTi commitment?",
          a: "The Science Based Targets initiative (SBTi) requires you to cut your own emissions first; credits address the residual. SBTi distinguishes between avoidance credits and removal credits (such as ARR and biochar), and the requirements differ by target type — reaching net zero, in particular, requires durable removals to neutralise residual emissions. We help you match the right credit type to your specific target.",
        },
        {
          q: "What does VCS + CCB certification mean?",
          a: "VCS (the Verified Carbon Standard) is the world's most widely used carbon crediting programme; it verifies that each tonne is real, additional, and independently audited. CCB (the Climate, Community & Biodiversity Standards) certifies that a project also delivers measurable social and biodiversity benefits. A project carrying both has cleared a high bar on carbon integrity and on real-world impact.",
        },
        {
          q: "What is a Sylvera rating and why does it matter?",
          a: "Sylvera is an independent carbon-credit ratings agency that scores projects on quality, much as a credit rating scores a bond. A strong rating gives buyers third-party assurance — beyond certification — that a project will deliver what it claims.",
        },
        {
          q: "What is the difference between ARR and biochar?",
          a: "ARR (afforestation, reforestation and revegetation) grows new forest on degraded land, removing carbon from the atmosphere. Biochar converts biomass into a stable carbon stored for centuries — an equally durable removal, on a different timeline. We develop across both, so buyers can choose a single methodology or a blended portfolio.",
        },
        {
          q: "What happens after I place an order?",
          a: "We agree on volume, vintage, and price, then execute the contract. For spot purchases, we retire the credits in your name in the relevant Registry and deliver a full documentation package — project documents, verification, and retirement records. For future supply purchases, credits are delivered and retired on the agreed schedule as the project issues them. You retain access to project data throughout the whole process via GreenBranch Dashboard.",
        },
      ],
    },
    cta: {
      heading: "Ready to buy carbon credits?",
      lead: "Tell us your volume, timeline, and commitment type, and we will come back with available supply and pricing.",
      cta1: "Request pricing",
      cta2: "Schedule a call",
    },
  },
  pt: {
    hero: {
      eyebrow: "Para compradores",
      titleLine1: "Compre créditos de carbono",
      titleLine2: "direto da fonte",
      sub: "Créditos de alta qualidade em que você pode confiar",
      lead: "Se você está conduzindo um programa climático, cumprindo uma meta baseada na ciência ou a caminho do net zero, fornecemos créditos de remoção verificados, de projetos parceiros ou desenvolvidos por nós.",
      cta1: "Solicitar preços",
      cta2: "Agendar uma reunião",
    },
    useCases: {
      eyebrow: "Feito para o seu compromisso",
      heading: "Seja qual for o seu objetivo.",
      items: [
        { title: "Programas climáticos", desc: "Créditos de remoção por funcionário, produto ou cliente. Entregas recorrentes e documentação simples.", cta: "Solicitar preços" },
        { title: "Compromissos SBTi e 1%", desc: "Cumpra sua meta baseada na ciência com créditos verificados e avaliados, e relatórios prontos para auditoria.", cta: "Solicitar preços" },
        { title: "Net zero", desc: "Fornecimento de longo prazo, com créditos de diferentes safras e total transparência sobre o desempenho dos projetos.", cta: "Agendar uma reunião" },
      ],
    },
    supply: {
      eyebrow: "Como fornecemos",
      heading: "Duas formas de comprar.",
      spot: {
        title: "Spot",
        desc: "Créditos já emitidos, que você pode comprar e aposentar (retirar definitivamente do mercado) hoje mesmo. A forma mais simples de sustentar uma declaração climática de curto prazo.",
        bullets: [
          "Entregues e aposentados em seu nome, geralmente em poucos dias",
          "Certificados pelos padrões VCS + CCB e avaliados de forma independente",
          "Documentação completa — documentos do projeto, verificação e comprovantes de aposentadoria",
          "Ideal para metas do ano atual e declarações de curto prazo",
        ],
      },
      future: {
        title: "Fornecimento futuro",
        desc: "Créditos entregues no futuro, com preço fixado hoje e garantidos por projetos já em desenvolvimento.",
        bullets: [
          "Preço fixado agora para safras futuras — mais previsibilidade no orçamento",
          "Volume garantido, vinculado a um projeto específico",
          "Atualizações verificadas a cada etapa do projeto, pelo GreenBranch OS",
          "Pode ser estruturado como um contrato de offtake plurianual (ERPA — Emission Removal Purchase Agreement, um contrato de longo prazo para a compra de créditos futuros)",
          "Ideal para quem quer montar um portfólio de remoções ao longo de vários anos",
        ],
      },
      note: "Todos os créditos são certificados pelo VCS (o Verified Carbon Standard, o programa de certificação de carbono mais utilizado do mundo) e pelo CCB (o Climate, Community & Biodiversity Standards, que certifica cobenefícios sociais e de biodiversidade), e avaliados de forma independente pela Sylvera (uma agência de rating de créditos de carbono).",
    },
    methodologies: {
      eyebrow: "Três metodologias",
      heading: "Compre créditos de um tipo específico de projeto ou uma combinação dos três.",
      lead: "Você pode escolher um único tipo de projeto ou comprar de todo o nosso portfólio.",
      partnerNote: "A Green Branch é sua parceira na escolha de projetos. Oferecemos um portfólio de projetos desenvolvidos por nós ou selecionados pela nossa equipe técnica. Se você tiver exigências específicas de região, volume ou prazo, podemos buscar e selecionar outros projetos sob demanda. Todos os projetos, do portfólio ou buscados sob demanda, passam pela mesma due diligence. O que muda é o nosso papel em cada um.",
      items: [
        { tag: "Remoção", title: "ARR", sub: "Florestamento, reflorestamento e revegetação", desc: "Plantio de novas florestas biodiversas em terras degradadas, retirando carbono da atmosfera." },
        { tag: "Remoção", title: "Biochar", sub: "Carbono duradouro", desc: "Biomassa transformada em carbono estável, que fica armazenado por séculos." },
        { tag: "Evitação", title: "REDD+", sub: "Redução de emissões por desmatamento e degradação florestal", desc: "Preservação dos estoques de carbono atuais, com foco na conservação das florestas e da biodiversidade." },
      ],
      sourcing: {
        heading: "De onde vêm nossos projetos:",
        items: [
          {
            eyebrow: "Projetos próprios",
            title: "Desenvolvidos pela The Green Branch",
            desc: "Projetos que nossa equipe técnica identifica e desenvolve internamente, do estudo de viabilidade à implementação e emissão dos créditos, acompanhando cada etapa de acordo com requisitos rigorosos de certificação.",
            bullets: [
              "Relação direta com a terra e as comunidades",
              "Possibilidade de influenciar o desenho do projeto e os cobenefícios",
              "Garantia de volume no longo prazo e possibilidade de visitas de campo",
              "Acesso exclusivo, que você não encontra em outro lugar",
            ],
          },
          {
            eyebrow: "Projetos parceiros",
            title: "Selecionados pela The Green Branch",
            desc: "Projetos de terceiros que nossa equipe técnica avalia e seleciona com base em nossos critérios de qualidade e integridade e nos requisitos de certificação.",
            bullets: [
              "Mais opções de regiões e tipos de projeto",
              "Disponibilidade mais rápida, muitas vezes com créditos já emitidos",
              "O mesmo padrão de due diligence dos nossos próprios projetos",
              "Com rating independente e verificação em registro oficial",
            ],
          },
        ],
      },
    },
    steps: {
      eyebrow: "Como funciona",
      heading: "Do primeiro contato aos créditos aposentados.",
      items: [
        { num: "1", title: "Conte-nos o que você precisa", desc: "Informe o volume, o prazo e o tipo de compromisso." },
        { num: "2", title: "Indicamos os projetos certos", desc: "Em até 48 horas, você recebe os volumes disponíveis, os preços e uma proposta de condições." },
        { num: "3", title: "Créditos aposentados em sua conta", desc: "Cuidamos da aposentadoria no registro e enviamos toda a documentação." },
      ],
    },
    platform: {
      eyebrow: "TGB Dashboard",
      dashboardUrl: "https://dashboard.thegreenbranch.nl/",
      heading: "Tudo em um único painel.",
      lead: "Explore nosso catálogo de projetos já avaliados, acompanhe seu portfólio e guarde a comprovação de cada compra em um só lugar.",
      callouts: [
        "Explore nosso catálogo de projetos já avaliados",
        "Acompanhe seu portfólio",
        "Comprovação — todas as suas compras em um só lugar",
      ],
      rows: [
        {
          num: "01",
          kicker: "Portfólio",
          title: "Cada crédito que você possui, em um só lugar",
          desc: "Veja todos os seus créditos em uma única tela, organizados por projeto, volume e status. Sem planilhas para conferir nem e-mails antigos para procurar.",
          bullets: [
            "Cada crédito que você possui, por projeto, volume e status",
            "Total de CO₂ financiado e aposentado, acompanhado ao longo do tempo",
            "Um único acesso para as áreas de compras, financeiro e sustentabilidade",
          ],
        },
        {
          num: "02",
          kicker: "Comprovação",
          title: "Todos os seus certificados em um só lugar",
          desc: "A comprovação de que cada crédito foi aposentado em seu nome no registro oficial, onde não pode ser contado duas vezes nem revendido — disponível antes mesmo de um auditor pedir.",
          bullets: [
            "Comprovantes de aposentadoria no registro, em nome da sua empresa",
            "Documentação completa de cada projeto por trás dos seus créditos",
            "Os critérios de qualidade e a certificação de cada um",
          ],
        },
      ],
      ctaLine: "Toda compra inclui acesso ao GreenBranch Dashboard.",
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      heading: "Créditos de carbono, explicados.",
      items: [
        {
          q: "Qual é a diferença entre evitação de carbono e remoção de carbono?",
          a: "Créditos de evitação impedem emissões que aconteceriam de qualquer forma. Créditos de remoção retiram dióxido de carbono da atmosfera e o armazenam — por exemplo, com o plantio de uma nova floresta (ARR) ou a produção de biochar. Os dois têm valor, mas muitos padrões corporativos os tratam de forma diferente, e as remoções são cada vez mais exigidas para declarações de net zero.",
        },
        {
          q: "Os créditos baseados na natureza são permanentes?",
          a: "A permanência depende do tipo. O carbono florestal (ARR) é duradouro, mas há risco de perda por incêndio, doenças ou desmatamento. Projetos confiáveis gerenciam esse risco com reservas de créditos (buffer pools), prazos longos e monitoramento contínuo. O biochar é altamente permanente — o carbono fica armazenado em forma estável por centenas ou até milhares de anos. Seguimos padrões que exigem essas salvaguardas.",
        },
        {
          q: "Como usar créditos de carbono no meu compromisso SBTi?",
          a: "A Science Based Targets initiative (SBTi) exige que você reduza primeiro suas próprias emissões; os créditos servem para tratar o que sobra. A SBTi diferencia créditos de evitação e créditos de remoção (como ARR e biochar), e as exigências mudam conforme o tipo de meta — para chegar ao net zero, por exemplo, são necessárias remoções duradouras que neutralizem as emissões residuais. Ajudamos você a escolher o tipo de crédito certo para a sua meta.",
        },
        {
          q: "O que significa a certificação VCS + CCB?",
          a: "O VCS (Verified Carbon Standard) é o programa de certificação de carbono mais usado no mundo; ele garante que cada tonelada é real, adicional e auditada de forma independente. O CCB (Climate, Community & Biodiversity Standards) certifica que o projeto também gera benefícios sociais e de biodiversidade mensuráveis. Um projeto com as duas certificações atende a um padrão elevado, tanto de integridade de carbono quanto de impacto real.",
        },
        {
          q: "O que é uma classificação Sylvera e por que ela importa?",
          a: "A Sylvera é uma agência independente de rating de créditos de carbono que avalia a qualidade dos projetos, assim como uma agência de rating avalia um título de dívida. Uma boa classificação dá aos compradores uma garantia independente — além da certificação — de que o projeto vai entregar o que promete.",
        },
        {
          q: "Qual é a diferença entre ARR e biochar?",
          a: "O ARR (florestamento, reflorestamento e revegetação) planta novas florestas em terras degradadas, retirando carbono da atmosfera. O biochar transforma biomassa em carbono estável, armazenado por séculos — uma remoção igualmente duradoura, em outra escala de tempo. Atuamos nas duas frentes, para que você possa escolher uma única metodologia ou um portfólio combinado.",
        },
        {
          q: "O que acontece depois que eu faço um pedido?",
          a: "Definimos juntos o volume, a safra e o preço, e então assinamos o contrato. Nas compras spot, aposentamos os créditos em seu nome no registro correspondente e enviamos toda a documentação — documentos do projeto, verificação e comprovantes de aposentadoria. Nas compras de fornecimento futuro, os créditos são entregues e aposentados conforme o cronograma combinado, à medida que o projeto os emite. Durante todo o processo, você tem acesso aos dados do projeto pelo GreenBranch Dashboard.",
        },
      ],
    },
    cta: {
      heading: "Pronto para comprar créditos de carbono?",
      lead: "Informe o volume, o prazo e o tipo de compromisso, e retornaremos com a disponibilidade e os preços.",
      cta1: "Solicitar preços",
      cta2: "Agendar uma reunião",
    },
  },
};

export default function BuyRemovalsContent() {
  const { locale } = useLanguage();
  const t = content[locale];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="flex-1">

        {/* Hero — full-bleed photo with dark-green overlay */}
        <section className="relative min-h-[88vh] flex items-end overflow-hidden">
          <Image src="/img/buy-removals-hero.jpg" alt="Restored forest landscape" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/80 via-forest-deeper/45 to-forest-deeper/20" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-5">{t.hero.eyebrow}</div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-5">
                {t.hero.titleLine1}<br />{t.hero.titleLine2}
              </h1>
              <div className="h-1 w-20 bg-accent rounded-full mb-6" />
              <p className="text-2xl font-semibold text-accent mb-5">{t.hero.sub}</p>
              <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
                {t.hero.lead}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">
                  {t.hero.cta1} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/25">
                  {t.hero.cta2}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases — borderless, airy */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.useCases.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-14 max-w-2xl leading-[1.05]">{t.useCases.heading}</h2>
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
              {t.useCases.items.map((u, i) => {
                const Icon = useCaseIcons[i];
                return (
                  <div key={u.title} className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-forest" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-2.5">{u.title}</h3>
                    <p className="text-ink-soft leading-relaxed mb-5">{u.desc}</p>
                    <Link href="/contact" className="group inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-forest-dark transition-colors mt-auto">
                      {u.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How we supply — two products with characteristics */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.supply.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-12 leading-[1.05]">{t.supply.heading}</h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* Spot */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{t.supply.spot.title}</h3>
                </div>
                <p className="text-ink-soft leading-relaxed mb-6">
                  {t.supply.spot.desc}
                </p>
                <ul className="space-y-3">
                  {t.supply.spot.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Supply */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{t.supply.future.title}</h3>
                </div>
                <p className="text-ink-soft leading-relaxed mb-6">
                  {t.supply.future.desc}
                </p>
                <ul className="space-y-3">
                  {t.supply.future.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-14 text-sm text-ink-soft leading-relaxed max-w-4xl">
              {t.supply.note}
            </p>
          </div>
        </section>

        {/* Methodologies — photo-led */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-[0.2em] mb-3">{t.methodologies.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4 leading-[1.05] max-w-2xl">{t.methodologies.heading}</h2>
            <p className="text-ink-soft leading-relaxed mb-4 max-w-2xl">
              {t.methodologies.lead}
            </p>
            <p className="text-ink-soft leading-relaxed mb-12 max-w-2xl">
              {t.methodologies.partnerNote}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {t.methodologies.items.map((m, i) => (
                <div key={m.title} className="group relative h-96 rounded-3xl overflow-hidden">
                  <Image src={methodologyPhotos[i]} alt={m.sub} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/95 via-forest-deeper/35 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{m.tag}</div>
                    <h3 className="text-2xl font-extrabold text-white mb-1">{m.title}</h3>
                    <div className="text-sm font-semibold text-white/80 mb-2 md:min-h-[2.5rem]">{m.sub}</div>
                    <p className="text-sm text-white/65 leading-relaxed md:min-h-[4.5rem]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-navy mt-20 mb-8">{t.methodologies.sourcing.heading}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.methodologies.sourcing.items.map((s) => (
                <div key={s.title} className="bg-white rounded-3xl border border-border/60 p-8">
                  <div className="text-xs font-bold text-forest uppercase tracking-[0.15em] mb-3">{s.eyebrow}</div>
                  <h4 className="text-2xl font-bold text-ink mb-4">{s.title}</h4>
                  <p className="text-ink-soft leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works — dark atmospheric stepper */}
        <section className="relative py-24 overflow-hidden bg-forest-deeper">
          <Image src="/img/DSCF9647.JPG" alt="" fill sizes="100vw" className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-forest-deeper/70" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">{t.steps.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 leading-[1.05]">{t.steps.heading}</h2>
            <div className="relative grid md:grid-cols-3 gap-10">
              {/* Circles are left-aligned in each column (w-14 = 56px, so a 28px radius),
                  not centered, so the line's endpoints must land on each circle's actual
                  center: 28px from the left edge for circle 1, and — accounting for the
                  two gap-10 (40px) gutters eaten out of the grid — (100% - 164px) / 3 from
                  the right edge for circle 3. Plain 16.66% assumed no gutters and missed. */}
              <div className="hidden md:block absolute top-7 left-7 right-[calc((100%-164px)/3)] h-0.5 bg-white/15" />
              {t.steps.items.map((s) => (
                <div key={s.num} className="relative">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-accent text-forest-deeper flex items-center justify-center text-xl font-extrabold mb-5">{s.num}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform showcase — GreenBranch OS (audit/proof framing) */}
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <a
                href={t.platform.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 hover:text-accent-dark transition-colors"
              >
                {t.platform.eyebrow} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-[1.05]">{t.platform.heading}</h2>
              <p className="text-lg text-white/65 leading-relaxed">
                {t.platform.lead}
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {t.platform.callouts.map((c) => (
                <div key={c} className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 text-sm text-white/75 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature rows */}
        {t.platform.rows.map((r, idx) => {
          const meta = platformMeta[idx];
          return (
            <section key={r.num} className={idx % 2 === 1 ? "py-20 bg-cream" : "py-20 bg-white"}>
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-extrabold text-forest/25">{r.num}</span>
                    <span className="text-xs font-semibold text-forest uppercase tracking-[0.2em]">{r.kicker}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">{r.title}</h3>
                  <p className="text-ink-soft leading-relaxed mb-6">{r.desc}</p>
                  <ul className="space-y-3">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  {meta.image && (
                    <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                      <Image src={meta.image} alt={r.title} width={meta.w} height={meta.h} className="w-full h-auto" />
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* Platform CTA link */}
        <section className="py-12 bg-cream border-t border-border/60">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-ink-soft">{t.platform.ctaLine}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
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
                  <div className="px-6 pb-6 -mt-1 text-sm text-ink-soft leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
          <style>{`.faq-chevron { transition: rotate 300ms; } details[open] .faq-chevron { rotate: 180deg; }`}</style>
        </section>

        {/* CTA — full-bleed photo */}
        <section className="relative py-32 overflow-hidden text-center">
          <Image src="/img/DSCF9818.JPG" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-forest-deeper/85" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-[1.05]">{t.cta.heading}</h2>
            <p className="text-white/70 text-lg mb-9 leading-relaxed">{t.cta.lead}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-7 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02]">{t.cta.cta1}</Link>
              <Link href="/contact" className="px-7 py-4 border border-white/30 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors">{t.cta.cta2}</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
