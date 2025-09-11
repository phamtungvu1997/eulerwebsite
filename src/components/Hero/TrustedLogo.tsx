export default function TrustedLogo({ label }: { label: string }) {
  return (
    <div
      className="h-10 w-[7.5rem] md:w-36 flex items-center justify-center rounded-md border border-brand-border bg-white"
      aria-label={label}
      title={label}
    >
      <svg
        viewBox="0 0 300 64"
        className="h-6 w-auto"
        role="img"
        aria-labelledby={`${label}-title`}
      >
        <title id={`${label}-title`}>{label}</title>
        <defs>
          <linearGradient id="gm" x1="0" x2="1">
            <stop offset="0" stopColor="#9CA3AF" />
            <stop offset="1" stopColor="#6B7280" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
          fontWeight="700"
          fontSize="26"
          fill="url(#gm)"
          letterSpacing="2"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
