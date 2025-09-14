import { SERVICES } from "@/constants";
import { useState } from "react";
import Section from "../UI/Section";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      title="What We Do"
      description="See how Euler can help your business thrive in the digital age"
      className="bg-brand-bgElevated/20 font-sans text-black"
    >
      <h2 className="text-3xl font-bold mb-8">
        Services we provide:{" "}
        <span className="text-gray-600 mt-1 text-xl">{SERVICES[activeIndex].tagline}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="space-y-1 border-r pr-4">
          {SERVICES.map((service, i) => (
            <Link
              to={service.href}
              key={service.title}
              onClick={() => setActiveIndex(i)}
              className={`block w-full text-left px-3 py-4 mt-2 rounded-md transition text-black
                ${activeIndex === i ? "font-bold bg-gray-100" : "font-normal"}
              `}
            >
              {service.title}
            </Link>
          ))}
        </div>

        {/* Right column */}
        <div className="md:col-span-2">
          <ul className="grid sm:grid-cols-2">
            {SERVICES[activeIndex].bullets.map((bullet) => (
              <li key={bullet} className="pr-2">
                <Link
                  to={""}
                  className={`
            group relative block w-full text-left flex items-center justify-between 
            px-3 py-4 mt-2 rounded-md transition text-black font-normal 
            bg-slate-50
          `}
                >
                  <span>{bullet}</span>
                  <span>→</span>

                  {/* underline effect */}
                  <span
                    className="
              absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 
              transition-all duration-300 group-hover:w-full
            "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
