import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Strength } from "@/components/Strength";
import { Services } from "@/components/Services";
import { Recruit } from "@/components/Recruit";
import { News } from "@/components/News";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Strength />
      <Services />
      <Recruit />
      <News />
      <ContactCTA />
    </>
  );
}
