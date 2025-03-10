import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { ChevronUp } from "lucide-react";

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
				description:
					"Feel free to explore my projects and get in touch.",
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
				className={`fixed bottom-8 right-8 z-30 p-2 rounded-full 
          bg-theme-accent-primary/80 hover:bg-theme-accent-primary 
          backdrop-blur-sm transition-all duration-300 
          border border-white/10 hover:border-white/20
          ${
				inView
					? "opacity-0 translate-y-10 pointer-events-none"
					: "opacity-100 translate-y-0"
			}
          hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
          group`}
				aria-label="Scroll to top"
			>
				<ChevronUp
					size={32}
					className="text-white/90 group-hover:text-white 
          transition-transform duration-300
          group-hover:-translate-y-1"
				/>
			</button>
		</div>
	);
};

export default Index;
