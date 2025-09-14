import { TESTIMONIALS } from "@/constants";
import Section from "../UI/Section";
import Card from "../UI/Card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <Section
      title="What Our Customers Say"
      description="Join thousands of satisfied customers who trust Euler for their digital transformation"
    >
      {TESTIMONIALS.map((testimonial, index) => (
        <Card key={index} className="text-center">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
  );
}
