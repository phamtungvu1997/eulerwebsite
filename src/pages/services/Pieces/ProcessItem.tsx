export default function ProcessItem({ index, title, desc }: { index: number; title: string; desc: string }) {
  return (
    <li className="relative rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
          {index}
        </span>
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </li>
  )
}