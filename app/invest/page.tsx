import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { InvestorGate } from "@/components/InvestorGate";
import { Tbc } from "@/components/Tbc";
import { ArrowRight, CheckCircle2, TreePine, Factory, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Two ways to invest in carbon removal at the foundation of the market: the land that grows the forests, and the facilities that produce durable carbon. Qualified investors only.",
};

const landFund = {
  points: [
    { label: "Underlying asset", value: "Rural land in established restoration regions of Brazil." },
    { label: "Return drivers", value: "Land appreciation and long-term emission removal revenues under offtake agreements." },
    { label: "Risk management", value: "Staged capital deployment through our stage-gate process; conservative carbon modelling with explicit risk discounts; certified methodologies and independent ratings." },
  ],
};

export default function InvestPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero (ungated) */}
        <section className="bg-forest-deeper py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Invest</div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Invest where removals begin.</h1>
            <p className="text-lg text-white/60 leading-relaxed">
              The Green Branch structures investment products at the foundation of the removals market: the land that grows the forests, and the facilities that produce durable carbon. Two products, one development discipline.
            </p>
          </div>
        </section>

        {/* Gated content */}
        <InvestorGate>
          {/* Product 1 — Land Fund */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-muted flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-forest" />
                </div>
                <span className="text-xs font-semibold text-forest uppercase tracking-widest">Product 1 — Land Fund</span>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">Own the land. Grow the forest. Share in the removals.</h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-3xl">
                Invest from €100,000 in land acquisition for large-scale reforestation in Brazil — a real asset with an emission removal stream on top.
              </p>
              <div className="grid lg:grid-cols-2 gap-10">
                <ul className="space-y-4">
                  {landFund.points.map((p) => (
                    <li key={p.label} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-ink">{p.label}</div>
                        <div className="text-sm text-ink-soft leading-relaxed">{p.value}</div>
                      </div>
                    </li>
                  ))}
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">Structure</div>
                      <div className="text-sm text-ink-soft leading-relaxed">
                        €100,000 minimum ticket; participation via a dedicated project vehicle (SPV) with defined governance and benefit sharing. <Tbc>confirm final structure with counsel</Tbc>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="rounded-2xl bg-forest-muted/50 border border-forest/10 p-7">
                  <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">Why now</div>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4">
                    Brazil&apos;s carbon market is institutionalising: the national emissions trading system (SBCE, Law 15,042/2024) is being implemented, and COP30 in Belém has placed Brazilian restoration at the centre of the global removals conversation.
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    Land in eligible regions is appreciating as industrial actors compete for restoration-grade hectares.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors">
                    Request Land Fund documentation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Product 2 — Biochar Fund */}
          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-muted flex items-center justify-center">
                  <Factory className="w-5 h-5 text-forest" />
                </div>
                <span className="text-xs font-semibold text-forest uppercase tracking-widest">Product 2 — Biochar Fund</span>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">Invest in durable carbon removal.</h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-3xl">
                Exposure to industrial biochar production in Brazil — engineered removals with permanence measured in centuries.
              </p>
              <div className="grid lg:grid-cols-2 gap-10">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">Strategy</div>
                      <div className="text-sm text-ink-soft leading-relaxed">Development and expansion capital for industrial biochar facilities in Brazil.</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">Revenue model</div>
                      <div className="text-sm text-ink-soft leading-relaxed">
                        Sale of certified biochar removals via spot, forward and offtake agreements; secondary revenue from biochar product sales. <Tbc>confirm revenue model</Tbc>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">Why the thesis holds</div>
                      <div className="text-sm text-ink-soft leading-relaxed">Durable removals command a structural price premium and supply is scarce; Brazil combines abundant sustainable biomass residues with industrial capability.</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-ink">Terms</div>
                      <div className="text-sm text-ink-soft leading-relaxed">
                        Target size, minimum commitment and structure. <Tbc>to be confirmed with counsel</Tbc>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="rounded-2xl bg-white border border-border p-7">
                  <p className="text-sm text-ink-soft leading-relaxed mb-6">
                    Our first industrial biochar project is being developed with Rabobank as partner.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-dark transition-colors">
                    Request Biochar Fund documentation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why invest through TGB */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-widest mb-3">
                <TrendingUp className="w-4 h-4" /> Why invest through The Green Branch
              </div>
              <h2 className="text-3xl font-bold text-navy mb-6">A track record, and a de-risked pipeline.</h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                Four projects developed, including Sapucaia (certified, independently rated by Sylvera) and Trees for Farmers (developed with Rabobank, selected by the Amazon Green Pledge RfP for a 10,000-hectare offtake).
              </p>
              <p className="text-ink-soft leading-relaxed">
                A pipeline of approximately 15 projects targeting more than 40 million tonnes of removals — every one screened, scored, and de-risked through the same stage-gate process.
              </p>
            </div>
          </section>
        </InvestorGate>

        {/* Legal disclaimer (always shown) */}
        <section className="py-10 bg-forest-deeper">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs text-white/50 leading-relaxed">
              The information on this website does not constitute an offer of securities or investment advice. Investment opportunities are available to qualified investors only and are subject to the documentation provided upon registration. <span className="text-accent/80">[Final wording to be confirmed by legal counsel.]</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
