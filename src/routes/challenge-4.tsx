import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section } from "@/components/Section";
import valuesPoster from "@/assets/orange-sky-values.webp";
import vanSticker from "@/assets/orange-sky-van-sticker.webp";

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
          <img src={valuesPoster} alt="Orange Sky Values poster: Believes In What We Do, Walks The Walk, Cultivates Connection, Strives To Improve, Gives Things A Crack, Celebrates Success" className="w-full h-auto block" loading="lazy" decoding="async" />
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

      <section className="bg-periwinkle text-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[8vw] py-16 md:py-20 border-t border-black/5">
          <p className="text-[13.5px] font-bold tracking-[3px] uppercase mb-2 text-primary">Values I'm continuing to improve in</p>
          <h2 className="font-display font-black text-2xl md:text-3xl mb-8">Growth edges I'd own publicly</h2>
          <div className="space-y-5">
            {workingOn.map((v) => (
              <div key={v.value} className="rounded-xl border border-primary/40 bg-white/70 backdrop-blur p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" />
                <h3 className="font-display font-extrabold text-2xl text-primary mb-3">{v.value}</h3>
                <p className="text-charcoal/85 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Personal reflection" title="Why these values resonate with me">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          What stood out to me most about the Orange Sky values is the strong sense of purpose and authenticity behind them. They focus not only on achieving outcomes, but also on how people support one another, build trust, and continue growing together. The values reflect empathy, accountability, curiosity, and connection in a very genuine way, which is something I strongly connect with personally and professionally.
        </p>
      </Section>

      <section className="bg-white text-charcoal relative overflow-hidden">
        {/* soft glows */}
        <div className="absolute -top-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[34rem] h-[34rem] rounded-full bg-periwinkle/40 blur-3xl" />
        {/* dotted accent */}
        <div className="absolute top-1/2 right-8 w-32 h-32 rounded-full border-2 border-dashed border-primary/30 hidden lg:block" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-[8vw] py-24 md:py-32 relative text-center">
          <p className="font-display font-black text-[15vw] md:text-[10rem] leading-[0.85] tracking-tight">
            <span className="text-primary">Thank</span><br /><span className="text-charcoal">you</span>
          </p>
          <p className="font-display font-extrabold text-3xl md:text-5xl mt-10 mx-auto max-w-3xl leading-tight">
            Better for being <span className="italic underline decoration-primary decoration-4 underline-offset-8 text-primary">Orange</span> 🧡
          </p>
          <p className="text-lg md:text-xl mt-10 mx-auto max-w-2xl text-charcoal/80 leading-relaxed">
            Thanks for the time, <strong className="font-black text-primary">Tenille</strong>, <strong className="font-black text-primary">Kasey</strong> &amp; <strong className="font-black text-primary">Chanel</strong>. Happy to dig into any of these answers
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
