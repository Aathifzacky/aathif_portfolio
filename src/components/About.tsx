import { useInView } from "react-intersection-observer";
import { CalendarClock, GraduationCap, Award, Quote } from "lucide-react";

const About = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const timelineItems = [
		{
			title: "Computer Science",
			organization: "Informatics Institute of Technology",
			date: "2023 - Present",
			description:
				"Bachelor's Degree in Computer Science with a focus on software development and data science.",
			icon: GraduationCap,
		},
		{
			title: "Professional Course in Software Development",
			organization: "SLIM",
			date: "2022",
			description:
				"Specialized training in software development methodologies and practices.",
			icon: CalendarClock,
		},
	];

	return (
		<section
			id="about"
			className="section-container px-4 sm:px-6 md:px-8 relative overflow-hidden"
		>
			{/* Background gradient blurs */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-theme-accent-secondary/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-32 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-theme-accent-secondary/5 rounded-full blur-3xl"></div>
			</div>

			<div ref={ref} className="max-w-5xl mx-auto">
				<div className="text-center mb-8 md:mb-16">
					<h2
						className={`section-title inline-block transition-all duration-700 ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						About Me
					</h2>
					<p
						className={`section-subtitle mx-auto transition-all duration-700 delay-100 ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						Get to know more about my background, education, and
						what drives me in the tech world.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
					<div
						className={`space-y-4 md:space-y-6 transition-all duration-700 delay-200 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-8"
						}`}
					>
						<h3 className="text-xl md:text-2xl font-bold flex items-center">
							<span className="w-4 md:w-6 h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-full mr-2 md:mr-3"></span>
							My Background
						</h3>

						<div className="bg-theme-dark-surface/60 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/5 shadow-lg">
							<p className="text-sm md:text-base text-theme-text-secondary mb-3 md:mb-4">
								As an undergraduate computer science student,
								I've always been fascinated by the power of
								technology to solve real-world problems. My
								journey in the tech world began with simple
								programming exercises and quickly evolved into
								building complex applications that make a
								difference.
							</p>
							<p className="text-sm md:text-base text-theme-text-secondary mb-3 md:mb-4">
								I specialize in software development, web
								technologies, and data science, with a
								particular interest in creating seamless user
								experiences and leveraging data to drive
								decisions.
							</p>
							<p className="text-sm md:text-base text-theme-text-secondary">
								When I'm not coding, you'll find me exploring
								new technologies, contributing to open-source
								projects, or enhancing my skills through
								continuous learning.
							</p>
						</div>
					</div>

					<div
						className={`transition-all duration-700 delay-300 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-8"
						}`}
					>
						<h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
							<span className="w-4 md:w-6 h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-full mr-2 md:mr-3"></span>
							Education & Certifications
						</h3>
						<div className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:w-px before:h-full before:bg-gradient-to-b from-theme-accent-primary via-theme-accent-secondary to-theme-accent-primary/30">
							{timelineItems.map((item, index) => (
								<div
									key={index}
									className={`mb-6 md:mb-8 relative transition-all duration-500 hover:translate-x-1`}
									style={{
										transitionDelay: `${
											400 + index * 150
										}ms`,
									}}
								>
									<div className="absolute -left-9 w-6 md:w-8 h-6 md:h-8 rounded-full bg-theme-dark-surface flex items-center justify-center border-2 border-theme-accent-primary shadow-glow-sm">
										<item.icon
											size={12}
											className="text-theme-accent-primary"
										/>
									</div>
									<div className="card bg-theme-dark-surface/60 backdrop-blur-sm border border-white/5 rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300">
										<div className="flex flex-wrap justify-between items-start mb-2">
											<h4 className="text-base md:text-lg font-bold">
												{item.title}
											</h4>
											<span className="text-xs px-2 py-1 bg-theme-accent-primary/10 rounded-full border border-theme-accent-primary/20 mt-1 md:mt-0">
												{item.date}
											</span>
										</div>
										<p className="text-xs md:text-sm text-theme-accent-primary mb-1 md:mb-2">
											{item.organization}
										</p>
										<p className="text-xs md:text-sm text-theme-text-secondary">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mt-10 md:mt-16 mx-auto max-w-xs md:max-w-md transform hover:scale-105 transition-all duration-300">
					<div className="card bg-gradient-to-br from-theme-dark-surface to-theme-dark-surface/80 border border-theme-accent-primary/20 p-4 md:p-6 rounded-xl shadow-lg relative">
						{/* Decorative elements */}
						<div className="absolute -top-2 md:-top-3 -left-2 md:-left-3 w-6 md:w-8 h-6 md:h-8 rounded-full bg-theme-accent-primary/20 flex items-center justify-center border border-theme-accent-primary/30">
							<Quote
								size={14}
								className="text-theme-accent-primary"
							/>
						</div>
						<div className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-3 w-6 md:w-8 h-6 md:h-8 rounded-full bg-theme-accent-secondary/20 flex items-center justify-center border border-theme-accent-secondary/30">
							<Quote
								size={14}
								className="text-theme-accent-secondary transform rotate-180"
							/>
						</div>

						{/* Quote content */}
						<div className="pt-3 md:pt-4">
							<p className="text-base md:text-lg font-medium italic text-center">
								"The technology you use impresses no one. The
								experience you create with it is everything."
							</p>
							<p className="text-xs md:text-sm text-theme-text-secondary mt-3 md:mt-4 text-right">
								— Sean Gerety
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
