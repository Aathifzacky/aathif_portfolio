
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "University Progress Outcome Prediction",
      description: "A Python-based machine learning application that predicts student academic outcomes based on various parameters and historical data.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Data Visualization"],
      githubUrl: "https://github.com/zackyaathif/university-prediction",
    },
    {
      title: "Plane Management System",
      description: "A Java-based application for managing flight operations, maintenance schedules, and crew assignments for a fleet of aircraft.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["Java", "JavaFX", "OOP", "MySQL", "MVC Architecture"],
      githubUrl: "https://github.com/zackyaathif/plane-management",
    },
    {
      title: "Ticketing Simulation System",
      description: "A full-stack application that simulates a ticketing system for events, with features for purchasing, managing, and validating tickets.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React.js", "Java", "Spring Boot", "MySQL", "REST API", "JWT Authentication"],
      githubUrl: "https://github.com/zackyaathif/ticketing-system",
      liveUrl: "https://ticketing-demo.zackyaathif.com",
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive, modern portfolio website built with React and Tailwind CSS to showcase my projects, skills, and professional journey.",
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      githubUrl: "https://github.com/zackyaathif/portfolio",
      liveUrl: "https://zackyaathif.com",
    },
  ];

  return (
    <section id="projects" className="section-container bg-theme-dark-surface/30">
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 
            className={`section-title inline-block transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            My Projects
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            A showcase of my best work, featuring projects that highlight my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
