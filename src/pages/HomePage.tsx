import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import EulerHero from "@/components/Hero/EulerHero";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";
import Section from "@/components/UI/Section";
import { FEATURES, TESTIMONIALS } from "@/constants";
import Features from "@/components/Features/Features";
import WhatWeDo from "@/components/ServiceProvided/WhatWeDo";
import ServiceProvided from "@/components/Industries/Industries";

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

      {/* Testimonials Section */}
      <Section
        title="What Our Customers Say"
        description="Join thousands of satisfied customers who trust Euler for their digital transformation"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <Card key={index} className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-brand-fgMuted mb-4 italic font-serif">
              "{testimonial.content}"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-brand-accentPurple rounded-full"></div>
              <div>
                <p className="font-semibold text-brand-fg font-sans">
                  {testimonial.name}
                </p>
                <p className="text-sm text-brand-fgMuted font-serif">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary700 to-brand-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-primaryForeground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses building the future with
            Euler
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="text-white border border-white/30 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-brand-fg mb-4">
              Stay Updated
            </h2>
            <p className="text-brand-fgMuted mb-8">
              Get the latest updates, tips, and insights delivered to your inbox
            </p>
            <form
              onSubmit={handleNewsletterSignup}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field flex-1"
                required
              />
              <Button type="submit" className="btn-primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
