import { useState } from "react";
import { Link } from "react-router-dom";
import EulerHero from "@/components/Hero/EulerHero";
import Button from "@/components/UI/Button";
import Features from "@/components/Features/Features";
import WhatWeDo from "@/components/ServiceProvided/WhatWeDo";
import ServiceProvided from "@/components/Industries/Industries";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import WhatToExpect from "@/components/WhatToExpect/WhatToExpect";
import StrategicPartnership from "@/components/StrategicPartnership/StrategicPartnership";
import WhyChooseEuler from "@/components/WhyChooseEuler/WhyChooseEuler";
import Testimonials from "@/components/Testimotionals/Testimotionals";
import ContactConsultation from "@/components/ContactConsultation/ContactConsultation";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section (Foresite) */}
      <EulerHero />

      {/* Features Section */}
      <Features />

      {/* What We Offer Section */}
      <WhatWeDo />

      {/* Industries supported */}
      <ServiceProvided />

      {/* How We Work section */}
      <HowWeWork />

      {/* What to Expect section */}
      <WhatToExpect />

      {/* Strategic Partnership section */}
      <StrategicPartnership />

      {/* Why Choose Euler section */}
      <WhyChooseEuler />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary700 to-brand-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-xl text-brand-primaryForeground/80 mb-8 max-w-2xl mx-auto">
            Let’s scope your first 90 days — team, tools, and outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
            >
              Book a discovery call
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
            >
              Get a tailored proposal →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <ContactConsultation />
    </div>
  );
}
