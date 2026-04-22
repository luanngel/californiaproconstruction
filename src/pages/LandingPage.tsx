import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Faqs from "./sections/Faqs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
