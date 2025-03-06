
import { useInView } from "react-intersection-observer";
import SkillBar from "./SkillBar";
import { Code, Database, Layers, Terminal, ScanText, Braces } from "lucide-react";
import MovingCarousel from "./MovingCarousel";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "JavaScript/TypeScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Spring Boot", percentage: 75 },
    { name: "MySQL", percentage: 85 },
    { name: "Data Analysis", percentage: 70 },
    { name: "Git/GitHub", percentage: 80 },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Responsive Design", "UI/UX Principles"],
    },
    {
      title: "Backend Development",
      icon: Terminal,
      skills: ["Java", "Spring Boot", "RESTful APIs", "Python", "Node.js", "Express.js"],
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Database Design", "SQL", "ORM", "Data Modeling"],
    },
    {
      title: "Software Development",
      icon: Braces,
      skills: ["OOP Concepts", "Design Patterns", "Clean Code", "SOLID Principles", "Testing", "CI/CD"],
    },
    {
      title: "Data Science",
      icon: ScanText,
      skills: ["Data Analysis", "Visualization", "Machine Learning Basics", "Pandas", "NumPy", "Jupyter Notebooks"],
    },
    {
      title: "Tools & Others",
      icon: Layers,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Agile Methodologies", "Project Management"],
    },
  ];

  const skillsCarouselItems = [
    { id: "1", name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: "2", name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { id: "3", name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: "4", name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: "5", name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: "6", name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: "7", name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: "8", name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { id: "9", name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { id: "10", name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { id: "11", name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: "12", name: "Spring", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  ];

  const digitalBadges = [
    { id: "b1", name: "AWS Cloud Practitioner", image: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" },
    { id: "b2", name: "Microsoft Certified", image: "https://images.credly.com/size/340x340/images/2a8e787e-f8ec-4b31-a0d1-6095e4db952f/image.png" },
    { id: "b3", name: "Java Developer", image: "https://images.credly.com/size/340x340/images/90db8612-8d72-49dc-ae22-e21219b468ce/image.png" },
    { id: "b4", name: "Python Essentials", image: "https://images.credly.com/size/340x340/images/3cd98d8a-c224-4f8f-a839-d0a87422f2c5/image.png" },
    { id: "b5", name: "React Developer", image: "https://images.credly.com/size/340x340/images/ebe73acf-3e72-4069-838a-8056bf7c91c3/image.png" },
    { id: "b6", name: "ML Specialist", image: "https://images.credly.com/size/340x340/images/5fc2d535-e716-46c4-881a-f4822b8da0e5/image.png" },
  ];

  return (
    <section id="skills" className="section-container">
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 
            className={`section-title inline-block transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            My Skills
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        {/* Skills Icons Moving Carousel */}
        <div 
          className={`mb-16 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <MovingCarousel 
            items={skillsCarouselItems} 
            direction="left" 
            speed={40}
            className="py-4"
            itemClassName="mx-6 w-16 h-16"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100}
              />
            ))}
          </div>

          <div 
            className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <h3 className="text-2xl font-bold mb-8">Skill Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`card h-full transition-all duration-500`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-theme-accent-primary/10 flex items-center justify-center">
                      <category.icon size={20} className="text-theme-accent-primary" />
                    </div>
                    <h4 className="text-lg font-bold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-theme-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-accent-primary"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Badges Carousel */}
        <div 
          className={`mt-20 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Digital Certifications & Badges</h3>
          <MovingCarousel 
            items={digitalBadges} 
            direction="right" 
            speed={50}
            className="py-6"
            itemClassName="mx-8 w-32 h-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
