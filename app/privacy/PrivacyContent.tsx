"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TbcBlock } from "@/components/Tbc";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const content = {
  en: {
    eyebrow: "Legal",
    heading: "Privacy Policy",
    body: "The Green Branch is committed to protecting your personal data and processing it in accordance with the EU General Data Protection Regulation (GDPR). This page will set out what data we collect, how we use it, the legal basis for processing, how long we retain it, and your rights as a data subject.",
    tbcPrefix: "Final privacy policy wording is to be provided and approved by legal counsel before launch. For any privacy enquiry in the meantime, contact",
  },
  pt: {
    eyebrow: "Legal",
    heading: "Política de Privacidade",
    body: "A Green Branch está comprometida em proteger seus dados pessoais e tratá-los em conformidade com o Regulamento Geral de Proteção de Dados da UE (GDPR). Esta página estabelecerá quais dados coletamos, como os utilizamos, a base legal para o tratamento, por quanto tempo os retemos, e seus direitos como titular dos dados.",
    tbcPrefix: "O texto final da política de privacidade será fornecido e aprovado pelo departamento jurídico antes do lançamento. Para qualquer dúvida sobre privacidade enquanto isso, entre em contato com",
  },
};

export default function PrivacyContent() {
  const { locale } = useLanguage();
  const t = content[locale];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">{t.eyebrow}</div>
            <h1 className="text-4xl font-bold text-navy mb-6">{t.heading}</h1>
            <p className="text-ink-soft leading-relaxed mb-8">
              {t.body}
            </p>
            <TbcBlock>
              {t.tbcPrefix}{" "}
              <a href="mailto:hello@thegreenbranch.nl" className="font-semibold text-forest">hello@thegreenbranch.nl</a>.
            </TbcBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
