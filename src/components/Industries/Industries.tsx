import { INDUSTRIES } from "@/constants";
import { SparkleIcon } from "lucide-react";
import Section from "../UI/Section";

export default function ServiceProvided() {
  return (
    <Section
      title="Industries We Support"
      description="From dedicated teams to AI, cloud, and cybersecurity—pick the module you need, when you need it."
      className="bg-brand-bgElevated"
    >
      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {INDUSTRIES.map((s, idx) => (
          <article
            key={s.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
          >
            {/* Subtle gradient accent */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <div className="absolute -inset-x-8 -top-24 h-40 bg-gradient-to-r from-indigo-200/70 via-sky-200/70 to-emerald-200/70 blur-2xl" />
            </div>

            {/* Icon */}
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-50 p-2 text-slate-700 ring-1 ring-inset ring-slate-200">
              <img src={s.logo} alt={`${s.name} icon`} className="h-8 w-8" />
            </div>

            {/* Title & tagline */}
            <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
            <p className="mt-1 text-slate-700">{s.description}</p>

            {/* Bullets */}
            {/* <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                >
                  {b}
                </li>
              ))}
            </ul> */}

            {/* CTA */}
            {/* <a
              href={s.href}
              aria-label={`Explore ${s.title}`}
              className="mt-6 inline-flex items-center justify-between gap-2 rounded-xl border border-slate-300/80 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Explore</span>
              <ArrowIcon className="transition -me-0.5 group-hover:translate-x-0.5" />
            </a> */}

            {/* Focus ring for card */}
            <span
              className="absolute inset-0 rounded-2xl ring-0 ring-sky-300/0 transition group-focus-within:ring-2 group-focus-within:ring-sky-300/60"
              aria-hidden
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
