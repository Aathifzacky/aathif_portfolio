import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Eye, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	images: string[];
	technologies: string[];
	githubUrl: string;
	liveUrl?: string;
	index: number;
	status?: "completed" | "in-progress" | "planned"; // New status property
}

const ProjectCard = ({
	title,
	description,
	image,
	images,
	technologies,
	githubUrl,
	liveUrl,
	index,
	status = "completed", // Default to completed if not specified
}: ProjectCardProps) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Set up automatic image rotation when not hovering
	useEffect(() => {
		if (inView && !isHovering) {
			// Start the interval when component is in view and not being hovered
			intervalRef.current = setInterval(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % images.length
				);
			}, 3000); // Change image every 3 seconds
		} else if (intervalRef.current) {
			// Clear interval when hovering or not in view
			clearInterval(intervalRef.current);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [inView, images.length, isHovering]);

	// Map status to display text and styles
	const getStatusDetails = () => {
		switch (status) {
			case "in-progress":
				return {
					text: "IN PROGRESS",
					bgColor: "bg-amber-500",
					textColor: "text-black",
				};
			case "planned":
				return {
					text: "PLANNED",
					bgColor: "bg-blue-500",
					textColor: "text-white",
				};
			case "completed":
			default:
				return {
					text: "COMPLETED",
					bgColor: "bg-green-500",
					textColor: "text-black",
				};
		}
	};

	const statusDetails = getStatusDetails();

	// Animation delay based on card index (staggered appearance)
	const animationDelay = index * 150;

	return (
		<div
			ref={ref}
			className={`group relative bg-theme-dark-surface/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/5 hover:border-theme-accent-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${
				inView
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-16"
			}`}
			style={{ transitionDelay: `${animationDelay}ms` }}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			{/* Featured tag if this is the first project */}
			{index === 0 && (
				<div className="absolute top-2 sm:top-3 left-0 z-10">
					<div className="bg-theme-accent-primary text-black text-xs font-bold py-0.5 sm:py-1 px-3 sm:px-4 rounded-r-md shadow-md">
						FEATURED
					</div>
				</div>
			)}

			{/* Status badge */}
			<div className="absolute top-2 sm:top-3 right-0 z-10">
				<div
					className={`${statusDetails.bgColor} ${statusDetails.textColor} text-xs font-bold py-0.5 sm:py-1 px-3 sm:px-4 rounded-l-md shadow-md`}
				>
					{statusDetails.text}
				</div>
			</div>

			{/* Image carousel with improved transitions - reduced height on mobile */}
			<div className="relative h-44 sm:h-52 md:h-60 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-theme-dark-bg/60 z-10"></div>

				{/* Images with crossfade effect */}
				<div className="relative w-full h-full">
					{images.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`${title} - screenshot ${idx + 1}`}
							className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[2s] ${
								idx === currentImageIndex
									? "opacity-100"
									: "opacity-0"
							}`}
							loading="lazy"
						/>
					))}
				</div>

				{/* Mobile-friendly overlay - touch instead of hover */}
				<div className="absolute inset-0 bg-theme-dark-bg/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 sm:touch-none">
					<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
						<Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-1 sm:mb-2" />
						<span className="text-white text-xs sm:text-sm font-medium">
							View Details
						</span>
					</div>
				</div>

				{/* Image indicators - smaller on mobile */}
				<div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-30">
					{images.map((_, idx) => (
						<button
							key={idx}
							className="group/indicator focus:outline-none"
							onClick={() => setCurrentImageIndex(idx)}
							aria-label={`View image ${idx + 1}`}
						>
							<span
								className={`block h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
									idx === currentImageIndex
										? "bg-theme-accent-primary w-4 sm:w-6"
										: "bg-white/50 w-1.5 sm:w-2 group-hover/indicator:bg-white/80"
								}`}
							/>
						</button>
					))}
				</div>
			</div>

			{/* Content wrapper with padding adjustments for mobile */}
			<div className="p-4 sm:p-5 flex flex-col flex-grow">
				{/* Title with hover underline effect - smaller on mobile */}
				<h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-white group-hover:text-theme-accent-primary transition-colors duration-300 relative inline-block">
					{title}
					<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent-primary group-hover:w-full transition-all duration-300"></span>
				</h3>

				{/* Description with fewer lines on mobile */}
				<p className="text-theme-text-secondary mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
					{description}
				</p>

				{/* Tech badges - smaller and more compact on mobile */}
				<div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-5">
					{technologies.slice(0, 6).map((tech) => (
						<Badge
							key={tech}
							variant="secondary"
							className="bg-theme-dark-bg/70 text-[10px] sm:text-xs border border-white/10 px-1.5 sm:px-2 py-0 sm:py-0.5"
						>
							{tech}
						</Badge>
					))}
					{technologies.length > 6 && (
						<Badge
							variant="secondary"
							className="bg-theme-dark-bg/70 text-[10px] sm:text-xs border border-white/10 px-1.5 sm:px-2 py-0 sm:py-0.5"
						>
							+{technologies.length - 6} more
						</Badge>
					)}
				</div>

				{/* Spacer to push action buttons to bottom */}
				<div className="flex-grow"></div>

				{/* Action buttons - mobile optimized */}
				<div className="flex items-center justify-between mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-white/5">
					<div className="flex items-center gap-1.5 sm:gap-2">
						{githubUrl && githubUrl.trim() !== "" && (
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-icon w-8 h-8 sm:w-10 sm:h-10 bg-theme-dark-bg/50 hover:bg-theme-dark-bg border border-white/10 hover:border-white/30 group/btn transition-all duration-300"
								aria-label={`View ${title} source code on GitHub`}
							>
								<Github
									size={16}
									className="transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-3"
								/>
							</a>
						)}
						{liveUrl && (
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-icon w-8 h-8 sm:w-10 sm:h-10 bg-theme-dark-bg/50 hover:bg-theme-dark-bg border border-white/10 hover:border-white/30 group/btn transition-all duration-300"
								aria-label={`Visit the live ${title} website`}
							>
								<ExternalLink
									size={16}
									className="transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-3"
								/>
							</a>
						)}
					</div>

					{/* Learn more link - more compact on mobile */}
					<a
						href={liveUrl || githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs sm:text-sm font-medium text-theme-text-secondary hover:text-theme-accent-primary flex items-center gap-1 sm:gap-2 transition-all duration-300 group/more px-2 sm:px-3 py-0.5 sm:py-1 rounded-md hover:bg-theme-accent-primary/10 border border-transparent hover:border-theme-accent-primary/20"
					>
						Learn more
						<ArrowRight
							size={12}
							className="transform transition-all duration-300 group-hover/more:translate-x-1 group-hover/more:scale-110"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
