import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Ornament } from "@/components/Ornament";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
  className?: string;
  children?: ReactNode;
}

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumb,
  className,
  children,
}: PageHeroProps) => (
  <section
    className={cn(
      "relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-dark",
      className,
    )}
  >
    <img
      src={image}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-dark/40" />

    <div className="container relative text-center text-light-text pt-28 pb-16">
      <div className="animate-fade-in">
        <Ornament label={eyebrow} />
      </div>

      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-6 tracking-[0.1em] leading-[1.02] text-light-text animate-fade-in-up text-balance">
        {title}
      </h1>

      <div className="gold-line mx-auto my-6 animate-fade-in-up" />

      {subtitle && (
        <p
          className="font-serif italic text-xl md:text-2xl text-gold-light animate-fade-in-up max-w-2xl mx-auto"
          style={{ animationDelay: "150ms" }}
        >
          {subtitle}
        </p>
      )}

      {breadcrumb && (
        <p
          className="small-caps text-gold mt-8 animate-fade-in-up"
          style={{ animationDelay: "250ms" }}
        >
          <Link to="/" className="hover:text-gold-light">Home</Link>
          <span className="mx-3 opacity-50">/</span>
          {breadcrumb}
        </p>
      )}

      {children && (
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "350ms" }}>
          {children}
        </div>
      )}
    </div>

    <div
      aria-hidden
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce-soft"
    >
      <ChevronDown className="w-7 h-7" strokeWidth={1.5} />
    </div>
  </section>
);
