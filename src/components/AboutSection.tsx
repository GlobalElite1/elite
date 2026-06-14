import { Shield, Users, Sparkles, CheckCircle, Clock, Phone, Scale, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  { icon: Shield, title: "Armed & Unarmed Guarding", desc: "Professional manned guarding services for all premises" },
  { icon: Users, title: "Bouncer & Bodyguard", desc: "Trained personnel for personal and event security" },
  { icon: Sparkles, title: "Event Security", desc: "Complete event security management solutions" },
  { icon: CheckCircle, title: "Facility Management", desc: "End-to-end facility management services" },
  { icon: Sparkles, title: "Housekeeping & Cleaning", desc: "Professional housekeeping and deep cleaning" },
  { icon: Users, title: "Labour Contract Services", desc: "Provision and management of contractual labour for varied needs." },
  { icon: Users, title: "Skilled & Unskilled Manpower Services", desc: "Supply of trained skilled and unskilled personnel for diverse roles." },
];

const badges = [
  { icon: Scale, label: "100% regulatory compliances maintained" },
  { icon: Award, label: "PSARA Licensed" },
  { icon: CheckCircle, label: "PF, ESI, PT Registered" },
  { icon: Clock, label: "24/7 Emergency Response" },
  { icon: Phone, label: "Dedicated Helpline" },
];

export default function AboutSection() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            About <span className="text-gold">Global Elite</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            GLOBAL ELITE SECURITY provides a wide range of Security, Manpower, Housekeeping
            and related services. We are passionate about delivering the best services at the
            most affordable cost. We provide integrated solutions combining Security,
            Housekeeping and Manpower under one roof.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-gold/30 transition-all duration-300 ${
                visible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className={`flex flex-wrap justify-center gap-4 ${visible ? "animate-reveal-up delay-600" : "opacity-0"}`}>
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-navy text-navy-foreground px-4 py-2 rounded-full text-sm">
              <Icon className="h-4 w-4 text-gold" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
