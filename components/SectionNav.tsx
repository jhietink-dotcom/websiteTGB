"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky in-page section navigation with scroll-spy highlighting.
 * Sits directly beneath the fixed Navbar (top-16).
 */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    // Scroll-position based: the last section whose top has passed just below
    // the sticky bars is active. Robust for very tall sections.
    const LINE = 160;
    const onScroll = () => {
      let current = items[0]?.id;
      for (const i of items) {
        const el = document.getElementById(i.id);
        if (el && el.getBoundingClientRect().top <= LINE) current = i.id;
      }
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex gap-1 h-14 items-center">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-lg transition-colors",
              active === i.id ? "text-forest bg-forest-muted" : "text-ink/50 hover:text-ink"
            )}
          >
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}
