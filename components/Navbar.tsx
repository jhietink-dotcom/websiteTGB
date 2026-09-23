"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type SubLink = { label: string; href: string; desc: string };
type NavItem = { id: string; label: string; href?: string; children?: SubLink[] };

function buildLocale(opts: {
  develop: SubLink[];
  services: SubLink[];
  about: SubLink[];
  navLabels: { develop: string; services: string; projects: string; about: string };
  contact: string;
  grievance: string;
  getStarted: string;
}) {
  const { develop, services, about, navLabels } = opts;
  const nav: NavItem[] = [
    { id: "develop", label: navLabels.develop, children: develop },
    { id: "services", label: navLabels.services, children: services },
    { id: "projects", label: navLabels.projects, href: "/projects" },
    { id: "about", label: navLabels.about, children: about },
  ];
  return { develop, services, about, nav, contact: opts.contact, grievance: opts.grievance, getStarted: opts.getStarted };
}

const navContent: Record<"en" | "pt", ReturnType<typeof buildLocale>> = {
  en: buildLocale({
    develop: [
      { label: "Reforestation (ARR)", href: "/develop/arr", desc: "From degraded pasture to certified forest" },
      { label: "Biochar", href: "/develop/biochar", desc: "Durable removal, measured in centuries" },
    ],
    services: [
      { label: "Advisory", href: "/advisory", desc: "Carbon strategy for buyers, developers and investors" },
      { label: "Buy Carbon Credits", href: "/buy-removals", desc: "Spot, forward and offtake emission removals" },
      { label: "Invest", href: "/invest", desc: "Land Fund and Biochar Fund investment products" },
    ],
    about: [
      { label: "Our story", href: "/about#story", desc: "Who we are, our approach and milestones" },
      { label: "Team", href: "/about#team", desc: "The people behind The Green Branch" },
      { label: "Resources", href: "/about#resources", desc: "Information decks and guides" },
      { label: "Our Tech", href: "/greenbranch-os", desc: "GreenBranch OS — our development and MRV platform" },
    ],
    navLabels: {
      develop: "What we do",
      services: "Our services",
      projects: "Projects",
      about: "About",
    },
    contact: "Get in touch",
    grievance: "File a grievance",
    getStarted: "Get started",
  }),
  pt: buildLocale({
    develop: [
      { label: "Reflorestamento (ARR)", href: "/develop/arr", desc: "De pastagem degradada a floresta certificada" },
      { label: "Biochar", href: "/develop/biochar", desc: "Remoção durável, medida em séculos" },
    ],
    services: [
      { label: "Assessoria", href: "/advisory", desc: "Estratégia de carbono para compradores, desenvolvedores e investidores" },
      { label: "Comprar Créditos de Carbono", href: "/buy-removals", desc: "Remoções de emissão spot, forward e offtake" },
      { label: "Investir", href: "/invest", desc: "Produtos de investimento Land Fund e Biochar Fund" },
    ],
    about: [
      { label: "Nossa história", href: "/about#story", desc: "Quem somos, nossa abordagem e marcos" },
      { label: "Equipe", href: "/about#team", desc: "As pessoas por trás da Green Branch" },
      { label: "Recursos", href: "/about#resources", desc: "Apresentações e guias informativos" },
      { label: "Nossa Tecnologia", href: "/greenbranch-os", desc: "GreenBranch OS — nossa plataforma de desenvolvimento e MRV" },
    ],
    navLabels: {
      develop: "O que fazemos",
      services: "Nossos serviços",
      projects: "Projetos",
      about: "Sobre",
    },
    contact: "Fale conosco",
    grievance: "Registrar uma reclamação",
    getStarted: "Comece agora",
  }),
};

export default function Navbar() {
  const { locale } = useLanguage();
  const t = navContent[locale];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!dropdown) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setDropdown(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [dropdown]);

  useEffect(() => {
    if (!contactOpen) return;
    const onClick = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) setContactOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [contactOpen]);

  const mutedClass = scrolled ? "text-forest hover:text-forest-dark" : "text-white/70 hover:text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Mobile always gets a solid brand-green bar (no dark hero to blend
        // into behind it), so the white logo/icons stay legible regardless
        // of scroll position or what page content sits underneath.
        "bg-forest-deeper",
        scrolled
          ? "lg:bg-white/95 lg:backdrop-blur-md lg:border-b lg:border-black/5 lg:shadow-sm"
          : "lg:bg-gradient-to-b lg:from-black/35 lg:via-black/10 lg:to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="The Green Branch — home">
          <Image
            src="/logo-white.png"
            alt="The Green Branch"
            width={2895}
            height={640}
            priority
            className="h-7 w-auto lg:hidden"
          />
          <Image
            src={scrolled ? "/logo-green.png" : "/logo-white.png"}
            alt="The Green Branch"
            width={2895}
            height={640}
            priority
            className="h-7 w-auto hidden lg:block"
          />
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1">
          {t.nav.map((item) =>
            item.children ? (
              <div key={item.id} className="relative">
                <button
                  onClick={() => setDropdown(dropdown === item.id ? null : item.id)}
                  className={cn("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/10", mutedClass)}
                >
                  {item.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", dropdown === item.id && "rotate-180")} />
                </button>
                {dropdown === item.id && (
                  <div className={cn("absolute top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 overflow-hidden", item.id === "about" ? "right-0" : "left-0")}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setDropdown(null)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-forest-muted group transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest mt-1.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <div className="text-sm font-semibold text-ink group-hover:text-forest transition-colors">{child.label}</div>
                          <div className="text-xs text-ink/50 mt-0.5">{child.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.id} href={item.href!}
                className={cn("px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/10", mutedClass)}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setContactOpen((o) => !o)}
              className={cn("flex items-center gap-1 text-sm font-medium", mutedClass)}
            >
              {t.contact}
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", contactOpen && "rotate-180")} />
            </button>
            {contactOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 overflow-hidden">
                <Link href="/grievance" onClick={() => setContactOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-ink hover:bg-forest-muted hover:text-forest transition-colors">
                  {t.grievance}
                </Link>
                <Link href="/contact" onClick={() => setContactOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-ink hover:bg-forest-muted hover:text-forest transition-colors">
                  {t.contact}
                </Link>
              </div>
            )}
          </div>
          <Link href="/buy-removals"
            className="flex items-center gap-1.5 px-4 py-2 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
            {t.getStarted} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <LanguageSwitcher dark={scrolled} />
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-1">
          <LanguageSwitcher dark={false} />
          <button className="p-2 rounded-lg" onClick={() => setOpen(!open)}>
            {open
              ? <X className="w-5 h-5 text-white" />
              : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-5 space-y-1">
          {t.nav.map((item) => (
            <div key={`mobile-${item.id}`}>
              {item.children ? (
                <>
                  <div className="px-3 py-1.5 text-[10px] font-bold text-ink/30 uppercase tracking-widest">{item.label}</div>
                  {item.children.map((child) => (
                    <Link key={`mobile-${child.href}`} href={child.href} onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-ink hover:text-forest rounded-xl hover:bg-forest-muted transition-colors">
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link href={item.href!} onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-ink hover:text-forest rounded-xl hover:bg-forest-muted transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-black/5 flex flex-col gap-2">
            <Link href="/contact" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-medium text-ink/60 text-center">{t.contact}</Link>
            <Link href="/grievance" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-medium text-ink/60 text-center">{t.grievance}</Link>
            <Link href="/buy-removals" onClick={() => setOpen(false)}
              className="px-4 py-3 bg-forest text-white text-sm font-bold rounded-xl text-center">
              {t.getStarted}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
