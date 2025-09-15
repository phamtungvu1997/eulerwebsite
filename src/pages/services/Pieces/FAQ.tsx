import Disclosure from "./Disclosure";

/** ───────────────────── FAQ (collapsible) ───────────────────── **/
export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((it, idx) => (
        <Disclosure key={it.q} defaultOpen={idx === 0} question={it.q} answer={it.a} />
      ))}
    </div>
  )
}