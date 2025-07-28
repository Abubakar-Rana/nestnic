// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services" className="scroll-mt-20">
        <Services />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>
      <div id="tech" className="scroll-mt-20">
        <TechStack />
      </div>
      <div id="blog" className="scroll-mt-20">
        <Blog />
      </div>
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div id="team" className="scroll-mt-20">
        <Team />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
