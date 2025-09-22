// Subpage_10_WebMobile.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"

export default function WebAndMobilePage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Web and Mobile App Development"
        subtitle="Enterprise-grade experiences on web and mobile—fast, secure, scalable."
        bgImage="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Start your build →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      {/* Problems We Solve */}
      <Section title="Problems We Solve" description="" className="bg-white">
        <p className="text-slate-700 leading-relaxed">
          Digital transformation demands robust apps. Teams face outdated web presences, poor
          mobile responsiveness, and slow, unreliable apps that hurt brand and conversion. Choosing
          the right stack, ensuring scalability, and maintaining consistent UX across platforms is
          complex—while timelines and budgets stay tight.
        </p>
      </Section>

      {/* What You Get */}
      <Section title="What You Get" description="" className="bg-brand-bgElevated/20">
        <h3 className="text-lg font-semibold mt-6">Custom Web Application Development</h3>
        <BulletGrid
          items={[
            "Responsive apps with React, Angular, or Vue",
            "Progressive Web Apps (PWAs)",
            "E-commerce with integrated payments",
            "CMS tailored to your workflow",
            "API development & 3rd-party integrations",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Native & Cross-Platform Mobile Apps</h3>
        <BulletGrid
          items={[
            "iOS & Android native development",
            "Cross-platform with React Native & Flutter",
            "Platform-guided mobile UI/UX",
            "Store submission & ASO support",
            "Push notifications & analytics",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Enterprise Web Solutions</h3>
        <BulletGrid
          items={[
            "Customer portals & self-service platforms",
            "Intranets & collaboration hubs",
            "BI dashboards & reporting",
            "Workflow automation & document management",
            "Integrations with SAP, Salesforce, etc.",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">User Experience & Design</h3>
        <BulletGrid
          items={[
            "User research & personas",
            "Information architecture & wireframes",
            "Visual design & brand integration",
            "Usability testing & optimization",
            "Accessibility (WCAG 2.1 AA)",
          ]}
        />
      </Section>

      {/* Team & Tools */}
      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Full-Stack Development Experts">
            <p className="text-slate-700">
              Senior full-stack engineers (8+ yrs), UI/UX designers (HCD), mobile specialists
              (native & cross-platform), DevOps for smooth delivery, và QA tự động hóa để đảm bảo chất lượng.
            </p>
          </Card>
          <Card title="Modern Development Stack">
            <p className="text-slate-700">
              <strong>Frontend:</strong> React, Angular, Vue, TypeScript.{" "}
              <strong>Backend:</strong> Node.js, Python (Django/Flask), .NET Core, Java Spring.{" "}
              <strong>Mobile:</strong> Swift/Obj-C, Kotlin/Java, React Native, Flutter.{" "}
              <strong>DB:</strong> PostgreSQL, MongoDB, Redis, cloud DBs.{" "}
              <strong>Cloud:</strong> AWS, Azure, GCP.{" "}
              <strong>DevOps:</strong> Docker, K8s, Jenkins, GitLab CI/CD.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Process" description="" className="bg-brand-bgElevated/20">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Discovery & Planning (Week 1–2)", "Requirements, user research, architecture, roadmap, tech stack selection."],
            ["Design & Prototyping (Week 2–4)", "IA & wireframes, UI/UX, interactive prototypes, design system, usability tests."],
            ["Development & Testing (Week 4–12)", "Agile sprints, CI, automated tests, demos, security reviews, performance tuning."],
            ["Deployment & Support (Week 12+)", "Prod setup, app store submission, training, go-live support, maintenance & enhancements."],
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
              q: "How long does it take to develop a web or mobile application?",
              a: "Typically 8–20 weeks. Simple apps 6–10 weeks; complex enterprise solutions 16–24 weeks—depending on scope and integrations.",
            },
            {
              q: "Do you provide ongoing maintenance and support?",
              a: "Yes—bug fixes, security updates, monitoring, feature enhancements, and SLAs aligned to your needs.",
            },
            {
              q: "Can you integrate with our existing systems?",
              a: "Absolutely. We specialize in APIs and system integrations with CRMs, ERPs, and other core platforms.",
            },
            {
              q: "How do you ensure the security of our application?",
              a: "Secure coding, regular security testing, encryption, robust authn/authz, and compliance with industry standards.",
            },
            {
              q: "Can you help with app store submission and marketing?",
              a: "Yes—listing optimization, submission management, guideline compliance, and basic marketing consultation.",
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
          Start your build →
        </Link>
      </Section>
    </div>
  )
}
