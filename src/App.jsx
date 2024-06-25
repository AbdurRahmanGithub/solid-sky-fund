import "@fontsource/poppins";
import "@fontsource/proza-libre";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Philosophy from "./sections/Philosophy";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Import AOS CSS
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
