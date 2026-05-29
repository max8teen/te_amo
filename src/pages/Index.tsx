import { Link } from "react-router-dom";
import {
  ChevronDown,
  UtensilsCrossed,
  GlassWater,
  Flower2,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ornament, SectionHeading } from "@/components/Ornament";
import heroImg from "@/assets/hero-restaurant.jpg";
import banquetImg from "@/assets/banquet-hall.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import weddingLawn from "@/assets/wedding-lawn.jpg";
import banquetCorporate from "@/assets/banquet-corporate.jpg";
import foodMastani from "@/assets/food-mastani.jpg";
import foodThali from "@/assets/food-thali.jpg";
import foodCoffee from "@/assets/food-coffee.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodSoup from "@/assets/food-soup.jpg";

const stats = [
  { n: "10+", l: "Years of Excellence" },
  { n: "500+", l: "Events Hosted" },
  { n: "50+", l: "Menu Items" },
  { n: "1000+", l: "Happy Families" },
];

const services = [
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    desc: "Multi-cuisine menu with a premium ambiance — perfect for family meals, romantic dinners, and celebrations.",
  },
  {
    icon: GlassWater,
    title: "AC Banquets",
    desc: "Fully air-conditioned banquet halls for corporate events, anniversaries, and social gatherings of every size.",
  },
  {
    icon: Flower2,
    title: "Weddings & Lawn",
    desc: "Grand wedding halls, manicured open lawns, and AC rooms — a complete venue for your big day.",
  },
];

const menuPreview = [
  { name: "Milkshakes", range: "₹99 – ₹219", img: foodCoffee },
  { name: "Mastani Specials", range: "₹175 – ₹259", img: foodMastani },
  { name: "Soups", range: "₹99 – ₹149", img: foodSoup },
  { name: "Salads", range: "₹89 – ₹169", img: foodSalad },
  { name: "Raitas", range: "₹89 – ₹119", img: foodSalad },
  { name: "Main Course", range: "₹199 – ₹399", img: foodThali },
];

const testimonials = [
  {
    quote:
      "Te Amo turned our daughter's wedding into a fairytale. The lawn, the lights, the food — everything was simply magical.",
    name: "Priya & Rajesh Kulkarni",
    occ: "Wedding Reception",
  },
  {
    quote:
      "The Te Amo Special Mastani is unmatched in Ahilyanagar. Warm hospitality and a beautiful setting every single visit.",
    name: "Anjali Deshmukh",
    occ: "Family Diner",
  },
  {
    quote:
      "Hosted our company's annual gala here. Impeccable service, gorgeous hall, and our guests still talk about the food.",
    name: "Mr. S. Patil",
    occ: "Corporate Event",
  },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Te Amo restaurant interior"
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-dark/35" />
        </div>

        <div className="container relative z-10 text-center text-light-text pt-28 pb-16">
          <div className="animate-fade-in">
            <Ornament />
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-6 tracking-[0.1em] leading-[0.98] text-light-text animate-fade-in-up text-balance">
            Te&nbsp;Amo
          </h1>
          <div className="gold-line mx-auto my-6 animate-fade-in-up" />
          <p
            className="font-serif italic text-xl md:text-3xl text-gold-light animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            Taste of Togetherness
          </p>
          <p
            className="font-body text-sm md:text-base text-light-text/75 mt-4 max-w-xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            Warm multi-cuisine dining, AC banquets and open lawn celebrations in Ahilyanagar.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/menu" className="gap-3">
                Explore Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="ivory-outline" size="xl">
              <Link to="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>

        <a
          href="#stats"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce-soft"
        >
          <ChevronDown className="w-7 h-7" strokeWidth={1.5} />
        </a>
      </section>

      {/* STATS */}
      <section id="stats" className="bg-dark text-light-text py-12 md:py-16 texture-grain relative">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-6 md:py-2 text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-playfair text-5xl md:text-6xl text-gold">{s.n}</div>
              <div className="small-caps text-light-text/70 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 texture-grain">
        <div className="container grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-3 reveal">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-gold opacity-20 rounded-md blur-2xl" />
              <div className="relative border-[6px] border-gold/40 shadow-warm overflow-hidden -rotate-2 transition-transform duration-700 hover:rotate-0">
                <img
                  src={interiorDetail}
                  alt="Warm restaurant interior with terracotta arches"
                  loading="lazy"
                  className="w-full h-[480px] md:h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-burgundy text-light-text p-6 shadow-warm hidden md:block rotate-2">
                <div className="font-serif italic text-3xl text-gold-light">Since 2014</div>
                <div className="small-caps text-light-text/70 mt-1">A Decade of Hospitality</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 reveal">
            <div className="ornament" aria-hidden />
            <p className="small-caps text-gold mt-1">Who We Are</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.05] text-balance">
              Where Every Meal Becomes a Memory
            </h2>
            <div className="gold-line my-6" />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Ahilyanagar, Te Amo is more than a
                restaurant — it is a celebration of warmth, flavour and family.
                For over a decade, our kitchens and halls have hosted the
                tender moments that matter most.
              </p>
              <p>
                From candlelit dinners under brass chandeliers to grand
                weddings beneath star-lit lawns, we craft experiences with
                the same care a family pours into a Sunday meal.
              </p>
              <p>
                Welcome to a place where terracotta walls glow gold at dusk,
                and every guest leaves feeling a little more loved.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="font-serif text-lg">Fine Dining Restaurant</div>
                  <div className="text-xs text-muted-foreground">Lunch & Dinner Daily</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Flower2 className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="font-serif text-lg">Banquet & Wedding Venue</div>
                  <div className="text-xs text-muted-foreground">Hall · Lawn · AC Rooms</div>
                </div>
              </div>
            </div>

            <Link
              to="/banquet"
              className="inline-flex items-center gap-2 mt-8 text-burgundy font-medium gold-underline pb-1"
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-ivory-soft texture-grain relative">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Everything Under One Roof"
            subtitle="From intimate dinners to grand celebrations"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group reveal bg-card relative overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 100}ms`, borderRadius: "200px 200px 12px 12px" }}
                >
                  <div className="bg-gradient-warm pt-12 pb-6 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-9 h-9 text-dark" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="px-8 pt-4 pb-10 text-center">
                    <h3 className="font-serif text-3xl">{s.title}</h3>
                    <div className="gold-line mx-auto my-4" />
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="h-[3px] bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="py-24 md:py-32 bg-dark text-light-text texture-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/40 to-transparent pointer-events-none" />
        <div className="container relative">
          <SectionHeading
            eyebrow="The Menu"
            title="A Taste of What Awaits"
            subtitle="Explore our curated, multi-cuisine menu"
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {menuPreview.map((m, i) => (
              <Link
                key={m.name}
                to="/menu"
                className="group relative overflow-hidden bg-dark-soft border border-gold/15 hover:border-gold transition-all duration-500 hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-light-text">{m.name}</h3>
                    <p className="text-gold text-sm mt-1">{m.range}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild variant="gold" size="xl">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-24 md:py-32 texture-grain">
        <div className="container">
          <SectionHeading
            eyebrow="Ambiance & Elegance"
            title="Step Inside Te Amo"
            subtitle="A glimpse of moments crafted within our walls"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 auto-rows-[180px] md:auto-rows-[220px]">
            {[
              { src: heroImg, span: "col-span-2 row-span-2", alt: "Restaurant dining" },
              { src: banquetImg, span: "col-span-2", alt: "Banquet hall" },
              { src: weddingLawn, span: "col-span-1", alt: "Wedding lawn" },
              { src: foodThali, span: "col-span-1", alt: "Indian thali" },
              { src: banquetCorporate, span: "col-span-2", alt: "Corporate event" },
            ].map((g, i) => (
              <Link
                key={i}
                to="/gallery"
                className={`${g.span} group relative overflow-hidden shadow-card reveal`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors duration-500" />
                <div className="absolute inset-0 border-0 group-hover:border-[3px] border-gold transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="gold-outline" size="lg">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-ivory-soft texture-grain">
        <div className="container">
          <SectionHeading
            eyebrow="Kind Words"
            title="What Our Guests Say"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card p-8 md:p-10 shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-1 rounded-lg reveal relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute -top-4 left-8 text-gold font-serif text-7xl leading-none select-none">"</div>
                <div className="flex gap-1 text-gold mb-5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                <p className="font-serif italic text-xl leading-relaxed text-foreground/90">
                  {t.quote}
                </p>
                <div className="gold-line my-6" />
                <div>
                  <div className="font-serif text-lg">{t.name}</div>
                  <div className="small-caps text-terracotta mt-1">{t.occ}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANQUET CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={banquetImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-burgundy-deep/80" />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-[55%] opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        {/* Decorative arch */}
        <svg
          aria-hidden
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] text-gold/10 hidden md:block"
          viewBox="0 0 200 200"
        >
          <path
            d="M40 200 L40 100 Q40 20 100 20 Q160 20 160 100 L160 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <div className="container relative grid md:grid-cols-2 gap-10 items-center text-light-text">
          <div className="reveal">
            <Ornament label="Plan With Us" className="justify-start" />
            <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
              Planning an Event<br />or Wedding?
            </h2>
            <p className="text-light-text/80 mt-5 max-w-md">
              Let us host your most cherished moments. Air-conditioned halls,
              lush lawns, and a team that treats every event like our own.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end reveal">
            <Button asChild variant="gold" size="xl">
              <Link to="/banquet">Enquire Now</Link>
            </Button>
            <Button asChild variant="ivory-outline" size="xl">
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
