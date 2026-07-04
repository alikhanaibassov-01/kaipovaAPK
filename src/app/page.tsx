import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Appendices } from "@/components/sections/Appendices";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Works />
        <Appendices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
