import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section, Card } from "@/components/Section";
import journeyImage from "@/assets/challenge-2-journey.png";

export const Route = createFileRoute("/challenge-2")({
  head: () => ({
    meta: [
      { title: "Challenge 02 · Flow Logic — Orange Sky" },
      { name: "description", content: "Dynamic path changes that redirect $1,000+ donors out of automated SMS into a Mid-Value phone task queue." },
    ],
  }),
  component: Challenge2,
});

function Challenge2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <ChallengeHero
        kicker="Question 02 · Journey Architecture"
        number="02"
        title="Pulling $1,000+ donors out of SMS and into the Mid-Value phone queue"
        subtitle="A dynamic, data-driven re-routing built around two fields the org already trusts: Last Gift Amount and Last Gift Date."
      />

      <Section eyebrow="The principle" title="Treat the threshold as a journey-wide rule, not a one-off check">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          A $1,000 single gift is a major signal — it should never be answered by an automated SMS. The rule needs to fire <strong>at any point</strong> in the lifecycle journey, not just at entry. That means a continuous evaluation pattern using a Decision Split + Wait By Attribute, fed by a fresh data extension that's updated as soon as the gift hits the CRM.
        </p>
      </Section>

      <Section eyebrow="Data foundation" title="One Data Extension, two fields doing all the work" desc="The Lifecycle DE is the source of truth the journey reads from on every evaluation.">
        <div className="overflow-x-auto rounded-xl border border-black/8 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-primary-light text-primary-dark">
              <tr>
                <th className="text-left px-4 py-3 text-[10px] font-bold tracking-[2px] uppercase">Field</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold tracking-[2px] uppercase">Type</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold tracking-[2px] uppercase">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["SubscriberKey", "Text · PK", "Donor identifier (CRM ID)"],
                ["LastGiftAmount", "Decimal", "Amount of the most recent single gift"],
                ["LastGiftDate", "Date", "Timestamp of the most recent gift"],
                ["MidValueFlag", "Boolean", "Set to TRUE once the donor crosses $1,000 — used to suppress re-entry"],
                ["JourneyStage", "Text", "Current stage so we can resume cleanly if needed"],
              ].map(([f, t, p]) => (
                <tr key={f} className="border-t border-black/5 hover:bg-primary-light/40">
                  <td className="px-4 py-3 font-mono text-primary-dark font-semibold">{f}</td>
                  <td className="px-4 py-3"><span className="bg-muted text-foreground/70 px-2 py-0.5 rounded text-xs">{t}</span></td>
                  <td className="px-4 py-3">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Reference build" title="Journey Builder mock-up of the $1,000 Gift Escalation Journey" desc="The Decision Split on LastGiftAmount >= 1000 routes major gifts into the Mid-Value call queue and out of the SMS lifecycle.">
        <figure className="rounded-xl border border-black/8 bg-white overflow-hidden shadow-sm">
          <img
            src={journeyImage}
            alt="Salesforce Marketing Cloud Journey Builder showing a $1,000 Gift Escalation Journey with a Decision Split on LastGiftAmount, a Yes branch updating the contact and adding them to the Mid-Value call queue, and a No branch continuing the SMS lifecycle."
            className="w-full h-auto block"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section eyebrow="The flow" title="How the dynamic path change works inside Journey Builder">
        <ol className="space-y-5 max-w-3xl">
          {[
            { step: "1", t: "Continuous evaluation, not entry-only", d: "Journey entry source = Data Extension with Re-evaluation enabled. Any update to LastGiftAmount or LastGiftDate triggers re-evaluation of split criteria." },
            { step: "2", t: "Decision Split before every SMS activity", d: "Place a Decision Split immediately before each SMS send. Criteria: LastGiftAmount >= 1000 AND LastGiftDate within current journey window. TRUE = redirect; FALSE = continue SMS." },
            { step: "3", t: "Redirect path: write to the Mid-Value task queue", d: "TRUE branch fires an Update Contact + a Custom Activity (or API event) that inserts the donor into a 'Mid_Value_Phone_Queue' DE owned by the Mid-Value team. Set MidValueFlag = TRUE." },
            { step: "4", t: "Hard exit from automation", d: "After the queue insert, route to a Journey Exit so no further automated SMS is ever sent. The donor is now owned by humans." },
            { step: "5", t: "Re-entry suppression", d: "Entry filter on the lifecycle journey excludes any contact where MidValueFlag = TRUE. Mid-Value team controls when (or if) they return." },
            { step: "6", t: "Data sync back from CRM", d: "An automation runs every 15 min: SQL query on Salesforce Data → updates LastGiftAmount / LastGiftDate / MidValueFlag in the DE. This is what makes the rule fire mid-journey, not just at the start." },
          ].map((s) => (
            <li key={s.step} className="flex gap-5">
              <span className="font-display font-black text-primary text-3xl leading-none w-12 flex-shrink-0">{s.step}</span>
              <div>
                <h3 className="font-display font-extrabold text-charcoal mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section dark eyebrow="Visualised" title="The two paths at a glance">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/15 bg-white/5 p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-white/60 mb-3">Standard path</p>
            <div className="space-y-2 text-sm">
              {["Entry: Active regular giver", "Decision Split: Amount < $1,000", "SMS · Day 0", "Wait 3 days", "SMS · Day 3", "Continue lifecycle"].map((s) => (
                <div key={s} className="bg-white/10 rounded px-3 py-2 text-white/85">{s}</div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-primary/40 bg-primary/10 p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-3">Mid-Value redirect</p>
            <div className="space-y-2 text-sm">
              {["Decision Split: Amount ≥ $1,000", "Update Contact · MidValueFlag = TRUE", "Insert into Mid_Value_Phone_Queue", "Notify Mid-Value team (Slack/Email)", "Journey Exit — automation stops", "Owned by humans from here"].map((s) => (
                <div key={s} className="bg-primary/20 border border-primary/40 rounded px-3 py-2 text-white">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Guard-rails" title="Three things I'd build in to stop edge-case failures">
        <div className="grid md:grid-cols-3 gap-4">
          <Card kicker="Race condition" title="Use a 5-minute Wait before the first split">
            <p>Gives the data sync time to land before the journey reads stale values, especially on Day-0 entries triggered by the gift itself.</p>
          </Card>
          <Card kicker="Re-entry" title="Boolean flag instead of date math">
            <p>MidValueFlag = TRUE is unambiguous and stays sticky. Date-based exclusions get messy across journey versions.</p>
          </Card>
          <Card kicker="Auditability" title="Log every redirect">
            <p>Send Log row + Sales Cloud Task with reason = 'Mid-Value threshold crossed'. The Mid-Value team always knows where the donor came from.</p>
          </Card>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
