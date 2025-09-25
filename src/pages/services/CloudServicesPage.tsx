// Subpage_03_Cloud.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import { KPIGrid } from "@/components/UI/KPIGrid"
import FAQ from "./Pieces/FAQ"


export default function CloudServicesPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Modernize and optimize your cloud estate."
        subtitle="Multi-cloud, IaC, DevOps, FinOps."
        bgImage="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Request a cloud assessment →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      <Section
        title="Problems We Solve"
        description=""
        className="bg-white"
      >
        <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700">
          <li>Legacy apps and infrastructure slowing innovation</li>
          <li>Cloud overspend and underutilization</li>
          <li>Governance and compliance gaps</li>
          <li>Inefficient or manual deployment pipelines</li>
        </ul>
      </Section>

      <Section title="What You Get" description="" className="bg-brand-bgElevated">
        <BulletGrid
          items={[
            "Cloud migration and modernization",
            "Cloud-native application builds (12-factor apps)",
            "Infrastructure as Code (IaC) with Terraform or Pulumi",
            "CI/CD automation and GitOps workflows",
            "FinOps insights to manage and reduce spend",
            "24/7 SRE-based operational support",
          ]}
        />
      </Section>

      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Team Roles">
            <p className="text-slate-700">
              Cloud Architects, SREs, DevOps Engineers
            </p>
          </Card>
          <Card title="Tools & Platforms">
            <p className="text-slate-700">
              AWS, Azure, GCP, Terraform, Helm, ArgoCD, GitHub Actions, Prometheus, Grafana
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Process" description="" className="bg-brand-bgElevated">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Cloud readiness assessment and TCO analysis", ""],
            ["Architecture design and migration planning", ""],
            ["Replatforming and cloud-native rebuilds", ""],
            ["CI/CD enablement and IaC setup", ""],
            ["SRE model rollout with SLAs", ""],
            ["FinOps optimization and monitoring", ""],
          ].map(([t, d], i) => (
            <ProcessItem key={t as string} index={i + 1} title={t as string} desc={d as string} />
          ))}
        </ol>
      </Section>

      <Section title="Deliverables" description="" className="bg-white">
        <BulletGrid
          items={[
            "Cloud landing zones and migration runbooks",
            "IaC templates and version-controlled configs",
            "CI/CD pipelines with automated testing",
            "Observability dashboards and alerts",
            "FinOps reports with actionable cost insights",
          ]}
          checkColor="bg-emerald-500"
        />
      </Section>

      <Section title="Sample KPIs" description="" className="bg-brand-bgElevated">
        <KPIGrid
          items={[
            "Uptime and SLA adherence",
            "MTTR and change fail rate",
            "Cloud cost per environment or app",
            "Deployment frequency",
          ]}
        />
      </Section>

      <Section title="FAQs" description="" className="bg-white">
        <FAQ
          items={[
            {
              q: "Do you support multi-cloud strategies?",
              a: "Yes, including governance, consolidated billing, identity, and unified monitoring.",
            },
            {
              q: "Will there be downtime during migration?",
              a: "We plan blue/green or canary releases to minimize disruption and enable quick rollback.",
            },
            {
              q: "Can you work with our existing DevOps tools?",
              a: "Absolutely. We integrate with your current toolchain and add automation where it matters.",
            },
            {
              q: "Do you provide post-migration support?",
              a: "Yes, we offer 24/7 operations and cloud management aligned to SLAs.",
            },
          ]}
        />
      </Section>

      <Section title="" description="" className="bg-brand-bgElevated">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Request a cloud assessment →
        </Link>
      </Section>
    </div>
  )
}
