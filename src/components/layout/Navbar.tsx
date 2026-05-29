import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/banquet", label: "Banquet & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const transparent = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[80] transition-all duration-500",
          transparent ? "bg-transparent py-5" : "bg-dark/95 backdrop-blur-md py-3 shadow-warm",
        )}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Heart
              className="w-5 h-5 text-gold fill-gold transition-transform group-hover:scale-110"
              strokeWidth={1.5}
            />
            <span className="font-display text-2xl tracking-[0.15em] text-light-text transition-colors">
              TE&nbsp;AMO
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "small-caps text-light-text/80 hover:text-gold gold-underline pb-1 transition-colors",
                    isActive && "text-gold active",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden p-2 text-light-text transition-colors relative z-[90] touch-manipulation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-7 h-7 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-dark/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 lg:hidden transition-all duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {links.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              cn(
                "font-serif text-3xl tracking-wide transition-colors",
                isActive ? "text-gold" : "text-light-text hover:text-gold",
              )
            }
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  );
};
