import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Ornament } from "@/components/Ornament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import interior from "@/assets/interior-detail.jpg";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", { description: "We'll be in touch shortly." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Reservations & Enquiries"
        subtitle="We'd love to hear from you"
        image={interior}
        breadcrumb="Contact"
      />

      <section className="py-20 md:py-28 texture-grain">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 md:p-10 shadow-card rounded-lg space-y-6 reveal"
          >
            <div>
              <Ornament label="Send a Message" className="justify-start" />
              <h2 className="font-serif text-3xl md:text-4xl mt-4">
                Drop us a line
              </h2>
            </div>

            <div>
              <Label htmlFor="cname" className="small-caps text-burgundy">Name</Label>
              <Input id="cname" required className="mt-2 h-12 bg-ivory-light border-gold/30" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="cphone" className="small-caps text-burgundy">Phone</Label>
                <Input id="cphone" type="tel" required className="mt-2 h-12 bg-ivory-light border-gold/30" />
              </div>
              <div>
                <Label htmlFor="cemail" className="small-caps text-burgundy">Email</Label>
                <Input id="cemail" type="email" required className="mt-2 h-12 bg-ivory-light border-gold/30" />
              </div>
            </div>
            <div>
              <Label htmlFor="cmsg" className="small-caps text-burgundy">Message</Label>
              <Textarea id="cmsg" rows={5} required className="mt-2 bg-ivory-light border-gold/30" />
            </div>
            <Button type="submit" variant="gold" size="xl" className="w-full">
              Send Message
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8 reveal">
            <div>
              <Ornament label="Visit Us" className="justify-start" />
              <h2 className="font-serif text-3xl md:text-4xl mt-4">
                Te Amo Restaurant
              </h2>
              <p className="font-serif italic text-terracotta text-lg">
                AC Banquets & Lawn
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="small-caps text-burgundy">Address</div>
                  <p className="font-serif text-lg mt-1">
                    Ahilyanagar, Maharashtra, India
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="small-caps text-burgundy">Phone</div>
                  <p className="font-serif text-lg mt-1">
                    <a href="tel:+919876543210" className="hover:text-gold-deep">+91 98765 43210</a>
                    <span className="mx-2 text-gold">·</span>
                    <a href="tel:+919876543211" className="hover:text-gold-deep">+91 98765 43211</a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="small-caps text-burgundy">Email</div>
                  <p className="font-serif text-lg mt-1">
                    <a href="mailto:hello@teamorestaurant.in" className="hover:text-gold-deep">
                      hello@teamorestaurant.in
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="small-caps text-burgundy">Hours</div>
                  <p className="font-serif text-lg mt-1">
                    Lunch · 12:00 pm – 3:30 pm<br />
                    Dinner · 7:00 pm – 11:00 pm
                  </p>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-lg border border-gold/30 shadow-card">
              <iframe
                title="Te Amo location map"
                src="https://www.google.com/maps?q=Ahilyanagar,Maharashtra&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative py-20 bg-gradient-burgundy text-light-text overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container relative text-center">
          <Ornament label="Reserve Now" />
          <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-tight">
            Ready to Book? Call Us Now
          </h2>
          <p className="text-light-text/80 mt-4 max-w-2xl mx-auto">
            Whether it's a quiet dinner for two or a celebration for five hundred,
            our doors and lawns are open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild variant="gold" size="xl">
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
            </Button>
            <Button asChild variant="ivory-outline" size="xl">
              <Link to="/banquet">Plan an Event</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
