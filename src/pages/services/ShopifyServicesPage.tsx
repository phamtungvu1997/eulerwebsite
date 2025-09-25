// Subpage_11_Shopify.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"


export default function ShopifyServicesPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Shopify E-Commerce Services"
        subtitle="Design. Convert. Scale — with a high-performing Shopify stack."
        bgImage="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Start your Shopify project →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      {/* Problems We Solve */}
      <Section title="Problems We Solve" description="" className="bg-white">
        <p className="text-slate-700 leading-relaxed">
          Building a store that <em>converts</em> needs brand-aligned UX, performance, and the right
          features. Teams struggle with generic themes, low conversion at checkout, slow pages that
          hurt SEO, and complex catalogs across variants/collections — plus limited in-house Shopify
          expertise to choose and integrate apps reliably.
        </p>
      </Section>

      {/* What You Get */}
      <Section title="What You Get" description="" className="bg-brand-bgElevated">
        <h3 className="text-lg font-semibold mt-6">Complete Shopify Store Development</h3>
        <BulletGrid
          items={[
            "Custom store design & build from concept to launch",
            "Brand-aligned UI/UX and mobile-responsive layouts",
            "Performance optimization for speed & SEO",
            "Multi-language and multi-currency for global markets",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Advanced Theme Customization</h3>
        <BulletGrid
          items={[
            "Custom theme development & section templates",
            "Enhancements to existing themes",
            "Responsive optimization for mobile & tablet",
            "Speed and performance tuning",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Custom App Integration & Development</h3>
        <BulletGrid
          items={[
            "Third-party app selection, integration, and configuration",
            "Custom Shopify app development for unique needs",
            "ERP/CRM/API integrations and payment gateways",
            "Inventory & fulfillment system integrations",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">E-Commerce Optimization & Strategy</h3>
        <BulletGrid
          items={[
            "Comprehensive audits (speed, SEO, CRO)",
            "Conversion rate optimization & A/B testing",
            "Analytics setup and e-commerce tracking",
            "Search visibility and structured content",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Store Management & Setup</h3>
        <BulletGrid
          items={[
            "Catalog setup with SEO-ready content",
            "Collections & navigation structure",
            "Shipping & tax configuration",
            "Customer accounts & loyalty programs",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Ongoing Support & Troubleshooting</h3>
        <BulletGrid
          items={[
            "Technical support and bug fixes",
            "Regular maintenance and security updates",
            "Performance monitoring & feature enhancements",
            "Emergency support for critical issues",
          ]}
        />
      </Section>

      {/* Team & Tools */}
      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Shopify E-Commerce Specialists">
            <p className="text-slate-700">
              Certified Shopify Partners for store builds, UX designers focused on conversion,
              Liquid/JS app developers, CRO strategists, and analytics-driven marketers.
            </p>
          </Card>
          <Card title="Shopify Development Technology Stack">
            <p className="text-slate-700">
              <strong>Platform:</strong> Shopify/Advanced/Plus.{" "}
              <strong>Dev:</strong> Liquid, HTML5, CSS3, JS.{" "}
              <strong>Design:</strong> Figma, Adobe, Sketch.{" "}
              <strong>Perf:</strong> PSI, GTmetrix, Shopify Scripts.{" "}
              <strong>Analytics:</strong> GA4, Shopify Analytics, Meta Pixel.{" "}
              <strong>Apps:</strong> Shopify App Store + custom APIs.{" "}
              <strong>Testing:</strong> A/B and CRO platforms.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Process" description="" className="bg-brand-bgElevated">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            [
              "Discovery & Strategy Development",
              "Requirements & audience, competitors, brand & design direction, technical scope, timeline.",
            ],
            [
              "Design & Development",
              "Mockups & wireframes, feedback loops, theme customization, custom features, integrations, cross-browser/mobile testing.",
            ],
            [
              "Content & Product Setup",
              "Catalog & SEO setup, collections & navigation, content/copy, image optimization, payments & shipping.",
            ],
            [
              "Testing & Launch",
              "Full functionality checks, speed optimization, SEO audit, UAT, go-live and post-launch monitoring.",
            ],
            [
              "Optimization & Growth",
              "Analytics & conversion tracking, A/B tests, performance tuning, feature updates, ongoing support.",
            ],
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
              q: "How long does it take to build a custom Shopify store?",
              a: "Simple stores: ~4–6 weeks. Complex custom builds with integrations: ~8–16 weeks. We confirm timelines after discovery.",
            },
            {
              q: "Can you migrate our existing e-commerce store to Shopify?",
              a: "Yes—WooCommerce, Magento, BigCommerce, etc. We migrate products, customers, orders, and SEO with minimal downtime.",
            },
            {
              q: "Do you provide ongoing support after launch?",
              a: "Absolutely—maintenance, security updates, performance tuning, troubleshooting, and enhancements with SLAs.",
            },
            {
              q: "Can you integrate our existing systems with Shopify?",
              a: "Yes—ERP, CRM, inventory, accounting, and more via Shopify APIs or custom apps.",
            },
            {
              q: "How do you improve conversions?",
              a: "CRO best practices, mobile-first UX, streamlined checkout, trust signals, social proof, and continuous A/B testing.",
            },
            {
              q: "What’s included in your audit & optimization services?",
              a: "Speed & SEO analysis, CRO review, mobile responsiveness, security checks, competitor benchmarks, and a prioritized roadmap.",
            },
            {
              q: "Can you help with app selection and configuration?",
              a: "Yes—we recommend, install, configure, and ensure seamless UX and theme integration.",
            },
          ]}
        />
      </Section>

      {/* Why Choose */}
      <Section title="Why Choose Euler Digital Service?" description="" className="bg-brand-bgElevated">
        <BulletGrid
          items={[
            "Proven expertise across complex digital builds",
            "Global reach with 24/7 support and local understanding",
            "Technology-agnostic recommendations for the best outcomes",
            "Agile delivery with rapid feedback and flexibility",
            "Security-first approach in every engagement",
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
          Start your Shopify project →
        </Link>
      </Section>
    </div>
  )
}
