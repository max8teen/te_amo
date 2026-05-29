import { useState } from "react";
import { CalendarIcon, Users, AirVent, Wind, Sparkles, Heart, Briefcase, PartyPopper } from "lucide-react";
import { format } from "date-fns";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, Ornament } from "@/components/Ornament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import banquetImg from "@/assets/banquet-hall.jpg";
import weddingLawn from "@/assets/wedding-lawn.jpg";
import banquetCorporate from "@/assets/banquet-corporate.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";

const highlights = [
  { icon: Users, label: "Up to 800 Guests", desc: "Hall + Lawn capacity" },
  { icon: AirVent, label: "Fully AC Halls", desc: "Climate-controlled comfort" },
  { icon: Sparkles, label: "Arched Architecture", desc: "Grand checkerboard floors" },
  { icon: Wind, label: "Open Lush Lawns", desc: "Open-air celebrations" },
];

const events = [
  {
    icon: Heart,
    title: "Weddings & Receptions",
    desc: "Mandap setups, bridal rooms, lawn baraats, and seamless coordination for your fairytale day.",
    img: weddingLawn,
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Conferences, product launches, annual galas — with AV setup and refined banquet service.",
    img: banquetCorporate,
  },
  {
    icon: PartyPopper,
    title: "Social Gatherings & Birthdays",
    desc: "Anniversaries, birthdays, naming ceremonies — celebrations of every size, hosted with care.",
    img: banquetImg,
  },
];

const BanquetPage = () => {
  const [date, setDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry received!", {
      description: "Our events team will reach out within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
  };

  return (
    <>
      <PageHero
        eyebrow="Banquet & Events"
        title="Create Memories That Last Forever"
        subtitle="Halls, lawns, and AC rooms for every celebration"
        image={banquetImg}
        breadcrumb="Banquet"
      />

      {/* Highlights */}
      <section className="py-20 texture-grain">
        <div className="container">
          <SectionHeading
            eyebrow="Venue Highlights"
            title="Crafted for Grand Occasions"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="bg-card p-8 text-center shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-1 rounded-lg reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Icon className="w-7 h-7 text-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mt-5">{h.label}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 md:py-28 bg-ivory-soft texture-grain">
        <div className="container">
          <SectionHeading
            eyebrow="Occasions We Host"
            title="A Setting for Every Story"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {events.map((e, i) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.title}
                  className="group bg-card overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-2 rounded-lg reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                      <h3 className="font-serif text-2xl">{e.title}</h3>
                    </div>
                    <div className="gold-line my-4" />
                    <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery 4-img */}
      <section className="py-20 md:py-28 bg-dark texture-grain">
        <div className="container">
          <SectionHeading
            eyebrow="Banquet Setups"
            title="Inside Our Halls & Lawns"
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[banquetImg, weddingLawn, banquetCorporate, interiorDetail].map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden group reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={src}
                  alt="Banquet setup"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 md:py-32 texture-grain">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Plan Your Event"
            title="Tell Us About Your Day"
            subtitle="We'll respond within 24 hours"
          />

          <form
            onSubmit={handleSubmit}
            className="bg-card mt-12 p-8 md:p-12 shadow-card rounded-lg space-y-6 reveal"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="small-caps text-burgundy">Name</Label>
                <Input id="name" name="name" required className="mt-2 h-12 bg-ivory-light border-gold/30" />
              </div>
              <div>
                <Label htmlFor="phone" className="small-caps text-burgundy">Phone</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-2 h-12 bg-ivory-light border-gold/30" />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="small-caps text-burgundy">Email</Label>
              <Input id="email" name="email" type="email" required className="mt-2 h-12 bg-ivory-light border-gold/30" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label className="small-caps text-burgundy">Event Type</Label>
                <Select required>
                  <SelectTrigger className="mt-2 h-12 bg-ivory-light border-gold/30">
                    <SelectValue placeholder="Choose event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding / Reception</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="birthday">Birthday / Anniversary</SelectItem>
                    <SelectItem value="social">Social Gathering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="small-caps text-burgundy">Expected Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "mt-2 w-full h-12 justify-start font-normal bg-ivory-light border-gold/30 text-foreground hover:bg-ivory",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="w-4 h-4 mr-2 text-gold" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <Label htmlFor="guests" className="small-caps text-burgundy">Expected Guests</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min={1}
                placeholder="e.g. 250"
                required
                className="mt-2 h-12 bg-ivory-light border-gold/30"
              />
            </div>

            <div>
              <Label htmlFor="message" className="small-caps text-burgundy">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share any special requests, themes, or questions…"
                className="mt-2 bg-ivory-light border-gold/30"
              />
            </div>

            <Button type="submit" variant="gold" size="xl" className="w-full">
              Submit Enquiry
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BanquetPage;
