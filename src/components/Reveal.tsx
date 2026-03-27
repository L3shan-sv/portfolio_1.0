import React from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
