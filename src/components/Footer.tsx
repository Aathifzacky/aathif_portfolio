import { Heart } from "lucide-react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-dark-surface/50 backdrop-blur-lg border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold relative group"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500">
                Zacky.
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out" />
            </a>
            <p className="text-sm text-theme-text-secondary mt-3 hover:text-white transition-colors duration-300">
              Building elegant solutions to complex problems.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <SocialIcons className="mb-4 justify-center md:justify-end gap-4" />
            <p className="text-sm text-theme-text-secondary flex items-center justify-center md:justify-end hover:text-white transition-colors duration-300">
              © {currentYear} Zacky Mohamed Aathif. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-sm text-theme-text-secondary flex items-center group">
            Made with 
            <Heart 
              size={14} 
              className="text-theme-accent-primary mx-2 group-hover:scale-125 transition-transform duration-300" 
              fill="currentColor"
            /> 
            <span className="hover:text-white transition-colors duration-300">
              by Zacky Mohamed Aathif
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;