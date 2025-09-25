// Subpage_04_CustomApps.tsx
import { KPIGrid } from "@/components/UI/KPIGrid"
import { Link } from "react-router-dom"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import FAQ from "./Pieces/FAQ"
import HeroSection from "./Pieces/HeroSection"
import ProcessItem from "./Pieces/ProcessItem"
import Section from "@/components/UI/Section"

export default function CustomAppsPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Enterprise-grade web & mobile—built to scale."
        subtitle="API-first, microservices, secure by design."
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Get a build plan →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      <Section title="Problems We Solve" description="" className="bg-white">
        <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700">
          <li>Slow release cycles</li>
          <li>Bloated or outdated monolithic architectures</li>
          <li>Inconsistent user experience across devices</li>
          <li>Lack of scalability and resilience</li>
        </ul>
      </Section>

      <Section title="What You Get" description="" className="bg-brand-bgElevated">
        <BulletGrid
          items={[
            "Full-cycle custom development (web, mobile, APIs)",
            "Scalable microservices and modular backend architectures",
            "Secure, compliant, and well-documented applications",
            "PWAs and cross-platform mobile solutions (iOS/Android)",
            "Continuous delivery pipelines and test automation",
          ]}
        />
      </Section>

      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Team Roles">
            <p className="text-slate-700">
              PM, TL, FE/BE Developers, QA Engineers, DevOps
            </p>
          </Card>
          <Card title="Tech Stack">
            <p className="text-slate-700">
              Node.js, Java, .NET, React, Angular, Vue, Kotlin, Swift, Flutter, PostgreSQL, MongoDB, Kafka
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Process" description="" className="bg-brand-bgElevated">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Discovery and product vision alignment", ""],
            ["UX/UI design and prototype iteration", ""],
            ["Modular architecture and sprint-based delivery", ""],
            ["End-to-end testing and performance tuning", ""],
            ["Launch orchestration with rollback planning", ""],
            ["Continuous feedback loops and enhancements", ""],
          ].map(([t, d], i) => (
            <ProcessItem key={t as string} index={i + 1} title={t as string} desc={d as string} />
          ))}
        </ol>
      </Section>

      <Section title="Deliverables" description="" className="bg-white">
        <BulletGrid
          items={[
            "Design system and UX wireframes",
            "Source code and API documentation",
            "Test cases and automation scripts",
            "Deployment artifacts and monitoring setup",
            "Runbooks and support guides",
          ]}
          checkColor="bg-emerald-500"
        />
      </Section>

      <Section title="Sample KPIs" description="" className="bg-brand-bgElevated">
        <KPIGrid
          items={[
            "User satisfaction (NPS, CSAT)",
            "Conversion and bounce rates",
            "Time to market and release cadence",
            "Application performance metrics (LCP, TTI, error rates)",
          ]}
        />
      </Section>

      <Section title="FAQs" description="" className="bg-white">
        <FAQ
          items={[
            {
              q: "Can you modernize legacy apps?",
              a: "Yes, we can refactor, replatform, or rebuild from scratch.",
            },
            {
              q: "Do you support cross-platform development?",
              a: "Absolutely—React Native, Flutter, Kotlin Multiplatform, etc.",
            },
            {
              q: "What’s your approach to security?",
              a: "Secure-by-design with OWASP best practices, plus static/dynamic scans in CI.",
            },
            {
              q: "Can you integrate with our backend systems?",
              a: "Yes, we build modular APIs to fit into your existing ecosystem.",
            },
          ]}
        />
      </Section>

      <Section title="" description="" className="bg-brand-bgElevated">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Get a build plan →
        </Link>
      </Section>
    </div>
  )
}
