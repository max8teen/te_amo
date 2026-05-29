import { cn } from "@/lib/utils";

interface OrnamentProps {
  className?: string;
  label?: string;
}

/** Gold ornamental divider — two thin gold lines flanking an optional label or diamond. */
export const Ornament = ({ className, label }: OrnamentProps) => (
  <div className={cn("flex items-center justify-center gap-4 text-gold", className)}>
    <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
    {label ? (
      <span className="small-caps text-gold whitespace-nowrap">{label}</span>
    ) : (
      <span aria-hidden className="text-gold text-xs">◆</span>
    )}
    <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
  </div>
);

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "max-w-3xl reveal",
      align === "center" ? "mx-auto text-center" : "text-left",
      className,
    )}
  >
    {eyebrow && <Ornament label={eyebrow} className={cn(align === "left" && "justify-start")} />}
    <h2
      className={cn(
        "font-serif text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-balance",
        light ? "text-light-text" : "text-foreground",
      )}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "font-serif italic text-lg md:text-xl mt-4",
          light ? "text-gold-light" : "text-terracotta",
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);
