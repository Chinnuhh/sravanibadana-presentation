import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import logo from "@/assets/orange-sky-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orange Sky · Panel Presentation" },
      { name: "description", content: "Four challenges presented to the Orange Sky interview panel." },
    ],
  }),
  component: Index,
});

const challenges = [
  { num: "01", to: "/challenge-1", title: "The Retention Challenge", tag: "Lifecycle Marketing", desc: "A multi-channel save journey (email, SMS, phone) for regular givers showing cancellation intent after the third gift." },
  { num: "02", to: "/challenge-2", title: "The Flow Logic Challenge", tag: "Journey Architecture", desc: "Dynamic path changes that move $1,000+ donors out of automated SMS into a Mid-Value phone task queue, using Last Gift Amount and Last Gift Date." },
  { num: "03", to: "/challenge-3", title: "The Requirement Scoping Challenge", tag: "Stakeholder & Delivery", desc: "Scoping an automated reporting and thank-you journey for a new corporate payroll-giving partner, across Finance and Corporate Partnerships." },
  { num: "04", to: "/challenge-4", title: "The Orange Sky Cultural Challenge", tag: "Values Reflection", desc: "A personal reflection against the Orange Sky Values, what I resonate with, what I'm working on." },
] as const;

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative overflow-hidden bg-primary text-white px-6 md:px-[8vw] py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute rounded-full border border-white/15" style={{ width: 600, height: 600, top: -200, right: -120 }} />
          <span className="absolute rounded-full border border-white/15" style={{ width: 360, height: 360, top: -40, right: 160 }} />
          <span className="absolute rounded-full border border-white/10" style={{ width: 800, height: 800, bottom: -350, right: -240 }} />
          <span className="absolute rounded-full border border-white/10" style={{ width: 220, height: 220, bottom: 80, left: 80 }} />
        </div>
        <div className="relative inline-flex items-center gap-3 bg-white rounded-md px-4 py-2 mb-6 shadow-sm">
          <img src={logo} alt="Orange Sky" className="h-8 w-auto" />
        </div>
        <p className="relative text-[11px] font-semibold tracking-[3px] uppercase text-white/70 mb-6">Salesforce Marketing Cloud · Panel Presentation</p>
        <h1 className="relative font-display font-black text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          Presented by
          <span className="block text-white/75 font-bold">Sravani Badana.</span>
        </h1>
        <p className="relative text-white/85 text-lg max-w-xl leading-relaxed mt-6">
          A walk-through of how I'd approach four real Orange Sky problems, from retention automation to the values that hold it all together.
        </p>
        <div className="relative mt-10 flex gap-3">
          <Link to="/challenge-1" className="bg-white text-primary font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-md hover:bg-primary-light transition">Start with Challenge 01</Link>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-[8vw] py-20 grid md:grid-cols-2 gap-6">
        {challenges.map((c) => (
          <Link key={c.num} to={c.to} className="group bg-white rounded-xl border border-black/8 p-8 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(249,106,0,0.15)] hover:border-primary-mid transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-display font-black text-primary text-4xl">{c.num}</span>
              <span className="text-[10.5px] font-bold tracking-[2px] uppercase text-muted-foreground">{c.tag}</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-charcoal mb-3 group-hover:text-primary transition-colors">{c.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[2px] text-primary">Open challenge →</p>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
