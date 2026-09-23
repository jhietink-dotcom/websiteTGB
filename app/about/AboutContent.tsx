"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, TreePine, Factory, Package, Landmark, MapPin } from "lucide-react";
import { Tbc } from "@/components/Tbc";
import { SectionNav } from "@/components/SectionNav";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const partners = [
  { name: "Futuro Florestal", logo: "/img/logos/futuro-florestal.png", width: 335, height: 278 },
  { name: "Rabobank", logo: "/img/logos/rabobank.png", width: 1063, height: 192 },
  { name: "Implantar", logo: "/img/logos/implantar.png", width: 1969, height: 794 },
  { name: "NRC", logo: "/img/logos/nrc.png", width: 931, height: 391 },
];

const teamBase = [
  { name: "Jacob Hietink" },
  { name: "Kasper Kupperman" },
  { name: "Miriam Bellink" },
  { name: "Rafael Frade", credential: "CFA" },
  { name: "Stijn Ticheloven" },
  { name: "Alex Sousa", credential: "PhD" },
  { name: "Tom Nijman", credential: "PhD" },
  { name: "João Diniz" },
  { name: "Cristina Marini" },
  { name: "Bruna Franchi" },
  { name: "Alexandre Kampel" },
];

const resourceIcons = [BookOpen, TreePine, Factory, Package, Landmark, MapPin];

const content = {
  en: {
    hero: {
      eyebrow: "About us",
      titleLine1: "Impact-first.",
      titleLine2: "Built to last.",
      lead: "The Green Branch is a social impact company and an impact-first carbon asset developer and manager, building high-quality nature-based projects.",
      stats: [
        { value: "2019", label: "Founded" },
        { value: "4M ha", label: "Conservation goal by 2040" },
        { value: "VCS + CCB", label: "Certified to" },
      ],
    },
    navItems: [
      { id: "story", label: "Our story" },
      { id: "team", label: "Team" },
      { id: "resources", label: "Resources" },
    ],
    whoWeAre: {
      eyebrow: "Who we are",
      heading: "Founded to close the financing gap for nature-based climate solutions.",
      paragraphs: [
        "The Green Branch was founded in 2019 to close the financing gap for nature-based climate solutions. Restoration and conservation projects too often fail to reach maturity because they remain underfunded and lack technical capacity. We exist to change that.",
        "Today, The Green Branch is a social impact company and an impact-first carbon asset developer and manager. We operate at the intersection of technical development, financial structuring, and commercial strategy, working with local operational partners to originate and scale high-quality projects.",
        "Our vision is to increase biodiverse forest cover worldwide, conserving 4 million hectares of forest before 2040.",
      ],
      caption: "Field monitoring — Sapucaia, Brazil",
    },
    values: {
      eyebrow: "What we stand for",
      heading: "Values that guide every project we develop.",
      items: [
        { title: "Quality and credibility", desc: "We develop to the highest standards, including VCS and CCB. Technical rigour is our competitive advantage." },
        { title: "Long-term value", desc: "We think in decades, not quarters, and build relationships and infrastructure to match that horizon." },
        { title: "Transparency", desc: "We communicate openly about risks and trade-offs. No greenwashing, no empty promises." },
        { title: "Partnership", desc: "Local operational partners, investors, and buyers are true collaborators, not counterparties." },
      ],
    },
    approach: {
      eyebrow: "Our approach",
      heading: "How we work, from origination to scale.",
      steps: [
        { num: "01", title: "Originate", desc: "With local operational partners, we identify restoration and conservation projects with strong ecological and social foundations." },
        { num: "02", title: "Develop", desc: "We provide the technical development and financial structuring needed to bring projects to certification readiness under standards such as VCS and CCB." },
        { num: "03", title: "Manage", desc: "We manage each project as a long-term asset — MRV, compliance, and reporting — across its full lifetime." },
        { num: "04", title: "Scale", desc: "We replicate proven models to grow biodiverse forest cover, working towards our goal of conserving 4 million hectares before 2040." },
      ],
    },
    timeline: {
      eyebrow: "Milestones",
      heading: "Building since 2019.",
      items: [
        { year: "2019", text: "Founded to close the financing gap for nature-based climate solutions." },
        { year: "2022", text: "Trees for Farmers developed in partnership with Rabobank." },
        { year: "2023", text: "Built GreenBranch OS, our proprietary development and MRV platform." },
        { year: "2025", text: "Sapucaia certified to VCS and CCB, with a Sylvera rating." },
      ],
    },
    partners: {
      eyebrow: "Our partners",
      heading: "We build with trusted partners.",
      lead: "Our local operational partners, investors, and buyers are true collaborators in developing high-quality projects on the ground.",
    },
    team: {
      eyebrow: "The team",
      headingLine1: "Practitioners at the intersection of",
      headingLine2: "science, finance, and fieldwork.",
      lead: "A team spanning carbon development, GIS, finance, and field operations, working closely with our local operational partners.",
      roles: [
        "Co-Founder",
        "Co-Founder",
        "Co-Founder",
        "Head of Finance",
        "Origination Lead",
        "GIS Manager",
        "Operations Manager",
        "Operations Manager",
        "ESG and NBS Analyst – Africa Lead",
        "GIS Analyst",
        "Investment Analyst",
      ],
    },
    resources: {
      eyebrow: "Resources",
      heading: "Information decks and guides.",
      lead: "We produce information decks to help clients, partners, and investors get up to speed quickly. Request any of the below and we will share it with you.",
      items: [
        { tag: "Overview", title: "Company introduction", desc: "Who we are, what we develop, and how we work — a short overview of The Green Branch." },
        { tag: "Deck", title: "Reforestation (ARR)", desc: "Our approach to afforestation, reforestation and revegetation, with certification standards and reference projects." },
        { tag: "Deck", title: "Biochar co-development", desc: "For agribusinesses and industrial partners with biomass — how we co-develop industrial biochar projects." },
        { tag: "Guide", title: "Buyer's guide to emission removals", desc: "Spot, forward and offtake explained, with what to look for in high-integrity removals." },
        { tag: "Investors", title: "Investor overview", desc: "The Land Fund and Biochar Fund at a glance. Full documentation is shared with qualified investors on request." },
        { tag: "Project brief", title: "Sapucaia project brief", desc: "A deep-dive into our flagship certified reforestation project in Bahia." },
      ],
      requestCta: "Request the deck",
      tbc: "upload final deck files and wire direct or gated (email-capture) downloads; confirm which resources are public",
    },
    cta: {
      heading: "Work with us",
      lead: "Whether you are a landowner, an investor, or a company looking to act on climate, we would be glad to hear from you.",
      button: "Get in touch",
    },
  },
  pt: {
    hero: {
      eyebrow: "Sobre nós",
      titleLine1: "Impacto em primeiro lugar.",
      titleLine2: "Construído para durar.",
      lead: "A Green Branch é uma empresa de impacto social e uma desenvolvedora e gestora de ativos de carbono com foco em impacto, construindo projetos de base natural de alta qualidade.",
      stats: [
        { value: "2019", label: "Fundação" },
        { value: "4M ha", label: "Meta de conservação até 2040" },
        { value: "VCS + CCB", label: "Certificada pelos padrões" },
      ],
    },
    navItems: [
      { id: "story", label: "Nossa história" },
      { id: "team", label: "Equipe" },
      { id: "resources", label: "Recursos" },
    ],
    whoWeAre: {
      eyebrow: "Quem somos",
      heading: "Fundada para fechar a lacuna de financiamento das soluções climáticas baseadas na natureza.",
      paragraphs: [
        "A Green Branch foi fundada em 2019 para fechar a lacuna de financiamento das soluções climáticas baseadas na natureza. Projetos de restauração e conservação frequentemente não atingem a maturidade porque permanecem subfinanciados e carecem de capacidade técnica. Existimos para mudar isso.",
        "Hoje, a Green Branch é uma empresa de impacto social e uma desenvolvedora e gestora de ativos de carbono com foco em impacto. Atuamos na interseção entre desenvolvimento técnico, estruturação financeira e estratégia comercial, trabalhando com parceiros operacionais locais para originar e escalar projetos de alta qualidade.",
        "Nossa visão é aumentar a cobertura florestal biodiversa em todo o mundo, conservando 4 milhões de hectares de floresta até 2040.",
      ],
      caption: "Monitoramento de campo — Sapucaia, Brasil",
    },
    values: {
      eyebrow: "O que defendemos",
      heading: "Valores que orientam cada projeto que desenvolvemos.",
      items: [
        { title: "Qualidade e credibilidade", desc: "Desenvolvemos seguindo os mais altos padrões, incluindo VCS e CCB. O rigor técnico é nossa vantagem competitiva." },
        { title: "Valor de longo prazo", desc: "Pensamos em décadas, não em trimestres, e construímos relações e infraestrutura à altura desse horizonte." },
        { title: "Transparência", desc: "Comunicamos abertamente riscos e compensações. Sem greenwashing, sem promessas vazias." },
        { title: "Parceria", desc: "Parceiros operacionais locais, investidores e compradores são verdadeiros colaboradores, não apenas contrapartes." },
      ],
    },
    approach: {
      eyebrow: "Nossa abordagem",
      heading: "Como trabalhamos, da originação à escala.",
      steps: [
        { num: "01", title: "Originar", desc: "Com parceiros operacionais locais, identificamos projetos de restauração e conservação com bases ecológicas e sociais sólidas." },
        { num: "02", title: "Desenvolver", desc: "Fornecemos o desenvolvimento técnico e a estruturação financeira necessários para levar os projetos à prontidão de certificação sob padrões como VCS e CCB." },
        { num: "03", title: "Gerir", desc: "Gerimos cada projeto como um ativo de longo prazo — MRV, conformidade e relatórios — ao longo de todo o seu ciclo de vida." },
        { num: "04", title: "Escalar", desc: "Replicamos modelos comprovados para ampliar a cobertura florestal biodiversa, trabalhando rumo à nossa meta de conservar 4 milhões de hectares até 2040." },
      ],
    },
    timeline: {
      eyebrow: "Marcos",
      heading: "Construindo desde 2019.",
      items: [
        { year: "2019", text: "Fundada para fechar a lacuna de financiamento das soluções climáticas baseadas na natureza." },
        { year: "2022", text: "Trees for Farmers desenvolvido em parceria com o Rabobank." },
        { year: "2023", text: "Criamos a GreenBranch OS, nossa plataforma proprietária de desenvolvimento e MRV." },
        { year: "2025", text: "Sapucaia certificado pelos padrões VCS e CCB, com uma classificação Sylvera." },
      ],
    },
    partners: {
      eyebrow: "Nossos parceiros",
      heading: "Construímos com parceiros de confiança.",
      lead: "Nossos parceiros operacionais locais, investidores e compradores são verdadeiros colaboradores no desenvolvimento de projetos de alta qualidade no terreno.",
    },
    team: {
      eyebrow: "A equipe",
      headingLine1: "Profissionais na interseção entre",
      headingLine2: "ciência, finanças e trabalho de campo.",
      lead: "Uma equipe que abrange desenvolvimento de carbono, SIG, finanças e operações de campo, trabalhando em estreita colaboração com nossos parceiros operacionais locais.",
      roles: [
        "Cofundador",
        "Cofundador",
        "Cofundadora",
        "Diretor de Finanças",
        "Líder de Originação",
        "Gerente de SIG",
        "Gerente de Operações",
        "Gerente de Operações",
        "Analista de ESG e SBN – Líder para África",
        "Analista de SIG",
        "Analista de Investimentos",
      ],
    },
    resources: {
      eyebrow: "Recursos",
      heading: "Apresentações e guias informativos.",
      lead: "Produzimos apresentações informativas para ajudar clientes, parceiros e investidores a se atualizarem rapidamente. Solicite qualquer um dos itens abaixo e nós o compartilharemos com você.",
      items: [
        { tag: "Visão geral", title: "Apresentação da empresa", desc: "Quem somos, o que desenvolvemos e como trabalhamos — uma visão geral resumida da Green Branch." },
        { tag: "Apresentação", title: "Reflorestamento (ARR)", desc: "Nossa abordagem para florestamento, reflorestamento e revegetação, com padrões de certificação e projetos de referência." },
        { tag: "Apresentação", title: "Co-desenvolvimento de biochar", desc: "Para agronegócios e parceiros industriais com biomassa — como co-desenvolvemos projetos industriais de biochar." },
        { tag: "Guia", title: "Guia do comprador para remoções de emissões", desc: "Spot, forward e offtake explicados, com o que observar em remoções de alta integridade." },
        { tag: "Investidores", title: "Visão geral para investidores", desc: "O Land Fund e o Biochar Fund em resumo. A documentação completa é compartilhada com investidores qualificados mediante solicitação." },
        { tag: "Resumo do projeto", title: "Resumo do projeto Sapucaia", desc: "Um aprofundamento sobre nosso principal projeto de reflorestamento certificado na Bahia." },
      ],
      requestCta: "Solicitar apresentação",
      tbc: "enviar os arquivos finais das apresentações e configurar downloads diretos ou com captura de e-mail; confirmar quais recursos são públicos",
    },
    cta: {
      heading: "Trabalhe conosco",
      lead: "Seja você um proprietário de terra, um investidor ou uma empresa que busca agir pelo clima, teremos prazer em ouvir você.",
      button: "Entre em contato",
    },
  },
};

export default function AboutContent() {
  const { locale } = useLanguage();
  const t = content[locale];
  const team = teamBase.map((m, i) => ({ ...m, role: t.team.roles[i] }));

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
          <Image src="/img/DSCF0278.JPG" alt="The Green Branch team" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deeper/50 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-5">{t.hero.eyebrow}</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
              {t.hero.titleLine1}<br />
              <span className="text-accent">{t.hero.titleLine2}</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              {t.hero.lead}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION NAV ────────────────────────────────────── */}
        <SectionNav items={t.navItems} />

        {/* ══ OUR STORY ══════════════════════════════════════ */}
        <div id="story" className="scroll-mt-32">
          {/* Who we are */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">{t.whoWeAre.eyebrow}</div>
                <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
                  {t.whoWeAre.heading}
                </h2>
                <div className="space-y-4 text-ink-soft leading-relaxed">
                  {t.whoWeAre.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image src="/img/DSCF9864.JPG" alt="Field monitoring in project area" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-white/60 italic">{t.whoWeAre.caption}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-24 bg-forest-muted">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.values.eyebrow}</div>
              <h2 className="text-3xl font-extrabold text-navy mb-12 max-w-xl">{t.values.heading}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.values.items.map((v, i) => (
                  <div key={v.title} className="bg-white rounded-2xl p-6 border border-border">
                    <div className="text-3xl font-extrabold text-forest/15 mb-3 select-none">{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-bold text-ink mb-2">{v.title}</div>
                    <div className="text-sm text-ink-soft leading-relaxed">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[420px] rounded-2xl overflow-hidden lg:order-first order-last">
                <Image src="/img/DSCF9807.JPG" alt="Team walking through restoration site at golden hour" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/40 to-transparent" />
              </div>
              <div>
                <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">{t.approach.eyebrow}</div>
                <h2 className="text-3xl font-extrabold text-navy mb-8 leading-tight">{t.approach.heading}</h2>
                <div className="space-y-6">
                  {t.approach.steps.map((s) => (
                    <div key={s.num} className="flex gap-5 items-start">
                      <div className="text-2xl font-extrabold text-forest/20 shrink-0 w-8 leading-none">{s.num}</div>
                      <div>
                        <div className="text-sm font-bold text-ink mb-1">{s.title}</div>
                        <div className="text-sm text-ink-soft leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24 bg-muted">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.timeline.eyebrow}</div>
              <h2 className="text-3xl font-extrabold text-navy mb-14">{t.timeline.heading}</h2>
              <div className="space-y-0">
                {t.timeline.items.map((item, i) => (
                  <div key={item.year} className="flex gap-8 items-start group">
                    <div className="text-right shrink-0 w-14"><span className="text-sm font-bold text-forest">{item.year}</span></div>
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-forest mt-0.5 shrink-0" />
                      {i < t.timeline.items.length - 1 && <div className="w-px flex-1 bg-forest/20 mt-1 min-h-[32px]" />}
                    </div>
                    <div className="pb-8">
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.partners.eyebrow}</div>
              <h2 className="text-3xl font-extrabold text-navy mb-4 max-w-xl">{t.partners.heading}</h2>
              <p className="text-ink-soft mb-12 max-w-2xl leading-relaxed">
                {t.partners.lead}
              </p>
              <div className="flex flex-wrap items-center gap-10">
                {partners.map((p) => (
                  <Image
                    key={p.name}
                    src={p.logo}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    className="h-10 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ══ TEAM ═══════════════════════════════════════════ */}
        <section id="team" className="scroll-mt-32 py-24 bg-forest-deeper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{t.team.eyebrow}</div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {t.team.headingLine1}<br className="hidden sm:block" /> {t.team.headingLine2}
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl">
              {t.team.lead}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((m) => (
                <div key={m.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-forest/50 flex items-center justify-center mb-4 text-sm font-extrabold text-white">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-bold text-white mb-0.5">{m.name}{m.credential ? `, ${m.credential}` : ""}</div>
                  <div className="text-xs font-semibold text-accent">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ RESOURCES ══════════════════════════════════════ */}
        <section id="resources" className="scroll-mt-32 py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.resources.eyebrow}</div>
            <h2 className="text-3xl font-extrabold text-navy mb-4 max-w-xl">{t.resources.heading}</h2>
            <p className="text-ink-soft mb-12 max-w-2xl leading-relaxed">
              {t.resources.lead}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.resources.items.map((r, i) => {
                const Icon = resourceIcons[i];
                return (
                  <div key={r.title} className="flex flex-col rounded-2xl border border-border bg-white p-6 hover:border-forest/30 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-forest-muted flex items-center justify-center">
                        <Icon className="w-5 h-5 text-forest" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-forest/60">{r.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{r.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mb-5 flex-1">{r.desc}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-dark transition-colors">
                      {t.resources.requestCta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-xs text-ink/50">
              <Tbc>{t.resources.tbc}</Tbc>
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-28">
          <Image src="/img/DSCF9876.JPG" alt="Forest landscape" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-forest-deeper/80" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">{t.cta.heading}</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              {t.cta.lead}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
              {t.cta.button} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
