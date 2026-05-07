import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
