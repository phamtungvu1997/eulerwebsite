// Subpage_08_QA.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"

export default function QaTestingPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Quality Assurance & Testing"
        subtitle="Ship with confidence—automation, coverage, and performance at scale."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Plan a QA engagement →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      {/* Problems We Solve */}
      <Section title="Problems We Solve" description="" className="bg-white">
        <p className="text-slate-700 leading-relaxed">
          Software quality issues can hurt revenue and reputation. Common challenges include
          insufficient test coverage letting critical bugs reach production, lack of automation
          slowing releases, and missing performance testing that causes failures under real load.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Teams also struggle with inconsistent methodologies, limited security/accessibility
          expertise, and maintaining quality under tight timelines—across many devices and CI needs.
          You need specialized skills and robust frameworks to keep quality high while moving fast.
        </p>
      </Section>

      {/* What You Get */}
      <Section title="What You Get" description="" className="bg-brand-bgElevated/20">
        <h3 className="text-lg font-semibold mt-6">Comprehensive Testing Services</h3>
        <BulletGrid
          items={[
            "Manual testing with detailed test case development and execution",
            "Automated testing framework development and implementation",
            "Functional testing across web, mobile, and desktop applications",
            "User acceptance testing (UAT) coordination and management",
            "Regression testing to ensure new changes don't break existing functionality",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Specialized Testing Solutions</h3>
        <BulletGrid
          items={[
            "Performance testing: load, stress, scalability",
            "Security testing and vulnerability assessments",
            "Accessibility testing for WCAG compliance",
            "API & integration testing across systems",
            "Cross-browser and cross-platform compatibility testing",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Test Automation & CI/CD Integration</h3>
        <BulletGrid
          items={[
            "Test automation strategy and implementation",
            "Continuous testing integrated into CI/CD",
            "Automated test scripts using modern frameworks",
            "Test data management & environment automation",
            "Automated reporting and defect tracking integration",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Quality Assurance Consulting</h3>
        <BulletGrid
          items={[
            "QA strategy and process optimization",
            "Test planning & test case design for complex apps",
            "Quality metrics and reporting dashboards",
            "Testing team training & best practices",
            "Quality gates implementation for release management",
          ]}
        />
      </Section>

      {/* Team & Tools */}
      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="QA Testing Professionals">
            <p className="text-slate-700">
              Certified QA engineers (manual & automation), performance specialists, security
              testers, automation engineers across multiple frameworks, and QA consultants who
              implement scalable processes across industries.
            </p>
          </Card>
          <Card title="Advanced Testing Technology Stack">
            <p className="text-slate-700">
              <strong>Automation:</strong> Selenium, Cypress, Playwright, Appium.{" "}
              <strong>Performance:</strong> JMeter, LoadRunner, Gatling, K6.{" "}
              <strong>API:</strong> Postman, Rest Assured, SoapUI, Newman.{" "}
              <strong>Mobile:</strong> TestComplete, Xamarin Test Cloud, Firebase Test Lab.{" "}
              <strong>Security:</strong> OWASP ZAP, Burp Suite, Nessus, Veracode.{" "}
              <strong>Management:</strong> TestRail, Zephyr, qTest, Azure DevOps.{" "}
              <strong>CI/CD:</strong> Jenkins, GitLab CI, Azure Pipelines, GitHub Actions.{" "}
              <strong>Reporting:</strong> Allure, ExtentReports, TestNG.{" "}
              We follow ISTQB, Agile/DevOps testing, risk-based strategies, and ISO 25010.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Process" description="" className="bg-brand-bgElevated/20">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Test Strategy & Planning", "Requirements analysis, scope & risk, environment planning, resourcing, metrics & success criteria."],
            ["Test Design & Development", "Test cases, automation framework setup, test data strategy, env setup, execution scheduling."],
            ["Test Execution & Monitoring", "Manual & automated runs, performance & security tests, defect tracking and coordination, progress comms."],
            ["Quality Reporting & Optimization", "Reporting & metrics, recommendations, process optimization, knowledge transfer, continuous improvement."],
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
              q: "What types of applications can you test?",
              a: "Web, mobile (iOS/Android), desktop, APIs, microservices, e-commerce, enterprise, and cloud apps across many stacks.",
            },
            {
              q: "How do you ensure comprehensive test coverage?",
              a: "Traceability matrices, risk-based testing, code coverage, and a mix of functional, non-functional, and integration tests.",
            },
            {
              q: "Can you integrate with our existing development processes?",
              a: "Yes—Agile, DevOps, or traditional. We fit your workflows, CI/CD pipelines, and project tools.",
            },
            {
              q: "What's the difference between manual and automated testing?",
              a: "Manual excels at usability/exploratory; automation excels at fast, repeatable regression and CI integration.",
            },
            {
              q: "How quickly can you identify and report critical issues?",
              a: "Immediately upon discovery with clear repro steps, impact, and real-time communication for rapid resolution.",
            },
            {
              q: "Do you provide testing for mobile applications?",
              a: "Yes—functional on real devices, performance, compatibility across OS versions, network conditions, and mobile security.",
            },
            {
              q: "What ongoing support do you provide after testing completion?",
              a: "Defect verification, regression for fixes, test maintenance, performance monitoring setup, and knowledge transfer.",
            },
          ]}
        />
      </Section>

      {/* Why Choose */}
      <Section title="Why Choose Euler Digital Service?" description="" className="bg-brand-bgElevated/20">
        <BulletGrid
          items={[
            "Proven expertise across industries and complex projects",
            "Global reach with 24/7 support and local understanding",
            "Technology-agnostic recommendations for best outcomes",
            "Agile delivery with rapid feedback and flexibility",
            "Security-first approach embedded in every engagement",
          ]}
          checkColor="bg-indigo-500"
        />
      </Section>

      {/* CTA */}
      <Section title="" description="" className="bg-white">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Plan a QA engagement →
        </Link>
      </Section>
    </div>
  )
}
