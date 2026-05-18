import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MetricsGrid } from "@/components/MetricsGrid";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Toolbox } from "@/components/Toolbox";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <MetricsGrid />
      <Work />
      <Projects />
      <Toolbox />
      <Contact />
    </main>
  );
}
