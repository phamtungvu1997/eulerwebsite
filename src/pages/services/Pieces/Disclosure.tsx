import { useState } from "react";

export default function Disclosure({ question, answer, defaultOpen = false }: {
  question: string; answer: string; defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="p-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <span className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border ${open ? "bg-slate-900 text-white border-slate-900" : "border-slate-300 text-slate-700"}`}>
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0">
          <p className="text-sm text-slate-700">{answer}</p>
        </div>
      </div>
    </div>
  )
}