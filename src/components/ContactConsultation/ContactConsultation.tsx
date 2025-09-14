import { useState } from "react"
import MailIcon from "../UI/MailIcon"
import PhoneIcon from "../UI/PhoneIcon"
import PinIcon from "../UI/PinIcon"
import { CONSULTATION_STEPS } from "./constants"

export default function ContactConsultation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  })

  const TOPICS = [
    "AI/ML & Automation",
    "Cloud & DevOps",
    "Custom App Development",
    "Data & Analytics",
    "Security & Compliance",
    "Other",
  ]

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: hook up to your API/HubSpot/etc.
    console.log("Submit:", form)
  }

  return (
    <section className="relative w-full">
      {/* bg gradient like screenshot */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-800 via-purple-800 to-rose-700" />
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left: copy & checklist */}
          <div className="text-black/90">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              Contact Us
            </span>
            <h2 className="mt-4 text-4xl font-semibold italic text-black">Let’s Connect!</h2>
            <p className="mt-3 max-w-xl text-black/80">
              Unlock the full potential of your business with our free consultation. Our team will
              assess your digital needs, recommend tailored solutions, and chart a path to success.
              Book your consultation now and take the first step towards empowering your business
              with cutting-edge technology.
            </p>

            <ul className="mt-6 space-y-3">
              {CONSULTATION_STEPS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-slate-900 text-xs font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="mt-8 space-y-3 text-black/85">
              <div className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:info@euler-digital.com" className="underline underline-offset-2">
                  info@euler-digital.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+4915566286608" className="hover:underline">
                  +49 155 6628 6608
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PinIcon />
                <div>
                  Borgweg 3, 22303 Hamburg, Germany
                  <div>
                    <a
                      className="underline underline-offset-2"
                      href="https://maps.google.com/?q=Borgweg+3,+22303+Hamburg,+Germany"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="md:justify-self-end w-full">
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 max-w-md w-full">
              <h3 className="text-lg font-semibold text-slate-900">
                Schedule A Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <Field label="Name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your name"
                    required
                  />
                </Field>

                <Field label="Phone">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="+49 ..."
                  />
                </Field>

                <Field label="Company Email">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="name@company.com"
                    required
                  />
                </Field>

                <Field label="Company / Organization">
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Company Inc."
                  />
                </Field>

                <Field label="How can we help you?">
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="input"
                    required
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="input h-28 resize-y"
                    placeholder="Your message"
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* local component styles */}
      <style>{`
        .input {
          @apply w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400;
        }
      `}</style>
    </section>
  )
}

/* ---------- helpers ---------- */
function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-600">
        {label}
      </span>
      {children}
    </label>
  )
}

