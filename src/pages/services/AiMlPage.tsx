// Subpage_02_AIML.tsx
import Section from "@/components/UI/Section"
import { Link } from "react-router-dom"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import { KPIGrid } from "@/components/UI/KPIGrid"
import FAQ from "./Pieces/FAQ"
import HeroSection from "./Pieces/HeroSection"


export default function AIMLPage() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Turn AI into shipped outcomes."
        subtitle="From model POC to MLOps in production."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
        ctas={[{ label: "Start an AI scoping workshop →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      <Section
        title="Problems We Solve"
        description="Enterprises often struggle to move beyond fragmented AI experiments. You may have proof-of-concepts that never hit production, siloed data sources, or teams lacking MLOps discipline. We help convert AI ideas into usable, governed, and value-generating systems."
        className="bg-white"
      />

      <Section title="What You Get" description="" className="bg-brand-bgElevated">
        <BulletGrid
          items={[
            "Custom models for classification, regression, NLP, computer vision, and more",
            "AI-powered automation and intelligent assistants using LLMs",
            "Retrieval-augmented generation (RAG) pipelines with semantic search",
            "End-to-end MLOps including CI/CD for ML, drift detection, and cost controls",
            "Annotation and data labeling services, with domain-specific quality control",
          ]}
        />
      </Section>

      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Roles">
            <p className="text-slate-700">
              Data Scientists, ML Engineers, Data Engineers, MLOps Engineers, Annotation Specialists
            </p>
          </Card>
          <Card title="Tools">
            <p className="text-slate-700">
              Python, PyTorch, TensorFlow, Hugging Face, LangChain, Weaviate, Pinecone, Kubeflow, MLflow, Docker, Airflow
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Process" description="" className="bg-brand-bgElevated">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Use Case Discovery", "Define business impact, success metrics, and data sources."],
            ["Data Engineering", "ETL pipelines, feature stores, data cleaning and enrichment."],
            ["Model Development", "Algorithm selection, training, hyperparameter tuning."],
            ["Validation & Testing", "Cross-validation, A/B testing, model interpretability."],
            ["MLOps & CI/CD", "Automate deployment, monitoring, and rollback strategies."],
            ["Observability & Governance", "Logging, dashboards, audit trails, explainability."],
          ].map(([t, d], i) => (
            <ProcessItem key={t as string} index={i + 1} title={t as string} desc={d as string} />
          ))}
        </ol>
      </Section>

      <Section title="Deliverables" description="" className="bg-white">
        <BulletGrid
          items={[
            "Model architecture and code repositories",
            "Annotated datasets and labeling guides",
            "Evaluation reports (accuracy, precision, recall, F1)",
            "CI/CD pipelines and monitoring dashboards",
            "Technical documentation and usage playbooks",
          ]}
          checkColor="bg-emerald-500"
        />
      </Section>

      <Section title="Sample KPIs" description="" className="bg-brand-bgElevated">
        <KPIGrid
          items={[
            "Model accuracy, latency, and adoption rate",
            "Cost per inference and GPU utilization",
            "Drift metrics and retraining frequency",
            "Business impact metrics (e.g., conversion lift, hours saved)",
          ]}
        />
      </Section>

      <Section title="FAQs" description="" className="bg-white">
        <FAQ
          items={[
            {
              q: "Should we buy AI tools or build in-house?",
              a: "We evaluate build-vs-buy based on ROI, integration complexity, security, and scalability—then recommend the right path for you.",
            },
            {
              q: "How do you ensure responsible AI?",
              a: "We use bias detection, explainability tooling, governance checkpoints, and access controls throughout the lifecycle.",
            },
            {
              q: "Can you integrate with our data platform?",
              a: "Yes. We support Snowflake, BigQuery, Lakehouse architectures, and more.",
            },
            {
              q: "What’s your approach to model monitoring?",
              a: "MLflow/Kubeflow pipelines with dashboards for latency, drift, accuracy trends, and automated alerts.",
            },
          ]}
        />
      </Section>

      <Section title="" description="" className="bg-brand-bgElevated">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Start an AI scoping workshop →
        </Link>
      </Section>
    </div>
  )
}

