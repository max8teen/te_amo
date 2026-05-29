import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Ornament } from "@/components/Ornament";

export const Footer = () => (
  <footer className="bg-dark text-light-text/80 pt-20 pb-8 texture-grain relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-warm opacity-30 pointer-events-none" />
    <div className="container relative">
      <div className="text-center mb-14">
        <Link to="/" className="inline-flex items-center gap-2">
          <Heart className="w-6 h-6 text-gold fill-gold" strokeWidth={1.5} />
          <span className="font-display text-3xl tracking-[0.18em] text-light-text">
            TE&nbsp;AMO
          </span>
        </Link>
        <p className="font-serif italic text-gold-light text-lg mt-3">
          Taste of Togetherness
        </p>
        <div className="mt-6">
          <Ornament />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-10 mb-14">
        <div>
          <h4 className="font-serif text-xl text-gold mb-4">About</h4>
          <p className="text-sm leading-relaxed">
            A cherished destination in Ahilyanagar — fine dining,
            grand banquets, and lush lawns where every gathering
            becomes a memory.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Menu", "/menu"],
              ["Banquet & Events", "/banquet"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="hover:text-gold transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-gold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Fine Dining Restaurant</li>
            <li>AC Banquet Halls</li>
            <li>Wedding Lawns</li>
            <li>Corporate Events</li>
            <li>Private Celebrations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Ahilyanagar, Maharashtra, India</span>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>hello@teamorestaurant.in</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, MapPin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-light-text/60">
        <p>© {new Date().getFullYear()} Te Amo Restaurant, AC Banquets & Lawn. All rights reserved.</p>
        <p>
          Made with <Heart className="inline w-3 h-3 text-gold fill-gold mx-1" /> in Ahilyanagar
        </p>
      </div>
    </div>
  </footer>
);
