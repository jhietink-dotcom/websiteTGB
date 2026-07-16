"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  { label: "Develop a project", href: "/develop", desc: "End-to-end project development" },
  { label: "Invest in nature", href: "/invest", desc: "Connect capital with impact" },
  { label: "Secure credits", href: "/secure-credits", desc: "Dev contributions, spot & ERPAs" },
];

const nav = [
  { label: "What we do", href: "/what-we-do" },
  { label: "Solutions", children: solutions },
  { label: "OS TGB", href: "/os-tgb" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textClass = scrolled ? "text-ink" : "text-white";
  const mutedClass = scrolled ? "text-ink/60 hover:text-ink" : "text-white/70 hover:text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="The Green Branch — home">
          <Image
            src={scrolled ? "/logo-green.png" : "/logo-white.png"}
            alt="The Green Branch"
            width={2895}
            height={640}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                  className={cn("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors", mutedClass)}
                >
                  {item.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", dropdown === item.label && "rotate-180")} />
                </button>
                {dropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 overflow-hidden">
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
              <Link key={item.href} href={item.href!}
                className={cn("px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors", mutedClass)}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className={cn("text-sm font-medium transition-colors", mutedClass)}>Contact</Link>
          <Link href="/secure-credits"
            className="flex items-center gap-1.5 px-4 py-2 bg-accent text-forest-deeper text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors">
            Get started <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile */}
        <button className="lg:hidden p-2 rounded-lg" onClick={() => setOpen(!open)}>
          {open
            ? <X className={cn("w-5 h-5", textClass)} />
            : <Menu className={cn("w-5 h-5", textClass)} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-5 space-y-1">
          {nav.map((item) =>
            item.children ? (
              <div key={`mobile-${item.label}`}>
                <div className="px-3 py-1.5 text-[10px] font-bold text-ink/30 uppercase tracking-widest">{item.label}</div>
                {item.children.map((child) => (
                  <Link key={`mobile-${child.href}`} href={child.href} onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-ink hover:text-forest rounded-xl hover:bg-forest-muted transition-colors">
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={`mobile-${item.href}`} href={item.href!} onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-ink hover:text-forest rounded-xl hover:bg-forest-muted transition-colors">
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 border-t border-black/5 flex flex-col gap-2">
            <Link href="/contact" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-medium text-ink/60 text-center">Contact</Link>
            <Link href="/secure-credits" onClick={() => setOpen(false)}
              className="px-4 py-3 bg-forest text-white text-sm font-bold rounded-xl text-center">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
