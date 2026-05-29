import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero-restaurant.jpg";
import banquetImg from "@/assets/banquet-hall.jpg";
import weddingLawn from "@/assets/wedding-lawn.jpg";
import banquetCorporate from "@/assets/banquet-corporate.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import foodMastani from "@/assets/food-mastani.jpg";
import foodThali from "@/assets/food-thali.jpg";
import foodCoffee from "@/assets/food-coffee.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodSoup from "@/assets/food-soup.jpg";

type Tag = "All" | "Restaurant" | "Banquet" | "Food" | "Events";

const items: { src: string; tag: Exclude<Tag, "All">; alt: string }[] = [
  { src: heroImg, tag: "Restaurant", alt: "Te Amo dining hall" },
  { src: foodMastani, tag: "Food", alt: "Mango Mastani" },
  { src: banquetImg, tag: "Banquet", alt: "Wedding banquet hall" },
  { src: weddingLawn, tag: "Events", alt: "Wedding lawn at twilight" },
  { src: foodThali, tag: "Food", alt: "Indian thali platter" },
  { src: interiorDetail, tag: "Restaurant", alt: "Arched terracotta niche" },
  { src: banquetCorporate, tag: "Banquet", alt: "Corporate event setup" },
  { src: foodCoffee, tag: "Food", alt: "Cold coffee with ice cream" },
  { src: foodSalad, tag: "Food", alt: "Garden salad" },
  { src: foodSoup, tag: "Food", alt: "Cream of tomato soup" },
  { src: weddingLawn, tag: "Events", alt: "Wedding mandap" },
  { src: banquetImg, tag: "Events", alt: "Reception decor" },
];

const tags: Tag[] = ["All", "Restaurant", "Banquet", "Food", "Events"];

const GalleryPage = () => {
  const [tag, setTag] = useState<Tag>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = tag === "All" ? items : items.filter((i) => i.tag === tag);

  return (
    <>
      <PageHero
        eyebrow="Moments at Te Amo"
        title="Gallery"
        subtitle="A visual story of warmth, flavour and celebration"
        image={banquetImg}
        breadcrumb="Gallery"
      />

      <section className="py-20 texture-grain">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={cn(
                  "small-caps px-5 py-2.5 border rounded-sm transition-all",
                  tag === t
                    ? "bg-burgundy text-light-text border-burgundy"
                    : "border-gold/40 text-foreground/70 hover:text-burgundy hover:border-gold",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Masonry */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {filtered.map((item, i) => (
              <button
                key={`${item.src}-${i}`}
                onClick={() => setLightbox(item.src)}
                className="group block w-full overflow-hidden shadow-card relative reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/25 transition-colors" />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-dark/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="small-caps text-gold">{item.tag}</span>
                  <p className="font-serif text-light-text text-lg">{item.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-light-text hover:text-gold w-10 h-10 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain shadow-warm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GalleryPage;
