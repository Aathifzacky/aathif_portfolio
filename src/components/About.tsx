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
			className="section-container bg-theme-dark-surface/30"
		>
			<div ref={ref} className="max-w-5xl mx-auto">
				<div className="text-center mb-16">
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

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div
						className={`space-y-6 transition-all duration-700 delay-200 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-8"
						}`}
					>
						<h3 className="text-2xl font-bold">My Background</h3>
						<p className="text-theme-text-secondary">
							As an undergraduate computer science student, I've
							always been fascinated by the power of technology to
							solve real-world problems. My journey in the tech
							world began with simple programming exercises and
							quickly evolved into building complex applications
							that make a difference.
						</p>
						<p className="text-theme-text-secondary">
							I specialize in software development, web
							technologies, and data science, with a particular
							interest in creating seamless user experiences and
							leveraging data to drive decisions.
						</p>
						<p className="text-theme-text-secondary">
							When I'm not coding, you'll find me exploring new
							technologies, contributing to open-source projects,
							or enhancing my skills through continuous learning.
						</p>
					</div>

					<div
						className={`transition-all duration-700 delay-300 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-8"
						}`}
					>
						<h3 className="text-2xl font-bold mb-6">
							Education & Certifications
						</h3>
						<div className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:w-px before:h-full before:bg-theme-accent-primary/30">
							{timelineItems.map((item, index) => (
								<div
									key={index}
									className={`mb-8 relative transition-all duration-500`}
									style={{
										transitionDelay: `${
											400 + index * 150
										}ms`,
									}}
								>
									<div className="absolute -left-9 w-8 h-8 rounded-full bg-theme-dark-surface flex items-center justify-center border-2 border-theme-accent-primary">
										<item.icon
											size={14}
											className="text-theme-accent-primary"
										/>
									</div>
									<div className="card ml-1">
										<div className="flex flex-wrap justify-between items-start mb-2">
											<h4 className="text-lg font-bold">
												{item.title}
											</h4>
											<span className="text-xs px-2 py-1 bg-theme-accent-primary/10 rounded-full border border-theme-accent-primary/20">
												{item.date}
											</span>
										</div>
										<p className="text-sm text-theme-accent-primary mb-2">
											{item.organization}
										</p>
										<p className="text-sm text-theme-text-secondary">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
        </div>

        <div className="mt-10 mx-auto max-w-md">
					<div className="card bg-theme-dark-surface  border border-theme-accent-primary/10">
						<Quote
							size={24}
							className="text-theme-accent-primary mb-4"
						/>
						<p className="text-lg font-medium italic">
							"The technology you use impresses no one. The
							experience you create with it is everything."
						</p>
						<p className="text-sm text-theme-text-secondary mt-2">
							— Sean Gerety
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
