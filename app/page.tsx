import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Reels from "@/components/Reels";
import Skills from "@/components/Skills";
import SocialHub from "@/components/SocialHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Reels />
      <Skills />
      <SocialHub />
      <Contact />
      <Footer />
    </main>
  );
}
