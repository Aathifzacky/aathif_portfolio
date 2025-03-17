import { useInView } from "react-intersection-observer";
import {
	Code,
	Database,
	Layers,
	Terminal,
	ScanText,
	Braces,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import MovingCarousel from "./MovingCarousel";
import { useState, useEffect } from "react";

const Skills = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [showAllSkills, setShowAllSkills] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Check if the viewport is mobile size
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 640); // sm breakpoint
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Reset showAllSkills when switching between mobile and desktop
	useEffect(() => {
		setShowAllSkills(false);
	}, [isMobile]);

	const skillCategories = [
		{
			title: "Frontend Development",
			icon: Code,
			skills: [
				"React.js",
				"HTML5",
				"CSS3",
				"Tailwind CSS",
				"JavaScript",
				"TypeScript",
				"Responsive Design",
			],
		},
		{
			title: "Backend Development",
			icon: Terminal,
			skills: [
				"Java",
				"Spring Boot",
				"RESTful APIs",
				"Python",
				"Node.js",
				"Express.js",
				"Microservices",
			],
		},
		{
			title: "Database Management",
			icon: Database,
			skills: [
				"MySQL",
				"PostgreSQL",
				"MongoDB",
				"Database Design",
				"SQL",
			],
		},
		{
			title: "Software Development",
			icon: Braces,
			skills: [
				"OOP Concepts",
				"Design Patterns",
				"Clean Code",
				"SOLID Principles",
				"Testing",
				"CI/CD",
			],
		},
		{
			title: "Data Science",
			icon: ScanText,
			skills: [
				"Data Analysis",
				"Visualization",
				"Machine Learning Basics",
				"Pandas",
				"NumPy",
				"Jupyter Notebooks",
			],
		},
		{
			title: "Tools & Others",
			icon: Layers,
			skills: [
				"Git",
				"GitHub",
				"VS Code",
				"IntelliJ IDEA",
				"Postman",
				"Notion",
			],
		},
	];

	const skillsCarouselItems = [
		{
			id: "1",
			name: "React",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		},
		{
			id: "2",
			name: "JavaScript",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			id: "3",
			name: "TypeScript",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		},
		{
			id: "4",
			name: "HTML5",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			id: "5",
			name: "CSS3",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			id: "6",
			name: "Tailwind CSS",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		},
		{
			id: "7",
			name: "Java",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		},
		{
			id: "8",
			name: "Spring",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
		},
		{
			id: "9",
			name: "Python",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		},
		{
			id: "10",
			name: "Node.js",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		},
		{
			id: "11",
			name: "Express.js",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
			className: "invert",
		},
		{
			id: "12",
			name: "PostgreSQL",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		},
		{
			id: "13",
			name: "MySQL",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		},
		{
			id: "14",
			name: "MongoDB",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		},
		{
			id: "15",
			name: "Git",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		},
		{
			id: "16",
			name: "GitHub",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
			className: "invert",
		},
	];

	const digitalBadges = [
		{
			id: "b1",
			name: "GitHub Foundations",
			image: "https://images.credly.com/size/110x110/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
		},
		{
			id: "b2",
			name: "GenAI 101 with Pieces",
			image: "https://images.credly.com/size/80x80/images/64119049-42ed-4ec5-8035-d267ac62888d/assertion-mpJAvxWZRS-0oOKCv90sDQ.png",
		},
		{
			id: "b3",
			name: "Postman Student Expert",
			image: "https://images.credly.com/size/80x80/images/3c9ddce3-13c5-4d85-9782-e69edc08d57b/assertion--0f7LejsTdGFTRVi5iNUjw.png",
		},
		{
			id: "b4",
			name: "Digital Marketing (CDM)",
			image: "https://images.credly.com/size/340x340/images/851d47e1-ef93-4f41-ad12-d40eba242c79/Badge-01.png",
		},
	];

	const SkillCard = ({ category, index }) => {
		const [cardRef, cardInView] = useInView({
			triggerOnce: true,
			threshold: 0.1,
			rootMargin: "-50px 0px",
		});

		return (
			<div
				ref={cardRef}
				key={category.title}
				className={`bg-theme-dark-surface/40 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
					cardInView
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-12"
				}`}
				style={{
					transitionDelay: `${index * 150}ms`,
				}}
			>
				<div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
					<div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-theme-accent-primary/20 to-theme-accent-secondary/20 flex items-center justify-center">
						<category.icon
							size={16}
							className="text-theme-accent-primary"
						/>
					</div>
					<h4 className="text-base md:text-lg font-bold">
						{category.title}
					</h4>
				</div>
				<ul className="space-y-1 md:space-y-2">
					{category.skills.map((skill) => (
						<li
							key={skill}
							className="flex items-center gap-2 text-xs md:text-sm text-theme-text-secondary"
						>
							<span className="w-1.5 h-1.5 rounded-full bg-theme-accent-primary"></span>
							{skill}
						</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<section
			id="skills"
			className="section-container relative overflow-hidden px-4 sm:px-6 md:px-8"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-24 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-theme-accent-secondary/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-32 right-2/4 w-72 md:w-96 h-72 md:h-96 bg-theme-accent-secondary/5 rounded-full blur-3xl"></div>
				<div className="absolute top-1/3 right-1/3 w-48 md:w-64 h-48 md:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
			</div>

			<div ref={ref} className="max-w-6xl mx-auto relative z-10">
				<div className="text-center mb-8 md:mb-16">
					<div className="inline-block">
						<h2
							className={`section-title relative inline-block transition-all duration-700 ${
								inView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
						>
							<span className="relative z-10">My Skills</span>
						</h2>
					</div>
					<p
						className={`section-subtitle mx-auto transition-all duration-700 delay-100 max-w-xl ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						A comprehensive overview of my technical expertise and
						proficiency levels.
					</p>
				</div>

				{/* Skills Icons Moving Carousel */}
				<div
					className={`mb-8 md:mb-16 transition-all duration-700 delay-100 ${
						inView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="relative overflow-hidden py-4 md:py-6">
						<div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-theme-dark-bg to-transparent z-10"></div>
						<div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-theme-dark-bg to-transparent z-10"></div>
						<MovingCarousel
							items={skillsCarouselItems}
							direction="left"
							speed={40}
							className="py-2 md:py-4"
							itemClassName="mx-3 md:mx-6 w-12 h-12 md:w-16 md:h-16 filter drop-shadow-lg hover:scale-125 transition-transform duration-300"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:gap-12">
					<div
						className={`transition-all duration-700 delay-300 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-8"
						}`}
					>
						<h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 flex items-center">
							<span className="w-4 md:w-6 h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-full mr-2 md:mr-3"></span>
							Skill Categories
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
							{skillCategories
								.filter(
									(_, index) =>
										!isMobile || showAllSkills || index < 3
								)
								.map((category, index) => (
									<SkillCard
										key={category.title}
										category={category}
										index={index}
									/>
								))}
						</div>

						{isMobile && (
							<button
								onClick={() => setShowAllSkills(!showAllSkills)}
								className="flex items-center justify-center gap-2 mx-auto mt-6 px-4 py-2 rounded-lg bg-theme-dark-surface/40 border border-white/10 hover:border-theme-accent-primary/50 transition-all duration-300 text-sm"
							>
								{showAllSkills ? (
									<>
										Show Less <ChevronUp size={16} />
									</>
								) : (
									<>
										Show More <ChevronDown size={16} />
									</>
								)}
							</button>
						)}
					</div>
				</div>

				{/* Digital Badges Carousel */}
				<div
					className={`mt-10 md:mt-20 transition-all duration-700 delay-400 ${
						inView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center flex flex-wrap items-center justify-center">
						<span className="w-4 md:w-6 h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-full mr-2 md:mr-3"></span>
						Digital Certifications & Badges
					</h3>

					<div className="relative overflow-hidden py-4 md:py-6">
						<div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-theme-dark-bg to-transparent z-10"></div>
						<div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-theme-dark-bg to-transparent z-10"></div>

						<MovingCarousel
							items={digitalBadges}
							direction="left"
							speed={50}
							className="py-4 md:py-6"
							itemClassName="mx-4 md:mx-8 w-24 h-24 md:w-32 md:h-32 filter drop-shadow-xl hover:scale-110 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
