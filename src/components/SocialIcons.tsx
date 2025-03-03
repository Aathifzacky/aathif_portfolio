
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons = ({ className = "", iconSize = 20 }: SocialIconsProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/zackyaathif",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zackymohamedaathif",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:aathifzacky6@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon group"
          aria-label={link.name}
        >
          <link.icon size={iconSize} className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
