import Section from "../UI/Section"

export default function WhatToExpect() {
  const EXPECTS = [
    "Start with a pod in 10–14 days",
    "Scale to full squads on demand",
    "Reduce cloud costs by 20–40% with FinOps",
    "Lower MTTR via DevOps & SRE",
    "Accelerate roadmap with test automation & CI/CD",
  ]

  return (
    <Section
      title="What to Expect"
      description="Key outcomes you can count on when working with us."
      className="bg-brand-bgElevated font-sans text-black"
    >
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {EXPECTS.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-900 font-bold">
              ✓
            </span>
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
