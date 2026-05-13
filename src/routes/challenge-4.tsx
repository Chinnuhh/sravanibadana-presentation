import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section } from "@/components/Section";
import valuesPoster from "@/assets/orange-sky-values.png";

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
      />

      <Section eyebrow="A note before I start" title="Why this matters to me">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          Orange Sky's mission isn't really about laundry or showers, it's about the conversation that happens during them. That insight changes how I think about the work. The Values aren't a poster on the wall; they're the operating system for how the team shows up, and they're the reason supporters keep giving. So this reflection isn't a tick-box exercise for me. It's a chance to be honest about where I'm aligned and where I have growth to do.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-4 italic">
          Note: this reflection draws on my reading of the Orange Sky Values. If the panel can share the values picture in the interview, I'd love to revisit anything I've under-emphasised.
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

      <Section eyebrow="Values I resonate with" title="Three I'd say are part of how I already work">
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

      <Section dark eyebrow="Values I'm working on" title="The growth edge I'd own publicly">
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

      <Section eyebrow="The bigger picture" title="What this means for how I'd join the team">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          If I'm successful, you'll get someone who leads with the conversation, ships simple things fast, and tells you the truth about how it went. The thing I'd ask the team to hold me accountable for is the follow-through, the unglamorous post-launch optimisation work that turns a good journey into a great one. That's where I want to grow.
        </p>
      </Section>

      <SiteFooter />
    </div>
  );
}
