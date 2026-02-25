import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Strength } from "@/components/Strength";
import { Services } from "@/components/Services";
import { Recruit } from "@/components/Recruit";
import { News } from "@/components/News";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Strength />
        <Services />
        <Recruit />
        <News />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
