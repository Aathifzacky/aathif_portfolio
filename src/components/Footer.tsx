
import { Heart } from "lucide-react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-dark-surface py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">
              Zacky.
            </a>
            <p className="text-sm text-theme-text-secondary mt-2">
              Building elegant solutions to complex problems.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <SocialIcons className="mb-4 justify-center md:justify-end" />
            <p className="text-sm text-theme-text-secondary flex items-center justify-center md:justify-end">
              © {currentYear} Zacky Mohamed Aathif. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-sm text-theme-text-secondary flex items-center">
            Made with <Heart size={14} className="text-theme-accent-primary mx-1" /> by Zacky Mohamed Aathif
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
