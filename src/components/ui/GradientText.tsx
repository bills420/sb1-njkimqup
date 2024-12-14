import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}