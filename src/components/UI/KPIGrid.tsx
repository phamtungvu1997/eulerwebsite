export function KPIGrid({
  items,
  columns = { base: 1, md: 2, lg: 2, xl: 4 },
}: {
  items: string[]
  /** tuỳ chọn số cột theo breakpoint */
  columns?: { base?: number; md?: number; lg?: number; xl?: number }
}) {
  const base = columns.base ?? 1
  const md = columns.md ?? 2
  const lg = columns.lg ?? 2
  const xl = columns.xl ?? 4

  return (
    <ul
      className={[
        "mt-6 grid gap-4",
        `grid-cols-${base}`,
        `md:grid-cols-${md}`,
        `lg:grid-cols-${lg}`,
        `xl:grid-cols-${xl}`,
      ].join(" ")}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          {/* icon hình huy hiệu nhỏ */}
          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">
            ✓
          </span>
          <span className="text-slate-800">{item}</span>
        </li>
      ))}
    </ul>
  )
}
