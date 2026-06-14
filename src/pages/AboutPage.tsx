import AboutSection from "@/components/AboutSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function AboutPage() {
  usePageMeta({
    title: "About Us — Global Elite Facility Services",
    description:
      "Learn about Global Elite Facility Services — 100% regulatory compliances maintained, delivering integrated security and facility solutions.",
  });

  return <AboutSection />;
}
