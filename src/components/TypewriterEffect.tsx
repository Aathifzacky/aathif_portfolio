
import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string | string[];
  delay?: number;
  infinite?: boolean;
  className?: string;
}

const TypeWriter = ({
  text,
  delay = 10,
  infinite = true,
  className = '',
}: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const textArray = Array.isArray(text) ? text : [text];
    const currentString = textArray[currentArrayIndex];

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentIndex - 1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
        
        if (currentIndex <= 1) {
          setIsDeleting(false);
          setCurrentArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      }, delay / 2);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
        
        if (currentIndex >= currentString.length) {
          if (infinite) {
            setIsWaiting(true);
          }
        }
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentArrayIndex, isDeleting, isWaiting, text, delay, infinite]);

  return (
    <div className="inline-flex">
      <span className={className}>{currentText}</span>
      <span className="typing-cursor">&nbsp;</span>
    </div>
  );
};

export default TypeWriter;
