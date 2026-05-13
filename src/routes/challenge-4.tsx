import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section } from "@/components/Section";
import valuesPoster from "@/assets/orange-sky-values.png";
import vanSticker from "@/assets/orange-sky-van-sticker.png";
import stickerWasher from "@/assets/sticker-washer.png";
import stickerShower from "@/assets/sticker-shower.png";
import stickerChair from "@/assets/sticker-chair.png";

export const Route = createFileRoute("/challenge-4")({
  head: () => ({
    meta: [
      { title: "Challenge 04 · Values Reflection, Orange Sky" },
      { name: "description", content: "A personal reflection on the Orange Sky Values, what I resonate with and what I'm working on." },
    ],
  }),
  component: Challenge4,
});

const resonates = [
  {
    value: "Cultivates Connection",
    body: "This value resonated with me the most because I genuinely value human connection and making people feel comfortable, heard, and included. I naturally try to approach people with empathy and understanding, and I believe small conversations and interactions can leave a lasting impact. I appreciate environments where people feel safe being themselves and where trust is built through kindness, openness, and respect.",
  },
  {
    value: "Strives To Improve",
    body: "I connect strongly with the idea of continuous growth and learning. I enjoy challenging myself, being curious, and finding better ways to approach things. Whether it's learning a new skill, adapting to unfamiliar situations, or reflecting on feedback, I see growth as an ongoing process. I value people and teams who are open-minded, willing to evolve, and committed to learning together.",
  },
  {
    value: "Gives Things A Crack",
    body: "This value feels very genuine and realistic to me. A lot of my personal growth has come from trying things before feeling fully ready and learning through experience. I admire environments where people are encouraged to take initiative, experiment with ideas, and not be afraid of mistakes. I believe resilience comes from being willing to keep showing up, learning, and trying again.",
  },
];

const workingOn = [
  {
    value: "Walks The Walk",
    body: "I care deeply about doing meaningful and thoughtful work, but one area I continue to improve in is backing myself more confidently in fast-moving situations. Sometimes I spend extra time refining ideas internally before sharing them. I've been learning that growth also comes from speaking up earlier, trusting collaboration, and balancing thoughtfulness with action.",
  },
  {
    value: "Celebrates Success",
    body: "I naturally focus on what can be improved next, which sometimes means I move past achievements too quickly. I've been becoming more intentional about recognising progress, celebrating small wins, and appreciating both my own efforts and the efforts of others. I've realised how important encouragement and recognition are in helping people feel valued and motivated.",
  },
];

function Challenge4() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <ChallengeHero
        kicker="Question 04 · Values Reflection"
        number="04"
        title="Reflecting on the Orange Sky Values"
        subtitle="An honest look at the characteristics I resonate with and the ones I'm actively working on."
        sticker={vanSticker}
        stickerAlt="Orange Sky van"
      />

      <Section eyebrow="A note before I start" title="Why this matters to me">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          Orange Sky's mission isn't really about laundry or showers, it's about the conversation that happens during them. That insight changes how I think about the work. The Values aren't a poster on the wall; they're the operating system for how the team shows up, and they're the reason supporters keep giving. So this reflection isn't a tick-box exercise for me. It's a chance to be honest about where I'm aligned and where I have growth to do.
        </p>
      </Section>

      <Section eyebrow="The source" title="The Orange Sky Values, in their own words">
        <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-white rotate-[-0.6deg] hover:rotate-0 transition-transform duration-500">
          <img src={valuesPoster} alt="Orange Sky Values poster: Believes In What We Do, Walks The Walk, Cultivates Connection, Strives To Improve, Gives Things A Crack, Celebrates Success" className="w-full h-auto block" />
        </div>
        <p className="text-xs text-muted-foreground/70 mt-4 italic">
          Source: Orange Sky Values, as published by the organisation. My reflection below sits against this framing.
        </p>
      </Section>

      <Section eyebrow="Values I resonate with" title="Three that already shape how I show up">
        <div className="space-y-5">
          {resonates.map((v) => (
            <div key={v.value} className="bg-white rounded-xl border border-black/8 p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" />
              <h3 className="font-display font-extrabold text-2xl text-primary mb-3">{v.value}</h3>
              <p className="text-foreground/80 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Values I'm continuing to improve in" title="Two growth edges I'd own publicly">
        <div className="space-y-5">
          {workingOn.map((v) => (
            <div key={v.value} className="rounded-xl border border-primary/40 bg-white/5 p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" />
              <h3 className="font-display font-extrabold text-2xl text-primary mb-3">{v.value}</h3>
              <p className="text-white/85 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Personal reflection" title="Why these values resonate with me">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          What stood out to me most about the Orange Sky values is the strong sense of purpose and authenticity behind them. They focus not only on achieving outcomes, but also on how people support one another, build trust, and continue growing together. The values reflect empathy, accountability, curiosity, and connection in a very genuine way, which is something I strongly connect with personally and professionally.
        </p>
      </Section>

      <section className="relative overflow-hidden bg-[oklch(0.97_0.02_75)] text-charcoal">
        {/* soft background blobs */}
        <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[22rem] h-[22rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-charcoal/5 blur-3xl" />

        {/* dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.65 0.18 50) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* playful image stickers */}
        <img
          src={stickerWasher}
          alt=""
          className="absolute top-8 right-[6%] w-28 md:w-36 lg:w-44 rotate-[10deg] drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] hidden md:block animate-float"
        />
        <img
          src={stickerShower}
          alt=""
          className="absolute bottom-12 left-[5%] w-24 md:w-32 lg:w-40 -rotate-[8deg] drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] hidden md:block animate-float"
          style={{ animationDelay: "1.2s" }}
        />
        <img
          src={stickerChair}
          alt=""
          className="absolute top-[44%] right-[14%] w-20 md:w-28 lg:w-32 rotate-[-12deg] drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] hidden lg:block animate-float"
          style={{ animationDelay: "0.6s" }}
        />
        <div className="absolute bottom-24 right-[8%] px-4 py-2 rounded-full bg-white border border-charcoal/10 text-charcoal text-xs font-bold tracking-[2px] uppercase rotate-[8deg] hidden lg:block shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
          <span className="text-primary">✦</span> good vibes
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-[8vw] py-24 md:py-32 relative">
          <p className="font-display font-black text-[15vw] md:text-[10rem] leading-[0.85] tracking-tight text-charcoal">
            Thank<br />
            <span className="text-primary">you.</span>
          </p>
          <p className="font-display font-extrabold text-3xl md:text-5xl mt-10 max-w-3xl leading-tight">
            Better for being{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Orange</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-primary/25 -z-0 rounded-sm" />
            </span>
            . 🧡
          </p>
          <p className="text-lg md:text-xl mt-10 max-w-2xl text-charcoal/75 leading-relaxed">
            Thanks for the time,{" "}
            <strong className="font-black text-primary">Tenille</strong>,{" "}
            <strong className="font-black text-primary">Kasey</strong> &amp;{" "}
            <strong className="font-black text-primary">Chanel</strong>. Happy to dig into any of these answers.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
