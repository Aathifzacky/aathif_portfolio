interface Project {
	title: string;
	description: string;
	images: string[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	category: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		title: "University Progress Outcome Prediction",
		description:
			"A Python-based machine learning application that predicts student academic outcomes based on various parameters and historical data.",
		images: [
			"https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
			"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		],
		technologies: [
			"Python",
			"Machine Learning",
			"Pandas",
			"Scikit-learn",
			"Data Visualization",
		],
		githubUrl: "https://github.com/zackyaathif/university-prediction",
		category: "data-science",
		liveUrl: "https://zackyaathif.com",
		featured: true,
	},
	{
		title: "Plane Management System",
		description:
			"A Java-based application for managing flight operations, maintenance schedules, and crew assignments for a fleet of aircraft.",
		images: [
			"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
			"https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		],
		technologies: ["Java", "JavaFX", "OOP", "MySQL", "MVC Architecture"],
		githubUrl: "https://github.com/zackyaathif/plane-management",
		category: "web",
	},
	{
		title: "Ticketing Simulation System",
		description:
			"A full-stack application that simulates a ticketing system for events, with features for purchasing, managing, and validating tickets.",
		images: [
			"https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1572609239042-de3342eeabce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		],
		technologies: [
			"React.js",
			"Java",
			"Spring Boot",
			"MySQL",
			"REST API",
			"JWT Authentication",
		],
		githubUrl: "https://github.com/zackyaathif/ticketing-system",
		liveUrl: "https://ticketing-demo.zackyaathif.com",
		category: "web",
	},
	{
		title: "Personal Portfolio Website",
		description:
			"A responsive, modern portfolio website built with React and Tailwind CSS to showcase my projects, skills, and professional journey.",
		images: [
			"https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
			"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		],
		technologies: [
			"React.js",
			"Tailwind CSS",
			"Framer Motion",
			"Responsive Design",
		],
		githubUrl: "https://github.com/zackyaathif/portfolio",
		liveUrl: "https://zackyaathif.com",
		category: "web",
	},
];

export const categories = [
	{ id: "all", label: "All Projects" },
	{ id: "web", label: "Web Development" },
	{ id: "data-science", label: "Data Science" },
];
