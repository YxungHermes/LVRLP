import Hero from "@/components/sections/Hero";
import { PackageGrid } from "@/components/PackageGrid";
import Workflow from "@/components/sections/Workflow";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <PackageGrid />
      <Workflow />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
