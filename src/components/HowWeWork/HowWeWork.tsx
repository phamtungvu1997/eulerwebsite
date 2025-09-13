import { PHASES } from "@/constants";
import { Link } from "react-router-dom";
import Section from "../UI/Section";

export default function HowWeWork() {
  return (
     <Section
          title="How We Work"
          description="We keep your roadmap moving—securely and fast."
          className="bg-brand-bgElevated/20 font-sans text-black"
        >

      {/* Timeline rail */}
      <div className="relative mt-10 overflow-visible">
        {" "}
        {/* was overflow-hidden */}
        <style>{`
    @keyframes progressRun {
      0% { transform: translateX(-10%); }
      100% { transform: translateX(110%); }
    }
    .progress-dot { animation: progressRun 14s linear infinite; }
    @media (prefers-reduced-motion: reduce) { .progress-dot { animation: none; } }
  `}</style>
        {/* Rail line */}
        <div className="relative mx-auto h-[2px] w-full rounded bg-slate-200">
          
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent" />
        </div>
        {/* Phases */}
        <div
          className="
      mt-8 grid gap-6
      grid-cols-1
      xs:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-6
    "
        >
          {PHASES.map((p) => (
            <div key={p.phase} className="group">
              {/* tick on rail (keeps full height & visibility) */}
              <div className="relative mb-3 h-4">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-[2px] bg-slate-300 group-hover:bg-yellow-400 transition-colors" />
              </div>

              {/* card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2">
                  {/* phase badge — guaranteed circle */}
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold leading-none">
                    {p.phase}
                  </span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      {/* bullet dot — full circle */}
                      <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-slate-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          to="#"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
        >
          Book a discovery call →
        </Link>
      </div>
    </Section>
  );
}
