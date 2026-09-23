"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const content = {
  en: {
    hero: {
      eyebrow: "Contact",
      heading: "Get in touch with The Green Branch",
      lead: "Tell us who you are and what you are working on — we will route you to the right person.",
    },
    routes: {
      eyebrow: "Who are you?",
      heading: "Three ways we can help, depending on what you are working on.",
      cards: [
        { title: "For buyers", desc: "Enquire about available emission removal volumes and pricing.", cta: "Explore removals" },
        { title: "For investors", desc: "Request our fund documentation. Available to qualified and professional investors only.", cta: "Request documentation" },
        { title: "For project developers", desc: "Submit your project for screening via GreenBranch OS, our project intake and diligence platform.", cta: "Go to GreenBranch OS" },
      ],
      grievanceCta: "File a grievance",
    },
    reachUs: {
      eyebrow: "Reach us",
      addressLines: ["Plantage Middenlaan 2c", "1018 DD Amsterdam", "The Netherlands"],
    },
    scheduleCall: {
      title: "Schedule a call",
      desc: "Prefer to talk? Book a 30-minute intro call with our team.",
      cta: "Book a slot",
    },
    howCanWeHelp: {
      label: "How can we help?",
      items: ["Buyers: volumes and pricing", "Investors: fund documentation", "Developers: project screening via GreenBranch OS"],
    },
    success: {
      title: "Message sent!",
      desc: "We'll get back to you within 1–2 business days.",
    },
    form: {
      nameLabel: "Your name *",
      namePlaceholder: "Jane Smith",
      emailLabel: "Email address *",
      emailPlaceholder: "jane@company.com",
      subjectLabel: "How can we help?",
      subjectPlaceholder: "Select a topic",
      subjectOptions: [
        "Buyer: emission removal volumes and pricing",
        "Investor: fund documentation (qualified/professional only)",
        "Project developer: submit a project via GreenBranch OS",
        "Other",
      ],
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your project, investment interest, or the emission removals you are looking for...",
      submit: "Send message",
    },
  },
  pt: {
    hero: {
      eyebrow: "Contato",
      heading: "Entre em contato com a Green Branch",
      lead: "Conte-nos quem você é e no que está trabalhando — nós o direcionaremos para a pessoa certa.",
    },
    routes: {
      eyebrow: "Quem é você?",
      heading: "Três formas de ajudar, dependendo do que você está buscando.",
      cards: [
        { title: "Para compradores", desc: "Consulte sobre volumes de remoções de emissão disponíveis e preços.", cta: "Explorar remoções" },
        { title: "Para investidores", desc: "Solicite nossa documentação de fundo. Disponível apenas para investidores qualificados e profissionais.", cta: "Solicitar documentação" },
        { title: "Para desenvolvedores de projetos", desc: "Submeta seu projeto para triagem através da GreenBranch OS, nossa plataforma de captação e diligência de projetos.", cta: "Acessar a GreenBranch OS" },
      ],
      grievanceCta: "Registrar uma reclamação",
    },
    reachUs: {
      eyebrow: "Fale conosco",
      addressLines: ["Plantage Middenlaan 2c", "1018 DD Amsterdã", "Países Baixos"],
    },
    scheduleCall: {
      title: "Agende uma call",
      desc: "Prefere conversar? Agende uma chamada de apresentação de 30 minutos com nossa equipe.",
      cta: "Agendar horário",
    },
    howCanWeHelp: {
      label: "Como podemos ajudar?",
      items: ["Compradores: volumes e preços", "Investidores: documentação de fundo", "Desenvolvedores: triagem de projetos via GreenBranch OS"],
    },
    success: {
      title: "Mensagem enviada!",
      desc: "Retornaremos em 1 a 2 dias úteis.",
    },
    form: {
      nameLabel: "Seu nome *",
      namePlaceholder: "Maria Silva",
      emailLabel: "Endereço de e-mail *",
      emailPlaceholder: "maria@empresa.com",
      subjectLabel: "Como podemos ajudar?",
      subjectPlaceholder: "Selecione um assunto",
      subjectOptions: [
        "Comprador: volumes de remoções de emissão e preços",
        "Investidor: documentação de fundo (somente qualificados/profissionais)",
        "Desenvolvedor de projeto: submeter um projeto via GreenBranch OS",
        "Outro",
      ],
      messageLabel: "Mensagem *",
      messagePlaceholder: "Conte-nos sobre seu projeto, interesse de investimento, ou as remoções de emissão que você procura...",
      submit: "Enviar mensagem",
    },
  },
};

export default function ContactContent() {
  const { locale } = useLanguage();
  const t = content[locale];
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const routeHrefs = ["/buy-removals", "mailto:hello@thegreenbranch.nl?subject=Fund%20documentation%20request", "/greenbranch-os"];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">{t.hero.eyebrow}</div>
            <h1 className="text-4xl font-bold text-white mb-4">{t.hero.heading}</h1>
            <p className="text-white/60 max-w-xl">{t.hero.lead}</p>
          </div>
        </section>

        {/* Audience routes */}
        <section className="py-16 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.routes.eyebrow}</div>
            <h2 className="text-2xl font-bold text-navy mb-8 max-w-xl">{t.routes.heading}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.routes.cards.map((c, i) => (
                <div key={c.title} className="p-6 rounded-2xl bg-white border border-border flex flex-col">
                  <div className="text-sm font-bold text-navy mb-2">{c.title}</div>
                  <p className="text-sm text-ink-soft mb-4 flex-1">{c.desc}</p>
                  <a href={routeHrefs[i]} className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-forest-light transition-colors">
                    {c.cta} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
            <Link
              href="/grievance"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors"
            >
              {t.routes.grievanceCta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">{t.reachUs.eyebrow}</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-ink-soft">
                    <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <div>{t.reachUs.addressLines[0]}<br />{t.reachUs.addressLines[1]}<br />{t.reachUs.addressLines[2]}</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-soft">
                    <Mail className="w-4 h-4 text-forest shrink-0" />
                    <a href="mailto:hello@thegreenbranch.nl" className="hover:text-forest transition-colors">hello@thegreenbranch.nl</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-soft">
                    <ArrowRight className="w-4 h-4 text-forest shrink-0" />
                    <a href="https://www.thegreenbranch.nl" className="hover:text-forest transition-colors">www.thegreenbranch.nl</a>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-forest-muted border border-forest/10">
                <Calendar className="w-5 h-5 text-forest mb-3" />
                <div className="text-sm font-bold text-ink mb-1">{t.scheduleCall.title}</div>
                <div className="text-xs text-ink-soft mb-3">{t.scheduleCall.desc}</div>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-forest-light transition-colors">
                  {t.scheduleCall.cta} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold text-ink uppercase tracking-wider">{t.howCanWeHelp.label}</div>
                {t.howCanWeHelp.items.map((item) => (
                  <div key={item} className="text-sm text-ink-soft flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-forest" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-64 text-center p-8 bg-forest-muted rounded-2xl border border-forest/10">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{t.success.title}</h3>
                  <p className="text-ink-soft text-sm">{t.success.desc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-ink-soft block mb-1.5">{t.form.nameLabel}</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors"
                        placeholder={t.form.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-ink-soft block mb-1.5">{t.form.emailLabel}</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors"
                        placeholder={t.form.emailPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink-soft block mb-1.5">{t.form.subjectLabel}</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors bg-white"
                    >
                      <option value="">{t.form.subjectPlaceholder}</option>
                      {t.form.subjectOptions.map((o, i) => (
                        // Value is a locale-independent index, not the translated label —
                        // keeps the selection intact if the user switches language mid-fill.
                        <option key={i} value={i}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink-soft block mb-1.5">{t.form.messageLabel}</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors resize-none"
                      placeholder={t.form.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors"
                  >
                    {t.form.submit} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
