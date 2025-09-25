import { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface SectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function Section({
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24 md:m-24", className)}>
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-semibold text-brand-fg mb-4 font-sans Title-module--h2--ff335",
              titleClassName
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-lg text-brand-fgMuted max-w-2xl mx-auto font-serif",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
