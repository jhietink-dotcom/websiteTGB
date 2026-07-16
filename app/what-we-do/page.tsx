import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6 max-w-3xl">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">What we do</div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Bringing projects to scale to fight climate change.</h1>
            <p className="text-lg text-white/60 leading-relaxed">Our mission is to find, scale, and operate the highest-quality nature-based removal projects worldwide.</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-5">Carbon asset development & management.</h2>
              <p className="text-ink-soft leading-relaxed mb-4">The Green Branch identifies ecologically sound projects with credible local partners in regions with high climate and biodiversity potential. We prepare them for carbon market readiness — providing early-stage funding, technical assistance, and long-term asset management.</p>
              <p className="text-ink-soft leading-relaxed mb-8">We operate at the intersection of science, finance, and fieldwork — and we built OS TGB to make every step traceable.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Carbon Asset Development", items: ["Technical feasibility", "Project structuring", "Certification & compliance", "Financial modelling"] },
                  { title: "Asset Management", items: ["MRV & monitoring", "Risk mitigation", "Credit issuance", "Revenue optimisation"] },
                ].map((col) => (
                  <div key={col.title} className="p-5 rounded-xl bg-forest-muted">
                    <div className="text-sm font-bold text-ink mb-3">{col.title}</div>
                    <ul className="space-y-1.5">
                      {col.items.map((i) => (
                        <li key={i} className="text-xs text-ink-soft flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-forest" />{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-5">Built around high-integrity standards.</h2>
              <p className="text-ink-soft leading-relaxed mb-6">Every project we develop follows rigorous scientific standards and globally recognised methodologies. We work with leading certification bodies and build projects that will stand up to any scrutiny — now, and decades from now.</p>
              <div className="space-y-3">
                {["Core Carbon Principles (ICVCM)", "Verra VCS Standard", "Gold Standard", "CCB Standards (biodiversity & community)"].map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-white text-sm font-medium text-ink">
                    <div className="w-2 h-2 rounded-full bg-forest shrink-0" />{s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-4">See how we work in practice.</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/projects" className="px-5 py-2.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">View projects</Link>
              <Link href="/os-tgb" className="px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/10">Explore OS TGB</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-ink mb-4">Work with us</h2>
            <p className="text-ink-soft mb-8">Whether you&apos;re a developer, investor, or buyer — there&apos;s a role for you in the TGB ecosystem.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/develop" className="px-5 py-2.5 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors">Develop a project <ArrowRight className="w-4 h-4 inline ml-1" /></Link>
              <Link href="/invest" className="px-5 py-2.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Invest in nature</Link>
              <Link href="/secure-credits" className="px-5 py-2.5 border border-border text-ink text-sm font-semibold rounded-xl hover:border-forest hover:text-forest transition-colors">Secure credits</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
