import Image from "next/image";

export type LogoSlot = { name?: string; src?: string };

/**
 * Light horizontal logo bar for buyers/partners.
 * Each slot is a fixed 120x40 area. Pass `src` for a real logo image,
 * `name` for a text wordmark, or leave empty for a grey placeholder.
 * Swap real logos in later by editing the `logos` prop — no layout changes needed.
 */
export function LogoBar({ label, logos }: { label: string; logos: LogoSlot[] }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink/40 mb-8">{label}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex h-10 w-[120px] items-center justify-center rounded-lg bg-muted"
            >
              {logo.src ? (
                <Image src={logo.src} alt={logo.name ?? "Partner logo"} width={120} height={40} className="max-h-8 w-auto object-contain" />
              ) : logo.name ? (
                <span className="text-sm font-bold text-ink/55">{logo.name}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
