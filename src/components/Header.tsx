import { useState } from "react";
import { Home, Info, Briefcase, Phone, Menu, X, Package } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo-icon.png";

type NavItem = {
  to: string;
  label: string;
  icon: typeof Home;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },

  { to: "/contact", label: "Contact", icon: Phone },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-gold/20 text-gold"
      : "text-navy-foreground/80 hover:text-gold hover:bg-gold/10"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gold/20 bg-navy/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <NavLink to="/" className="flex items-center gap-3" end>
            <img src={logo} alt="Global Elite" className="h-10 w-auto md:h-12" />
            <div className="leading-tight">
              <span className="font-heading text-lg font-bold tracking-wide text-gold md:text-xl">GLOBAL ELITE</span>
              <span className="block text-[10px] tracking-[0.2em] text-navy-foreground/70 md:text-xs">
                FACILITY SERVICES PRIVATE LIMITED
              </span>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((current) => !current)}
            className="p-2 text-navy-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-navy px-4 pb-4 md:hidden">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? "bg-gold/20 text-gold" : "text-navy-foreground/80 hover:text-gold"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
