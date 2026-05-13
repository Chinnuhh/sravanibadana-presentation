import { Link } from "@tanstack/react-router";
import logo from "@/assets/orange-sky-logo.png";

export function SiteHeader() {
  const links = [
    { to: "/", label: "Overview" },
    { to: "/challenge-1", label: "01 · Retention" },
    { to: "/challenge-2", label: "02 · Flow Logic" },
    { to: "/challenge-3", label: "03 · Scoping" },
    { to: "/challenge-4", label: "04 · Values" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary-light">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-1 overflow-x-auto">
        <Link to="/" className="flex items-center gap-3 pr-6 py-3 whitespace-nowrap">
          <img src={logo} alt="Orange Sky" className="h-8 w-auto" />
          <span className="font-display font-black text-charcoal text-[11px] tracking-[2px] uppercase border-l border-black/10 pl-3 hidden sm:inline">Panel Presentation</span>
        </Link>
        <nav className="flex items-center gap-0">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-4 text-[11.5px] font-bold uppercase tracking-[1px] text-muted-foreground border-b-[3px] border-transparent hover:text-primary hover:border-primary -mb-[2px] whitespace-nowrap transition-colors"
              activeProps={{ className: "px-4 py-4 text-[11.5px] font-bold uppercase tracking-[1px] text-primary border-b-[3px] border-primary -mb-[2px] whitespace-nowrap" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white/40 text-xs py-8 px-12 mt-20 flex flex-wrap justify-between gap-4">
      <span className="font-display font-black text-white">Orange Sky · Panel Presentation</span>
      <span>Prepared for the interview panel · 2026</span>
    </footer>
  );
}
