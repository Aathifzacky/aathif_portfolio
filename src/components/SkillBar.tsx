
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar = ({ 
  name, 
  percentage, 
  color = "bg-theme-accent-primary", 
  delay = 0 
}: SkillBarProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [width, setWidth] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
        if (progressBarRef.current) {
          progressBarRef.current.style.setProperty('--progress-width', `${percentage}%`);
        }
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-theme-dark-bg rounded-full overflow-hidden border border-theme-accent-primary/10">
        <div
          ref={progressBarRef}
          className={`h-full ${color} rounded-full animate-progress-fill opacity-0 ${inView ? 'opacity-100' : ''}`}
          style={{ 
            animationDelay: `${delay}ms`,
            width: '0%',
            boxShadow: '0 0 10px rgba(155, 135, 245, 0.5)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
