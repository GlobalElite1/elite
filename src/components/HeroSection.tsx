import { useEffect, useState } from "react";
import heroSecurity from "@/assets/hero-security.jpg";
import heroHousekeeping from "@/assets/hero-housekeeping.jpg";
import heroManpower from "@/assets/hero-manpower.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";

const slides = [heroSecurity, heroHousekeeping, heroManpower, heroEvent, heroCleaning];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Global Elite service slide ${index + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            {...(index === 0 ? {} : { loading: "lazy" as const })}
            width={1920}
            height={1080}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight text-navy-foreground animate-reveal-up md:text-6xl lg:text-7xl">
          Professional Security & Facility Services <span className="text-gold">Under One Roof</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80 animate-reveal-up delay-200 md:text-xl">
          100% regulatory compliances maintained • PSARA Licensed • 24/7 Emergency Response
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-lg font-semibold text-gold-foreground shadow-lg shadow-gold/30 transition-all duration-300 hover:brightness-110 animate-reveal-up delay-400"
        >
          Contact Us
        </a>

        <div className="absolute bottom-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={`slide-dot-${index}`}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-gold" : "w-3 bg-navy-foreground/40"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
