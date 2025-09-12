import { SERVICES } from "@/constants";
import { SparkleIcon } from "lucide-react";
import ArrowIcon from "../UI/SparkIcon";

export default function ServiceProvided() {
    return (
        <div className="w-full bg-white text-slate-900">
            {/* Container */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-slate-500">What we do</p>
                        <h2 className="mt-1 text-3xl/tight font-semibold sm:text-4xl">Services</h2>
                        <p className="mt-2 max-w-2xl text-slate-600">
                            From dedicated teams to AI, cloud, and cybersecurity—pick the module you need, when you need it.
                        </p>
                    </div>
                </div>


                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {SERVICES.map((s, idx) => (
                        <article
                            key={s.title}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
                        >
                            {/* Subtle gradient accent */}
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                                <div className="absolute -inset-x-8 -top-24 h-40 bg-gradient-to-r from-indigo-200/70 via-sky-200/70 to-emerald-200/70 blur-2xl" />
                            </div>


                            {/* Icon */}
                            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-50 p-2 text-slate-700 ring-1 ring-inset ring-slate-200">
                                <SparkleIcon />
                            </div>


                            {/* Title & tagline */}
                            <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                            <p className="mt-1 text-slate-700">{s.tagline}</p>


                            {/* Bullets */}
                            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                                {s.bullets.map((b) => (
                                    <li key={b} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                                        {b}
                                    </li>
                                ))}
                            </ul>


                            {/* CTA */}
                            <a
                                href={s.href}
                                aria-label={`Explore ${s.title}`}
                                className="mt-6 inline-flex items-center justify-between gap-2 rounded-xl border border-slate-300/80 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                            >
                                <span>Explore</span>
                                <ArrowIcon className="transition -me-0.5 group-hover:translate-x-0.5" />
                            </a>


                            {/* Focus ring for card */}
                            <span className="absolute inset-0 rounded-2xl ring-0 ring-sky-300/0 transition group-focus-within:ring-2 group-focus-within:ring-sky-300/60" aria-hidden />
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}