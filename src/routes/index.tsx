import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import logo from "@/assets/orange-sky-logo.webp";
import team from "@/assets/orange-sky-team.webp";

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

      <section className="relative overflow-hidden bg-primary text-white px-6 md:px-[8vw] py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute bg-white/10 animate-blob" style={{ width: 520, height: 520, top: -160, right: -120 }} />
          <span className="absolute bg-white/10 animate-blob" style={{ width: 360, height: 360, bottom: -160, left: -100, animationDelay: "2s" }} />
          <span className="absolute rounded-full border-2 border-dashed border-white/20" style={{ width: 180, height: 180, top: 60, left: "42%" }} />
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }} />
        </div>

        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <span className="absolute -inset-3 bg-white/95 rounded-2xl rotate-[-2deg] shadow-[0_18px_40px_rgba(0,0,0,0.18)]" aria-hidden />
                <img src={logo} alt="Orange Sky Australia" className="relative h-14 md:h-16 w-auto" loading="eager" decoding="async" fetchPriority="high" />
              </div>
              <span className="text-[10.5px] font-extrabold tracking-[3px] uppercase text-white/85 leading-tight">
                Panel<br />Presentation
              </span>
            </div>

            <p className="text-[11px] font-bold tracking-[3px] uppercase text-white/75 mb-4">Salesforce Marketing Cloud · 2026</p>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.98]">
              Presented by
              <span className="block mt-3">
                <span className="relative inline-block">
                  <span className="absolute -inset-x-3 inset-y-2 bg-periwinkle -rotate-1 rounded-lg" aria-hidden />
                  <span className="relative text-charcoal px-3">Sravani Badana</span>
                </span>
              </span>
            </h1>
            <p className="text-white/90 text-lg max-w-xl leading-relaxed mt-7">
              A walk-through of how I'd approach four real Orange Sky problems, from retention automation to the values that hold it all together.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/challenge-1" className="bg-white text-primary font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-primary-light transition shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:-translate-y-0.5">
                Start with Challenge 01 →
              </Link>
            </div>
          </div>

          <div className="relative h-[480px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/50 to-transparent rounded-[3rem] blur-2xl" />

            <div
              className="absolute top-6 left-4 right-4 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-8 ring-white animate-float"
              style={{ ["--r" as never]: "-3deg", transform: "rotate(-3deg)" }}
            >
              <img src={team} alt="Orange Sky volunteers cheering at a community event" className="w-full h-[360px] object-cover" loading="eager" decoding="async" fetchPriority="high" />
              <div className="bg-white px-5 py-3 flex items-center justify-between">
                <span className="font-display font-black text-charcoal text-sm">Team Orange Sky</span>
                <span className="text-[10px] font-bold tracking-[2px] uppercase text-primary">Positively Connecting Communities</span>
              </div>
            </div>

            <div
              className="absolute -top-2 -right-2 bg-white text-charcoal rounded-2xl px-4 py-3 shadow-xl animate-wiggle"
              style={{ transform: "rotate(8deg)" }}
            >
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-primary">Live</div>
              <div className="font-display font-black text-base leading-none mt-1">High-fives ✋</div>
            </div>

            <div
              className="absolute -bottom-4 -left-2 bg-periwinkle text-charcoal rounded-2xl px-5 py-4 shadow-xl animate-float"
              style={{ ["--r" as never]: "-6deg", transform: "rotate(-6deg)", animationDelay: "1.2s" }}
            >
              <div className="font-display font-black text-3xl leading-none">04</div>
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-charcoal/70 mt-1">Challenges Inside</div>
            </div>

            <div className="absolute bottom-12 right-0 w-16 h-16 rounded-full bg-primary-light shadow-lg" />
          </div>
        </div>
      </section>

      <div className="bg-primary -mt-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 block fill-background">
          <path d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,15 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <section className="max-w-[1400px] mx-auto px-6 md:px-[8vw] py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-primary mb-2">The Brief</p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-charcoal">Four challenges, approached with thoughtful problem-solving and creativity.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">Click any card to dive in. Each challenge has its own data model, journey logic and reflection.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((c) => (
            <Link
              key={c.num}
              to={c.to}
              className="group bg-white rounded-3xl border border-black/8 p-8 relative overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(249,106,0,0.18)] hover:border-primary-mid transition-all"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-mid to-primary" />
              <div className="relative flex items-baseline gap-4 mb-4">
                <span
                  className="font-display font-black text-primary text-5xl group-hover:rotate-[-6deg] transition-transform inline-block"
                  style={{ textShadow: "3px 3px 0 var(--primary-light)" }}
                >
                  {c.num}
                </span>
                <span className="text-[10.5px] font-extrabold tracking-[2px] uppercase text-muted-foreground">{c.tag}</span>
              </div>
              <h2 className="relative font-display font-extrabold text-2xl text-charcoal mb-3 group-hover:text-primary transition-colors">{c.title}</h2>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <p className="relative mt-6 text-[11px] font-extrabold uppercase tracking-[2px] text-primary inline-flex items-center gap-1 group-hover:gap-3 transition-all">
                Open challenge <span>→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
