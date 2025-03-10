import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Welcome toast after slight delay
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my projects and get in touch.",
        duration: 5000,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="relative min-h-screen bg-theme-dark-bg text-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-30 w-12 h-12 rounded-full bg-theme-accent-primary flex items-center justify-center shadow-lg transition-all duration-300 ${
          inView ? "opacity-0 translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Index;
