import { Link } from "react-router-dom";
import TrustedLogo from "./TrustedLogo";

export default function EulerHero() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative w-full min-h-[70vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-6xl text-white">
              Building bridges from vision to reality
            </h1>
            <p className="mt-4 text-lg text-white/80">
              At Euler Digital, we build tailored digital solutions that connect
              your vision with real-world impact. We help empower your business
              with innovative technology, crafted just for you. Helps you launch
              and evolve products faster with dedicated teams, AI/ML,
              cloud-native engineering, and secure global delivery — operating
              24/7 across EU and Asia time zones.
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

      {/* Trusted logos – marquee */}
      <div className="bg-white py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl text-gray-800">
              Trusted by leading enterprises to secure modern infrastructure
            </h2>
            <p className="mt-2 text-gray-500">
              400+ companies rely on Euler Digital for mission-critical delivery
            </p>
          </div>

          {/* Marquee */}
          <div className="relative mt-8 overflow-hidden">
            <style>{`
        @keyframes marquee-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 3.5rem;         
          width: max-content;   
          animation: marquee-slide 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        .marquee:hover .marquee-track { animation-play-state: paused; }
      `}</style>

            <div className="marquee">
              {/* track 1 */}
              <div className="marquee-track opacity-80">
                {[
                  "PRODUCT TEAMS ACROSS",
                  "FINTECH",
                  "HEALTHTECH",
                  "EULERBANK",
                  "PRODUCT TEAMS ACROSS",
                  "FINTECH",
                  "HEALTHTECH",
                  "EULERBANK",
                ].map((brand, i) => (
                  <TrustedLogo key={`a-${i}`} label={brand} />
                ))}
                {[
                  "PRODUCT TEAMS ACROSS",
                  "FINTECH",
                  "HEALTHTECH",
                  "EULERBANK",
                  "PRODUCT TEAMS ACROSS",
                  "FINTECH",
                  "HEALTHTECH",
                  "EULERBANK"
                ].map((brand, i) => (
                  <TrustedLogo key={`b-${i}`} label={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
