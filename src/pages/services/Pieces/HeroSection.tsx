import { Link } from "react-router-dom"

type CTA = { label: string; to: string }
type HeroProps = {
  title: string
  subtitle?: string
  bgImage: string
  ctas?: CTA[]                  // 0–2 CTA
  overlay?: number              // 0 → 1 (opacity)
  height?: "sm" | "md" | "lg"   // chiều cao preset
  align?: "left" | "center" | "right"
  className?: string
  children?: React.ReactNode    // tuỳ chọn: thêm badge, breadcrumbs, etc.
}

const heightMap = {
  sm: "min-h-[45vh]",
  md: "min-h-[55vh]",
  lg: "min-h-[70vh]",
} as const

const alignMap = {
  left:   "items-start text-left",
  center: "items-center text-center",
  right:  "items-end text-right",
} as const

export default function HeroSection({
  title,
  subtitle,
  bgImage,
  ctas = [],
  overlay = 0.6,
  height = "md",
  align = "left",
  className = "",
  children,
}: HeroProps) {
  return (
    <section
      className={`relative w-full ${heightMap[height]} flex`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,1)", opacity: overlay }}
        aria-hidden="true"
      />
      <div className="container relative z-10 py-12 flex">
        <div className={`mx-auto max-w-3xl text-white ${alignMap[align]} flex flex-col gap-4`}>
          {children}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/85">{subtitle}</p>}

          {ctas.length > 0 && (
            <div
              className={`mt-2 flex flex-col sm:flex-row gap-3 ${
                align === "center" ? "justify-center" : align === "right" ? "justify-end" : ""
              }`}
            >
              {ctas.slice(0, 2).map((c) => (
                <Link
                  key={c.label}
                  to={c.to}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600 transition"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
