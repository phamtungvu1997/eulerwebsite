import { FEATURES } from "@/constants";
import Section from "../UI/Section";
import Card from "../UI/Card";

export default function Features() {
  return (
    <Section
      title="What We Offer"
      description="Discover the powerful features that make Euler the leading choice for modern applications"
      className="bg-brand-bgElevated/20"
    >
      <div className="container">
        <div className="relative mt-8">
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
              {FEATURES.map((feature, index) => (
                <Card key={index} className="justify-start text-left items-start">
                  <div
                    className={`w-12 h-12 mb-4 rounded-xl bg-brand-bgElevated flex items-center justify-start ${feature.accentColor}`}
                  >
                    <feature.icon className="w-6 h-6 ml-3" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-fg mb-2 font-sans text-left">
                    {feature.title}
                  </h3>
                  <p className="text-brand-fgMuted font-serif text-left">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}