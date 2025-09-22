// Subpage_07_LowCode.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"

export default function LowCodeNoCodePage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Low Code & No Code Development"
        subtitle="Ship business apps in weeks—with enterprise guardrails."
        bgImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Kick off a rapid build →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      {/* Problems We Solve */}
      <Section title="Problems We Solve" description="" className="bg-white">
        <p className="text-slate-700 leading-relaxed">
          Traditional development can be slow, costly, and dependent on scarce engineering capacity.
          Teams struggle to keep pace with business needs, prototype rapidly, and empower non-technical
          users—leading to over-engineered solutions and delayed time-to-market.
        </p>
      </Section>

      {/* What You Get */}
      <Section title="What You Get" description="" className="bg-brand-bgElevated/20">
        <h3 className="text-lg font-semibold mt-6">Rapid Application Development</h3>
        <BulletGrid
          items={[
            "Custom business applications built in weeks, not months",
            "Drag-and-drop interface design with professional UI/UX",
            "Automated database creation and management",
            "Built-in user authentication and authorization",
            "Mobile-responsive applications across all devices",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Process Digitization Solutions</h3>
        <BulletGrid
          items={[
            "Digitize paper-based processes",
            "Workflow automation with approval hierarchies",
            "Integration with existing systems and databases",
            "Real-time reporting and analytics dashboards",
            "Compliance and audit trails",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Citizen Developer Enablement</h3>
        <BulletGrid
          items={[
            "Platform setup and configuration",
            "Training programs for business users",
            "Template libraries and reusable components",
            "Governance frameworks and best practices",
            "Ongoing support and consultation",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Enterprise Platform Integration</h3>
        <BulletGrid
          items={[
            "Microsoft Power Platform (Power Apps, Power Automate, Power BI)",
            "Salesforce Lightning Platform development",
            "Google AppSheet & Workspace integration",
            "Custom connectors for legacy systems",
            "Multi-platform strategy and architecture",
          ]}
        />
      </Section>

      {/* Team & Tools */}
      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Low-Code Platform Experts">
            <p className="text-slate-700">
              Certified Power Platform developers & architects, Salesforce Lightning specialists,
              process-automation business analysts, UI/UX designers for citizen development, and
              trainers enabling business users to build safely.
            </p>
          </Card>
          <Card title="Leading Platforms & Accelerators">
            <p className="text-slate-700">
              Microsoft Power Platform, Salesforce Lightning, Google AppSheet, Mendix, OutSystems,
              Airtable, Notion, Zapier. Libraries of templates, reusable components, connectors,
              and best-practice frameworks to accelerate delivery.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Process" description="" className="bg-brand-bgElevated/20">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Requirements Gathering & Planning (Week 1)", "Process analysis, platform selection, user stories, milestones, training assessment."],
            ["Rapid Development & Iteration (Week 2–4)", "Weekly demos, iterative feedback, integrations, UX refinement, security validation."],
            ["Testing & Training (Week 4–5)", "UAT, performance optimization, end-user docs, admin training, knowledge transfer."],
            ["Deployment & Support (Week 5–6)", "Production go-live, adoption monitoring, performance tuning, enhancements, mentoring."],
          ].map(([t, d], i) => (
            <ProcessItem key={t as string} index={i + 1} title={t as string} desc={d as string} />
          ))}
        </ol>
      </Section>

      {/* FAQs */}
      <Section title="FAQs" description="" className="bg-white">
        <FAQ
          items={[
            {
              q: "How quickly can you deliver a low-code application?",
              a: "Simple apps: 1–2 weeks; more complex solutions: 4–6 weeks—depending on integrations and stakeholder availability.",
            },
            {
              q: "Can non-technical users really create their own applications?",
              a: "Yes. With training and governance, business users can create and maintain simple apps. We provide enablement and ongoing support.",
            },
            {
              q: "How do low-code solutions compare to traditional development?",
              a: "Typically 5–10× faster with lower cost and more business involvement. Highly complex needs may still require traditional builds.",
            },
            {
              q: "What about security and governance?",
              a: "We implement security policies, data access controls, approval workflows, and monitoring to meet compliance standards.",
            },
            {
              q: "Can low-code applications scale with our business?",
              a: "Modern platforms handle enterprise scale. We design for growth and can migrate to traditional stacks when needed.",
            },
          ]}
        />
      </Section>

      {/* CTA */}
      <Section title="" description="" className="bg-brand-bgElevated/20">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Start a low-code sprint →
        </Link>
      </Section>
    </div>
  )
}
