import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Platforms from "@/sections/Platforms";
import Exchanges from "@/sections/Exchanges";
import Timeline from "@/sections/Timeline";
import Community from "@/sections/Community";
import Proof from "@/sections/Proof";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Platforms />
        <Exchanges />
        <Timeline />
        <Community />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
