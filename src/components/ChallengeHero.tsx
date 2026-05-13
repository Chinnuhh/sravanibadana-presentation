interface Props {
  number: string;
  title: string;
  subtitle: string;
  kicker: string;
}

export function ChallengeHero({ number, title, subtitle, kicker }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary text-white px-6 md:px-[8vw] py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute rounded-full border border-white/15" style={{ width: 500, height: 500, top: -180, right: -100 }} />
        <span className="absolute rounded-full border border-white/15" style={{ width: 320, height: 320, top: -60, right: 120 }} />
        <span className="absolute rounded-full border border-white/10" style={{ width: 700, height: 700, bottom: -300, right: -200 }} />
      </div>
      <p className="relative text-[11px] font-semibold tracking-[3px] uppercase text-white/70 mb-6">{kicker}</p>
      <div className="relative flex items-baseline gap-6 mb-4 flex-wrap">
        <span className="font-display font-black text-white/30 text-[5rem] leading-none">{number}</span>
        <h1 className="font-display font-black text-4xl md:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
      </div>
      <p className="relative text-white/85 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
    </section>
  );
}
