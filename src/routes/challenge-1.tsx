import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section, Card } from "@/components/Section";
import journeyImage from "@/assets/challenge-1-journey.png";

export const Route = createFileRoute("/challenge-1")({
  head: () => ({
    meta: [
      { title: "Challenge 01 · Retention Save Journey, Orange Sky" },
      { name: "description", content: "A multi-channel SFMC save journey for regular givers showing cancellation intent after the third gift, email, SMS and phone, with a full data and automation build." },
    ],
  }),
  component: Challenge1,
});

const masterFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "Donor identifier (CRM ID / SubscriberKey)"],
  ["FirstName", "Text", "Personalisation in email + SMS"],
  ["EmailAddress", "EmailAddress", "Primary email"],
  ["MobileNumber", "Phone", "SMS-capable mobile"],
  ["DonationAmount", "Decimal", "Recurring gift amount"],
  ["TotalGifts", "Number", "Lifetime gift count, drives the post-3rd trigger"],
  ["LastGiftDate", "Date", "Most recent gift timestamp"],
  ["DonorStatus", "Text", "Active · Paused · Reduced · Cancelled"],
  ["PreferredChannel", "Text", "Email · SMS · Phone"],
];

const atRiskFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "FK to Donor_Master_DE"],
  ["RiskReason", "Text", "Failed payment · Low engagement · Cancel intent"],
  ["TotalGifts", "Number", "Should be ≥ 3 to enter"],
  ["LastGiftAmount", "Decimal", "Used for high-value branching"],
  ["LastGiftDate", "Date", "Recency context"],
  ["EngagementScore", "Number", "From scoring model"],
  ["CancellationFlag", "Boolean", "TRUE if explicit intent detected"],
  ["EntryDate", "Date", "Timestamp donor was injected into journey"],
];

const outcomeFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "FK to Donor_Master_DE"],
  ["Outcome", "Text", "Saved · Reduced · Paused · Cancelled"],
  ["SavedDate", "Date", "When the save was confirmed"],
  ["ReducedDonation", "Boolean", "Donor downgraded amount"],
  ["PausedDonation", "Boolean", "Donor paused giving"],
  ["CancelledDonation", "Boolean", "Donor confirmed cancellation"],
];

const phoneQueueFields: [string, string, string][] = [
  ["ContactKey", "Text · PK", "Stops duplicate tasks for the same donor"],
  ["PhoneNumber", "Phone", "Mobile to dial"],
  ["PriorityLevel", "Text", "High · Medium · Low (driven by LTV + tenure)"],
  ["AssignedTo", "Text", "Supporter Care agent"],
  ["CallStatus", "Text", "New · In progress · Saved · Cancelled"],
];

function FieldTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-black/8 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-muted/60 text-charcoal">
          <tr>
            <th className="text-left font-semibold px-4 py-3">Field</th>
            <th className="text-left font-semibold px-4 py-3">Type</th>
            <th className="text-left font-semibold px-4 py-3">Why it exists</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([f, t, d]) => (
            <tr key={f} className="border-t border-black/5">
              <td className="px-4 py-3 font-mono text-[12.5px] text-primary-dark">{f}</td>
              <td className="px-4 py-3 text-muted-foreground">{t}</td>
              <td className="px-4 py-3 text-muted-foreground">{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="rounded-xl border border-black/8 bg-charcoal text-white overflow-hidden">
      <div className="px-4 py-2 text-[11px] font-bold tracking-[2px] uppercase text-primary border-b border-white/10">{title}</div>
      <pre className="p-4 text-[12.5px] leading-relaxed overflow-x-auto"><code>{code}</code></pre>
    </div>
  );
}

function Challenge1() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <ChallengeHero
        kicker="Question 01 · Retention Strategy"
        number="01"
        title="A multi-channel save journey for regular givers showing cancellation intent after the third gift"
        subtitle="Email, SMS and phone, sequenced through behavioural triggers and progressive escalation, built on a clean SFMC data model and powered by Journey Builder + Automation Studio."
      />

      <Section eyebrow="Why this journey exists" title="The third-gift cliff is an emotional one, not a transactional one">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            Our data shows cancellations spike after the third regular gift. That pattern usually points to three things: a
            <strong className="text-charcoal"> drop in emotional connection</strong>, a
            <strong className="text-charcoal"> lack of perceived impact</strong>, or
            <strong className="text-charcoal"> donor fatigue</strong>, rarely a pure financial decision.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The save journey is designed to intervene <em>before</em> a cancellation is finalised, combining email, SMS and a
            human phone call with progressive escalation. Every stage is built around <strong className="text-charcoal">re-engagement, emotional reinforcement, and offering an alternative to leaving</strong>.
          </p>
        </div>
      </Section>

      <Section eyebrow="Objectives" title="What success looks like">
        <div className="grid md:grid-cols-3 gap-5">
          <Card kicker="Outcome 01" title="Reduce cancellations">Catch at-risk donors after gift #3 and recover them before churn is locked in.</Card>
          <Card kicker="Outcome 02" title="Rebuild emotional connection">Re-anchor donors to the mission with stories, impact metrics and gratitude.</Card>
          <Card kicker="Outcome 03" title="Increase donor lifetime value">Offer pause / reduce / re-frequency so the relationship survives a tough month.</Card>
          <Card kicker="Outcome 04" title="Identify at-risk donors earlier">Move from reactive saves to a predictive donor health score.</Card>
          <Card kicker="Outcome 05" title="Personalise the experience">Use behaviour, channel preference and reason-for-leaving to tailor every touch.</Card>
          <Card kicker="Outcome 06" title="Protect long-term brand trust">Even cancellations exit gracefully, preserving future re-engagement.</Card>
        </div>
      </Section>

      <Section eyebrow="Reference build" title="Journey Builder mock-up, RG Save Journey, Post 3rd Gift" desc="Email-first, SMS as a 2-day fallback, phone escalation for high-value or long-term donors, and a graceful exit path for confirmed cancellations.">
        <figure className="rounded-xl border border-black/8 bg-white overflow-hidden shadow-sm">
          <img
            src={journeyImage}
            alt="Salesforce Marketing Cloud Journey Builder showing the RG Save Journey Post 3rd Gift, entry from At-Risk Donors data extension, Email 1 thank-you with impact and flexible options, a 2-day wait, decision split on engagement, an SMS fallback with a save link, a second decision split, escalation to a phone call queue for high-value donors, and exit paths for saved versus cancelled donors."
            className="w-full h-auto block"
            loading="lazy"
          />
          <figcaption className="px-5 py-3 text-xs text-muted-foreground border-t border-black/5">
            Entry Source <code className="text-primary-dark">At_Risk_Donor_DE</code> → Email 1 (gratitude + impact + alternatives) → Wait 2 days → Decision Split on engagement → SMS fallback with save link → Decision Split → Create Task in <code className="text-primary-dark">Phone_Queue_DE</code> for high-value donors → Email 2 (final empathetic save) → Exit branches (Saved → Nurture / No response → Win-back).
          </figcaption>
        </figure>
      </Section>

      <Section eyebrow="Step 0" title="Define the business logic before opening SFMC">
        <div className="grid md:grid-cols-3 gap-5">
          <Card kicker="Objective" title="Reduce cancellations after the 3rd gift">Single, measurable goal that every stage of the journey ladders up to.</Card>
          <Card kicker="Entry" title="Donors with ≥ 3 gifts AND a risk signal">Failed payment · cancellation page visit · 60-day disengagement · explicit “stop” request · missed recurring payment.</Card>
          <Card kicker="Success metrics" title="Save rate, churn reduction, recovered MRR">Plus email + SMS engagement and downstream LTV at 6 and 12 months.</Card>
        </div>
      </Section>

      <Section eyebrow="Step 1 · Data foundation" title="Four Data Extensions do all the work" desc="Everything in SFMC starts with the data model. Get this right and Journey Builder becomes simple orchestration on top.">
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-extrabold text-base mb-3">1. Donor_Master_DE, single source of truth</h3>
            <FieldTable rows={masterFields} />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base mb-3">2. At_Risk_Donor_DE, journey entry source</h3>
            <FieldTable rows={atRiskFields} />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base mb-3">3. Save_Outcome_DE, closes the reporting loop</h3>
            <FieldTable rows={outcomeFields} />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base mb-3">4. Phone_Queue_DE, task list for the Supporter Care team</h3>
            <FieldTable rows={phoneQueueFields} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Step 2 · Automation Studio" title="Identify at-risk donors on a schedule" desc="A daily (or hourly) automation refreshes the master record, runs the segmentation SQL, and populates the entry DE.">
        <div className="grid lg:grid-cols-2 gap-6">
          <CodeBlock
            title="SQL · Identify at-risk donors after gift #3"
            code={`SELECT
    ContactKey,
    FirstName,
    EmailAddress,
    MobileNumber,
    TotalGifts,
    LastGiftDate,
    'Low Engagement' AS RiskReason
FROM Donor_Master
WHERE TotalGifts >= 3
  AND EmailOpenLast60Days = 0
  AND DonorStatus = 'Active'`}
          />
          <CodeBlock
            title="SQL · Capture explicit cancellation intent"
            code={`SELECT
    ContactKey,
    FirstName,
    EmailAddress,
    MobileNumber,
    TotalGifts,
    LastGiftAmount,
    'Cancellation Intent' AS RiskReason
FROM Donor_Master  m
JOIN Cancel_Events e
  ON e.ContactKey = m.ContactKey
WHERE m.TotalGifts >= 3
  AND e.EventType IN ('CancelStarted','PaymentFailed')
  AND e.EventDate >= DATEADD(day,-7,GETDATE())`}
          />
        </div>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          <Card kicker="Daily" title="Refresh donor master">Import latest CRM + payment data into Donor_Master_DE.</Card>
          <Card kicker="Daily" title="Run segmentation SQL">Populate At_Risk_Donor_DE with this morning’s candidates.</Card>
          <Card kicker="Continuous" title="Inject into Journey Builder">Re-entry blocked for 90 days to prevent fatigue.</Card>
          <Card kicker="Daily" title="Sync outcomes back to CRM">Save_Outcome_DE → CRM so Supporter Care has full visibility.</Card>
        </div>
      </Section>

      <Section eyebrow="Step 3 · Journey Builder" title="The save flow, stage by stage">
        <div className="space-y-5">
          <Card kicker="Stage 1 · Email 1, immediate" title="Appreciation + impact + alternatives">
            <p>Sent the moment the risk trigger fires. Thanks for the first three gifts, shows tangible impact (laundry loads, conversations, services delivered), reinforces community belonging, and offers <strong className="text-charcoal">pause · reduce · change frequency</strong> rather than cancel.</p>
            <p>Personalised with AMPscript: first name, donation history, program/location relevance, specific impact metrics tied to their giving level.</p>
          </Card>
          <Card kicker="Stage 2 · Wait" title="2–3 days">Give donors time to act before escalating channels. Avoids the “we just emailed and immediately texted” feeling that erodes trust.</Card>
          <Card kicker="Stage 3 · Decision Split" title="Did they engage?">Branch on email open, save-link click, payment update, or explicit cancel. Engaged donors move to thank-you + nurture; non-engaged donors continue down the escalation path.</Card>
          <Card kicker="Stage 4 · SMS, direct + human" title="Mobile-friendly save options">
            <p className="italic">“Hi Sarah, thank you for supporting Orange Sky. Your donations have already helped provide 12 safe laundry services. If things are difficult right now, we can help adjust your giving rather than cancel completely.”</p>
            <p>Short link to a CloudPage where they can pause, reduce, or talk to support. SMS is here because of its open-rate advantage and emotional immediacy.</p>
          </Card>
          <Card kicker="Stage 5 · Wait + Decision Split" title="2 days, then check SMS click + donation activity">If still no engagement, route into the high-value escalation branch.</Card>
          <Card kicker="Stage 6 · Phone escalation" title="Human empathy for the donors most worth saving">
            <p>Triggered when <code className="text-primary-dark">DonationAmount &gt; $50</code> OR donor is long-term OR historically highly engaged. Donor is written into <code className="text-primary-dark">Phone_Queue_DE</code> with priority, that becomes a task in the fundraising/Supporter Care team’s queue.</p>
            <p>Call brief: understand the “why”, offer flexible options, reinforce impact, capture feedback. Not a sales call.</p>
          </Card>
          <Card kicker="Stage 7 · Outcome branches" title="Saved · Reduced/Paused · Cancelled">
            <p><strong className="text-charcoal">Saved</strong> → thank-you confirmation + move into milestone appreciation journey.</p>
            <p><strong className="text-charcoal">Paused / Reduced</strong> → CRM preferences updated automatically + modified-giving journey.</p>
            <p><strong className="text-charcoal">Cancelled</strong> → graceful exit message, optional feedback, win-back segment after a cooling-off period. Goodwill protected.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Step 4 · Personalisation" title="AMPscript + Dynamic Content do the emotional heavy lifting">
        <div className="grid md:grid-cols-3 gap-5">
          <Card kicker="Trigger" title="Financial hardship">Lead with a reduce-amount or pause offer rather than impact storytelling.</Card>
          <Card kicker="Trigger" title="Low engagement">Lead with impact stories and beneficiary outcomes, re-light the emotional spark first.</Card>
          <Card kicker="Trigger" title="Payment failure">One-tap update-payment CTA before any save messaging, fix the friction first.</Card>
        </div>
      </Section>

      <Section eyebrow="Step 5 · Measurement" title="What we’ll watch, and what we’ll test" desc="Reporting via Tracking Extracts, Data Views and Intelligence Reports, feeding a single retention dashboard.">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-display font-extrabold text-base mb-3 text-charcoal">KPIs</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· Cancellation recovery / save rate</li>
              <li>· Reduced churn after the 3rd gift</li>
              <li>· Email + SMS engagement rates</li>
              <li>· Save conversion rate by channel</li>
              <li>· Donor lifetime value at 6 and 12 months</li>
              <li>· Recovered recurring revenue</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base mb-3 text-charcoal">Always-on A/B tests</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· Subject lines (gratitude vs urgency)</li>
              <li>· Emotional vs impact-led messaging</li>
              <li>· SMS send timing</li>
              <li>· Call prioritisation logic</li>
              <li>· Pause vs reduce as the primary save offer</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Strategic upgrade" title="Move from reactive saves to predictive retention" dark>
        <p className="text-white/80 text-base max-w-3xl leading-relaxed">
          The biggest unlock isn’t a better save journey, it’s never needing one. I’d build a
          <strong className="text-white"> donor health scoring model</strong> on top of this same data model, combining engagement
          trends, giving frequency, payment behaviour, volunteer/event participation and campaign responsiveness. That score becomes
          a new entry trigger: nurture donors <em>before</em> the cliff, not after the fall.
        </p>
      </Section>

      <SiteFooter />
    </div>
  );
}
