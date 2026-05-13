import { ReactNode } from "react";

export function Section({ eyebrow, title, desc, children, dark }: { eyebrow?: string; title: string; desc?: string; children: ReactNode; dark?: boolean }) {
  return (
    <section className={dark ? "bg-charcoal text-white" : ""}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-[8vw] py-16 md:py-20 border-t border-black/5 first:border-t-0">
        {eyebrow && <p className={`text-[11px] font-bold tracking-[3px] uppercase mb-2 ${dark ? "text-primary" : "text-primary"}`}>{eyebrow}</p>}
        <h2 className="font-display font-black text-2xl md:text-3xl mb-2">{title}</h2>
        {desc && <p className={`text-sm max-w-xl mb-8 ${dark ? "text-white/55" : "text-muted-foreground"}`}>{desc}</p>}
        {children}
      </div>
    </section>
  );
}

export function Card({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-black/8 p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(249,106,0,0.12)] hover:border-primary-mid transition-all">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      {kicker && <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-muted-foreground mb-2 mt-2">{kicker}</p>}
      <h3 className="font-display font-extrabold text-lg mb-3 text-charcoal">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
