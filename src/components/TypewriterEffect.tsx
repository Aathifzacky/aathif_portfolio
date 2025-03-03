import { useEffect, useState, useRef } from "react";

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterEffect = ({
  texts,
  speed = 3000,
  delay = 1000,
  className = "",
}: TypewriterEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const rotateText = () => {
      setIsAnimating(true);
      
      timeoutRef.current = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, speed / 2);
    };

    timeoutRef.current = setTimeout(rotateText, delay);

    const interval = setInterval(rotateText, speed + delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearInterval(interval);
    };
  }, [texts, speed, delay]);

  return (
    <div className={`relative h-16 overflow-hidden ${className}`}>
      <div
        className={`text-3xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary absolute w-full transition-transform duration-300 ${
          isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {texts[currentTextIndex]}
      </div>
      <div
        className={`text-2xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary absolute w-full transition-transform duration-300 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {texts[(currentTextIndex + 2) % texts.length]}
      </div>
    </div>
  );
};

export default TypewriterEffect;
