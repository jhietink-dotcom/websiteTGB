"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const certifications = [
  { name: "Verra", logo: "/img/logos/verra.png", width: 540, height: 198, heightClass: "h-8" },
  { name: "Verified Carbon Standard", logo: "/img/logos/vcs.png", width: 863, height: 206, heightClass: "h-8" },
  { name: "Climate, Community & Biodiversity Standards", logo: "/img/logos/ccb.png", width: 295, height: 82, heightClass: "h-10" },
  { name: "Isometric", logo: "/img/logos/isometric.png", width: 528, height: 95, heightClass: "h-8" },
  { name: "Puro.earth", logo: "/img/logos/puro-earth.png", width: 295, height: 160, heightClass: "h-8" },
];

interface CertificationBarProps {
  label: string;
  className?: string;
}

export default function CertificationBar({ label, className }: CertificationBarProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6", className)}>
      <div className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.18em] mb-4">{label}</div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {certifications.map((c) => (
          <Image
            key={c.name}
            src={c.logo}
            alt={c.name}
            width={c.width}
            height={c.height}
            className={cn(c.heightClass, "w-auto object-contain")}
          />
        ))}
      </div>
    </div>
  );
}
