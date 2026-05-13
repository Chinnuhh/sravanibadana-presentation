import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Section, Card } from "@/components/Section";
import journeyImage from "@/assets/challenge-2-journey.png";

export const Route = createFileRoute("/challenge-2")({
  head: () => ({
    meta: [
      { title: "Challenge 02 · Flow Logic, Orange Sky" },
      { name: "description", content: "End-to-end SFMC build: when a single gift hits $1,000 the donor exits SMS, is flagged Mid-Value, lands in a phone queue, and the team is notified." },
    ],
  }),
  component: Challenge2,
});

const masterFields: [string, string, string][] = [
  ["ContactID", "Text · PK", "Donor identifier (CRM ID)"],
  ["Email", "EmailAddress", "Primary email"],
  ["Mobile", "Phone", "SMS-capable mobile"],
  ["FirstName / LastName", "Text", "Personalisation + queue display name"],
  ["LastGiftAmount", "Decimal", "Most recent single gift amount"],
  ["LastGiftDate", "Date", "Timestamp of the most recent gift"],
  ["TotalLifetimeGiving", "Decimal", "Optional but useful for segmentation"],
  ["MidValueFlag", "Boolean", "TRUE once donor crosses $1,000"],
  ["SMS_Eligible", "Boolean", "FALSE = globally suppress from SMS"],
];

const stagingFields: [string, string, string][] = [
  ["ContactID", "Text", "Foreign key to Donor_Master_DE"],
  ["GiftAmount", "Decimal", "Raw donation amount from CRM/API"],
  ["GiftDate", "Date", "When the gift was processed"],
  ["TransactionID", "Text · PK", "Idempotency key, prevents double-processing"],
];

const queueFields: [string, string, string][] = [
  ["ContactID", "Text · PK", "PK so duplicate $1k gifts cannot create duplicate tasks"],
  ["Name", "Text", "FirstName + LastName for the call agent"],
  ["Phone", "Phone", "Mobile to dial"],
  ["GiftAmount", "Decimal", "Context for the call"],
  ["GiftDate", "Date", "Context for the call"],
  ["PriorityLevel", "Text", "'High Priority' for $1k+ gifts"],
  ["Status", "Text", "New · Assigned · Completed"],
  ["CreatedDate", "Date", "Time the task was generated"],
  ["AssignedAgent", "Text", "Filled in by Mid-Value team lead"],
];

function Challenge2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <ChallengeHero
        kicker="Question 02 · Journey Architecture"
        number="02"
        title="When a single gift hits $1,000, exit SMS, flag Mid-Value, create a phone task, notify the team"
        subtitle="A complete SFMC build: clean data foundation in Automation Studio, a Decision Split inside Journey Builder, and a global SMS suppression safety net."
      />

      <Section eyebrow="The goal in one breath" title="What the system has to do, end to end">
        <ul className="space-y-2 max-w-3xl text-base text-muted-foreground leading-relaxed">
          <li>· Donor is sitting inside the SMS lifecycle journey</li>
          <li>· A single donation lands at <strong className="text-charcoal">$1,000 or above</strong></li>
          <li>· Donor immediately <strong className="text-charcoal">exits SMS automation</strong></li>
          <li>· Donor is <strong className="text-charcoal">flagged as Mid-Value</strong> in the master record</li>
          <li>· Donor is <strong className="text-charcoal">added to the phone-call task queue</strong></li>
          <li>· An <strong className="text-charcoal">internal notification</strong> fires to the Mid-Value team</li>
        </ul>
        <p className="text-sm text-muted-foreground/80 mt-5 max-w-3xl">
          The three fields the whole system pivots on: <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">LastGiftAmount</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">LastGiftDate</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">ContactID / SubscriberKey</code>.
        </p>
      </Section>

      <Section eyebrow="Reference build" title="Journey Builder mock-up of the $1,000 Gift Escalation Journey" desc="Decision Split on LastGiftAmount ≥ 1000 routes major gifts into the Mid-Value call queue and out of the SMS lifecycle.">
        <figure className="rounded-xl border border-black/8 bg-white overflow-hidden shadow-sm">
          <img
            src={journeyImage}
            alt="Salesforce Marketing Cloud Journey Builder showing a $1,000 Gift Escalation Journey with a Decision Split on LastGiftAmount, a Yes branch updating the contact and adding them to the Mid-Value call queue, and a No branch continuing the SMS lifecycle."
            className="w-full h-auto block"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section eyebrow="Step 0 · Data foundation" title="Three Data Extensions before we touch Journey Builder" desc="Everything downstream depends on a clean source of truth, a staging layer, and a queue.">
        <div className="space-y-8">
          {[
            { name: "Donor_Master_DE", role: "Source of truth, donor profile + lifecycle flags", rows: masterFields },
            { name: "Donation_Staging_DE", role: "Receives raw donation rows from CRM extract or real-time API", rows: stagingFields },
            { name: "MidValue_Call_Queue_DE", role: "The phone-task queue the Mid-Value team works from", rows: queueFields },
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

      <Section eyebrow="Step 1 · Automation Studio" title="Ingest the donation, then run the $1,000 rule engine in SQL" desc="One Automation, four SQL Query activities, this is where the actual logic lives.">
        <div className="space-y-5">
          <Card kicker="1.1 · Import Activity" title="Land raw gifts in staging">
            <p>SFTP/CRM file import (or API ingestion for real-time) → target = <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">Donation_Staging_DE</code>. <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">TransactionID</code> as PK guarantees idempotency.</p>
          </Card>

          <SqlBlock
            title="Query 1 · Update donor master with latest gift"
            sql={`SELECT
    d.ContactID,
    d.GiftAmount AS LastGiftAmount,
    d.GiftDate  AS LastGiftDate
FROM Donation_Staging_DE d`}
            target="Donor_Master_DE (Update)"
          />
          <SqlBlock
            title="Query 2 · Identify high-value donors (≥ $1,000)"
            sql={`SELECT
    ContactID,
    GiftAmount AS LastGiftAmount,
    GiftDate   AS LastGiftDate
FROM Donation_Staging_DE
WHERE GiftAmount >= 1000
  AND GiftDate >= DATEADD(day, -1, GETDATE())`}
            target="High_Value_Donor_DE (Overwrite)"
          />
          <SqlBlock
            title="Query 3 · Build the Mid-Value phone queue"
            sql={`SELECT
    m.ContactID,
    m.FirstName + ' ' + m.LastName AS Name,
    m.Mobile        AS Phone,
    d.GiftAmount,
    d.GiftDate,
    'High Priority' AS PriorityLevel,
    'New'           AS Status,
    GETDATE()       AS CreatedDate
FROM Donor_Master_DE m
JOIN Donation_Staging_DE d
  ON m.ContactID = d.ContactID
WHERE d.GiftAmount >= 1000`}
            target="MidValue_Call_Queue_DE (Update, ContactID PK dedupes)"
          />
          <SqlBlock
            title="Query 4 · Flag the donor so Journey Builder can react"
            sql={`SELECT
    m.ContactID,
    1 AS MidValueFlag,
    0 AS SMS_Eligible
FROM Donor_Master_DE m
JOIN Donation_Staging_DE d
  ON m.ContactID = d.ContactID
WHERE d.GiftAmount >= 1000`}
            target="Donor_Master_DE (Update)"
          />
        </div>
      </Section>

      <Section eyebrow="Step 2 · Journey entry source" title="Donor_Master_DE drives the lifecycle journey">
        <Card kicker="Entry source" title="Donor_Master_DE">
          <p>Schedule: re-evaluate daily (or near real-time if the org is on the streaming setup). Entry criteria = <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">SMS_Eligible = 1</code> so anyone we just flagged Mid-Value is excluded at the door.</p>
        </Card>
      </Section>

      <Section eyebrow="Step 3 · Decision Split" title="The first thing every contact hits inside the journey">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-primary mb-2">Condition A · High value</p>
            <p className="font-display font-extrabold text-charcoal text-lg mb-1">LastGiftAmount ≥ 1000</p>
            <p className="text-sm text-muted-foreground">Routes to the High Value path (Step 4).</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <p className="text-[10.5px] font-bold tracking-[2px] uppercase text-muted-foreground mb-2">Condition B · Standard</p>
            <p className="font-display font-extrabold text-charcoal text-lg mb-1">LastGiftAmount &lt; 1000</p>
            <p className="text-sm text-muted-foreground">Continues the normal SMS lifecycle (Step 5).</p>
          </div>
        </div>
      </Section>

      <Section dark eyebrow="Step 4 · High value path" title="Four activities, in this exact order">
        <ol className="space-y-4 max-w-3xl">
          {[
            { t: "4.1 · Update Contact / Data Extension Update", d: "Set MidValueFlag = 1 and SMS_Eligible = 0 on Donor_Master_DE. This is what stops every future SMS send." },
            { t: "4.2 · Data Extension Entry Activity → MidValue_Call_Queue_DE", d: "Inserts the row that becomes the phone task. ContactID is the PK so duplicate $1k gifts can't create duplicate tasks." },
            { t: "4.3 · Send Email, internal alert to the Mid-Value team", d: "Includes Name, Phone, GiftAmount, GiftDate. Triggers immediate human action, a second channel in case the queue isn't being watched." },
            { t: "4.4 · Exit Criteria / End Journey activity", d: "Hard exit so the lifecycle automation can never speak to this donor again from inside this journey." },
          ].map((s) => (
            <li key={s.t} className="rounded-xl border border-white/15 bg-white/5 p-5">
              <h3 className="font-display font-extrabold text-white mb-1">{s.t}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Step 5 · Low value path" title="Donors under $1,000 stay in the lifecycle">
        <Card kicker="Standard SMS lifecycle" title="Thank you → Impact story → Engagement nudge → Upgrade prompt">
          <p>Same content cadence as today. The Decision Split is invisible to them, they just keep getting the journey they were already on.</p>
        </Card>
      </Section>

      <Section eyebrow="Step 6 · Global SMS safety net" title="Suppression layer outside the journey, in case anything slips through" desc="A belt-and-braces guard so an off-journey send file can never accidentally text a Mid-Value donor.">
        <div className="space-y-4">
          <Card kicker="Create" title="SMS_Suppression_DE">
            <p>Populated by an automation that runs hourly and selects every contact where <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">MidValueFlag = 1</code> OR <code className="bg-muted px-1.5 py-0.5 rounded text-primary-dark">SMS_Eligible = 0</code>.</p>
          </Card>
          <Card kicker="Apply" title="Add as Exclusion DE on every SMS send definition">
            <p>Mid-Value donors are excluded at send time even if a campaign manager builds an ad-hoc audience. Defence in depth.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Step 7 · De-dupe the queue" title="ContactID as Primary Key on MidValue_Call_Queue_DE">
        <Card kicker="Why" title="Two $1,000 gifts in one day = one phone task, not two">
          <p>The Update target on Query 3 plus a PK on ContactID means the second gift updates the existing row (latest amount + date) instead of inserting a duplicate. The Mid-Value team gets one consolidated task.</p>
        </Card>
      </Section>

      <Section eyebrow="Step 8 · Monitoring & reporting" title="MidValue_Tracking_DE, so we can prove this is working">
        <Card kicker="Log" title="Entry time · Call outcome · Conversion · Time-to-call">
          <p>Populated by a nightly Automation Studio job. Feeds a simple dashboard (Datorama / Tableau / Looker, whichever the org uses) so we can show the panel: median time-to-first-call, % of $1k gifts contacted within 48 hours, and downgrade/cancel rates after the call.</p>
        </Card>
      </Section>

      <Section dark eyebrow="Step 9 · Test cases" title="What I'd run before go-live">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { case: "Case 1 · Gift = $50", expected: "Stays in SMS journey. No flag, no queue row." },
            { case: "Case 2 · Gift = $999", expected: "Stays in SMS journey. Boundary check, exclusive of $1,000." },
            { case: "Case 3 · Gift = $1,000", expected: "Exits SMS, MidValueFlag = 1, queue row created, team notified." },
            { case: "Case 4 · Two $1,000 gifts same day", expected: "Exactly one queue row. Update via PK on ContactID, no duplicate phone task." },
          ].map((c) => (
            <div key={c.case} className="rounded-xl border border-primary/40 bg-primary/10 p-5">
              <p className="font-display font-extrabold text-white mb-1">{c.case}</p>
              <p className="text-sm text-white/80">{c.expected}</p>
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function SqlBlock({ title, sql, target }: { title: string; sql: string; target: string }) {
  return (
    <div className="rounded-xl border border-black/8 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-black/5 bg-muted/40">
        <p className="font-display font-extrabold text-charcoal">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">Target → <span className="font-mono text-primary-dark">{target}</span></p>
      </div>
      <pre className="px-4 py-4 text-xs leading-relaxed overflow-x-auto bg-charcoal text-white/90 font-mono">{sql}</pre>
    </div>
  );
}
