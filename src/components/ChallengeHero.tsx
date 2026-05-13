interface Props {
  number: string;
  title: string;
  subtitle: string;
  kicker: string;
  sticker?: string;
  stickerAlt?: string;
}

export function ChallengeHero({ number, title, subtitle, kicker, sticker, stickerAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary text-white px-6 md:px-[8vw] py-16 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute rounded-full border border-white/15" style={{ width: 500, height: 500, top: -180, right: -100 }} />
        <span className="absolute rounded-full border border-white/15" style={{ width: 320, height: 320, top: -60, right: 120 }} />
        <span className="absolute rounded-full border border-white/10" style={{ width: 700, height: 700, bottom: -300, right: -200 }} />
      </div>
      {sticker && (
        <img
          src={sticker}
          alt={stickerAlt ?? ""}
          className="hidden md:block absolute right-[6vw] top-1/2 -translate-y-1/2 w-[280px] lg:w-[340px] xl:w-[400px] rotate-[-8deg] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] pointer-events-none animate-float"
        />
      )}
      <p className="relative text-[11px] font-semibold tracking-[3px] uppercase text-white/70 mb-6">{kicker}</p>
      <div className="relative flex items-baseline gap-4 md:gap-6 mb-4 flex-wrap">
        <span className="font-display font-black text-white/30 text-[3.5rem] md:text-[5rem] leading-none">{number}</span>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
      </div>
      <p className="relative text-white/85 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
    </section>
  );
}
