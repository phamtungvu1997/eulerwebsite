// Subpage_09_PenTest.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"

export default function CybersecurityPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Penetration Testing & IT Security Audits"
        subtitle="Find critical gaps before attackers do."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Request a security assessment →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      {/* Problems We Solve */}
      <Section title="Problems We Solve" description="" className="bg-white">
        <p className="text-slate-700 leading-relaxed">
          Organizations face sophisticated threats yet often lack expertise to uncover vulnerabilities
          before attackers. Gaps across apps and infrastructure, unclear true security posture, and
          compliance obligations require regular, professional testing.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Teams may lack specialist pen-testing skills, struggle to prioritize by real risk, and keep
          up with evolving attack vectors. Without routine testing, critical issues can lead to losses,
          penalties, and reputation damage.
        </p>
      </Section>

      {/* What You Get */}
      <Section title="What You Get" description="" className="bg-brand-bgElevated/20">
        <h3 className="text-lg font-semibold mt-6">Comprehensive Penetration Testing</h3>
        <BulletGrid
          items={[
            "External network penetration testing (internet-facing)",
            "Internal network penetration testing (insider scenarios)",
            "Web application testing (OWASP Top 10 and beyond)",
            "Mobile application testing (iOS & Android)",
            "API security testing and endpoint assessments",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Specialized Security Testing</h3>
        <BulletGrid
          items={[
            "Social engineering & phishing simulations",
            "Physical security & facility testing",
            "Wireless security and rogue AP detection",
            "Cloud penetration testing (AWS, Azure, GCP)",
            "Active Directory & domain controller assessments",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">IT Security Audit Services</h3>
        <BulletGrid
          items={[
            "Security posture assessments & gap analysis",
            "Compliance auditing (ISO 27001, PCI DSS, SOC 2, HIPAA)",
            "Policy & procedure review with recommendations",
            "Risk assessment & threat modeling for critical assets",
            "Security architecture review & design validation",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Advanced Security Testing</h3>
        <BulletGrid
          items={[
            "Red team (APT-style) exercises",
            "Purple team (offense + defense) engagements",
            "Vulnerability research & zero-day identification",
            "Secure code review & SAST",
            "Post-exploitation tests & lateral movement",
          ]}
        />
      </Section>

      {/* Team & Tools */}
      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Elite Penetration Testing Professionals">
            <p className="text-slate-700">
              CEH & OSCP consultants with hands-on exploitation, CISSP/CISM advisors for governance,
              auditors for multi-framework compliance, and former red-teamers simulating APTs.
            </p>
          </Card>
          <Card title="Professional Pen-Testing Arsenal">
            <p className="text-slate-700">
              <strong>Frameworks:</strong> Metasploit, Cobalt Strike, Empire.{" "}
              <strong>Scanning:</strong> Nmap, Masscan, Nessus, OpenVAS.{" "}
              <strong>Web:</strong> Burp Suite Pro, OWASP ZAP, SQLMap.{" "}
              <strong>Mobile:</strong> MobSF, Frida, Objection.{" "}
              <strong>Social Eng.:</strong> SET, GoPhish.{" "}
              <strong>Reporting:</strong> Dradis, Plextrac. Standards: OWASP TG, NIST SP 800-115, PTES.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Process" description="" className="bg-brand-bgElevated/20">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Pre-Engagement & Scoping", "Scope & rules of engagement, legal docs, target overview, comms plan, timeline."],
            ["Information Gathering & Reconnaissance", "OSINT, active recon, enumeration, vuln scanning, attack-surface mapping, prioritization."],
            ["Vulnerability Assessment & Exploitation", "Manual validation, exploitation attempts, privilege escalation, exfil simulation, persistence & evasion, business-impact analysis."],
            ["Reporting & Remediation Guidance", "Technical findings with PoC, exec summary, prioritized remediation roadmap, re-test, awareness training."],
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
              q: "What's the difference between vulnerability scanning and penetration testing?",
              a: "Scanning finds potential issues automatically; pen-testing uses skilled manual exploitation to validate impact on your business.",
            },
            {
              q: "How often should we conduct penetration testing?",
              a: "At least annually, and after major changes, new launches, or incidents. Compliance may require more frequent tests.",
            },
            {
              q: "Will penetration testing disrupt our business operations?",
              a: "We test in agreed maintenance windows with controlled techniques, coordinated comms, and immediate halt if needed.",
            },
            {
              q: "What happens if you find critical vulnerabilities?",
              a: "We notify immediately with remediation guidance, and can support incident response if active exploitation is detected.",
            },
            {
              q: "Do you provide remediation services after testing?",
              a: "Yes—technical guidance, architecture consulting, validation re-tests, and security program development.",
            },
            {
              q: "How do you ensure confidentiality during testing?",
              a: "Strict NDAs, secure comms, encrypted handling, least-privilege access, and agreed data-retention policies.",
            },
            {
              q: "Can you help us meet compliance requirements?",
              a: "Absolutely—PCI DSS, HIPAA, SOX, ISO 27001, and others. We provide compliance-ready documentation and guidance.",
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
          Request a security assessment →
        </Link>
      </Section>
    </div>
  )
}
