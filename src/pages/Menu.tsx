import { useEffect, useState } from "react";
import { menu } from "@/data/menu";
import { PageHero } from "@/components/PageHero";
import { Ornament } from "@/components/Ornament";
import { cn } from "@/lib/utils";
import heroFood from "@/assets/food-thali.jpg";

const MenuPage = () => {
  const [active, setActive] = useState(menu[0].id);

  // Spy on scroll to highlight active tab
  useEffect(() => {
    const onScroll = () => {
      const offset = 200;
      let current = menu[0].id;
      for (const c of menu) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < offset) current = c.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-scroll the tab strip to keep active tab centered
  useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>(
      `[data-tab-id="${active}"]`,
    );
    const strip = document.getElementById("menu-tab-strip");
    if (!btn || !strip) return;
    const target =
      btn.offsetLeft - strip.clientWidth / 2 + btn.clientWidth / 2;
    strip.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="Curated Selections"
        title="Our Menu"
        subtitle="Crafted with love, served with warmth"
        image={heroFood}
        breadcrumb="Menu"
      />

      {/* Sticky tabs */}
      <div className="sticky top-[68px] z-40 bg-ivory/95 backdrop-blur-md border-b border-gold/20 shadow-soft">
        <div className="container">
          <div id="menu-tab-strip" className="flex gap-2 md:gap-6 overflow-x-auto py-4 no-scrollbar scroll-smooth">
            {menu.map((c) => (
              <button
                key={c.id}
                data-tab-id={c.id}
                onClick={() => scrollTo(c.id)}
                className={cn(
                  "small-caps whitespace-nowrap px-4 py-2 rounded-sm transition-all border",
                  active === c.id
                    ? "bg-burgundy text-light-text border-burgundy"
                    : "border-transparent text-foreground/70 hover:text-burgundy hover:border-gold",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 texture-grain">
        <div className="container max-w-5xl">
          {menu.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-32 mb-24">
              <div className="text-center mb-12 reveal">
                <Ornament label={cat.priceRange} />
                <h2 className="font-serif text-4xl md:text-5xl mt-4">{cat.name}</h2>
                <p className="font-serif italic text-terracotta text-lg mt-2">
                  {cat.tagline}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
                {cat.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="group flex items-baseline gap-3 py-4 border-b border-dashed border-gold/30 reveal"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <span
                      aria-hidden
                      title={item.veg ? "Vegetarian" : "Non-vegetarian"}
                      className={cn(
                        "w-3 h-3 border-2 mt-1 shrink-0 flex items-center justify-center",
                        item.veg ? "border-emerald-700" : "border-destructive",
                      )}
                    >
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          item.veg ? "bg-emerald-700" : "bg-destructive",
                        )}
                      />
                    </span>
                    <div className="flex-1">
                      <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-burgundy transition-colors">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="ml-2 text-xs italic text-terracotta">
                          ({item.note})
                        </span>
                      )}
                    </div>
                    <span className="flex-1 mx-2 border-b border-dotted border-gold/40 self-end mb-2" />
                    {item.price && (
                      <span className="font-playfair text-lg text-gold-deep font-semibold">
                        ₹{item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
