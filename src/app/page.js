import Navbar from "@/components/Navbar";
import AboutMe from "@/pages/AboutMe";
import Contact from "@/pages/Contact";
import Experience from "@/pages/Experience";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Testimonial from "@/pages/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Skills />
        <Experience />
        <AboutMe />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}
