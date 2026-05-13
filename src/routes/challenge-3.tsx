import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
import vanSticker from "@/assets/orange-sky-van-sticker.webp";
import { Section, Card } from "@/components/Section";

export const Route = createFileRoute("/challenge-3")({
  head: () => ({
    meta: [
      { title: "Challenge 03 · Scoping the Payroll Giving Journey, Orange Sky" },
      { name: "description", content: "Scoping an automated reporting and thank-you journey for a new corporate payroll-giving partner." },
    ],
  }),
  component: Challenge3,
});

function Challenge3() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <ChallengeHero
        kicker="Question 03 · Stakeholder Scoping & Delivery"
        number="03"
        title="Scoping the new corporate payroll giving journey"
        subtitle="A repeatable scoping approach that gets Finance, Corporate Partnerships and Marketing aligned before a single email is built."
        sticker={vanSticker}
        stickerAlt="Orange Sky van"
      />

      <Section eyebrow="My approach" title="Discovery first, automation second">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          The risk on partnership projects isn't the build, it's misalignment between teams who each own a piece of the donor experience. I'd run a structured discovery sprint that surfaces the data flow, the legal/finance constraints, and the partner's brand expectations <em>before</em> I touch SFMC.
        </p>
      </Section>

      <Section eyebrow="Scoping" title="How I would scope this project (Finance + Corporate Partnerships)" desc="I would start by running structured discovery sessions with both teams separately, then align them together in a joint requirements workshop.">
        <div className="grid md:grid-cols-3 gap-4">
          <Card kicker="Step 01" title="Discovery with Corporate Partnerships">
            <p><strong>Focus:</strong> relationship, expectations, and employee experience.</p>
            <p>I would clarify:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>What the partner expects employees to receive (thank you, updates, impact stories, certificates, etc.)</li>
              <li>Frequency of communication (monthly, quarterly, per payroll cycle, annual summary)</li>
              <li>Brand guidelines and approval requirements</li>
              <li>Whether messaging is co-branded or fully Orange Sky branded</li>
              <li>Any sensitivity rules (employee privacy, corporate tone, opt-out handling)</li>
            </ul>
            <p><strong>Key outcome:</strong> a clear definition of the employee journey experience and partner expectations.</p>
          </Card>
          <Card kicker="Step 02" title="Discovery with Finance Team">
            <p><strong>Focus:</strong> data accuracy, reconciliation, and reporting integrity.</p>
            <p>I would clarify:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>How payroll donations are received (batch files, API, manual upload)</li>
              <li>Data structure available: Employee ID (or anonymised ID), Employer/partner ID, donation amount per payroll cycle, payment frequency, start and end dates</li>
              <li>Reconciliation process between Finance and CRM</li>
              <li>Timing delays (T+1 day, weekly, monthly)</li>
              <li>Reporting requirements for auditing and compliance</li>
            </ul>
            <p><strong>Key outcome:</strong> a confirmed data source + donation truth model.</p>
          </Card>
          <Card kicker="Step 03" title="Joint alignment workshop">
            <p><strong>Finance + Partnerships + CRM/Marketing.</strong> This is where I lock the scope.</p>
            <p>We align on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>"What is a confirmed donation event?"</li>
              <li>Single source of truth for reporting</li>
              <li>How often data sync happens into Salesforce Marketing Cloud</li>
              <li>How employees are identified in SFMC (Contact Key strategy)</li>
              <li>What counts as a "thank you trigger" event</li>
              <li>Data privacy and consent rules (important for corporate payroll giving)</li>
            </ul>
            <p><strong>Key outcome:</strong> signed-off requirements document + journey triggers.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Solution design" title="How I would design the solution in Salesforce Marketing Cloud" desc="Data model design that supports both real-time triggers (thank you) and batch reporting (Finance + corporate reporting).">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Contact Data Extension", d: "Employee-level record — the master Contact in SFMC, keyed for journey entry and personalisation." },
            { t: "Donation Transaction Data Extension", d: "Each payroll gift recorded as an individual transaction row, enabling per-event triggers and audit history." },
            { t: "Corporate Partner Data Extension", d: "Employer-level metadata: partner name, branding, communication rules, approval owners." },
            { t: "Aggregated Summary DE", d: "Monthly or quarterly totals per employee, used for impact statements, milestone messaging and partner reporting." },
          ].map((d) => (
            <Card key={d.t} title={d.t}>{d.d}</Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6">This structure ensures both <strong>real-time triggers</strong> (thank you on confirmed donation event) and <strong>batch reporting</strong> (Finance reconciliation + corporate partner reporting) are served from the same source of truth.</p>
      </Section>

      <Section eyebrow="Journey logic" title="Journey logic (high level)" desc="Triggered when a payroll donation is ingested into SFMC.">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Immediate thank-you email", d: "Sent after the first confirmed payroll gift — co-branded with the corporate partner." },
            { t: "Ongoing impact updates", d: "Monthly or quarterly impact stories aligned to the partner's communication cadence." },
            { t: "Milestone triggers", d: "Recognition at 6 months, 12 months, and continued giving anniversaries." },
            { t: "Exit logic", d: "Optional graceful exit if employment ends or donations stop — with a final acknowledgement message." },
          ].map((d) => (
            <Card key={d.t} title={d.t}>{d.d}</Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reporting layer" title="Reporting layer" desc="Two distinct reporting outputs serving different audiences from the same source of truth.">
        <div className="grid md:grid-cols-2 gap-4">
          <Card kicker="Output 01" title="Finance reporting">
            <ul className="list-disc pl-5 space-y-1">
              <li>Total payroll donations per partner</li>
              <li>Total employees participating</li>
              <li>Month-on-month trend</li>
              <li>Reconciliation summary (SFMC vs Finance system)</li>
            </ul>
          </Card>
          <Card kicker="Output 02" title="Corporate partner reporting">
            <ul className="list-disc pl-5 space-y-1">
              <li>Employee participation rate</li>
              <li>Total impact created</li>
              <li>Storytelling metrics (e.g., "X showers funded")</li>
              <li>Individual employee summaries (if allowed)</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Project plan" title="Key deliverables">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { k: "Deliverable", t: "Requirements & Scope", items: ["Business goals & success metrics", "Stakeholder alignment", "Ownership & governance"] },
            { k: "Deliverable", t: "Data & Integration Design", items: ["Payroll → CRM → SFMC data flow", "Validation & reconciliation rules", "Data Extensions & automation setup"] },
            { k: "Deliverable", t: "Donor Journey Design", items: ["Welcome & thank-you journey", "Impact & milestone communications", "Re-engagement logic"] },
            { k: "Deliverable", t: "Reporting & Dashboards", items: ["Finance reconciliation reporting", "Partner impact dashboards", "Automated scheduled reports"] },
            { k: "Deliverable", t: "Testing & Launch", items: ["UAT & edge-case testing", "Go-live runbook", "Monitoring & optimisation plan"] },
            { k: "Deliverable", t: "Post-Launch Review", items: ["30/60/90-day performance review", "Retention & engagement analysis", "Optimisation backlog"] },
          ].map((d) => (
            <Card key={d.t} kicker={d.k} title={d.t}>
              <ul className="list-disc pl-5 space-y-1">
                {d.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Risk register" title="Risks I'd flag at kick-off">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { t: "Data quality from payroll", d: "Files often arrive with inconsistent employee IDs or missing emails. Mitigation: agree a strict file spec + automated validation step before ingestion." },
            { t: "Brand approval bottleneck", d: "Two brand teams = two approval cycles. Mitigation: agree templates upfront and lock them; use merge fields for variable content." },
            { t: "Privacy & consent", d: "Employees may not have opted into Orange Sky marketing, only into payroll giving. Mitigation: separate consent flag; transactional comms only unless explicit opt-in." },
          ].map((r) => (
            <div key={r.t} className="rounded-xl border border-primary/40 bg-white/5 p-5">
              <h4 className="font-display font-extrabold text-primary mb-2">{r.t}</h4>
              <p className="text-white/70 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
