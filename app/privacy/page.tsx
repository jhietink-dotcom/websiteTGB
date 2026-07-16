import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TbcBlock } from "@/components/Tbc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The Green Branch privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Legal</div>
            <h1 className="text-4xl font-bold text-navy mb-6">Privacy Policy</h1>
            <p className="text-ink-soft leading-relaxed mb-8">
              The Green Branch is committed to protecting your personal data and processing it in accordance with the EU General Data Protection Regulation (GDPR). This page will set out what data we collect, how we use it, the legal basis for processing, how long we retain it, and your rights as a data subject.
            </p>
            <TbcBlock>
              Final privacy policy wording is to be provided and approved by legal counsel before launch. For any privacy enquiry in the meantime, contact{" "}
              <a href="mailto:hello@thegreenbranch.nl" className="font-semibold text-forest">hello@thegreenbranch.nl</a>.
            </TbcBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
