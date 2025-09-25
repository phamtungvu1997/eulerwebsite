// Subpage_05_ProductEngineering.tsx
import { KPIGrid } from "@/components/UI/KPIGrid"
import Section from "@/components/UI/Section"
import { Link } from "react-router-dom"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import FAQ from "./Pieces/FAQ"
import HeroSection from "./Pieces/HeroSection"
import ProcessItem from "./Pieces/ProcessItem"


export default function ProductEngineeringPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="From MVP to scalable platform."
        subtitle="Shorten your road to product-market fit."
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Plan your MVP sprint →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      <Section title="Problems We Solve" description="" className="bg-white">
        <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700">
          <li>MVP delays and missed funding milestones</li>
          <li>Fragmented product development process</li>
          <li>Scaling bottlenecks post-launch</li>
          <li>Poor observability and dev velocity</li>
        </ul>
      </Section>

      <Section title="What You Get" description="" className="bg-brand-bgElevated">
        <BulletGrid
          items={[
            "End-to-end product development",
            "MVP acceleration for startups and innovation units",
            "Platform engineering and modernization for scale",
            "Technical due diligence and product audits",
            "White-label and multi-tenant SaaS capabilities",
          ]}
        />
      </Section>

      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Team Roles">
            <p className="text-slate-700">
              Product Manager, UX Designer, Engineers, QA, DevOps
            </p>
          </Card>
          <Card title="Tools & Practices">
            <p className="text-slate-700">
              Feature flags, trunk-based development, observability tools
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Process" description="" className="bg-brand-bgElevated">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Product discovery and roadmap creation", ""],
            ["UX prototyping and lean MVP definition", ""],
            ["Incremental builds with early user feedback", ""],
            ["Platform architecture and scalability engineering", ""],
            ["SLO definition and observability rollout", ""],
            ["Product-market fit validation and growth enablement", ""],
          ].map(([t, d], i) => (
            <ProcessItem key={t as string} index={i + 1} title={t as string} desc={d as string} />
          ))}
        </ol>
      </Section>

      <Section title="Deliverables" description="" className="bg-white">
        <BulletGrid
          items={[
            "Product requirements (PRDs)",
            "MVP release plan",
            "UX prototypes and design systems",
            "Test reports and error budgets",
            "Platform and feature release strategy",
          ]}
          checkColor="bg-emerald-500"
        />
      </Section>

      <Section title="Sample KPIs" description="" className="bg-brand-bgElevated">
        <KPIGrid
          items={[
            "Time-to-first-value",
            "Activation and retention rates",
            "ARR impact from features",
            "Release frequency and hotfix rates",
          ]}
        />
      </Section>

      <Section title="FAQs" description="" className="bg-white">
        <FAQ
          items={[
            {
              q: "How do you define MVP scope?",
              a: "By focusing on core value delivery with minimal build time.",
            },
            {
              q: "Can you help post-launch scaling?",
              a: "Yes—through refactoring, infra tuning, and observability.",
            },
            {
              q: "Do you support SaaS multi-tenancy?",
              a: "Yes, including tenant isolation and user role management.",
            },
            {
              q: "Can you partner with our product team?",
              a: "Absolutely—we complement your team with velocity and expertise.",
            },
          ]}
        />
      </Section>

      <Section title="" description="" className="bg-brand-bgElevated">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Plan your MVP sprint →
        </Link>
      </Section>
    </div>
  )
}
