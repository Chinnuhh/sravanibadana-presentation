import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section, Card } from "@/components/Section";
import journeyImage from "@/assets/challenge-2-journey.webp";
import vanSticker from "@/assets/orange-sky-van-sticker.webp";

export const Route = createFileRoute("/challenge-2")({
  head: () => ({
    meta: [
      { title: "Challenge 02 · High-Value Donor Escalation" },
      { name: "description", content: "A dynamic SFMC + Salesforce Service Cloud journey that moves $1,000+ donors out of automation and into human-led Mid-Value stewardship." },
    ],
  }),
  component: Challenge2,
});

const newGiftsFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "Donor identifier"],
  ["LastGiftAmount", "Decimal", "Triggers the $1,000 rule"],
  ["LastGiftDate", "Date", "Recency validation"],
  ["EntrySource", "Text", "Campaign or journey origin"],
  ["CaseID", "Text", "Linked Salesforce case"],
  ["CaseCreatedFlag", "Boolean", "Prevents duplicate case creation"],
  ["CallResult", "Text", "Outcome captured back from Salesforce"],
  ["JourneyStatus", "Text", "Where the donor sits in the flow"],
];

const phoneQueueFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "Prevents duplicate tasks"],
  ["CaseID", "Text", "Links to CRM activity"],
  ["PriorityLevel", "Text", "Based on gift size and tenure"],
  ["AssignedAgent", "Text", "Mid-Value team owner"],
  ["CallStatus", "Text", "Tracks task progress"],
];

const callResultFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "Match the donor"],
  ["CaseID", "Text", "Salesforce reference"],
  ["CallResult", "Text", "Reached · Not Reached · Saved · Declined"],
  ["UpdatedDate", "Date", "Sync timestamp"],
];

function Challenge2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <ChallengeHero
        kicker="Question 02 · Journey Architecture"
        number="02"
        title="Moving $1,000+ donors from automation into human-led Mid-Value stewardship"
        subtitle="When a donor crosses the $1,000 threshold during an active lifecycle journey, the relationship changes. This system instantly removes them from automated SMS, creates a Salesforce Case, and routes them to a human-led Mid-Value experience."
        sticker={vanSticker}
        stickerAlt="Orange Sky van"
      />

      <Section eyebrow="Why this journey exists" title="High-value moments are emotional signals, not just financial transactions">
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-6">
          When a donor reaches a $1,000+ gift threshold, the relationship changes. Continued automation can feel impersonal or even inappropriate. The system needs to shift from marketing automation to human stewardship instantly.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-4">Without this logic, donors risk:</p>
        <ul className="space-y-2 max-w-3xl text-base text-muted-foreground leading-relaxed">
          <li>· Receiving irrelevant automated SMS after a major gift</li>
          <li>· Being double-contacted by multiple channels</li>
          <li>· Falling through gaps between marketing and fundraising teams</li>
        </ul>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mt-6">
          This flow ensures every high-value moment triggers immediate recognition, structured follow-up, and coordinated internal action.
        </p>
      </Section>

      <Section eyebrow="Objectives" title="What success looks like">
        <div className="rounded-xl border border-black/8 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-foreground/70">
              <tr>
                <th className="text-left px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase">Outcome</th>
                <th className="text-left px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase">Description</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["Immediate recognition of high-value donors", "Every $1,000+ donor is flagged in real time and routed to Mid-Value care"],
                ["Remove automation friction", "Donors are instantly removed from SMS and promotional journeys"],
                ["Enable human-first engagement", "Mid-Value team receives structured call tasks with full context"],
                ["Prevent duplicate outreach", "Case-based logic prevents multiple call tasks for the same donor"],
                ["Capture structured outcomes", "Call results are written back into Salesforce + SFMC for segmentation"],
                ["Improve retention and upgrade potential", "High-value donors are nurtured through personalised stewardship"],
              ].map(([o, d]) => (
                <tr key={o} className="border-t border-black/5 hover:bg-primary-light/30">
                  <td className="px-4 py-2.5 font-semibold text-charcoal">{o}</td>
                  <td className="px-4 py-2.5">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Reference build" title="Journey Builder Mid-Value Escalation Flow" desc="Entry from New_Gifts_DE → Decision Split on Last Gift Amount → if ≥ $1,000, suppress SMS and trigger Salesforce Case → Case ID written back → wait for call outcome → dynamic paths based on Reached / Not Reached / Saved / Declined.">
        <figure className="rounded-xl border border-black/8 bg-white overflow-hidden shadow-sm">
          <img
            src={journeyImage}
            alt="Journey Builder Mid-Value escalation flow with decision splits routing high-value donors to Salesforce Case creation and call outcome paths."
            className="w-full h-auto block"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section eyebrow="How I'd build it" title="Steps from gift event to human-led Mid-Value engagement">
        <div className="space-y-5">
          <Card kicker="01 · Data foundation" title="New Gifts Data Extension as the trigger source">
            <p>Every donation enters a New Gifts DE that acts as the trigger source. It captures ContactKey, Last Gift Amount, Last Gift Date, Entry Source, Case ID, Case Created Flag, Call Result and Journey Status, so every donation is trackable and actionable in real time.</p>
          </Card>
          <Card kicker="02 · Journey Builder trigger logic" title="Decision Split on Last Gift Amount and recency">
            <p>Entry is based on a new gift received or an updated Last Gift Amount. If the gift is ≥ $1,000 and is the most recent transaction, the donor exits the automated SMS journey immediately, is flagged Mid-Value Eligible, and a Salesforce Case is created. Otherwise the donor continues the standard lifecycle journey.</p>
          </Card>
          <Card kicker="03 · Salesforce Case creation + suppression" title="One source of truth for high-value engagement">
            <p>When a donor qualifies, a Salesforce Case or Task is created automatically and assigned to the Mid-Value / Customer Service queue. The Case ID is written back into the SFMC Data Extension, and the donor is suppressed from SMS journeys, promotional messaging and any overlapping automation paths.</p>
          </Card>
          <Card kicker="04 · Back-to-back donations" title="Case-based de-duplication for repeat gifts">
            <p>Real donor behaviour isn't linear. If a donor gives $300 then $1,200 two days later, the system checks for an active Case ID created within the last X days. If yes, no new case is created, the existing case is updated with the latest donation and activity history is appended in Salesforce. If no, a new Case is created and the donor enters the Mid-Value flow. This prevents duplication and keeps team workload clean.</p>
          </Card>
          <Card kicker="05 · Call outcome capture" title="Salesforce → SFMC sync of standardised outcomes">
            <p>After a call is made, agents update Call Result in Salesforce using standardised outcomes: Reached, Not Reached, Saved (engaged positively), or Declined. These results sync back into SFMC via Data Extensions and trigger dynamic follow-up paths.</p>
          </Card>
          <Card kicker="06 · Dynamic follow-up paths" title="The right next step for every outcome">
            <ul className="space-y-3 mt-1">
              <li><strong className="text-charcoal">Not Reached</strong> · 24–48 hour wait, personalised SMS follow-up, re-attempt call task created in queue, donor stays in Mid-Value pipeline.</li>
              <li><strong className="text-charcoal">Reached</strong> · stop further call attempts, trigger gratitude email, move into stewardship journey, update engagement score.</li>
              <li><strong className="text-charcoal">Saved</strong> · immediate thank-you email, reinforce impact of the gift, optionally introduce deeper Mid-Value storytelling journey.</li>
              <li><strong className="text-charcoal">Declined</strong> · mark preference in CRM, suppress from Mid-Value outreach for a cooling period, move into long-term reactivation segment.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Step 0 · Business logic" title="Before journey entry" desc="Ensure every $1,000+ donor is identified in real time and moved from automation to human stewardship without delay.">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-3">Entry conditions</p>
            <ul className="space-y-2 text-sm text-charcoal/80">
              <li>· Last Gift Amount ≥ $1,000</li>
              <li>· Most recent transaction detected</li>
              <li>· Active journey participant (SMS or lifecycle flow)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-muted-foreground mb-3">Success metrics</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· Time to first human contact</li>
              <li>· Case creation accuracy</li>
              <li>· Reduction in duplicate outreach</li>
              <li>· Mid-Value conversion rate</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Step 1 · Data Extensions" title="Core architecture across SFMC + Salesforce">
        <div className="space-y-8">
          {[
            { name: "New_Gifts_DE", role: "Entry source for every donation event", rows: newGiftsFields },
            { name: "Phone_Queue_DE", role: "Mid-Value call tasks worked by the team", rows: phoneQueueFields },
            { name: "Call_Result_DE", role: "Sync layer between Salesforce and SFMC", rows: callResultFields },
          ].map((de) => (
            <div key={de.name} className="rounded-xl border border-black/8 bg-white overflow-hidden">
              <div className="px-4 py-3 bg-primary-light/60 border-b border-black/5">
                <p className="font-mono font-bold text-primary-dark">{de.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{de.role}</p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-foreground/70">
                  <tr>
                    <th className="text-left px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase">Field</th>
                    <th className="text-left px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase">Type</th>
                    <th className="text-left px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {de.rows.map(([f, t, p]) => (
                    <tr key={f} className="border-t border-black/5 hover:bg-primary-light/30">
                      <td className="px-4 py-2.5 font-mono text-primary-dark font-semibold">{f}</td>
                      <td className="px-4 py-2.5"><span className="bg-muted text-foreground/70 px-2 py-0.5 rounded text-xs">{t}</span></td>
                      <td className="px-4 py-2.5">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Step 2 · Journey Builder logic" title="Decision Split + suppression at the door">
        <div className="space-y-4">
          <Card kicker="Entry" title="From New_Gifts_DE">
            <p>Every new or updated gift event enters the journey directly from New_Gifts_DE.</p>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
              <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-2">Condition A · High value</p>
              <p className="font-display font-extrabold text-charcoal text-lg mb-1">LastGiftAmount ≥ $1,000</p>
              <p className="text-sm text-muted-foreground">Routes to the Mid-Value path. Exits all SMS sends immediately and triggers Salesforce Case creation. Case ID is returned and stored in SFMC.</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-6">
              <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-muted-foreground mb-2">Condition B · Standard</p>
              <p className="font-display font-extrabold text-charcoal text-lg mb-1">LastGiftAmount &lt; $1,000</p>
              <p className="text-sm text-muted-foreground">Continues the standard lifecycle SMS journey unchanged.</p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-periwinkle text-charcoal">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-[8vw] py-12 sm:py-16 md:py-20 border-t border-black/5">
          <p className="text-[13.5px] font-bold tracking-[3px] uppercase mb-2 text-primary">Step 3 · Mid-Value engagement flow</p>
          <h2 className="font-display font-black text-2xl md:text-3xl mb-8">Trigger → Case creation → Phone task → Call attempt</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "SMS fallback", d: "Used only if the donor was Not Reached. Human in tone, no automation overload, designed to re-open the conversation, not replace it." },
              { t: "Email gratitude", d: "Triggered only after a Reached or Saved outcome. Focused on appreciation and reinforcing the impact of the gift." },
              { t: "Stewardship handover", d: "Reached or Saved donors are moved into a longer Mid-Value stewardship journey. Declined donors enter a cooling period and a long-term reactivation segment." },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-primary/40 bg-white/70 backdrop-blur p-5">
                <h3 className="font-display font-extrabold text-charcoal mb-1">{s.t}</h3>
                <p className="text-sm text-charcoal/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Step 4 · Measurement" title="KPIs and A/B tests we'd run">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-3">KPIs</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· Time from $1,000 gift to first contact</li>
              <li>· Case creation success rate</li>
              <li>· Call reach rate</li>
              <li>· SMS fallback engagement</li>
              <li>· Saved vs Declined ratio</li>
              <li>· Mid-Value conversion rate</li>
              <li>· Duplicate case prevention rate</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-3">A/B tests</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· Immediate call vs 2-hour delay</li>
              <li>· SMS tone, formal vs conversational</li>
              <li>· Email gratitude depth, short vs storytelling</li>
              <li>· Case priority logic thresholds</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Why this works" title="High-value donors don't want more automation, they want recognition">
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-6">This system works because it:</p>
        <ul className="space-y-2 max-w-3xl text-base text-muted-foreground leading-relaxed mb-8">
          <li>· Removes automation immediately at the right threshold</li>
          <li>· Ensures every high-value donor gets a human touchpoint</li>
          <li>· Keeps Salesforce and SFMC fully synchronised</li>
          <li>· Prevents duplicate outreach through case-based logic</li>
          <li>· Creates structured, measurable Mid-Value engagement</li>
        </ul>
        <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-3">Impact</p>
        <ul className="space-y-2 max-w-3xl text-base text-muted-foreground leading-relaxed">
          <li>· Faster human response time for high-value donors</li>
          <li>· Cleaner CRM data and fewer duplicate outreach issues</li>
          <li>· Higher donor satisfaction during critical giving moments</li>
          <li>· Improved Mid-Value conversion and stewardship outcomes</li>
          <li>· Strong alignment between marketing automation and fundraising teams</li>
        </ul>
      </Section>

      <SiteFooter />
    </div>
  );
}
