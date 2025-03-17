interface Project {
	title: string;
	description: string;
	images: string[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	category: string;
	featured?: boolean;
	status?: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
	{
		title: "Asyncat Marketing Page - Agentic Project Management",
		description:
			"Asyncat Marketing Page – A cutting-edge platform for Agentic Project Management, designed to streamline workflows and enhance efficiency with AI-driven solutions.",
		images: [
			"/Asyncat/Asyncat.png",
			"/Asyncat/Asyncat1.png",
			"/Asyncat/Asyncat2.png",
			"/Asyncat/Asyncat3.png",
			"/Asyncat/Asyncat4.png",
			"/Asyncat/Asyncat5.png",
			"/Asyncat/Asyncat6.png",
			"/Asyncat/Asyncat7.png",
		],
		technologies: ["React", "TailwindCSS", "Framer Motion"],
		category: "web",
		liveUrl: "https://asyncat.com",
		featured: true,
		status: "completed",
	},
	{
		title: "Hilda Guest - Hotel Booking App",
		description:
			"A sophisticated hotel booking platform featuring real-time availability, secure payments, and seamless user experience for finding and reserving accommodations across multiple properties.",
		images: [
			"/Hilda/HildaGuest.png",
			"/Hilda/HildaGuest1.png",
			"/Hilda/HildaGuest2.png",
			"/Hilda/HildaGuest3.png",
			"/Hilda/HildaGuest4.png",
			"/Hilda/HildaGuest5.png",
			"/Hilda/HildaGuest6.png",
			"/Hilda/HildaGuest7.png",
		],
		category: "corporate",
		liveUrl: "https://hildaguest.netlify.app/",
		technologies: ["React", "TailwindCSS", "Supabase", "Stripe", "Netlify"],
		status: "in-progress",
	},
	{
		title: "TrekTracks - AI-Powered Travel Companion App",
		description:
			"An innovative AI-driven travel planning platform that creates personalized itineraries based on user preferences, featuring interactive maps and comprehensive budget management tools.",
		images: [
			"/TrekTracks/TrekTracks.png",
			"/TrekTracks/TrekTracks1.png",
			"/TrekTracks/TrekTracks2.png",
			"/TrekTracks/TrekTracks3.png",
			"/TrekTracks/TrekTracks4.png",
		],
		technologies: ["React", "TailwindCSS", "Framer Motion", "Netlify"],
		category: "web",
		liveUrl: "https://trektracks.netlify.app/",
		status: "completed",
	},
	{
		title: "Shoreline Analysis - Environmental Monitoring Platform",
		description:
			"Advanced environmental monitoring system providing real-time data visualization and predictive modeling for coastal management, featuring comprehensive analysis tools for environmental scientists.",
		images: [
			"/Coastwise/Coastwise.png",
			"/Coastwise/Coastwise1.png",
			"/Coastwise/Coastwise2.png",
			"/Coastwise/Coastwise3.png",
			"/Coastwise/Coastwise4.png",
			"/Coastwise/Coastwise5.png",
			"/Coastwise/Coastwise6.png",
			"/Coastwise/Coastwise7.png",
			"/Coastwise/Coastwise8.png",
			"/Coastwise/Coastwise9.png",
			"/Coastwise/Coastwise10.png",
		],
		technologies: ["React", "TailwindCSS", "Chart.js"],
		category: "web",
		liveUrl: "https://coastwise.netlify.app/",
		status: "in-progress",
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
		technologies: ["Java", "OOP", "MySQL", "MVC Architecture"],
		githubUrl: "https://github.com/Aathifzacky/Plane-Management",
		category: "others",
		status: "completed",
	},
	{
		title: "Ticketing Simulation System",
		description:
			"A full-stack application that simulates a ticketing system for events, with features for purchasing, managing, and validating tickets.",
		images: [
			"Ticketing/Ticketing.png",
			"https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
		category: "web",
		status: "completed",
	},
];

export const categories = [
	{ id: "all", label: "All Projects" },
	{ id: "web", label: "Web Development" },
	{ id: "corporate", label: "Corporate" },
	{ id: "e-commerce", label: "E-Commerce" },
	{ id: "data-science", label: "Data Science" },
	{ id: "others", label: "Others" },
];
