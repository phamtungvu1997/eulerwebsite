import { Link } from "react-router-dom"
import Section from "../UI/Section"
import { CASE_STUDIES, REASONS } from "./constants"



export default function WhyChooseEuler() {
  return (
    <>
      {/* Why Choose */}
      <Section
        title="Why Choose Euler Digital Solutions"
        description=""
        className="bg-white font-sans text-black"
      >
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-900 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <h3 className="text-base font-semibold">{r.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            to="#"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
          >
            See how we deliver →
          </Link>
        </div>
      </Section>

      {/* Case Study Highlights */}
      <Section
        title="Case Study Highlights"
        description=""
        className="bg-brand-bgElevated/20 font-sans text-black"
      >
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.industry}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-semibold">{cs.industry}</h3>
              <ul className="mt-3 space-y-2">
                {cs.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA to contact */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
          >
            Get a tailored proposal →
          </Link>
        </div>
      </Section>
    </>
  )
}
