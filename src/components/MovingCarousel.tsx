
import { useRef, useEffect } from "react";

interface CarouselItem {
  id: string;
  image: string;
  name: string;
}

interface MovingCarouselProps {
  items: CarouselItem[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  itemClassName?: string;
}

const MovingCarousel = ({
  items,
  direction = 'left',
  speed = 50,
  className = "",
  itemClassName = "",
}: MovingCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    let animationId: number;
    let position = 0;
    
    const moveCarousel = () => {
      if (!carousel) return;
      
      // Speed is inversely proportional to the value (lower = faster)
      const pixelsToMove = direction === 'left' ? -1 : 1;
      position += pixelsToMove;
      
      // Reset position when all items have scrolled through
      const containerWidth = carousel.scrollWidth / 2;
      if (Math.abs(position) >= containerWidth) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(moveCarousel);
    };
    
    moveCarousel();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed]);
  
  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];
  
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div
        ref={carouselRef}
        className="flex items-center whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
        key={`${item.id}-${index}`}
        className={`flex-shrink-0 flex flex-col items-center ${itemClassName}`}
          >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
        <p className="text-xs mt-1 text-theme-text-secondary">{item.name}</p>
          </div>
        ))}
      </div>
        </div>
  );
};

export default MovingCarousel;
