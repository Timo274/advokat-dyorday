import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  dark?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  dark = false,
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 md:p-8';
  
  const hoverStyles = hover ? 'card-hover' : '';
  
  let bgStyles = 'bg-white border border-gray-100 shadow-sm';
  
  if (glass) {
    bgStyles = dark ? 'glass-dark' : 'glass';
  } else if (dark) {
    bgStyles = 'bg-surface-dark border border-white/5 shadow-xl shadow-black/20';
  }

  return (
    <div className={`${baseStyles} ${bgStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
