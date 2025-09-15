import { Link } from "react-router-dom"
import Section from "@/components/UI/Section"
import { KPIGrid } from "@/components/UI/KPIGrid"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"
import HeroSection from "./Pieces/HeroSection"

/** ───────────────────────── Hero ───────────────────────── **/
export default function AugmentedTeamsPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Scale engineering without the hiring drag."
        subtitle="Pods to full ODCs. Ramp in 10–14 days."
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Book a team scoping call →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      <Section
        title="Problems We Solve"
        description="When you're trying to scale fast or fill specialized roles, in-house hiring can slow you down. Whether you're a mid-market firm or an enterprise, engineering velocity often dips due to unfilled positions, inefficient onboarding, or unpredictable demand. We help eliminate those blockers."
        className="bg-white"
      />

      <Section title="What You Get" description="" className="bg-brand-bgElevated/20">
        <BulletGrid
            items={[
              "Access to ready-to-deploy pods (3–5 person teams) within 10–14 days",
              "Full-fledged squads including developers, QA, DevOps, and PM",
              "Offshore Delivery Centers (ODCs), Build-Operate-Transfer (BOT) models, and long-term staff augmentation",
              "Elastic team scaling based on roadmap shifts, product stages, or seasonal demand",
              "Transparent processes and weekly sprint cadences",
            ]}
        />
      </Section>

      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Roles">
            <p className="text-slate-700">
              Product Owner, Technical Lead, Backend & Frontend Developers, QA Engineers, DevOps Engineers
            </p>
          </Card>
          <Card title="Tools">
            <p className="text-slate-700">
              Jira, GitHub/GitLab, Slack, Confluence, Jenkins, CircleCI, SonarQube, Zoom, MS Teams
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Process" description="" className="bg-brand-bgElevated/20">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Intake & Scoping", "Understand your needs, roles, timelines, and tech stack."],
            ["Skills Matrix & Screening", "Curate profiles based on technical and domain fit."],
            ["Pod Assembly", "Build cross-functional pods or augment existing teams."],
            ["Kickoff & Sprint Planning", "Align delivery plans with velocity goals."],
            ["Ongoing Management", "Weekly reviews, daily standups, and proactive reporting."],
          ].map(([t, d], i) => (
            <ProcessItem key={t} index={i + 1} title={t} desc={d} />
          ))}
        </ol>
      </Section>

      <Section title="Deliverables" description="" className="bg-white">
        <BulletGrid
          items={[
            "Team roster and onboarding schedule",
            "Sprint plans and backlog grooming",
            "Working software with tested code and documentation",
            "QA reports, test coverage, and automation suites",
            "Knowledge base and runbooks for handover",
          ]}
          checkColor="bg-emerald-500"
        />
      </Section>

      <Section title="Sample KPIs" description="" className="bg-brand-bgElevated/20">
        <KPIGrid
          items={[
            "Sprint goal achievement rate",
            "Deployment frequency and lead time for changes",
            "Defect escape rate and bug resolution time",
            "Team satisfaction and stakeholder feedback",
          ]}
        />
      </Section>

      <Section title="FAQs" description="" className="bg-white">
        <FAQ items={[
          {
            q: "How fast can you deploy a team?",
            a: "Usually, we can help you deploy a team within 10–14 days for initial pods; within further weeks, we can scale the teams further."
          },
          {
            q: "Can teams scale up/down dynamically?",
            a: "Yes, depending on your demands, we support elastic engagement based on workload."
          },
          {
            q: "How is knowledge retained across rotations?",
            a: "We use dedicated Confluence docs, cross-trained roles, and overlap planning to retain knowledge."
          },
          {
            q: "What about security and compliance?",
            a: "Our teams follow ISO-style rigour with a GDPR-ready mindset, secure coding practices, least-privilege access, and SOC readiness."
          },
        ]}/>
      </Section>

      <Section title="" description="" className="bg-brand-bgElevated/20">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Book a team scoping call →
        </Link>
      </Section>
    </div>
  )
}


