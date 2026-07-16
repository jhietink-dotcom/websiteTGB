import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const links = {
  Solutions: [
    { label: "Develop a project", href: "/develop" },
    { label: "Invest in nature", href: "/invest" },
    { label: "Secure credits", href: "/secure-credits" },
  ],
  Company: [
    { label: "What we do", href: "/what-we-do" },
    { label: "OS TGB", href: "/os-tgb" },
    { label: "Projects", href: "/projects" },
    { label: "About us", href: "/about" },
  ],
  Legal: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy policy", href: "#" },
    { label: "Grievance forms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-deeper text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-forest-deeper" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2C7 2 3 7 3 12s4 9 9 9c1.5 0 3-.4 4.2-1" strokeLinecap="round"/>
                  <path d="M12 2c2.5 2.5 4 6 4 10" strokeLinecap="round"/>
                  <path d="M12 22V12M12 12l-4-4M12 12l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold text-white">The Green Branch</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Bridging the gap between nature restoration and private capital to create measurable environmental and social impact.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>Weesperstraat 111, 1018 VN Amsterdam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <a href="mailto:hello@thegreenbranch.nl" className="hover:text-white transition-colors">
                  hello@thegreenbranch.nl
                </a>
              </div>
            </div>
            <a
              href="https://linkedin.com"
              className="inline-flex items-center gap-2 mt-6 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{group}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© The Green Branch 2025. All Rights Reserved.</p>
          <p className="text-xs text-white/40">Amsterdam · Brazil · Africa · Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
