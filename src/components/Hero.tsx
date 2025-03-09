import { ChevronDown, Download, ArrowRight } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import SocialIcons from "./SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Hero = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: e.clientX / window.innerWidth,
				y: e.clientY / window.innerHeight,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Set loaded state after a small delay for entrance animation
		const timer = setTimeout(() => setIsLoaded(true), 300);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearTimeout(timer);
		};
	}, []);

	const techIcons = [
		{
			name: "React",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		},
		{
			name: "Java",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		},
		{
			name: "Python",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		},
		{
			name: "MySQL",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		},
		{
			name: "JavaScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			name: "Node.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		},
		{
			name: "Express.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		},
	];

	return (
		<section
			id="home"
			className="relative min-h-screen overflow-hidden px-4 sm:px-6"
		>
			{/* Animated background with grid pattern */}
			<div className="absolute inset-0 bg-grid-pattern opacity-30" />

			{/* Gradient overlay with parallax effect */}
			<div
				className="absolute inset-0 bg-gradient-to-b from-theme-dark-bg/90 via-theme-dark-bg/95 to-theme-dark-bg backdrop-blur-sm"
				style={{
					transform: `translate(${mousePosition.x * -10}px, ${
						mousePosition.y * -10
					}px)`,
					transition: "transform 0.2s ease-out",
				}}
			/>

			{/* Animated orbs/blobs in background */}
			<div
				className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-theme-accent-primary/10 blur-3xl animate-blob"
				style={{
					animationDelay: "0s",
					transform: `translate(${mousePosition.x * -30}px, ${
						mousePosition.y * -30
					}px)`,
				}}
			/>
			<div
				className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-theme-accent-secondary/10 blur-3xl animate-blob"
				style={{
					animationDelay: "2s",
					transform: `translate(${mousePosition.x * -20}px, ${
						mousePosition.y * -20
					}px)`,
				}}
			/>

			{/* Left side tech icons with enhanced animations */}
			<div className="absolute top-1/2 left-6 -translate-y-1/2 hidden lg:flex flex-col gap-6">
				{techIcons.map((tech, index) => (
					<div
						key={tech.name}
						className={`w-12 h-12 rounded-xl bg-theme-dark-surface/80 p-2 border border-white/10 shadow-lg backdrop-blur-md hover:scale-110 transition-all duration-1500 animate-float`}
						style={{ animationDelay: `${index * 0.2}s` }}
						title={tech.name}
					>
						<img
							src={tech.icon}
							alt={tech.name}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
			</div>

			{/* Main content */}
			<div
				ref={ref}
				className="container relative mx-auto px-2 sm:px-4 min-h-screen flex flex-col items-center justify-center"
			>
				<div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-8 mb-8 sm:mb-12">
					{/* Badge with glow effect */}
					<div className="flex items-center justify-center gap-2 mb-4 sm:mb-8">
						<span className="px-3 sm:px-5 py-2 bg-theme-accent-primary/10 border border-theme-accent-primary/30 rounded-full text-xs sm:text-sm font-medium animate-pulse-slow shadow-glow">
							<span className="relative inline-flex overflow-hidden">
								<span className="absolute w-2 h-2 bg-theme-accent-primary rounded-full left-0 top-1/2 -translate-y-1/2 animate-blink"></span>
								<span className="text-theme-accent-primary px-2 sm:px-4">
									Welcome to my Portfolio
								</span>
								<span className="absolute w-2 h-2 bg-theme-accent-primary rounded-full right-0 top-1/2 -translate-y-1/2 animate-blink"></span>
							</span>
						</span>
					</div>

					{/* Enhanced name title with animated gradient */}
					<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-2">
						<span
							className={`block transition-all duration-700 ${
								inView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
						>
							Hi, I'm{" "}
							<span className="relative">
								<span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-theme-accent-primary via-purple-500 to-theme-accent-secondary bg-size-200 animate-gradient-x">
									Zacky Mohamed Aathif
								</span>
								<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-full transform scale-x-0 origin-left animate-expand-line"></span>
							</span>
						</span>
					</h1>

					{/* Typewriter effect with improved styling */}
					<div className="h-16 sm:h-24 mt-4 sm:mt-6">
						<TypewriterEffect
							texts={[
								"Software Developer",
								"Web Developer",
								"Data Science Enthusiast",
								"Tech Enthusiast",
								"Freelancer",
							]}
							speed={2000}
							delay={1000}
						/>
					</div>

					{/* Description with better animation */}
					<p
						className={`text-base sm:text-xl text-theme-text-secondary max-w-2xl mx-auto transition-all duration-700 delay-200 leading-relaxed px-4 ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						A passionate computer science student crafting elegant
						solutions through code. Specializing in modern web
						development and data science.
					</p>

					{/* Enhanced buttons with hover effects */}
					<div
						className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 transition-all duration-700 delay-300 ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<a
							href="#projects"
							className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-glow-primary hover:shadow-glow-primary-lg group transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
						>
							<span className="relative inline-flex items-center gap-2">
								View Projects
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</span>
						</a>
						<a
							href="/resume.pdf"
							className="btn-secondary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl backdrop-blur-sm border border-white/10 hover:border-theme-accent-secondary/50 group transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="relative inline-flex items-center gap-2">
								Download CV
								<Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
							</span>
						</a>
					</div>
				</div>

				{/* Social icons with hover animations */}
				<SocialIcons
					className={`mt-6 sm:mt-10 justify-center gap-4 sm:gap-8 transition-all duration-700 delay-400 ${
						inView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				/>

				{/* Scroll down indicator with enhanced animation */}
				<div className="absolute bottom-8 sm:bottom-12 left-0 right-0">
					<div className="flex justify-center">
						<a
							href="#about"
							className="btn-icon bg-theme-dark-surface/60 backdrop-blur-md hover:bg-theme-dark-surface/80 group rounded-full border border-white/10 hover:border-theme-accent-primary/50 transition-all duration-300 animate-bounce-slow relative overflow-hidden"
							aria-label="Scroll to About section"
						>
							<span className="absolute inset-0 rounded-full bg-theme-accent-primary/20 animate-ping-slow opacity-75"></span>
							<ChevronDown
								size={24}
								className="group-hover:translate-y-1 transition-transform text-theme-accent-primary"
							/>
						</a>
					</div>
				</div>
			</div>

			{/* Right side tech icons with enhanced animations */}
			<div className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col gap-6">
				{techIcons.map((tech, index) => (
					<div
						key={tech.name}
						className={`w-12 h-12 rounded-xl bg-theme-dark-surface/80 p-2 border border-white/10 shadow-lg backdrop-blur-md hover:scale-110 transition-all duration-1500 animate-float`}
						style={{ animationDelay: `${index * 0.2}s` }}
						title={tech.name}
					>
						<img
							src={tech.icon}
							alt={tech.name}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Hero;
