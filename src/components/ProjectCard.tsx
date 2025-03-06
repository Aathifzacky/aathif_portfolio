
import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <div
      ref={ref}
      className={`card relative overflow-hidden group ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg mb-5 bg-theme-dark-bg aspect-video">
        <div className={`absolute inset-0 bg-theme-dark-bg/50 backdrop-blur-sm ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-theme-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon bg-white/10 backdrop-blur-md hover:bg-theme-accent-primary"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon bg-white/10 backdrop-blur-md hover:bg-theme-accent-primary"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-theme-text-secondary mb-4 text-sm">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-theme-accent-primary/10 border border-theme-accent-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
