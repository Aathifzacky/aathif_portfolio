import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import { Filter, ChevronDown, ChevronRight, Code, Star } from "lucide-react";
import { projects, categories } from "../data/projects";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Add filtering capability
  const [activeFilter, setActiveFilter] = useState("all");
  
  // State for visible projects count
  const [visibleCount, setVisibleCount] = useState(0);
  
  // Calculate initial visible count based on screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setVisibleCount(window.innerWidth < 640 ? 3 : 6);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Get currently visible projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  
  // Check if we have more projects to load
  const hasMoreProjects = visibleProjects.length < filteredProjects.length;
  
  // Function to load more projects
  const loadMore = () => {
    const increment = window.innerWidth < 640 ? 3 : 6;
    setVisibleCount(prev => prev + increment);
  };

  // Get featured project
  const featuredProject = projects.find((p) => p.featured);

  return (
    <section
      id="projects"
      className="section-container relative overflow-hidden px-4 sm:px-6"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-theme-accent-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-2/4 w-96 h-96 bg-theme-accent-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-40 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-10">
          <h2
            className={`section-title inline-block relative transition-all duration-700 text-2xl sm:text-3xl md:text-4xl font-bold ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="relative z-10">My Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-full"></span>
          </h2>
          <p
            className={`section-subtitle mx-auto max-w-2xl transition-all duration-700 delay-100 text-sm sm:text-base text-theme-text-secondary mt-2 sm:mt-4 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            A showcase of my best work, featuring projects that
            highlight my technical skills and problem-solving
            abilities.
          </p>
        </div>

        {/* Featured Project Section */}
        {featuredProject && (
          <div
            className={`mb-10 sm:mb-16 transition-all duration-700 delay-200 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Star
                size={16}
                className="text-theme-accent-primary"
              />
              <h3 className="text-lg sm:text-xl font-bold">
                Featured Project
              </h3>
            </div>
            <div className="bg-theme-dark-surface/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/5 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8">
                <div className="lg:col-span-3 h-48 sm:h-64 lg:h-80 overflow-hidden rounded-lg relative">
                  <img
                    src={featuredProject.images[0]}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-2000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-dark-bg/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-theme-accent-primary text-black text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <a
                      href={
                        featuredProject.liveUrl ||
                        featuredProject.githubUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition-all"
                    >
                      View Project{" "}
                      <ChevronRight size={12} className="sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-between mt-3 lg:mt-0">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                      {featuredProject.title}
                    </h4>
                    <p className="text-theme-text-secondary mb-4 sm:mb-6 text-sm">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {featuredProject.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-theme-dark-bg/80 text-xs border border-white/10 rounded-md"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                    >
                      <Code size={14} className="sm:w-4 sm:h-4" />
                      Source Code
                    </a>
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                      >
                        <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Filters - Better mobile layout */}
        <div
          className={`mb-6 sm:mb-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-theme-text-secondary mb-2 sm:mb-0">
            <Filter size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Filter by:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-theme-accent-primary text-black shadow-glow-sm"
                    : "bg-theme-dark-surface/60 text-theme-text-secondary hover:bg-theme-dark-surface border border-white/5"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid with improved mobile spacing */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 delay-400 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.images[0]}
              images={project.images}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
        
        {/* Load More Button - with smaller mobile sizing */}
        {hasMoreProjects && (
          <div 
            className={`mt-6 sm:mt-10 text-center transition-all duration-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-theme-dark-surface/60 hover:bg-theme-dark-surface/80 border border-white/10 hover:border-theme-accent-primary/30 rounded-lg sm:rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span className="font-medium">Show More Projects</span>
              <ChevronDown size={16} className="sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}

        {/* Empty state if no projects match filter - mobile optimized */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 sm:py-20 bg-theme-dark-surface/20 rounded-lg border border-white/5">
            <p className="text-theme-text-secondary text-sm sm:text-base">
              No projects found for this category.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-3 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-theme-dark-surface/60 rounded-lg text-xs sm:text-sm hover:bg-theme-dark-surface/80 transition-colors"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* View All on GitHub - mobile friendly */}
        {filteredProjects.length > 4 && (
          <div className="mt-6 sm:mt-10 text-center">
            <a
              href="https://github.com/zackyaathif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-theme-dark-surface/40 hover:bg-theme-dark-surface/80 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 text-xs sm:text-sm"
            >
              View All Projects on GitHub
              <ChevronRight
                size={14}
                className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;