import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ChallengeHero } from "@/components/ChallengeHero";
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
      />

      <Section eyebrow="My approach" title="Discovery first, automation second">
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          The risk on partnership projects isn't the build, it's misalignment between teams who each own a piece of the donor experience. I'd run a structured discovery sprint that surfaces the data flow, the legal/finance constraints, and the partner's brand expectations <em>before</em> I touch SFMC.
        </p>
      </Section>

      <Section eyebrow="Phase 1" title="Discovery: three workshops, one shared brief" desc="Two weeks. Outcome: signed-off requirements doc and a data flow diagram everyone agrees with.">
        <div className="grid md:grid-cols-3 gap-4">
          <Card kicker="Workshop 01" title="Finance">
            <p><strong>Who:</strong> Finance Lead, Donor Database Manager.</p>
            <p><strong>Goals:</strong> How does the payroll file land? Cadence (weekly/monthly), format (CSV/SFTP/API), reconciliation rules, GST treatment, receipting requirements.</p>
            <p><strong>Output:</strong> Data ingestion spec + receipting compliance checklist.</p>
          </Card>
          <Card kicker="Workshop 02" title="Corporate Partnerships">
            <p><strong>Who:</strong> Partnership Manager, Account Lead.</p>
            <p><strong>Goals:</strong> What did we promise the partner? Reporting cadence, branding, employee comms guidelines, escalation paths, success metrics.</p>
            <p><strong>Output:</strong> Partner contract summary + reporting wireframe.</p>
          </Card>
          <Card kicker="Workshop 03" title="Marketing & Tech">
            <p><strong>Who:</strong> Lifecycle Lead, SFMC Admin, CRM Owner.</p>
            <p><strong>Goals:</strong> Where do payroll donors live in our model? Suppression from acquisition journeys, consent status, segmentation.</p>
            <p><strong>Output:</strong> Data model + journey architecture decisions.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Phase 2" title="Key deliverables in the project plan">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Requirements & Scope Doc", d: "One source of truth covering business goals, success metrics, in-scope / out-of-scope, dependencies, RACI." },
            { t: "Data Flow Diagram", d: "End-to-end: payroll file → Finance reconciliation → CRM → SFMC Data Extension → Journey. Includes refresh frequency and ownership at each step." },
            { t: "Donor Experience Map", d: "Welcome → first thank-you → quarterly impact report → annual statement → milestone celebrations. Mapped against employee tenure with the partner." },
            { t: "Email Templates & Approvals", d: "Co-branded templates (Orange Sky + partner logo) with sign-off workflow from both sides. Includes CAN-SPAM / Spam Act unsubscribe handling for B2B context." },
            { t: "Automated Partner Reporting", d: "Monthly + quarterly dashboards: $ raised, # employees giving, retention rate, impact metrics. Delivered via Datorama / Tableau / scheduled email." },
            { t: "Test Plan & UAT Scripts", d: "Test data extension with seeded edge cases (new joiner, leaver, amount change, opt-out). UAT signed off by Partnership Manager + Finance Lead." },
            { t: "Launch Runbook", d: "Go-live checklist, comms cascade to the partner's employees, monitoring window, rollback plan." },
            { t: "Post-launch Review (30/60/90)", d: "Performance against the success metrics, partner satisfaction check-in, optimisation backlog." },
          ].map((d) => (
            <Card key={d.t} title={d.t}>{d.d}</Card>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Risk register" title="Three risks I'd flag at kick-off">
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
