'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

interface CounterProps {
  endValue: string;
  duration?: number;
  inView: boolean;
}

const Counter = ({ endValue, duration = 2, inView }: CounterProps) => {
  const [count, setCount] = useState('0');
  
  // Extract number from string (e.g. "20+" -> 20, "1000+" -> 1000, "98%" -> 98)
  const numericMatch = endValue.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = endValue.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView || numericValue === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Use easeOutQuart for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOut * numericValue);
      
      setCount(currentCount.toString());

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericValue.toString());
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, numericValue, duration]);

  // If it's not a number (e.g. "24/7"), just return the value immediately when in view
  if (!numericMatch) {
    return <span>{inView ? endValue : ''}</span>;
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function TrustBar() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-8 sm:py-12 bg-surface-light border-b border-gray-100" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-200">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-accent-gold mb-1 sm:mb-2 font-bold">
                <Counter endValue={stat.value} inView={isInView} />
                {stat.suffix}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
