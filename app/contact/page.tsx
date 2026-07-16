"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Calendar, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-forest-deeper py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Contact</div>
            <h1 className="text-4xl font-bold text-white mb-4">Get in touch with The Green Branch</h1>
            <p className="text-white/60 max-w-xl">Our team is happy to discuss project development, investment opportunities, or carbon credit procurement.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">Reach us</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-ink-soft">
                    <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <div>Weesperstraat 111<br />1018 VN Amsterdam<br />The Netherlands</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink-soft">
                    <Mail className="w-4 h-4 text-forest shrink-0" />
                    <a href="mailto:hello@thegreenbranch.nl" className="hover:text-forest transition-colors">hello@thegreenbranch.nl</a>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-forest-muted border border-forest/10">
                <Calendar className="w-5 h-5 text-forest mb-3" />
                <div className="text-sm font-bold text-ink mb-1">Schedule a call</div>
                <div className="text-xs text-ink-soft mb-3">Prefer to talk? Book a 30-minute intro call with our team.</div>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-forest-light transition-colors">
                  Book a slot <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold text-ink uppercase tracking-wider">How can we help?</div>
                {["Project development", "Investment opportunities", "Carbon credit purchases", "Advisory services"].map((t) => (
                  <div key={t} className="text-sm text-ink-soft flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-forest" />
                    {t}
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
                  <h3 className="text-xl font-bold text-ink mb-2">Message sent!</h3>
                  <p className="text-ink-soft text-sm">We&apos;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-ink-soft block mb-1.5">Your name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-ink-soft block mb-1.5">Email address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink-soft block mb-1.5">How can we help?</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option>Project development</option>
                      <option>Investment opportunities</option>
                      <option>Carbon credit purchases</option>
                      <option>Advisory services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink-soft block mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:border-forest transition-colors resize-none"
                      placeholder="Tell us about your project, investment interest, or question..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest-light transition-colors"
                  >
                    Send message <ArrowRight className="w-4 h-4" />
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
