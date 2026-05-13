import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section } from "@/components/Section";

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
    value: "Have a Yarn",
    body: "This is the value I most identify with. My instinct in any room, donor, stakeholder, teammate, is to start with the conversation, not the agenda. The best lifecycle work I've done began as a yarn over coffee, not as a brief. It's how trust gets built and how I learn what people actually need, which is almost never what the first email said. I genuinely believe the conversation IS the work, and the deliverable comes second.",
  },
  {
    value: "Keep it Simple",
    body: "I'm allergic to over-engineering. Whenever I scope a journey, my first pass is always more complicated than the second, and the second is always more complicated than what ships. I default to: what's the smallest thing we can put in front of a donor that proves the idea? Simple things scale. Clever things break.",
  },
  {
    value: "Be Genuine",
    body: "I'd rather give a partner an honest 'we got this wrong, here's what we're doing about it' than a polished spin. In donor comms specifically, this matters, supporters can smell manufactured warmth from a mile away. The best-performing email I've ever written was the one that admitted a mistake.",
  },
];

const workingOn = [
  {
    value: "Make it Better",
    body: "I have a 'ship it' bias which is a strength but can become a weakness, sometimes 'good enough' becomes 'left alone.' I'm working on building the optimisation loop into my own habits, not just into the project plan. Carving out the post-launch time to actually look at what worked, what didn't, and to act on it, rather than racing to the next thing. The retention journey in Challenge 1 reflects this learning: I baked the A/B testing and predictive scoring into the design from day one, instead of leaving it as a 'nice to have' for phase two.",
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
