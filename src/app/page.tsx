import Hero from "@/components/sections/Hero";
import Packages from "@/components/sections/Packages";
import Comparison from "@/components/sections/Comparison";
import Workflow from "@/components/sections/Workflow";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Packages />
      <Comparison />
      <Workflow />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
