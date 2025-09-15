export default function BulletGrid({
  items,
  checkColor = "bg-yellow-400",
}: {
  items: string[]
  checkColor?: string
}) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
          <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkColor} text-slate-900 text-xs font-bold`}>✓</span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}