import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TbcBlock } from "@/components/Tbc";

export const metadata: Metadata = {
  title: "Grievance Mechanism",
  description: "The Green Branch grievance mechanism and forms.",
};

export default function GrievancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Accountability</div>
            <h1 className="text-4xl font-bold text-navy mb-6">Grievance Mechanism</h1>
            <p className="text-ink-soft leading-relaxed mb-8">
              We are committed to developing projects that respect the rights and interests of local communities. Our grievance mechanism provides a transparent, accessible channel for any stakeholder to raise concerns about our projects, and sets out how those concerns are received, investigated, and resolved.
            </p>
            <TbcBlock>
              The formal grievance procedure and downloadable forms are to be finalised before launch. To raise a grievance in the meantime, contact{" "}
              <a href="mailto:hello@thegreenbranch.nl" className="font-semibold text-forest">hello@thegreenbranch.nl</a>.
            </TbcBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
