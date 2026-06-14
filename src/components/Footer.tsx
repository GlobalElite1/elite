import {
  Heart,
  Phone,
  MapPin,
  Clock,
  Home,
  Info,
  Briefcase,
  MessageSquare,
  Shield,
  Sparkles,
  Bug,
  TreePine,
  Users,
  Brush,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-icon.png";
import { services } from "@/data/services";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/products", label: "Products", icon: Package },
  { to: "/contact", label: "Contact", icon: MessageSquare },
] as const;

const serviceIcons = {
  "Security Services": Shield,
  Housekeeping: Sparkles,
  "Deep Cleaning": Brush,
  "Pest Control": Bug,
  "Bouncer Services": Users,
  Gardening: TreePine,
};

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Global Elite" className="h-10 w-auto" />
              <div>
                <span className="font-heading text-lg font-bold text-gold">GLOBAL ELITE</span>
                <span className="block text-xs tracking-widest text-navy-foreground/60">Facility Services</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-foreground/70">
              Professional security and facility support under one roof for offices, residences, events,
              and commercial properties.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-gold">
                    <Icon className="h-4 w-4 shrink-0 text-gold" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">Our Services</h3>
            <ul className="space-y-2">
              {services.map(({ slug, title }) => {
                const Icon = serviceIcons[title as keyof typeof serviceIcons] ?? Shield;

                return (
                  <li key={slug}>
                    <Link
                      to={`/services/${slug}`}
                      className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-gold"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-gold" />
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="flex flex-col gap-1">
                  <a href="tel:7892979134" className="transition-colors hover:text-gold">
                    78929 79134
                  </a>
                  <a href="tel:8660168328" className="transition-colors hover:text-gold">
                    86601 68328
                  </a>
                  <a href="tel:8970033272" className="transition-colors hover:text-gold">
                    89700 33272
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Mon–Fri: 9AM–6PM
                  <br />
                  Sat–Sun: 9AM–2PM
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="flex flex-col gap-1">
                  <span>#3, 2nd cross, Kalyan Nagar, Bengaluru-560043</span>
                  <div className="text-xs font-semibold mt-2">Branch offices</div>
                  <span>Bengaluru</span>
                  <span>Hyderabad</span>
                  <span>Chennai</span>
                  <span>Tirupathi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 px-6 pb-8 pt-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Global Elite Facility Services. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="mx-1 inline h-4 w-4 text-destructive" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
}
