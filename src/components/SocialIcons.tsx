import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  staggered?: boolean;
}

const SocialIcons = ({ className = "", iconSize = 20, staggered = false }: SocialIconsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Aathifzacky",
      icon: Github,
      hoverColor: "hover:text-[#24292e]",
      bgGlow: "group-hover:shadow-[0_0_15px_rgba(36,41,46,0.5)]"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zackymohamedaathif",
      icon: Linkedin,
      hoverColor: "hover:text-[#0a66c2]",
      bgGlow: "group-hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]"
    },
    {
      name: "Email",
      url: "mailto:aathifzacky6@gmail.com",
      icon: Mail,
      hoverColor: "hover:text-[#ea4335]",
      bgGlow: "group-hover:shadow-[0_0_15px_rgba(234,67,53,0.5)]"
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative btn-icon group transition-all duration-300 
                     bg-theme-dark-surface/60 backdrop-blur-md 
                     hover:bg-theme-dark-surface/80 rounded-full
                     border border-white/10 hover:border-theme-accent-primary/50
                     ${link.bgGlow}`}
          aria-label={link.name}
          style={{
            transform: staggered ? `translateY(${hoveredIndex === index ? -5 : 0}px)` : 'none',
            opacity: staggered ? (hoveredIndex === null || hoveredIndex === index ? 1 : 0.7) : 1,
            transition: `all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${staggered ? index * 0.05 : 0}s`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Ping animation on hover */}
          <span className={`absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:animate-ping-once`}></span>
          
          {/* Icon with custom styling */}
          <link.icon 
            size={iconSize} 
            className={`transition-all duration-300 ${link.hoverColor}
                       group-hover:scale-110 group-hover:rotate-6 group-active:scale-95`} 
          />
          
          {/* Tooltip on hover */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium
                         bg-theme-dark-surface/90 rounded-md opacity-0 group-hover:opacity-100
                         pointer-events-none transition-opacity duration-300">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;