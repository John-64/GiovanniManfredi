import { useEffect, useRef, useState } from 'react';

const HighlightText = ({ children, color = 'yellow' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("correggi l'animazione che non va");
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getColorClass = () => {
    switch (color) {
      case 'yellow': return 'bg-yellow-100/40';
      case 'blue': return 'bg-blue-200/30';
      case 'purple': return 'bg-purple-300/30';
      case 'red': return 'bg-red-200/30';
      case 'green': return 'bg-green-200/30';
      default: return 'bg-yellow-100/40';
    }
  };

  return (
    <span
      ref={ref}
      className={`
        relative inline px-3 -mx-3 rounded-2xl
        bg-gradient-to-r from-transparent to-transparent
        ${isVisible ? 'animate-highlight' : ''}
        ${getColorClass()}
        box-decoration-break-clone
        whitespace-normal
        leading-relaxed
      `}
      style={{
        backgroundSize: isVisible ? '100% 100%' : '0% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 100%',
        transition: 'background-size 2s ease-in-out',
        display: 'inline',
        boxDecorationBreak: 'clone',
      }}
    >
      {children}
    </span>
  );
};

export default HighlightText;