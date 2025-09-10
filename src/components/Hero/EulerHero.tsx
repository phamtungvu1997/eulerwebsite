import { Link } from 'react-router-dom'

export default function EulerHero() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative w-full min-h-[70vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-sans">
              Building bridges from vision to reality
            </h1>
            <p className="mt-4 text-lg text-white/80">
              At Euler Digital, we build tailored digital solutions that connect your vision with real-world impact. We help empower your business with innovative technology, crafted just for you. Helps you launch and evolve products faster with dedicated teams, AI/ML, cloud-native engineering, and secure global delivery — operating 24/7 across EU and Asia time zones.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
              >
                Get A Free Assessment
              </Link>
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
              >
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-[2px] w-full bg-brand-accentPurple"></div>

      {/* Trusted logos */}
      <div className="container py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          {/* Placeholder logo blocks */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-8 w-28 bg-brand-bgElevated border border-brand-border rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  )
}


