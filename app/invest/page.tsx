import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function InvestPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-forest-deeper py-24">
          <div className="max-w-7xl mx-auto px-6 max-w-3xl">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Invest in nature</div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Connect your capital with verified nature restoration.</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">Our tailored investment opportunities link private capital with high-integrity projects that deliver measurable environmental impact alongside sustainable financial returns.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
              Explore opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">Investment model</div>
              <h2 className="text-3xl font-bold text-ink mb-5">Impact and return, not a trade-off.</h2>
              <p className="text-ink-soft leading-relaxed mb-4">The Green Branch structures investments to deliver both environmental additionality and risk-adjusted financial returns. Projects are selected based on rigorous ecological criteria and developed to institutional standards via OS TGB.</p>
              <p className="text-ink-soft leading-relaxed mb-6">Investors gain direct exposure to the voluntary carbon market — one of the fastest-growing asset classes in sustainable finance — with the transparency and traceability that only a technology-enabled developer can provide.</p>
              <ul className="space-y-2">
                {["Direct project investment with clear return structure", "Portfolio diversification across geographies & biomes", "Full access to OS TGB Investor Dashboard", "Regular reporting — financial, operational, and impact"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Project Development", desc: "Early-stage capital for feasibility and PDD development, with upside on credit issuance." },
                { title: "Carbon Credit Offtake", desc: "ERPA structures giving price certainty and supply guarantees over multi-year horizons." },
                { title: "Portfolio Funds", desc: "Diversified exposure across multiple TGB projects in different geographies." },
                { title: "Advisory Co-investment", desc: "Co-invest alongside TGB in projects we are actively managing and advising." },
              ].map((t) => (
                <div key={t.title} className="p-5 rounded-xl border border-border bg-white hover:border-forest/30 transition-all">
                  <div className="text-sm font-bold text-ink mb-2">{t.title}</div>
                  <div className="text-xs text-ink-soft leading-relaxed">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-forest text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in investing?</h2>
            <p className="text-white/70 mb-8">Reach out to our investor relations team to discuss available opportunities and our current project pipeline.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
              Contact investor relations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
